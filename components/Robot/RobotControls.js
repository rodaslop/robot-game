"use client";

import { ArrowUp, RotateCcwIcon, RotateCw } from "lucide-react";
import { useRobot } from "./RobotProvider";
import IconButton from "@/components/IconButton";

export default function RobotControls({ disabled }) {
  const { rotateLeft, rotateRight, move } = useRobot();

  return (
    <div className="flex justify-center">
      <div className="flex items-center justify-between gap-5">
        <IconButton
          size="lg"
          icon={RotateCcwIcon}
          onClick={rotateLeft}
          disabled={disabled}
        />
        <IconButton
          size="lg"
          icon={ArrowUp}
          onClick={move}
          disabled={disabled}
        />
        <IconButton
          size="lg"
          icon={RotateCw}
          onClick={rotateRight}
          disabled={disabled}
        />
      </div>
    </div>
  );
}
