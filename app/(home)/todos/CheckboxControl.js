import React from "react";
import Checkbox from "@/components/Checkbox";
import { useTodos } from "@/hooks/useTodos";

export default function CheckboxControl({ id, isCompleted = false }) {
  const { checkTodo } = useTodos();
  const [isChecked, setIsChecked] = React.useState(isCompleted);

  const handleChange = async (e) => {
    setIsChecked(e.target.checked);
    await checkTodo(id, e.target.checked);
  };

  return <Checkbox checked={isChecked} onChange={handleChange} />;
}
