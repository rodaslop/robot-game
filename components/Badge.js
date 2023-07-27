import { twMerge } from "tailwind-merge";

export default function Badge({ variant = "blue", className, ...rest }) {
  return (
    <span
      className={twMerge(
        variant === "blue" &&
          "bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded",

        variant === "red" &&
          "bg-red-100 text-red-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded",

        variant === "green" &&
          "bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded",

        variant === "yellow" &&
          "bg-yellow-100 text-yellow-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded",

        variant === "purple" &&
          "bg-purple-100 text-purple-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded",

        className
      )}
      {...rest}
    />
  );
}
