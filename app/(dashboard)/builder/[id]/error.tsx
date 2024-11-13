"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { AlertCircle, ArrowLeft } from "lucide-react";

interface ErrorProps {
  error: Error;
}

export const Error: React.FC<ErrorProps> = ({ error }) => {
  const router = useRouter();
  useEffect(() => {
    console.log(error);
  }, [error]);
  return (
    <div className="flex flex-col items-center justify-center w-full h-full gap-4 p-4">
      <AlertCircle className="h-16 w-16 text-destructive animate-pulse" />
      <h1 className="text-4xl font-bold text-destructive text-center">
        {error.message || "Something went wrong"}
      </h1>
      <p className="text-muted-foreground text-center max-w-md mb-4">
        We apologize for the inconvenience. Please try again or contact support
        if the problem persists.
      </p>
      <Button
        variant="outline"
        size="lg"
        onClick={() => router.back()}
        className="gap-2 hover:scale-105 transition-all"
      >
        <ArrowLeft className="h-4 w-4" />
        Go back
      </Button>
    </div>
  );
};

export default Error;
