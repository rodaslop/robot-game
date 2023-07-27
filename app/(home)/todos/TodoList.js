import React from "react";
import Box from "@/components/Box";
import Todo from "./Todo";

export default function TodoList({ todos = [], onSelect }) {
  return (
    <Box className="grid grid-cols-1 gap-3">
      {todos.map((todo) => {
        return <Todo key={todo.id} onSelect={onSelect} {...todo} />;
      })}
    </Box>
  );
}
