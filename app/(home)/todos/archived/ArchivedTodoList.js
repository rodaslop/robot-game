import React from "react";
import Box from "@/components/Box";
import ArchivedTodo from "./ArchivedTodo";

export default function ArchivedTodoList({ todos = [] }) {
  return (
    <Box className="grid grid-cols-1 gap-3">
      {todos.map((todo) => {
        return <ArchivedTodo key={todo.id} {...todo} />;
      })}
    </Box>
  );
}
