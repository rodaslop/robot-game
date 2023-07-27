import React, { forwardRef } from "react";
import { twMerge } from "tailwind-merge";
import Box from "./Box";

const Checkbox = forwardRef(function Checkbox(
  { id, label, className, ...rest },
  ref
) {
  const handleClick = (e) => {
    e.stopPropagation();
  };

  return (
    <Box
      className={twMerge("flex items-center", className)}
      onClick={handleClick}
    >
      <input
        ref={ref}
        id={id}
        type="checkbox"
        className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2 cursor-pointer"
        {...rest}
      />
      {label && (
        <label htmlFor={id} className="ml-2 text-sm font-medium text-gray-900">
          {label}
        </label>
      )}
    </Box>
  );
});

export default Checkbox;
