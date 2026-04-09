'use client';

import { useTheme } from '@nova-ui';
import { Sun, Moon, Monitor } from 'lucide-react';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const next = () => {
    const order: Array<'light' | 'dark' | 'system'> = ['light', 'dark', 'system'];
    const idx = order.indexOf(theme);
    setTheme(order[(idx + 1) % order.length]);
  };

  return (
    <button
      onClick={next}
      className="flex h-8 w-8 items-center justify-center rounded-md border border-(--nova-border-default) text-(--nova-text-tertiary) transition-colors hover:bg-(--nova-bg-secondary) hover:text-(--nova-text-primary)"
      aria-label={`Theme: ${theme}`}
    >
      {theme === 'dark' ? (
        <Moon className="h-4 w-4" />
      ) : theme === 'light' ? (
        <Sun className="h-4 w-4" />
      ) : (
        <Monitor className="h-4 w-4" />
      )}
    </button>
  );
}
