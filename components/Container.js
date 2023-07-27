import { twMerge } from "tailwind-merge";

export const Container = ({ className, ...rest }) => (
  <div className={twMerge("container mx-auto px-5", className)} {...rest} />
);
