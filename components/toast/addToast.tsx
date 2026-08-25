"use client";
import { toast } from "@heroui/react";

type toastProps = {
  status: "success" | "danger" | "warning";
  message: string;
  title: string;
};
export const AddToast = ({ message, title, status }: toastProps) => {
  toast[status](title, {
    actionProps: {
      children: "Dismiss",
      onPress: () => toast.clear(),
      variant: "danger",
    },
    description: message,
  });
};
