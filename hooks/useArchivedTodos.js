import { fetcher } from "@/lib/fetcher";
import useSWR from "swr";
import { useAuth } from "@/contexts/auth";
import _ from "lodash";

export const useArchivedTodos = () => {
  const { user } = useAuth();

  const BASE_URL = user && `/api/accounts/${user.id}/todos?archived=true`;

  const { data, isLoading, error } = useSWR(BASE_URL, fetcher, {
    revalidateOnFocus: true,
  });

  return {
    todos: data,
    loading: isLoading,
    error,
  };
};
