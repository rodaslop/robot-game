import React from "react";
import Box from "@/components/Box";
import { Card } from "@/components/Card";
import { twMerge } from "tailwind-merge";
import PriorityBadge from "@/components/PriorityBadge";
import { Archive } from "lucide-react";

export default function ArchivedTodo({ description, priority }) {
  return (
    <Card className={twMerge("flex flex-col transition")} bgColor="bg-white">
      <Box className="grid grid-cols-[5fr_2fr_1fr] gap-3">
        <Box className="text-sm line-clamp-3 text-gray-800 leading-snug">
          {description}
        </Box>
        <Box className="flex items-center justify-end">
          <PriorityBadge>{priority}</PriorityBadge>
        </Box>
        <Box className="flex items-center justify-center text-gray-400">
          <Archive />
        </Box>
      </Box>
    </Card>
  );
}
