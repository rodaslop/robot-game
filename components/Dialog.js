import { Dialog as HUI_Dialog } from "@headlessui/react";

import { twMerge } from "tailwind-merge";

export default function Dialog({
  isOpen = false,
  width = "400px",
  onClose,
  className,
  children,
}) {
  return (
    <HUI_Dialog open={isOpen} onClose={onClose}>
      <div className="fixed inset-0 bg-black opacity-30 z-[99]" />
      <div className="fixed inset-0 flex items-center justify-center p-4 z-[100]">
        <HUI_Dialog.Panel
          className={twMerge(
            `mx-auto rounded-lg bg-white w-[100vw] max-w-[400px]`,
            className
          )}
        >
          {children}
        </HUI_Dialog.Panel>
      </div>
    </HUI_Dialog>
  );
}
