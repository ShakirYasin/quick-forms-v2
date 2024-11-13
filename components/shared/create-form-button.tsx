"use client";
import React from "react";
import { useForm } from "react-hook-form";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { ImSpinner2 } from "react-icons/im";
import { toast } from "@/hooks/use-toast";
import { formSchema, formSchemaType } from "@/schemas/form";
import { createForm } from "@/actions/form";
import { PlusIcon } from "lucide-react";
import { useRouter } from "next/navigation";
interface CreateFormButtonProps {}

export const CreateFormButton: React.FC<CreateFormButtonProps> = () => {
  const router = useRouter();
  const form = useForm<formSchemaType>({
    resolver: zodResolver(formSchema),
  });
  const onSubmit = async (values: formSchemaType) => {
    try {
      console.log(values);
      const formId = await createForm(values);
      form.reset();
      toast({
        title: "Form created successfully",
        description: `Your form has been created successfully`,
      });
      router.push(`/builder/${formId}`);
    } catch (error) {
      toast({
        title: (error as Error).message || "Something went wrong",
        description: "Please try again later",
        variant: "destructive",
      });
    }
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant={"outline"}
          className="group border bg-background border-primary/20 h-[190px] items-center justify-center flex flex-col hover:border-primary hover:cursor-pointer border-dashed gap-4 "
        >
          <PlusIcon className="w-10 h-10 group-hover:animate-pulse text-muted-foreground group-hover:text-primary" />
          <p className="text-base font-bold text-muted-foreground group-hover:text-primary">
            Create Form
          </p>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create Form</DialogTitle>
          <DialogDescription>
            Create a new form to collect responses. Fill in the details below.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter form name" {...field} />
                  </FormControl>
                  <FormDescription>
                    This is the name that will be displayed for your form.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea
                      rows={5}
                      placeholder="Enter form description"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    Provide a brief description of what this form is for.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </form>
        </Form>
        <DialogFooter>
          <Button
            onClick={form.handleSubmit(onSubmit)}
            disabled={form.formState.isSubmitting}
            className="w-full mt-5"
            type="submit"
          >
            {form.formState.isSubmitting ? (
              <ImSpinner2 className="animate-spin" />
            ) : (
              "Save"
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default CreateFormButton;
