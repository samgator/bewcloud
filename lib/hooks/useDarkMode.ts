import { useEffect } from 'preact/hooks';
import { useSignal } from '@preact/signals';

export function useDarkMode() {
  const darkMode = useSignal(false);

  useEffect(() => {
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    darkMode.value = prefersDarkMode;

    const mediaQueryListener = (event: MediaQueryListEvent) => {
      darkMode.value = event.matches;
    };

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    mediaQuery.addEventListener('change', mediaQueryListener);

    return () => {
      mediaQuery.removeEventListener('change', mediaQueryListener);
    };
  }, []);

  useEffect(() => {
    document.documentElement.style.colorScheme = darkMode.value ? 'dark' : 'light';
  }, [darkMode.value]);

  return darkMode;
}
