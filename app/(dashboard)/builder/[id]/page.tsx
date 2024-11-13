import { GetFormById } from "@/actions/form";
import FormBuilder from "@/components/form/form-builder";
import React from "react";

interface PageProps {
  params: {
    id: string;
  };
}

export const Page: React.FC<PageProps> = async ({ params }) => {
  const { id } = params;
  const form = await GetFormById(Number(id));
  if (!form) throw new Error("Form not found");
  return <FormBuilder form={form} />;
};

export default Page;
