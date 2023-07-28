"use client";

import React from "react";

const GameContext = React.createContext();

export const useGame = () => React.useContext(GameContext);

const DEFAULT_VALUE = {
  rows: 5,
  columns: 5,
  score: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case "score.increment":
      return {
        ...state,
        score: state.score + 1,
      };
    case "reset":
      return DEFAULT_VALUE;
    default:
      return state;
  }
}

export const GameProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, DEFAULT_VALUE);

  const incrementScore = React.useCallback(() => {
    dispatch({ type: "score.increment" });
  }, []);

  const reset = React.useCallback(() => {
    dispatch({ type: "reset" });
  }, []);

  const value = React.useMemo(
    () => ({
      ...state,
      incrementScore,
      reset,
    }),
    [state, incrementScore, reset]
  );

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
};
