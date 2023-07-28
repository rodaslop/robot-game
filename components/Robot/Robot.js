"use client";

import PropTypes from "prop-types";
import { useRobot } from "./RobotProvider";
import { twMerge } from "tailwind-merge";

export default function Robot({ squareLocation }) {
  const { row, column, direction } = useRobot();

  if (row !== squareLocation.row || column !== squareLocation.column) {
    return null;
  }

  return (
    <div
      className={twMerge(
        "text-blue-500",
        direction === "up" && "rotate-0",
        direction === "right" && "rotate-90",
        direction === "down" && "rotate-180",
        direction === "left" && "-rotate-90"
      )}
    >
      Robot
    </div>
  );
}

Robot.propTypes = {
  squareLocation: PropTypes.shape({
    row: PropTypes.number.isRequired,
    column: PropTypes.number.isRequired,
  }).isRequired,
};
