import { twMerge } from "tailwind-merge";

const Header = ({ className, ...rest }) => (
  <div className={twMerge("h-[50px] mb-5", className)} {...rest} />
);

const Body = ({ className, ...rest }) => (
  <div className={twMerge("h-[60px] mb-5", className)} {...rest} />
);

const Footer = ({ className, ...rest }) => (
  <div className={twMerge("h-[50px]", className)} {...rest} />
);

export const Card = ({ className, bgColor, ...rest }) => (
  <div
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
