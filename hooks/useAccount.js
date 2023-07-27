"use client";
import { useAuth } from "@/contexts/auth";
import { fetcher, create, update } from "@/lib/fetcher";
import useSWR from "swr";

export const useAccount = () => {
  const { user } = useAuth();

  const BASE_URL = user && `/api/accounts/${user.id}`;

  const { data, isLoading, error, mutate } = useSWR(BASE_URL, fetcher);

  const initAccount = async (id, data) => {
    return mutate(BASE_URL, create(`/api/accounts/${id}`, data));
  };

  const updateAccount = async (data) => {
    return mutate(BASE_URL, update(BASE_URL, data));
  };

  return {
    account: {
      ...data,
      ...user,
    },
    loading: isLoading,
    error,
    initAccount,
    updateAccount,
  };
};
