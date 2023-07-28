"use client";

import React from "react";
import { rotateLeft, rotateRight } from "@/utils/robot";

const GameContext = React.createContext();

export const useGame = () => React.useContext(GameContext);

const DEFAULT_VALUE = {
  rows: 5,
  columns: 5,
  robot: {
    row: 2,
    column: 2,
    direction: "up",
  },
  score: 0,
};

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
    case "score.increment":
      return {
        ...state,
        score: state.score++,
      };

    case "reset":
      return DEFAULT_VALUE;
    default:
      return state;
  }
}

export const GameProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, DEFAULT_VALUE);

  const rotateRight = React.useCallback(() => {
    dispatch({ type: "robot.rotate.right" });
  }, []);

  const rotateLeft = React.useCallback(() => {
    dispatch({ type: "robot.rotate.left" });
  }, []);

  const incrementScore = React.useCallback(() => {
    dispatch({ type: "score.increment" });
  }, []);

  const value = React.useMemo(
    () => ({
      ...state,
      rotateLeft,
      rotateRight,
      incrementScore,
    }),
    [state, rotateLeft, rotateRight, incrementScore]
  );

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
};
