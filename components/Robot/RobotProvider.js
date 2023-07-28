"use client";

import React from "react";
import { rotateLeft, rotateRight, moveForward } from "@/utils/robot";

const RobotContext = React.createContext();

export const useRobot = () => React.useContext(RobotContext);

function reducer(state, action) {
  switch (action.type) {
    case "rotate.left":
      return {
        ...state,
        direction: rotateLeft(state.direction),
      };
    case "rotate.right":
      return {
        ...state,
        direction: rotateRight(state.direction),
      };
    case "move":
      return {
        ...state,
        ...moveForward(state),
      };
    default:
      return state;
  }
}

const DEFAULT_VALUE = {
  row: 2,
  column: 2,
  direction: "up",
};

export const RobotProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, DEFAULT_VALUE);

  const rotateRight = React.useCallback(() => {
    dispatch({ type: "rotate.right" });
  }, []);

  const rotateLeft = React.useCallback(() => {
    dispatch({ type: "rotate.left" });
  }, []);

  const move = React.useCallback(() => {
    dispatch({ type: "move" });
  }, []);

  const value = React.useMemo(
    () => ({
      ...state,
      rotateLeft,
      rotateRight,
      move,
    }),
    [state, rotateLeft, rotateRight, move]
  );

  return (
    <RobotContext.Provider value={value}>{children}</RobotContext.Provider>
  );
};
