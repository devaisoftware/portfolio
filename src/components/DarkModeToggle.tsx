import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { Sun, Moon } from 'lucide-react';

const DarkModeToggle: React.FC = () => {
  const { theme, setTheme } = useTheme();

  const options = [
    { name: 'light', icon: <Sun className="w-5 h-5" /> },
    { name: 'dark', icon: <Moon className="w-5 h-5" /> },
  ] as const;

  return (
    <div className="flex items-center p-1 rounded-full bg-neutral-200 dark:bg-neutral-800 w-fit">
      {options.map((option) => (
        <button
          key={option.name}
          onClick={() => setTheme(option.name)}
          className={`p-1.5 rounded-full transition-colors duration-200 ${
            theme === option.name
              ? 'bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100'
              : 'text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100'
          }`}
          aria-label={`Switch to ${option.name} mode`}
        >
          {option.icon}
        </button>
      ))}
    </div>
  );
};

export default DarkModeToggle;