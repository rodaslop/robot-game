"use client";

import React from "react";
import { GameBoard, GameBoardSquare } from "@/components/GameBoard";
import { useGame } from "@/components/GameProvider";
import GameStats from "@/components/GameStats";
import { Robot, RobotControls, useRobot } from "@/components/Robot";
import { Target, useTarget } from "@/components/Target";
import useTimer from "@/hooks/useTimer";
import { Button } from "@/components/Button";
import { isOutOfBounds } from "@/utils/robot";

export default function QuickStartGame() {
  const timer = useTimer(60);
  const game = useGame();
  const robot = useRobot();
  const target = useTarget();

  const targetAquired =
    robot.row === target.row && robot.column === target.column;

  React.useEffect(() => {
    if (targetAquired) {
      target.respawn(robot);
      game.incrementScore();
    }
  }, [targetAquired, target, game, robot]);

  const handleReset = React.useCallback(() => {
    timer.toggleStart();
    game.reset();
    timer.reset();
    robot.reset();
    target.respawn(robot);
  }, [game, timer, robot, target]);

  React.useEffect(() => {
    if (timer.time === 0) {
      handleReset();
    }
  }, [timer, handleReset]);

  React.useEffect(() => {
    if (isOutOfBounds({ bounds: game, robot })) {
      handleReset();
    }
  }, [game, robot, handleReset]);

  const inProgress = timer.time > 0 && timer.time < 60;
  const isPaused = !timer.isRunning && inProgress;

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
        <Button
          variant={inProgress && !isPaused ? "btn-secondary" : "btn-primary"}
          onClick={timer.toggleStart}
        >
          {!inProgress ? "Start Game" : isPaused ? "Resume" : "Pause"}
        </Button>
      </div>
    </div>
  );
}
