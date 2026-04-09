import Link from 'next/link';
import { Header } from '@/components/Header';

const components = [
  { name: 'Avatar', desc: 'Image with fallback initials' },
  { name: 'Badge', desc: 'Status indicators & labels' },
  { name: 'Button', desc: '7 variants, icons, loading' },
  { name: 'Card', desc: 'Compound content container' },
  { name: 'Checkbox', desc: 'Accessible checkbox input' },
  { name: 'Input', desc: 'Text input with addons' },
  { name: 'Modal', desc: 'Dialog with focus trap' },
  { name: 'Radio', desc: 'Single-select groups' },
  { name: 'Spinner', desc: 'Loading indicators' },
  { name: 'Switch', desc: 'Toggle on/off control' },
  { name: 'Table', desc: 'Semantic data tables' },
  { name: 'Tabs', desc: 'Compound tab navigation' },
  { name: 'Toast', desc: 'Notification system' },
  { name: 'Tooltip', desc: 'Hover/focus info popover' },
  { name: 'Typography', desc: 'Heading & Text primitives' },
];

const features = [
  {
    title: 'Open Code',
    desc: 'Full source TSX files. Customize anything. No black boxes.',
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    ),
  },
  {
    title: 'Token-Driven',
    desc: 'CSS custom properties following the W3C Design Tokens spec.',
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
      </svg>
    ),
  },
  {
    title: 'Accessible',
    desc: 'WAI-ARIA patterns, keyboard nav, WCAG AA contrast.',
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    title: 'Themeable',
    desc: 'Light, dark, and custom brand themes. Zero runtime JS.',
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
      </svg>
    ),
  },
];

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col">
      <Header />

      {/* Hero */}
      <section className="nova-hero-gradient relative flex flex-1 flex-col items-center justify-center px-6 py-24 text-center">
        {/* Announcement */}
        <Link
          href="/docs/getting-started"
          className="group mb-8 inline-flex items-center gap-2.5 rounded-full border border-(--nova-border-default) bg-(--nova-bg-primary) px-4 py-1.5 text-sm text-(--nova-text-secondary) shadow-sm transition-all hover:shadow-md hover:border-(--nova-border-strong)"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          Nova UI v1.0.0 is here
          <svg className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </Link>

        {/* Heading */}
        <h1 className="max-w-4xl text-5xl font-extrabold tracking-tight text-(--nova-text-primary) sm:text-6xl lg:text-7xl leading-[1.1]">
          Build your product
          <br />
          with <span className="nova-gradient-text">Nova UI</span>
        </h1>

        <p className="mt-6 max-w-xl text-base text-(--nova-text-secondary) leading-relaxed sm:text-lg">
          A production-grade design system. 15+ accessible components
          built from scratch with React, TypeScript, and TailwindCSS v4.
        </p>

        {/* CTA */}
        <div className="mt-10 flex items-center gap-4">
          <Link
            href="/docs/getting-started"
            className="inline-flex items-center justify-center rounded-lg bg-(--nova-text-primary) px-7 py-3 text-sm font-semibold text-(--nova-text-inverse) shadow-lg transition-all hover:opacity-90 hover:shadow-xl"
          >
            Get Started
          </Link>
          <Link
            href="/docs/components/button"
            className="inline-flex items-center justify-center rounded-lg border border-(--nova-border-default) bg-(--nova-bg-primary) px-7 py-3 text-sm font-semibold text-(--nova-text-primary) shadow-sm transition-all hover:bg-(--nova-bg-secondary) hover:shadow-md"
          >
            View Components
          </Link>
        </div>

        {/* Install command */}
        <div className="mt-8 inline-flex items-center gap-3 rounded-xl border border-(--nova-border-default) bg-(--nova-bg-secondary)/80 px-5 py-2.5 backdrop-blur-sm">
          <span className="text-sm text-(--nova-text-tertiary)">$</span>
          <code className="text-sm font-mono text-(--nova-text-secondary)">
            git submodule add &lt;nova-ui-repo&gt; nova-ui
          </code>
        </div>
      </section>

      {/* Features */}
      <section className="border-t border-(--nova-border-default) px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((f) => (
              <div
                key={f.title}
                className="group rounded-xl border border-(--nova-border-default) bg-(--nova-bg-primary) p-6 transition-all hover:border-(--nova-border-strong) hover:shadow-md"
              >
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-(--nova-bg-secondary) text-(--nova-text-secondary) transition-colors group-hover:bg-(--nova-color-primary) group-hover:text-white">
                  {f.icon}
                </div>
                <h3 className="mb-1.5 text-sm font-semibold text-(--nova-text-primary)">
                  {f.title}
                </h3>
                <p className="text-sm text-(--nova-text-tertiary) leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Component Grid */}
      <section className="border-t border-(--nova-border-default) bg-(--nova-bg-secondary)/50 px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-(--nova-text-primary)">
              Components
            </h2>
            <p className="mt-2 text-sm text-(--nova-text-tertiary)">
              Here you can find all the components available in the library.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {components.map((c) => (
              <Link
                key={c.name}
                href={`/docs/components/${c.name.toLowerCase()}`}
                className="group flex items-center justify-between rounded-xl border border-(--nova-border-default) bg-(--nova-bg-primary) px-5 py-4 transition-all hover:border-(--nova-border-strong) hover:shadow-sm"
              >
                <div>
                  <p className="text-sm font-semibold text-(--nova-text-primary)">{c.name}</p>
                  <p className="mt-0.5 text-xs text-(--nova-text-tertiary)">{c.desc}</p>
                </div>
                <svg className="h-4 w-4 text-(--nova-text-tertiary) transition-transform group-hover:translate-x-0.5 group-hover:text-(--nova-text-secondary)" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-(--nova-border-default) px-6 py-8">
        <div className="mx-auto max-w-5xl flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex h-6 w-6 items-center justify-center rounded bg-(--nova-text-primary)">
              <span className="text-[10px] font-bold text-(--nova-text-inverse)">N</span>
            </div>
            <span className="text-sm text-(--nova-text-tertiary)">Nova UI</span>
          </div>
          <p className="text-sm text-(--nova-text-tertiary)">
            Built by <span className="font-medium text-(--nova-text-secondary)">Acefone</span>
          </p>
        </div>
      </footer>
    </div>
  );
}
