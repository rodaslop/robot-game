import { create, update, remove, fetcher } from "@/utils/fetcher";
import useSWR from "swr";
import { useAuth } from "@/contexts/auth";
import _ from "lodash";

export const useTodos = () => {
  const { user } = useAuth();

  const BASE_URL = user && `/api/accounts/${user.id}/todos`;

  const { data, isLoading, error, mutate } = useSWR(BASE_URL, fetcher);

  const createTodo = async (data) => {
    return mutate(create(BASE_URL, data), {
      populateCache: (newTodo, todos) => {
        return [...todos, newTodo];
      },
    });
  };

  const updateTodo = async (id, data) => {
    return mutate(update(`${BASE_URL}/${id}`, data), {
      populateCache: (updatedTodo, todos) => {
        const index = _.findIndex(todos, { id });
        todos.splice(index, 1, updatedTodo);
        return todos;
      },
    });
  };

  const deleteTodo = async (id) => {
    return mutate(remove(`${BASE_URL}/${id}`), {
      populateCache: (v, todos) => {
        return todos.filter((todo) => todo.id !== id);
      },
    });
  };

  const checkTodo = async (id, isCompleted) => {
    return mutate(
      update(`${BASE_URL}/${id}`, {
        isCompleted,
      }),
      {
        populateCache: (updatedTodo, todos) => {
          const index = _.findIndex(todos, { id });
          todos.splice(index, 1, updatedTodo);
          return todos;
        },
      }
    );
  };

  const archiveTodos = async (ids = []) => {
    return mutate(
      update(`${BASE_URL}/archive`, {
        ids,
      })
    );
  };

  return {
    todos: data,
    loading: isLoading,
    error,
    createTodo,
    updateTodo,
    deleteTodo,
    checkTodo,
    archiveTodos,
  };
};
