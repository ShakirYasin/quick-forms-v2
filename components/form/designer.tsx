import React from "react";
import DesignerSidebar from "./designer-sidebar";
import { useDroppable } from "@dnd-kit/core";
import { cn } from "@/lib/utils";

interface DesignerProps {}

export const Designer: React.FC<DesignerProps> = () => {
  const droppable = useDroppable({
    id: "form-designer",
    data: {
      isDesignerDropArea: true,
    },
  });
  return (
    <div className="flex w-full h-full">
      <div className="p-4 w-full">
        <div
          ref={droppable.setNodeRef}
          className={cn(
            "bg-background max-w-[920px] h-full m-auto rounded-xl flex flex-col flex-grow items-center justify-start flex-1 overflow-y-auto",
            droppable.isOver && "ring-2 ring-primary/20"
          )}
        >
          {!droppable.isOver && (
            <p className="text-3xl text-muted-foreground flex flex-grow items-center font-bold mb-4">
              Drag and drop elements to create your form.
            </p>
          )}
          {droppable.isOver && (
            <div className="p-4 w-full">
              <div className="h-[120px] w-full bg-primary/5 rounded-md" />
            </div>
          )}
        </div>
      </div>
      <DesignerSidebar />
    </div>
  );
};

export default Designer;
