"use client";
import Box from "@/components/Box";
import { twMerge } from "tailwind-merge";
import { Gauge, CheckCheck, UserCog } from "lucide-react";
import Link from "next/link";
import { useSelectedLayoutSegments } from "next/navigation";

const Item = ({ href, icon: Icon, children }) => {
  const segments = useSelectedLayoutSegments();
  const segment = href.split("/")[1];
  const isActive = segments.includes(segment);

  return (
    <Link href={href}>
      <Box
        className={twMerge(
          "px-5 py-3 rounded-lg hover:bg-blue-100 hover:text-blue-800 cursor-pointer",
          isActive && "bg-blue-100 text-blue-800"
        )}
      >
        <Box className="flex items-center">
          <Icon size={18} />
          <Box className="flex-1 pl-3">{children}</Box>
        </Box>
      </Box>
    </Link>
  );
};

export default function Sidebar() {
  return (
    <Box className="grid grid-cols-1 gap-1">
      <Item icon={Gauge} href="/dashboard">
        Dashboard
      </Item>
      <Item icon={CheckCheck} href="/todos">
        Todos
      </Item>
      <Item icon={UserCog} href="/account">
        Account
      </Item>
    </Box>
  );
}
