"use client";

import React from "react";
import PropTypes from "prop-types";
import { twMerge } from "tailwind-merge";
import { useTarget } from "./TargetProvider";
import { TargetIcon } from "lucide-react";

export default function Target({ squareLocation }) {
  const { row, column } = useTarget();

  if (row !== squareLocation.row || column !== squareLocation.column) {
    return null;
  }

  return (
    <div className={twMerge("text-red-500")}>
      <TargetIcon />
    </div>
  );
}

Target.propTypes = {
  squareLocation: PropTypes.shape({
    row: PropTypes.number.isRequired,
    column: PropTypes.number.isRequired,
  }).isRequired,
  aquired: PropTypes.bool,
  onTargetAquired: PropTypes.func,
};
