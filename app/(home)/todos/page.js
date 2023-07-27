"use client";
import Box from "@/components/Box";
import { Button } from "@/components/Button";
import { Archive, Plus } from "lucide-react";
import React from "react";
import InsertTodoDialog from "./InsertTodoDialog";
import MutateTodoDialog from "./MutateTodoDialog";
import { useTodos } from "@/hooks/useTodos";
import { Disclosure } from "@headlessui/react";
import { ChevronUp } from "lucide-react";
import _ from "lodash";
import TodoList from "./TodoList";
import ArchiveTodosButton from "./ArchiveTodosButton";

export default function Page() {
  const { todos } = useTodos();

  const completed = _.filter(todos, { isCompleted: true });
  const notCompleted = _.filter(todos, { isCompleted: false });

  const [selected, setSelected] = React.useState();

  const id = selected !== "create" && selected;

  const RenderedDialog = id ? MutateTodoDialog : InsertTodoDialog;

  const onCreate = () => {
    setSelected("create");
  };

  const onClose = () => {
    setSelected(null);
  };

  return (
    <Box>
      <Box className="flex items-center justify-end mb-5">
        <ArchiveTodosButton
          todos={completed}
          variant="btn-lightGray"
          icon={Archive}
          size="sm"
        >
          Archive completed todos
        </ArchiveTodosButton>
        <Button
          variant="btn-primary"
          icon={Plus}
          onClick={onCreate}
          size="sm"
          className="ml-3"
        >
          Todo
        </Button>
      </Box>
      <Box>
        <TodoList todos={notCompleted} onSelect={setSelected} />
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="mt-10 flex w-full justify-between rounded-lg bg-purple-100 px-4 py-3 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none ">
                <span>{`Completed (${completed.length})`}</span>
                <ChevronUp
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-purple-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="pt-3 pb-2">
                <TodoList todos={completed} />
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </Box>
      <RenderedDialog id={id} isOpen={!!selected} onClose={onClose} />
    </Box>
  );
}
