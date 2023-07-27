import { twMerge } from "tailwind-merge";

export const Button = ({
  variant = "btn-primary",
  size,
  className,
  children,
  icon: Icon,
  disabled = false,
  ...rest
}) => {
  return (
    <button
      type="button"
      className={twMerge(
        "btn flex items-center box-border",
        variant,
        size === "sm" && "text-xs h-[32px]",
        size === "lg" && "text-xl h-[44px]",
        disabled && "cursor-not-allowed opacity-75",
        className
      )}
      disabled={disabled}
      {...rest}
    >
      {Icon && (
        <div className="flex-0 mr-1 -ml-1">
          <Icon size={16} />
        </div>
      )}
      <div className="flex-1 justify-center text-center">{children}</div>
    </button>
  );
};
