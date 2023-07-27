"use client";
import { useArchivedTodos } from "@/hooks/useArchivedTodos";
import ArchivedTodoList from "./ArchivedTodoList";

export default function Page() {
  const { todos } = useArchivedTodos();

  return <ArchivedTodoList todos={todos} />;
}
