"use client";
import React from "react";
import { redirect } from "next/navigation";
import { useAuth } from "@/contexts/auth";

export const AuthRedirect = ({ children }) => {
  const { user, isLoading } = useAuth();

  React.useEffect(() => {
    if (!isLoading && !user) {
      redirect("/");
    }
  }, [user, isLoading]);

  return children;
};
