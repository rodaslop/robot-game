"use client";
import { Button } from "@/components/Button";
import React from "react";
import { useTodos } from "@/hooks/useTodos";

export default function ArchiveTodosButton({ todos, ...rest }) {
  const { archiveTodos } = useTodos();

  const onClick = async () => {
    await archiveTodos(todos.map((todo) => todo.id));
  };

  return <Button {...rest} onClick={onClick} />;
}
