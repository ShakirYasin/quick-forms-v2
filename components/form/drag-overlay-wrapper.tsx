"use client";
import { Active, DragOverlay, useDndMonitor } from "@dnd-kit/core";
import React, { useState } from "react";
import {
  SidebarButtonElement,
  SidebarButtonElementDragOverlay,
} from "./sidebar-button-element";
import { ElementsType, FormElements } from "./form-elements";

interface DragOverlayWrapperProps {}

export const DragOverlayWrapper: React.FC<DragOverlayWrapperProps> = () => {
  const [draggedItem, setDraggedItem] = useState<Active | null>(null);
  useDndMonitor({
    onDragStart: (event) => {
      setDraggedItem(event.active);
    },
    onDragEnd: () => {
      setDraggedItem(null);
    },
    onDragCancel: () => {
      setDraggedItem(null);
    },
  });
  if (!draggedItem) return null;
  let node = <div>No drag overlay</div>;
  const isSidebarButtonElement =
    draggedItem?.data.current?.isDesignerButtonElement;
  if (isSidebarButtonElement) {
    const type = draggedItem.data.current?.type as ElementsType;
    node = <SidebarButtonElementDragOverlay formElement={FormElements[type]} />;
  }
  return <DragOverlay>{node}</DragOverlay>;
};

export default DragOverlayWrapper;
