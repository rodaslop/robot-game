import { twMerge } from "tailwind-merge";
import Box from "./Box";

export const Container = ({ className, ...rest }) => (
  <Box className={twMerge("container mx-auto px-5", className)} {...rest} />
);
