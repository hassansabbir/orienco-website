import api from "@/lib/api";
import React, { ReactNode } from "react";

interface DataFetcherProps<T> {
  endpoint: string;
  method?: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
  body?: any;
  options?: RequestInit;
  /**
   * Render-prop pattern to pass data to children
   */
  children: (data: T) => ReactNode;
  /**
   * Fallback for error state
   */
  errorFallback?: (error: Error) => ReactNode;
}

/**
 * A declarative server component for SSR data fetching.
 * Wrap this in a Suspense boundary for loading states.
 */
export default async function DataFetcher<T>({
  endpoint,
  method = "GET",
  body,
  options = {},
  children,
  errorFallback,
}: DataFetcherProps<T>) {
  let data: T | null = null;
  let error: Error | null = null;

  try {
    data = await api.request<T>(endpoint, {
      method,
      body: body ? JSON.stringify(body) : undefined,
      ...options,
    });
  } catch (err) {
    error = err instanceof Error ? err : new Error("Unknown error");
    console.error(`DataFetcher Error [${method} ${endpoint}]:`, error);
  }

  if (error) {
    if (errorFallback) {
      return <>{errorFallback(error)}</>;
    }

    return (
      <div className="p-4 rounded-lg bg-destructive/10 border border-destructive/20 text-destructive text-sm">
        Failed to load data: {error.message}
      </div>
    );
  }

  return <>{children(data as T)}</>;
}
