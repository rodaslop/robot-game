"use client";

import React from "react";
import { rotateLeft, rotateRight } from "@/utils/robot";

const GameContext = React.createContext();

export const useGame = () => React.useContext(GameContext);

function reducer(state, action) {
  switch (action.type) {
    case "robot.rotate.left":
      return {
        ...state,
        robot: {
          ...state.robot,
          direction: rotateLeft(state.robot.direction),
        },
      };
    case "robot.rotate.right":
      return {
        ...state,
        robot: {
          ...state.robot,
          direction: rotateRight(state.robot.direction),
        },
      };
    default:
      return state;
  }
}

const DEFAULT_VALUE = {
  rows: 5,
  columns: 5,
  robot: {
    row: 2,
    column: 2,
    direction: "up",
  },
};

export const GameProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, DEFAULT_VALUE);

  const rotateRight = React.useCallback(() => {
    dispatch("robot.rotate.right");
  }, []);

  const rotateLeft = React.useCallback(() => {
    dispatch("robot.rotate.left");
  }, []);

  const value = React.useMemo(
    () => ({
      ...state,
      rotateLeft,
      rotateRight,
    }),
    [state, rotateLeft, rotateRight]
  );

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
};
