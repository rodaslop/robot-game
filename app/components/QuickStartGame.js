"use client";

import React from "react";
import { GameBoard, GameBoardSquare } from "@/components/GameBoard";
import { useGame } from "@/components/GameProvider";
import GameStats from "@/components/GameStats";
import { Robot, RobotControls, useRobot } from "@/components/Robot";
import { Target, useTarget } from "@/components/Target";

export default function QuickStartGame() {
  const { rows, columns, incrementScore } = useGame();
  const robot = useRobot();
  const target = useTarget();

  const targetAquired =
    robot.row === target.row && robot.column === target.column;

  React.useEffect(() => {
    if (targetAquired) {
      target.respawn();
      incrementScore();
    }
  }, [targetAquired, target, incrementScore]);

  return (
    <div className="flex flex-col gap-10">
      <GameStats />
      <GameBoard rows={rows} columns={columns}>
        {(squareLocation) => (
          <GameBoardSquare>
            <Robot squareLocation={squareLocation} />
            <Target
              squareLocation={squareLocation}
              aquired={targetAquired}
              onTargetAquired={incrementScore}
            />
          </GameBoardSquare>
        )}
      </GameBoard>
      <RobotControls />
    </div>
  );
}
