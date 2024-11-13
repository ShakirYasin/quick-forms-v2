import React from "react";
import { Button } from "@/components/ui/button";
import { Eye } from "lucide-react";

interface PreviewDialogButtonProps {
  onClick?: () => void;
  disabled?: boolean;
}

export const PreviewDialogButton: React.FC<PreviewDialogButtonProps> = ({
  onClick,
  disabled = false,
}) => {
  return (
    <Button onClick={onClick} disabled={disabled} variant="outline">
      <Eye className="h-4 w-4 mr-2" />
      Preview
    </Button>
  );
};

export default PreviewDialogButton;
