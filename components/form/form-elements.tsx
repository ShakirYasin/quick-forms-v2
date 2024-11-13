import { TextFieldFormElement } from "../fields/text/text-field";

export type ElementsType = "TextField";
export type FormElement = {
  type: ElementsType;
  construct: (id: string) => FormElementInstance;
  designerButtonElement: {
    icon: React.ElementType;
    label: string;
  };
  designerComponent: React.FC;
  formComponent: React.FC;
  propertiesComponent: React.FC;
};

export type FormElementInstance = {
  id: string;
  type: ElementsType;
  extraAttributes: Record<string, any>;
};
export type FormElements = {
  [key in ElementsType]: FormElement;
};
export const FormElements: FormElements = {
  TextField: TextFieldFormElement,
};
