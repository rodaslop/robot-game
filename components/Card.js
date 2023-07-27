import { twMerge } from "tailwind-merge";
import Box from "./Box";

const Header = ({ className, ...rest }) => (
  <Box className={twMerge("h-[50px] mb-5", className)} {...rest} />
);

const Body = ({ className, ...rest }) => (
  <Box className={twMerge("h-[60px] mb-5", className)} {...rest} />
);

const Footer = ({ className, ...rest }) => (
  <Box className={twMerge("h-[50px]", className)} {...rest} />
);

export const Card = ({ className, bgColor, ...rest }) => (
  <Box
    className={twMerge(
      "shadow p-5 rounded-xl overflow-hidden",
      className,
      bgColor
    )}
    {...rest}
  />
);

Card.Header = Header;
Card.Body = Body;
Card.Footer = Footer;
