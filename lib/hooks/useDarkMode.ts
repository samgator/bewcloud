import { useEffect, useState } from 'preact/hooks';

export function useDarkMode() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setDarkMode(prefersDarkMode);

    const mediaQueryListener = (event: MediaQueryListEvent) => {
      setDarkMode(event.matches);
    };

    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', mediaQueryListener);

    return () => {
      window.matchMedia('(prefers-color-scheme: dark)').removeEventListener('change', mediaQueryListener);
    };
  },);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.style.colorScheme = 'dark';
    } else {
      document.documentElement.style.colorScheme = 'light';
    }
  }, [darkMode]);

  return darkMode;
}