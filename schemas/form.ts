import { z } from "zod";

export type formSchemaType = z.infer<typeof formSchema>;

export const formSchema = z.object({
  name: z.string().min(4, {
    message: "Form name must be at least 2 characters.",
  }),
  description: z.string().optional(),
});
