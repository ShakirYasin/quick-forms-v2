"use server";

import { currentUser } from "@clerk/nextjs/server";
import prisma from "../lib/prisma";

class UserNotFound extends Error {}
export async function GetFormStats() {
  const user = await currentUser();
  if (!user) throw new UserNotFound();

  // Aggregate function is used to perform calculations across multiple rows
  // In this case, we're summing up all visits and submissions for forms belonging to the user
  //   Original Aggregate Method
  //   ✅ Most straightforward and readable
  //   ✅ Efficient single database query
  //   ✅ Type-safe with Prisma
  //   ✅ Best for simple summations
  const stats = await prisma.form.aggregate({
    where: {
      userId: user.id, // Filter to only include forms created by current user
    },
    _sum: {
      visits: true, // Sum all values in the visits column
      submissions: true, // Sum all values in the submissions column
    },
  });

  // Extract the sums, defaulting to 0 if null
  const visits = (await stats)._sum.visits || 0;
  const submissions = (await stats)._sum.submissions || 0;

  // Calculate submission rate (percentage of visits that resulted in submissions)
  let submissionRate = 0;
  if (visits > 0) {
    submissionRate = (submissions / visits) * 100;
  }

  // Bounce rate is the percentage of visits that did NOT result in submissions
  const bounceRate = 100 - submissionRate;

  return { visits, submissions, submissionRate, bounceRate };
}
