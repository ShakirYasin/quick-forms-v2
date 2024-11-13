import React from "react";
import DesignerSidebar from "./designer-sidebar";
import { useDroppable } from "@dnd-kit/core";

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
        <div className="bg-background max-w-[920px] h-full m-auto rounded-xl flex flex-col flex-grow items-center justify-start flex-1 overflow-y-auto">
          <p className="text-3xl text-muted-foreground flex flex-grow items-center font-bold mb-4">
            Drag and drop elements to create your form.
          </p>
        </div>
      </div>
      <DesignerSidebar />
    </div>
  );
};

export default Designer;
