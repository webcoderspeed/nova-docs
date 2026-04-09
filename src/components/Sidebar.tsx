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
    <aside className="fixed top-14 left-0 hidden h-[calc(100vh-3.5rem)] w-[240px] overflow-y-auto border-r border-(--nova-border-default) bg-(--nova-bg-primary) px-4 py-6 lg:block">
      <nav className="space-y-6">
        {navigation.map((section) => (
          <div key={section.title}>
            <h4 className="mb-2 px-3 text-xs font-semibold uppercase tracking-widest text-(--nova-text-tertiary)">
              {section.title}
            </h4>
            <ul className="space-y-0.5">
              {section.items.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={`relative flex items-center rounded-md px-3 py-1.5 text-[13px] transition-all ${
                        isActive
                          ? 'bg-(--nova-bg-secondary) font-semibold text-(--nova-text-primary) shadow-sm'
                          : 'text-(--nova-text-tertiary) hover:text-(--nova-text-primary) hover:bg-(--nova-bg-secondary)/50'
                      }`}
                    >
                      {isActive && (
                        <span className="absolute left-0 top-1/2 h-4 w-0.5 -translate-y-1/2 rounded-full bg-(--nova-color-primary)" />
                      )}
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
