import React from "react";

import { Card } from "@/components/Card";
import CheckboxControl from "./CheckboxControl";
import { twMerge } from "tailwind-merge";
import PriorityBadge from "@/components/PriorityBadge";

export default function Todo({
  id,
  description,
  priority,
  onSelect,
  isCompleted = false,
}) {
  const onClick = () => {
    if (onSelect) {
      onSelect(id);
    }
  };

  return (
    <Card
      className={twMerge(
        "flex flex-col transition",
        !!onSelect && "cursor-pointer hover:bg-stone-100"
      )}
      bgColor="bg-white"
      onClick={onClick}
    >
      <div className="grid grid-cols-[5fr_2fr_1fr] gap-3">
        <div className="text-sm line-clamp-3 text-gray-800 leading-snug">
          {description}
        </div>
        <div className="flex items-center justify-end">
          <PriorityBadge>{priority}</PriorityBadge>
        </div>
        <div className="flex items-center justify-center">
          <CheckboxControl id={id} isCompleted={isCompleted} />
        </div>
      </div>
    </Card>
  );
}