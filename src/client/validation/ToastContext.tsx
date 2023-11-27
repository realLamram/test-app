import { createContext } from "react";

export enum Severity {
  Error = "error",
  Success = "success",
  Info = "info",
  Warning = "warning",
}

export type ToastContextType = {
  openToast: boolean;
  setOpenToast: (openToast: boolean) => void;
  toastMessage: string;
  setToastMessage: (toastMessage: string) => void;
  severity: Severity;
  setSeverity: (severity: Severity) => void;
};

const ToastContext = createContext<ToastContextType>({} as ToastContextType);

export default ToastContext;
