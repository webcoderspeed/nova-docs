'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ThemeToggle } from './ThemeToggle';
import { Search } from 'lucide-react';

const navItems = [
  { label: 'Docs', href: '/docs/getting-started' },
  { label: 'Components', href: '/docs/components/button' },
];

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-(--nova-border-default) bg-(--nova-bg-primary)/80 backdrop-blur-lg supports-[backdrop-filter]:bg-(--nova-bg-primary)/60">
      <div className="flex h-14 items-center px-6">
        {/* Logo */}
        <Link href="/" className="mr-6 flex items-center gap-2.5">
          <div className="flex h-7 w-7 items-center justify-center rounded-md bg-(--nova-text-primary)">
            <span className="text-xs font-bold text-(--nova-text-inverse)">N</span>
          </div>
          <span className="text-sm font-bold tracking-tight text-(--nova-text-primary)">
            Nova UI
          </span>
        </Link>

        {/* Nav Links */}
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => {
            const isActive =
              item.href === '/docs/getting-started'
                ? pathname?.startsWith('/docs') && !pathname?.startsWith('/docs/components')
                : pathname?.startsWith('/docs/components');
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-md px-3 py-1.5 text-sm transition-colors ${
                  isActive
                    ? 'text-(--nova-text-primary) font-medium'
                    : 'text-(--nova-text-tertiary) hover:text-(--nova-text-primary)'
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex-1" />

        {/* Search */}
        <button className="mr-2 hidden sm:flex items-center gap-2 rounded-lg border border-(--nova-border-default) bg-(--nova-bg-secondary) px-3 py-1.5 text-sm text-(--nova-text-tertiary) transition-colors hover:bg-(--nova-bg-tertiary) hover:text-(--nova-text-secondary) w-56">
          <Search className="h-3.5 w-3.5" />
          <span>Search docs...</span>
          <kbd className="ml-auto rounded border border-(--nova-border-default) bg-(--nova-bg-primary) px-1.5 py-0.5 text-[10px] font-medium text-(--nova-text-tertiary)">
            &#8984;K
          </kbd>
        </button>

        {/* Theme Toggle */}
        <ThemeToggle />
      </div>
    </header>
  );
}
