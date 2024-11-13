import { useDndMonitor } from "@dnd-kit/core";
import React from "react";

interface DragOverlayWrapperProps {}

export const DragOverlayWrapper: React.FC<DragOverlayWrapperProps> = () => {
  useDndMonitor({
    onDragStart: (event) => {
      console.log("drag start", event);
    },
  });
  return <div></div>;
};

export default DragOverlayWrapper;
