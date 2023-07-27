import React, { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

const Box = forwardRef(function Box({ className, ...rest }, ref) {
  return (
    <div ref={ref} className={twMerge("box-border", className)} {...rest} />
  );
});

export default Box;
