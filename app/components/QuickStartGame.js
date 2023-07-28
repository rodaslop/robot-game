"use client";

import React from "react";
import { GameBoard, GameBoardSquare } from "@/components/GameBoard";
import { useGame } from "@/components/GameProvider";
import GameStats from "@/components/GameStats";
import { Robot, RobotControls, useRobot } from "@/components/Robot";
import { Target, useTarget } from "@/components/Target";
import useTimer from "@/hooks/useTimer";
import { Button } from "@/components/Button";

export default function QuickStartGame() {
  const timer = useTimer(10);
  const game = useGame();
  const robot = useRobot();
  const target = useTarget();

  const targetAquired =
    robot.row === target.row && robot.column === target.column;

  React.useEffect(() => {
    if (targetAquired) {
      target.respawn();
      game.incrementScore();
    }
  }, [targetAquired, target, game]);

  const handleReset = React.useCallback(() => {
    game.reset();
    timer.reset();
    robot.reset();
    target.respawn();
  }, [game, timer, robot, target]);

  React.useEffect(() => {
    if (timer.time === 0) {
      timer.toggleStart();
      handleReset();
    }
  }, [timer, handleReset]);

  return (
    <div className="flex flex-col gap-10">
      <GameStats time={timer.time} score={game.score} />
      <GameBoard rows={game.rows} columns={game.columns}>
        {(squareLocation) => (
          <GameBoardSquare>
            <Robot squareLocation={squareLocation} />
            <Target
              squareLocation={squareLocation}
              aquired={targetAquired}
              onTargetAquired={game.incrementScore}
            />
          </GameBoardSquare>
        )}
      </GameBoard>
      <RobotControls disabled={!timer.isRunning} />
      <div className="flex justify-center">
        <Button onClick={timer.toggleStart}>Start Game</Button>
      </div>
    </div>
  );
}
