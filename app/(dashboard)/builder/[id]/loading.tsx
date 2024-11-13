import { Loader2 } from "lucide-react";
import React from "react";

interface LoadingProps {}

export const Loading: React.FC<LoadingProps> = () => {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <Loader2 className="animate-spin" />
    </div>
  );
};

export default Loading;
