import { twMerge } from "tailwind-merge";

export default function IconButton({
  variant = "btn-secondary",
  size,
  className,
  icon: Icon,
  disabled = false,
  ...rest
}) {
  return (
    <button
      type="button"
      className={twMerge(
        "icon-btn",
        variant,
        size === "sm" && "h-[32px]",
        size === "lg" && "h-[44px]",
        disabled && "cursor-not-allowed opacity-75",
        className
      )}
      disabled={disabled}
      {...rest}
    >
      <Icon size="100%" />
    </button>
  );
}
