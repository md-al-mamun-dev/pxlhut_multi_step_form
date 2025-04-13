"use client" 
import { useEffect, useState } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";

export default function ThemeInitializer({ children }) {
    const queryClient = useQueryClient();
    const [hydrated, setHydrated] = useState(false);
  
    useEffect(() => {
      const savedTheme = localStorage.getItem('theme');
      const osPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      const osTheme = osPrefersDark ? 'dark' : 'light';
      const resolvedTheme = savedTheme || osTheme;
      queryClient.setQueryData(['theme'], resolvedTheme);
      setHydrated(true);
    }, [queryClient]);
  
    const { data: theme = 'light' } = useQuery({
      queryKey: ['theme'],
      queryFn: () => 'light',
      staleTime: Infinity,
    });
  

    if (!hydrated) return null;
    return (
      <div data-theme={theme} className="theme-context-wrapper">
        {children}
      </div>
    );
  }
