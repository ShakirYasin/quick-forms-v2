import { SignUp } from "@clerk/nextjs";
import React from "react";

interface PageProps {}

export const Page: React.FC<PageProps> = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <SignUp />
    </div>
  );
};

export default Page;
