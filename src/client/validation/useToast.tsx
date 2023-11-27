import { useContext } from "react";
import ToastContext, { ToastContextType } from "./ToastContext";

export default function useToast() {
  const toast = useContext<ToastContextType>(ToastContext);
  return toast;
}
