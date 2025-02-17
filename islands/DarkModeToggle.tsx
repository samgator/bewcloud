import { useDarkMode } from '../lib/hooks/useDarkMode.ts';

export default function DarkModeToggle() {
  const isDarkMode = useDarkMode();

  return (
    <button 
      class='p-2 border rounded' 
      onClick={() => isDarkMode.value = !isDarkMode.value}
    >
      {isDarkMode.value ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
    </button>
  );
}
