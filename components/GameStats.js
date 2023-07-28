"use client";

import { useGame } from "./GameProvider";

export default function GameStats() {
  const { score = 0, time = 60 } = useGame();

  return (
    <div className="flex items-center justify-between">
      <div className="font-semibold">Score: {score}</div>
      <div className="font-semibold">Time: {time}</div>
    </div>
  );
}
