import React, { forwardRef } from "react";
import Select from "@/components/Select";
import { useController } from "react-hook-form";

import Label from "@/components/Label";

const PRIORITIES = ["low", "medium", "high"];

const PrioritySelect = forwardRef(function PrioritySelect(
  { label, control, className },
  ref
) {
  const { field } = useController({
    name: "priority",
    control,
    rules: { required: true },
    defaultValue: PRIORITIES[0],
  });

  return (
    <div className={className}>
      {label && <Label htmlFor="priority">{label}</Label>}
      <Select ref={ref} {...field}>
        <Select.Button className="capitalize">{field.value}</Select.Button>
        <Select.Options>
          {PRIORITIES.map((priority) => (
            <Select.Option
              key={priority}
              value={priority}
              className="capitalize"
            >
              {priority}
            </Select.Option>
          ))}
        </Select.Options>
      </Select>
    </div>
  );
});

export default PrioritySelect;
