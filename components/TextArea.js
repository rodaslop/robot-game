import React, { forwardRef } from "react";
import Box from "./Box";
import { twMerge } from "tailwind-merge";
import Label from "./Label";

const TextArea = forwardRef(function TextArea(
  {
    id,
    type,
    rows = 3,
    label,
    placeholder,
    required = false,
    className,
    invalid,
    ...rest
  },
  ref
) {
  return (
    <Box className={className}>
      {label && <Label htmlFor={id}>{label}</Label>}
      <textarea
        ref={ref}
        id={id}
        type={type}
        rows={rows}
        className={twMerge(
          "bg-gray-50 border text-sm rounded-lg focus:border-blue-500 block w-full p-2.5 resize-none",
          {
            "bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5":
              invalid,
          }
        )}
        placeholder={placeholder}
        required={required}
        {...rest}
      />
    </Box>
  );
});

export default TextArea;