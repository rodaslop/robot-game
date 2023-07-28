import { twMerge } from "tailwind-merge";

export const Button = ({
  variant = "btn-primary",
  size,
  className,
  ...rest
}) => {
  return (
    <button
      type="button"
      className={twMerge(
        "btn flex items-center justify-center",
        variant,
        size === "sm" && "text-xs h-[32px]",
        size === "lg" && "text-xl h-[44px]",
        className
      )}
      {...rest}
    />
  );
};
