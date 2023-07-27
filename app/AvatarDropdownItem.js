import { twMerge } from "tailwind-merge";
import Link from "next/link";
import Box from "@/components/Box";
import { useSelectedLayoutSegments } from "next/navigation";

export const AvatarDropdownItem = ({
  href,
  icon: Icon,
  className,
  children,
  ...rest
}) => {
  const segments = useSelectedLayoutSegments();
  const segment = href.split("/")[1];
  const isActive = segments.includes(segment);

  return (
    <Link href={href}>
      <Box
        className={twMerge(
          "px-5 py-3 border-b border-neutral-200 hover:bg-blue-100 hover:text-blue-800",
          isActive && "bg-blue-100 text-blue-800",
          className
        )}
        {...rest}
      >
        <Box className="flex items-center">
          <Icon size={18} />
          <Box className="flex-1 pl-3">{children}</Box>
        </Box>
      </Box>
    </Link>
  );
};
