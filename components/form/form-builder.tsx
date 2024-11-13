"use client";
import { Form } from "@prisma/client";
import React from "react";
import PreviewDialogButton from "./preview-dialog-button";
import { PublishFormButton } from "./publish-form-button";
import SaveFormButton from "./save-form-button";
import Designer from "./designer";
import { DndContext } from "@dnd-kit/core";
import DragOverlayWrapper from "./drag-overlay-wrapper";

interface FormBuilderProps {
  form: Form;
}

export const FormBuilder: React.FC<FormBuilderProps> = ({ form }) => {
  return (
    <DndContext>
      <main className="flex-1 flex flex-col w-full">
        <nav className="flex justify-between items-center border-b-2 p-4  gap-4">
          <h2 className="text-2xl font-medium truncate">
            <span className="text-muted-foreground mr-2">Form: </span>
            {form.name}
          </h2>
          <div className="flex items-center gap-2">
            <PreviewDialogButton />
            {!form.published && (
              <>
                <PublishFormButton />
                <SaveFormButton />
              </>
            )}
          </div>
        </nav>
        <div className="flex w-full flex-grow relative items-center justify-center overflow-y-auto h-[200px] bg-accent bg-[url(/paper.svg)] dark:bg-[url(/paper-dark.svg)]">
          <Designer />
        </div>
      </main>
      <DragOverlayWrapper />
    </DndContext>
  );
};

export default FormBuilder;
