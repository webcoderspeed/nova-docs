'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ThemeToggle } from './ThemeToggle';
import { Search } from 'lucide-react';

const navItems = [
  { label: 'Docs', href: '/docs/getting-started', matchPrefix: '/docs' },
  { label: 'Components', href: '/docs/components/button', matchPrefix: '/docs/components' },
];

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-(--nova-border-default) bg-(--nova-bg-primary)/80 backdrop-blur-xl backdrop-saturate-150 supports-backdrop-filter:bg-(--nova-bg-primary)/60">
      <div className="mx-auto flex h-14 max-w-screen-2xl items-center px-6">
        {/* Logo */}
        <Link href="/" className="mr-8 flex items-center gap-2.5 transition-opacity hover:opacity-80">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-(--nova-text-primary) shadow-sm">
            <span className="text-xs font-bold text-(--nova-text-inverse)">N</span>
          </div>
          <span className="hidden text-sm font-bold tracking-tight text-(--nova-text-primary) sm:block">
            Nova UI
          </span>
        </Link>

        {/* Separator */}
        <div className="mr-6 hidden h-5 w-px bg-(--nova-border-default) sm:block" />

        {/* Nav Links */}
        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => {
            const isActive =
              item.matchPrefix === '/docs/components'
                ? pathname?.startsWith('/docs/components')
                : pathname?.startsWith('/docs') && !pathname?.startsWith('/docs/components');
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
        <button className="mr-3 hidden items-center gap-2.5 rounded-lg border border-(--nova-border-default) bg-(--nova-bg-secondary)/50 px-3.5 py-2 text-sm text-(--nova-text-tertiary) transition-all hover:border-(--nova-border-strong) hover:bg-(--nova-bg-secondary) sm:flex w-60 shadow-sm">
          <Search className="h-3.5 w-3.5" />
          <span className="flex-1 text-left">Search docs...</span>
          <kbd className="rounded-[5px] border border-(--nova-border-default) bg-(--nova-bg-primary) px-1.5 py-0.5 text-[10px] font-medium text-(--nova-text-tertiary) shadow-sm">
            &#8984;K
          </kbd>
        </button>

        {/* Theme Toggle */}
        <ThemeToggle />
      </div>
    </header>
  );
}
