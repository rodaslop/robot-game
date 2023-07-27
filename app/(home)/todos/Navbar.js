"use client";
import Box from "@/components/Box";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

const Item = ({ href, children }) => {
  const pathname = usePathname();

  return (
    <Link href={href}>
      <Box
        className={twMerge(
          "w-[100px] text-center px-3 py-1 border-b-4 text-neutral-500 hover:text-neutral-400 cursor-pointer ml-3",
          href === pathname &&
            "border-blue-800 text-blue-800 hover:text-blue-700 hover:border-blue-700"
        )}
      >
        {children}
      </Box>
    </Link>
  );
};

export default function Navbar() {
  return (
    <Box className=" w-full flex items-center px-3 lg:px-5 lg:pl-3 -ml-3">
      <Item href="/todos">Daily</Item>
      <Item href="/todos/archived">Archive</Item>
    </Box>
  );
}
