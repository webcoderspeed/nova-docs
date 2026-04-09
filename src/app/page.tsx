import Link from 'next/link';
import { Header } from '@/components/Header';

const components = [
  'Avatar', 'Badge', 'Button', 'Card', 'Checkbox', 'Input',
  'Modal', 'Radio', 'Spinner', 'Switch', 'Table', 'Tabs',
  'Toast', 'Tooltip', 'Typography',
];

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col">
      <Header />

      {/* Hero */}
      <section className="flex flex-1 flex-col items-center justify-center px-6 py-20 text-center">
        <Link
          href="/docs/getting-started"
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-(--nova-border-default) bg-(--nova-bg-secondary) px-4 py-1.5 text-sm text-(--nova-text-secondary) transition-colors hover:bg-(--nova-bg-tertiary)"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
          </span>
          Nova UI v1.0.0 is here
          <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </Link>

        <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-(--nova-text-primary) sm:text-5xl lg:text-6xl">
          Build your product with{' '}
          <span className="bg-linear-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Nova UI
          </span>
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-(--nova-text-secondary) leading-relaxed">
          A production-grade design system for Acefone. 15+ accessible components built from scratch
          with React, TypeScript, and TailwindCSS v4. No external component libraries.
          Open Code. Open Architecture.
        </p>

        <div className="mt-10 flex items-center gap-4">
          <Link
            href="/docs/getting-started"
            className="inline-flex items-center justify-center rounded-lg bg-(--nova-text-primary) px-6 py-2.5 text-sm font-medium text-(--nova-text-inverse) transition-opacity hover:opacity-90"
          >
            Get Started
          </Link>
          <Link
            href="/docs/components/button"
            className="inline-flex items-center justify-center rounded-lg border border-(--nova-border-default) bg-(--nova-bg-primary) px-6 py-2.5 text-sm font-medium text-(--nova-text-primary) transition-colors hover:bg-(--nova-bg-secondary)"
          >
            View Components
          </Link>
        </div>

        <div className="mt-6">
          <code className="rounded-lg border border-(--nova-border-default) bg-(--nova-bg-secondary) px-4 py-2 text-sm text-(--nova-text-secondary) font-mono">
            git submodule add &lt;nova-ui-repo&gt; nova-ui
          </code>
        </div>
      </section>

      {/* Component Grid */}
      <section className="border-t border-(--nova-border-default) bg-(--nova-bg-secondary) px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-2 text-center text-2xl font-bold text-(--nova-text-primary)">
            Components
          </h2>
          <p className="mb-10 text-center text-sm text-(--nova-text-tertiary)">
            Here you can find all the components available in the library.
          </p>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
            {components.map((c) => (
              <Link
                key={c}
                href={`/docs/components/${c.toLowerCase()}`}
                className="flex items-center justify-center rounded-lg border border-(--nova-border-default) bg-(--nova-bg-primary) px-4 py-3 text-sm font-medium text-(--nova-text-secondary) transition-all hover:border-(--nova-border-strong) hover:text-(--nova-text-primary) hover:shadow-sm"
              >
                {c}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-(--nova-border-default) px-6 py-6">
        <p className="text-center text-sm text-(--nova-text-tertiary)">
          Built by <span className="font-medium text-(--nova-text-secondary)">Acefone</span>.
          The source code is available on Bitbucket.
        </p>
      </footer>
    </div>
  );
}
