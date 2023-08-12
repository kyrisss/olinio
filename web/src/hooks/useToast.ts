import { toast, ToastPosition } from "react-toastify";

import { useTheme } from "./useTheme";

export const useToast = () => {
  const { theme } = useTheme();
  const defaultOptions = {
    position: "top-right" as ToastPosition,
    autoClose: 3000,
    closeOnClick: true,
    theme,
  };

  const createErrorToast = (message = "Something went wrong") => {
    toast.error(message, defaultOptions);
  };

  const createSuccessToast = (message: string) => {
    toast.success(message, defaultOptions);
  };

  return { createErrorToast, createSuccessToast };
};
