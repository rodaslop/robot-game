import { twMerge } from "tailwind-merge";
import Box from "./Box";

export const Alert = ({ variant = "default", className, ...rest }) => (
  <Box
    className={twMerge(
      "p-4 text-sm cursor-pointer",
      variant === "default" && "text-blue-800 rounded-lg bg-blue-50",
      variant === "error" && "text-red-800 rounded-lg bg-red-50",
      className
    )}
    {...rest}
  />
);