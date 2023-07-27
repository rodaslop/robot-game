"use client";

import { GameBoard, GameBoardSquare } from "./GameBoard";
import { useGame } from "./GameProvider";
import ItemRenderer from "./ItemRenderer";

export default function QuickStartGame() {
  const { rows, columns, robot } = useGame();

  return (
    <GameBoard rows={rows} columns={columns}>
      {(coordinates) => (
        <GameBoardSquare>
          <ItemRenderer
            square={coordinates}
            item={{
              row: robot.row,
              column: robot.column,
            }}
          >
            <div>robot</div>
          </ItemRenderer>
        </GameBoardSquare>
      )}
    </GameBoard>
  );
}
