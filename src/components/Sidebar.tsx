'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navigation = [
  {
    title: 'Getting Started',
    items: [
      { label: 'Introduction', href: '/docs/getting-started' },
      { label: 'Installation', href: '/docs/installation' },
      { label: 'Theming', href: '/docs/theming' },
    ],
  },
  {
    title: 'Foundations',
    items: [{ label: 'Design Tokens', href: '/docs/tokens' }],
  },
  {
    title: 'Components',
    items: [
      { label: 'Avatar', href: '/docs/components/avatar' },
      { label: 'Badge', href: '/docs/components/badge' },
      { label: 'Button', href: '/docs/components/button' },
      { label: 'Card', href: '/docs/components/card' },
      { label: 'Checkbox', href: '/docs/components/checkbox' },
      { label: 'Input', href: '/docs/components/input' },
      { label: 'Modal', href: '/docs/components/modal' },
      { label: 'Radio', href: '/docs/components/radio' },
      { label: 'Spinner', href: '/docs/components/spinner' },
      { label: 'Switch', href: '/docs/components/switch' },
      { label: 'Table', href: '/docs/components/table' },
      { label: 'Tabs', href: '/docs/components/tabs' },
      { label: 'Toast', href: '/docs/components/toast' },
      { label: 'Tooltip', href: '/docs/components/tooltip' },
      { label: 'Typography', href: '/docs/components/typography' },
    ],
  },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed top-14 left-0 hidden h-[calc(100vh-3.5rem)] w-[220px] overflow-y-auto border-r border-(--nova-border-default) bg-(--nova-bg-primary) px-4 py-6 lg:block">
      <nav className="space-y-6">
        {navigation.map((section) => (
          <div key={section.title}>
            <h4 className="mb-1.5 px-2 text-sm font-semibold text-(--nova-text-primary)">
              {section.title}
            </h4>
            <ul className="space-y-0.5">
              {section.items.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={`block rounded-md px-2 py-1.5 text-sm transition-colors ${
                        isActive
                          ? 'bg-(--nova-bg-secondary) font-medium text-(--nova-text-primary)'
                          : 'text-(--nova-text-tertiary) hover:text-(--nova-text-primary) hover:bg-(--nova-bg-secondary)'
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </nav>
    </aside>
  );
}
