"use client";

import { useEffect, useState } from "react";

/**
 * Hook to check if a component is mounted
 * Useful for handling hydration issues or safe state updates
 */
export function useIsMounted() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timeoutId = window.setTimeout(() => setMounted(true), 0);
    return () => window.clearTimeout(timeoutId);
  }, []);

  return mounted;
}
