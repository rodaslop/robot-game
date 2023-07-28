"use client";

import React from "react";
import { useGame } from "../GameProvider";

const TargetContext = React.createContext();

export const useTarget = () => React.useContext(TargetContext);

const random = (num) => Math.floor(Math.random() * num + 1);

function reducer(state, action) {
  switch (action.type) {
    case "respawn":
      return {
        ...state,
        row: random(action.payload.rows - 1),
        column: random(action.payload.columns - 1),
      };
    default:
      return state;
  }
}

const DEFAULT_VALUE = {
  row: 3,
  column: 3,
};

export const TargetProvider = ({ children }) => {
  const { rows, columns } = useGame();

  const [state, dispatch] = React.useReducer(reducer, DEFAULT_VALUE);

  const respawn = React.useCallback(() => {
    dispatch({
      type: "respawn",
      payload: {
        rows,
        columns,
      },
    });
  }, [rows, columns]);

  const value = React.useMemo(
    () => ({
      ...state,
      respawn,
    }),
    [state, respawn]
  );

  return (
    <TargetContext.Provider value={value}>{children}</TargetContext.Provider>
  );
};
