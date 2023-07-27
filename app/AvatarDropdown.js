"use client";
import { Popover, Transition } from "@headlessui/react";
import signOut from "@/firebase/auth/signout";
import { AvatarDropdownItem } from "./AvatarDropdownItem";
import { Gauge, UserCog, LogOut, CheckCheck } from "lucide-react";
import { useAccount } from "@/hooks/useAccount";
import Box from "@/components/Box";
import { Card } from "@/components/Card";
import Avatar from "@/components/Avatar";

export const AvatarDropdown = () => {
  const { account } = useAccount();

  const onSignOut = async () => {
    await signOut();
  };

  return (
    <Popover foc className="relative">
      <Popover.Button as="nav">
        {account ? <Avatar text={account.displayName} /> : <Avatar />}
      </Popover.Button>
      <Transition
        enter="transition duration-100 ease-out"
        enterFrom="transform scale-95 opacity-0"
        enterTo="transform scale-100 opacity-100"
        leave="transition duration-75 ease-out"
        leaveFrom="transform scale-100 opacity-100"
        leaveTo="transform scale-95 opacity-0"
      >
        <Popover.Panel className="absolute right-0 top-2">
          {({ close }) => (
            <Card
              bgColor="bg-neutral-50"
              className="shadow-xl p-[0px] border text-sm"
            >
              {account && (
                <Box className="px-5 py-3 border-b border-neutral-200">
                  <Box className="font-semibold">{account.displayName}</Box>
                  <Box>{account.email}</Box>
                </Box>
              )}
              <AvatarDropdownItem
                icon={Gauge}
                href="/dashboard"
                onClick={close}
              >
                Dashboard
              </AvatarDropdownItem>
              <AvatarDropdownItem
                icon={CheckCheck}
                href="/todos"
                onClick={close}
              >
                Todos
              </AvatarDropdownItem>
              <AvatarDropdownItem
                icon={UserCog}
                href="/account"
                onClick={close}
              >
                Account
              </AvatarDropdownItem>
              <Box
                className="px-5 py-3 border-neutral-200 hover:bg-neutral-100 text-red-500 cursor-pointer"
                onClick={onSignOut}
              >
                <Box className="flex items-center">
                  <LogOut size={18} />
                  <Box className="flex-1 pl-3">Sign out</Box>
                </Box>
              </Box>
            </Card>
          )}
        </Popover.Panel>
      </Transition>
    </Popover>
  );
};
