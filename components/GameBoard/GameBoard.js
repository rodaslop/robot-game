"use client";

import React from "react";
import PropTypes from "prop-types";

export default function GameBoard({ rows = 5, columns = 5, children }) {
  return (
    <div className="flex flex-col gap-1">
      {[...Array(rows).keys()].map((row) => (
        <div key={row} className="flex items-center gap-1">
          {[...Array(columns).keys()].map((column) => (
            <React.Fragment key={column}>
              {children({ row, column })}
            </React.Fragment>
          ))}
        </div>
      ))}
    </div>
  );
}

GameBoard.propTypes = {
  rows: PropTypes.number,
  columns: PropTypes.number,
  children: PropTypes.func,
};
