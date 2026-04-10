'use client';

import { useTheme } from '@nova-ui';
import { Sun, Moon, Monitor } from 'lucide-react';

export function ThemeToggle() {
  const { theme, setTheme, brand, setBrand } = useTheme();

  const cycleTheme = () => {
    const order: Array<'light' | 'dark' | 'system'> = ['light', 'dark', 'system'];
    const idx = order.indexOf(theme);
    setTheme(order[(idx + 1) % order.length]);
  };

  return (
    <div className="flex items-center gap-1">
      {/* Brand toggle */}
      <button
        onClick={() => setBrand(brand === 'acefone' ? 'smartflo' : 'acefone')}
        className="flex h-8 items-center gap-1.5 rounded-md border border-(--nova-border-default) px-2.5 text-xs font-medium text-(--nova-text-secondary) transition-colors hover:bg-(--nova-bg-secondary) hover:text-(--nova-text-primary)"
        aria-label={`Brand: ${brand}`}
        title="Switch brand"
      >
        <span
          className="inline-block h-2 w-2 rounded-full"
          style={{
            background: brand === 'acefone' ? '#2837c3' : '#f46c23',
          }}
        />
        {brand === 'acefone' ? 'Acefone' : 'Smartflo'}
      </button>

      {/* Theme toggle */}
      <button
        onClick={cycleTheme}
        className="flex h-8 w-8 items-center justify-center rounded-md border border-(--nova-border-default) text-(--nova-text-tertiary) transition-colors hover:bg-(--nova-bg-secondary) hover:text-(--nova-text-primary)"
        aria-label={`Theme: ${theme}`}
        title={`Theme: ${theme}`}
      >
        {theme === 'dark' ? (
          <Moon className="h-4 w-4" />
        ) : theme === 'light' ? (
          <Sun className="h-4 w-4" />
        ) : (
          <Monitor className="h-4 w-4" />
        )}
      </button>
    </div>
  );
}
