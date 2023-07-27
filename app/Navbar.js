"use client";
import Link from "next/link";
import { AvatarDropdown } from "./AvatarDropdown";
import { useAuth } from "@/contexts/auth";
import Box from "@/components/Box";
import { LinkButton } from "@/components/LinkButton";

export default function Navbar() {
  const { user } = useAuth();

  return (
    <Box className="fixed top-0 z-50 w-full bg-white border-b border-gray-200">
      <Box className="flex items-center px-3 py-3 lg:px-5 lg:pl-3">
        <Link href="/">
          <Box className="font-semibold">Todo app</Box>
        </Link>
        <Box className="flex flex-1 justify-end">
          {user ? (
            <AvatarDropdown />
          ) : (
            <>
              <LinkButton className="btn-secondary" size="sm" href="/login">
                Login
              </LinkButton>
              <LinkButton className="ml-2" size="sm" href="/signup">
                Sign up
              </LinkButton>
            </>
          )}
        </Box>
      </Box>
    </Box>
  );
}
