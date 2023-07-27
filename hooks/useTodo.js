import useSWR from "swr";
import { fetcher } from "@/lib/fetcher";
import { useAuth } from "@/contexts/auth";

export const useTodo = (id) => {
  const { user } = useAuth();

  const BASE_URL = user && `/api/accounts/${user.id}/todos/${id}`;

  const { data, isLoading, error } = useSWR(BASE_URL, fetcher);

  return {
    todo: data,
    loading: isLoading,
    error,
  };
};
