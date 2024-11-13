import React from "react";
import { FormElement } from "./form-elements";
import { Button } from "../ui/button";
import { useDraggable } from "@dnd-kit/core";
import { cn } from "@/lib/utils";

interface SidebarButtonElementProps {
  formElement: FormElement;
}

export const SidebarButtonElement: React.FC<SidebarButtonElementProps> = ({
  formElement,
}) => {
  const { icon: Icon, label } = formElement.designerButtonElement;
  const draggable = useDraggable({
    id: `form-element-${formElement.type}`,
    data: {
      type: formElement.type,
      isDesignerButtonElement: true,
    },
  });
  return (
    <Button
      variant="outline"
      className={cn(
        "justify-start gap-2 h-32 w-32 cursor-grab",
        draggable.isDragging &&
          "cursor-grabbing bg-primary/10 ring-2 ring-primary"
      )}
      ref={draggable.setNodeRef}
      {...draggable.listeners}
      {...draggable.attributes}
    >
      <Icon />
      {label}
    </Button>
  );
};
export const SidebarButtonElementDragOverlay: React.FC<
  SidebarButtonElementProps
> = ({ formElement }) => {
  const { icon: Icon, label } = formElement.designerButtonElement;

  return (
    <Button
      variant="outline"
      className={cn("justify-start gap-2 h-32 w-32 cursor-grab")}
    >
      <Icon />
      {label}
    </Button>
  );
};
export default SidebarButtonElement;
