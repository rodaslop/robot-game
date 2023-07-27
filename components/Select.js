import { Fragment, forwardRef, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { Check, ChevronDown } from "lucide-react";
import Box from "./Box";
import { twMerge } from "tailwind-merge";

const SelectButton = ({ children, className }) => {
  return (
    <Listbox.Button
      className={twMerge(
        "relative w-full cursor-pointer rounded-lg bg-gray-50 py-2 pl-3 pr-10 text-left border focus:border-blue-600 sm:text-sm",
        className
      )}
    >
      <span className="block truncate">{children}</span>
      <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
        <ChevronDown className="h-5 w-5 text-gray-400" aria-hidden="true" />
      </span>
    </Listbox.Button>
  );
};

const SelectOptions = ({ children }) => {
  return (
    <Transition
      as={Fragment}
      leave="transition ease-in duration-100"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg focus:outline-none sm:text-sm">
        {children}
      </Listbox.Options>
    </Transition>
  );
};

const SelectOption = ({ value, children, className }) => {
  return (
    <Listbox.Option
      className={({ active }) =>
        twMerge(
          `relative cursor-pointer select-none py-2 pl-10 pr-4 ${
            active ? "bg-blue-100 text-blue-900" : "text-gray-900"
          }`,
          className
        )
      }
      value={value}
    >
      {({ selected }) => (
        <>
          <span
            className={`block truncate ${
              selected ? "font-medium" : "font-normal"
            }`}
          >
            {children}
          </span>
          {selected ? (
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-blue-600">
              <Check className="h-5 w-5" aria-hidden="true" />
            </span>
          ) : null}
        </>
      )}
    </Listbox.Option>
  );
};

const Select = forwardRef(function Select(
  { value, onChange, className, children, ...rest },
  ref
) {
  return (
    <Listbox
      ref={ref}
      as={Box}
      value={value}
      onChange={onChange}
      className={twMerge("relative", className)}
      {...rest}
    >
      {children}
    </Listbox>
  );
});

Select.Button = SelectButton;
Select.Options = SelectOptions;
Select.Option = SelectOption;

export default Select;
