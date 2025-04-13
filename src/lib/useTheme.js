import { useQuery, useQueryClient } from '@tanstack/react-query';

export default function useTheme() {
  const queryClient = useQueryClient();

  const { data: theme = 'light' } = useQuery({
    queryKey: ['theme'],
    queryFn: () => 'light',
    staleTime: Infinity,
  });

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    queryClient.setQueryData(['theme'], newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return { theme, toggleTheme };
}