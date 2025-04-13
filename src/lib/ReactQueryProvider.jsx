"use client"
import { QueryClient, QueryClientProvider} from "@tanstack/react-query";
import { useState } from "react";
import ThemeInitializer from "./ThemeInitializer";

export default function ReactQueryProvider({ children }) {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeInitializer>
        {children}
      </ThemeInitializer>
    </QueryClientProvider>
  );
}

