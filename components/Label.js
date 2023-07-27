import React, { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

const Label = forwardRef(function Label({ className, ...rest }, ref) {
  return (
    <label
      ref={ref}
      className={twMerge("block mb-2 text-sm font-medium", className)}
      {...rest}
    />
  );
});

export default Label;
