import { JSXElementConstructor, ReactElement, ReactNode } from "react";

export type Data = {
  [x: string]: any;
};

export const selector = (component: string, params?: { [key: string]: any }): string =>
  JSON.stringify({ component, params });

export enum Component {
  FORM = "Form",
  NEW_FORM = "NewForm",
  EDIT_FORM = "EditForm",
  INPUT_STRING = "InputString",
  SHOW = "Show",
  GRID = "Grid",
  SHOW_VIEW = "ShowView",
  ACTION_VIEW = "ActionView",
  INDEX_VIEW = "IndexView",
  DATE_PICKER = "DatePicker",
  AUTOCOMPLETE = "Autocomplete",
}

export function isRequired(schema: any, field: string): boolean {
  const fieldNullable = schema.describe().fields[field].nullable;
  return !fieldNullable ?? false;
}

export type Field = {
  Component: JSXElementConstructor<any> | any;
  required?: boolean;
  value?: any;
  error?: boolean;
  children?: any;
  disabled?: boolean;
  helperText?: string;
};

export type Fields = {
  [name: string]: Field;
};

export const capitalizeFirst = (str?: string): string | undefined =>
  str ? str.replace(/^[a-z]/, (match) => match.toUpperCase()) : undefined;

export const localeDate = (date: string): string => {
  const event = new Date(date);
  return event.toLocaleDateString("cs-CZ", { year: "numeric", month: "numeric", day: "numeric" });
};
