import React, { forwardRef } from "react";

import { twMerge } from "tailwind-merge";
import Label from "./Label";

const TextInput = forwardRef(function TextInput(
  { id, type, label, placeholder, invalid, className, ...rest },
  ref
) {
  return (
    <div className={className}>
      {label && <Label htmlFor={id}>{label}</Label>}
      <input
        ref={ref}
        id={id}
        type={type}
        className={twMerge(
          "bg-gray-50 border text-sm rounded-lg focus:border-blue-500 block w-full p-2.5",
          {
            "bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5":
              invalid,
          }
        )}
        placeholder={placeholder}
        {...rest}
      />
    </div>
  );
});

export default TextInput;
