"use client";
import { MdTextFields } from "react-icons/md";
import { ElementsType, FormElement } from "@/components/form/form-elements";

const type: ElementsType = "TextField";

export const TextFieldFormElement: FormElement = {
  type,
  construct: (id: string) => {
    return {
      id,
      type,
      extraAttributes: {
        label: "Text Field",
        helperText: "",
        required: false,
        placeholder: "Please enter text here...",
      },
    };
  },
  designerButtonElement: {
    icon: MdTextFields,
    label: "Text Field",
  },
  designerComponent: () => {
    return <div>TextFieldDesigner</div>;
  },
  formComponent: () => {
    return <div>TextFieldForm</div>;
  },
  propertiesComponent: () => {
    return <div>TextFieldProperties</div>;
  },
};
