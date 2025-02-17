import { useEffect } from 'preact/hooks';
import { useSignal } from '@preact/signals';

export function useDarkMode() {
  const darkMode = useSignal(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      darkMode.value = mediaQuery.matches;

      const updateMode = (event: MediaQueryListEvent) => {
        darkMode.value = event.matches;
        document.documentElement.dataset.theme = darkMode.value ? 'dark' : 'light';
      };

      mediaQuery.addEventListener('change', updateMode);
      document.documentElement.dataset.theme = darkMode.value ? 'dark' : 'light';

      return () => {
        mediaQuery.removeEventListener('change', updateMode);
      };
    }
  }, []);

  return darkMode;
}
