import { useEffect } from 'preact/hooks';
import { useSignal } from '@preact/signals';

export function useDarkMode() {
  const darkMode = useSignal(
    window.matchMedia('(prefers-color-scheme: dark)').matches,
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const updateMode = (event: MediaQueryListEvent) => {
      darkMode.value = event.matches;
      document.documentElement.dataset.theme = darkMode.value ? 'dark' : 'light';
    };

    mediaQuery.addEventListener('change', updateMode);

    // Set initial theme attribute
    document.documentElement.dataset.theme = darkMode.value ? 'dark' : 'light';

    return () => {
      mediaQuery.removeEventListener('change', updateMode);
    };
  }, []);

  return darkMode;
}
