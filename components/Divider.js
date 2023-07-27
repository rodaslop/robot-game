import { twMerge } from "tailwind-merge";

export const Divider = ({ className, ...rest }) => (
  <hr className={twMerge("bg-neutral-100", className)} {...rest} />
);
