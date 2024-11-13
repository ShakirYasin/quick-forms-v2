import React from "react";
import { Button } from "@/components/ui/button";
import { SaveIcon } from "lucide-react";

interface SaveFormButtonProps {
  onClick?: () => void;
  disabled?: boolean;
}

export const SaveFormButton: React.FC<SaveFormButtonProps> = ({
  onClick,
  disabled = false,
}) => {
  return (
    <Button onClick={onClick} disabled={disabled} variant="outline">
      <SaveIcon className="h-4 w-4 mr-2" />
      Save
    </Button>
  );
};

export default SaveFormButton;
