"use client";

import React from "react";
import { useGame } from "../GameProvider";
import { getSpawnLocation } from "@/utils/target";

const TargetContext = React.createContext();

export const useTarget = () => React.useContext(TargetContext);

function reducer(state, action) {
  switch (action.type) {
    case "respawn":
      return {
        ...state,
        ...getSpawnLocation({
          bounds: action.payload.bounds,
          exclude: action.payload.exclude,
        }),
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

  const respawn = React.useCallback(
    (exclude) => {
      dispatch({
        type: "respawn",
        payload: {
          bounds: { rows, columns },
          exclude,
        },
      });
    },
    [rows, columns]
  );

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
