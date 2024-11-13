import React from "react";
import { Button } from "@/components/ui/button";
import { SendIcon } from "lucide-react";

interface PublishFormButtonProps {
  onClick?: () => void;
  disabled?: boolean;
  loading?: boolean;
}

export const PublishFormButton: React.FC<PublishFormButtonProps> = ({
  onClick,
  disabled = false,
  loading = false,
}) => {
  return (
    <Button onClick={onClick} disabled={disabled || loading} variant="outline">
      <SendIcon className="h-4 w-4 mr-2" />
      {loading ? "Publishing..." : "Publish"}
    </Button>
  );
};

export default PublishFormButton;
