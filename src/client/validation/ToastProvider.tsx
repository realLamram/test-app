import { PropsWithChildren, useState } from "react";
import ToastContext, { Severity } from "./ToastContext";

export type ToastProviderProps = PropsWithChildren<any>;

export default function ToastProvider({ children }: ToastProviderProps) {
  const [openToast, setOpenToast] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string>("");
  const [severity, setSeverity] = useState<Severity>(Severity.Error);

  return (
    <ToastContext.Provider
      value={{ openToast, setOpenToast, toastMessage, setToastMessage, severity, setSeverity }}
    >
      {children}
    </ToastContext.Provider>
  );
}
