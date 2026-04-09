'use client';

import Link from 'next/link';
import { useTheme, NovaButton } from '@nova-ui';
import { Breadcrumb } from '@/components/Breadcrumb';
import { CodeBlock } from '@/components/CodeBlock';
import { ComponentPreview } from '@/components/ComponentPreview';
import { OnThisPage } from '@/components/OnThisPage';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const headings = [
  { id: 'live-switcher', text: 'Live Theme Switcher', level: 2 },
  { id: 'setup', text: 'Setup', level: 2 },
  { id: 'use-theme-hook', text: 'useTheme Hook', level: 2 },
  { id: 'how-it-works', text: 'How It Works', level: 2 },
  { id: 'custom-themes', text: 'Custom Brand Themes', level: 2 },
];

export default function ThemingPage() {
  const { theme, resolvedTheme, setTheme } = useTheme();

  return (
    <div className="flex gap-10">
      <div className="min-w-0 flex-1">
        <Breadcrumb
          items={[
            { label: 'Docs', href: '/docs/getting-started' },
            { label: 'Theming' },
          ]}
        />

        <h1 className="text-3xl font-bold tracking-tight text-(--nova-text-primary)">
          Theming
        </h1>
        <p className="mt-2 text-lg text-(--nova-text-secondary) leading-relaxed">
          Nova UI supports light, dark, and system themes via CSS custom properties. No runtime JS overhead.
        </p>

        <div className="mt-8 space-y-10">
          <section>
            <h2 id="live-switcher" className="scroll-mt-20 text-xl font-semibold text-(--nova-text-primary) mb-4">
              Live Theme Switcher
            </h2>
            <ComponentPreview
              code={`const { theme, setTheme } = useTheme();

<NovaButton
  variant={theme === 'light' ? 'primary' : 'secondary'}
  onClick={() => setTheme('light')}
>
  Light
</NovaButton>`}
            >
              <div className="flex flex-col items-center gap-4">
                <div className="flex items-center gap-3">
                  <NovaButton
                    variant={theme === 'light' ? 'primary' : 'secondary'}
                    size="sm"
                    onClick={() => setTheme('light')}
                  >
                    Light
                  </NovaButton>
                  <NovaButton
                    variant={theme === 'dark' ? 'primary' : 'secondary'}
                    size="sm"
                    onClick={() => setTheme('dark')}
                  >
                    Dark
                  </NovaButton>
                  <NovaButton
                    variant={theme === 'system' ? 'primary' : 'secondary'}
                    size="sm"
                    onClick={() => setTheme('system')}
                  >
                    System
                  </NovaButton>
                </div>
                <p className="text-sm text-(--nova-text-tertiary)">
                  Current: {theme} (resolved: {resolvedTheme})
                </p>
              </div>
            </ComponentPreview>
          </section>

          <section>
            <h2 id="setup" className="scroll-mt-20 text-xl font-semibold text-(--nova-text-primary) mb-4">
              Setup
            </h2>
            <p className="mb-3 text-sm text-(--nova-text-secondary)">
              Wrap your app with <code className="rounded bg-(--nova-bg-tertiary) px-1.5 py-0.5 text-xs font-mono text-(--nova-color-primary)">NovaThemeProvider</code>.
            </p>
            <CodeBlock
              code={`import { NovaThemeProvider } from '@nova-ui';

function App() {
  return (
    <NovaThemeProvider defaultTheme="system">
      {/* Your app */}
    </NovaThemeProvider>
  );
}`}
              language="tsx"
              filename="App.tsx"
            />
          </section>

          <section>
            <h2 id="use-theme-hook" className="scroll-mt-20 text-xl font-semibold text-(--nova-text-primary) mb-4">
              useTheme Hook
            </h2>
            <CodeBlock
              code={`import { useTheme } from '@nova-ui';

function ThemeToggle() {
  const { theme, resolvedTheme, setTheme } = useTheme();
  // theme: 'light' | 'dark' | 'system'
  // resolvedTheme: 'light' | 'dark' (actual applied theme)
}`}
              language="tsx"
              filename="ThemeToggle.tsx"
            />
          </section>

          <section>
            <h2 id="how-it-works" className="scroll-mt-20 text-xl font-semibold text-(--nova-text-primary) mb-4">
              How It Works
            </h2>
            <p className="mb-3 text-sm text-(--nova-text-secondary) leading-relaxed">
              Theming uses CSS custom properties on the <code className="rounded bg-(--nova-bg-tertiary) px-1.5 py-0.5 text-xs font-mono">:root</code> element. The <code className="rounded bg-(--nova-bg-tertiary) px-1.5 py-0.5 text-xs font-mono">data-theme</code> attribute switches between token sets — no runtime re-render needed for color changes.
            </p>
            <CodeBlock
              code={`[data-theme="light"] {
  --nova-bg-primary: #ffffff;
  --nova-text-primary: #171717;
  --nova-color-primary: #2563eb;
}

[data-theme="dark"] {
  --nova-bg-primary: #0a0a0a;
  --nova-text-primary: #fafafa;
  --nova-color-primary: #3b82f6;
}`}
              language="css"
              filename="tokens.css"
            />
          </section>

          <section>
            <h2 id="custom-themes" className="scroll-mt-20 text-xl font-semibold text-(--nova-text-primary) mb-4">
              Custom Brand Themes
            </h2>
            <p className="mb-3 text-sm text-(--nova-text-secondary)">
              Beyond light/dark, you can create arbitrary brand themes by overriding any token.
            </p>
            <CodeBlock
              code={`[data-theme="acefone-brand"] {
  --nova-color-primary: #6366f1;
  --nova-color-primary-hover: #4f46e5;
  /* ... override any token */
}`}
              language="css"
              filename="custom-theme.css"
            />
          </section>

          {/* Pagination */}
          <div className="flex items-center justify-between border-t border-(--nova-border-default) pt-6 mt-10">
            <Link
              href="/docs/installation"
              className="flex items-center gap-2 text-sm font-medium text-(--nova-text-primary) hover:underline"
            >
              <ArrowLeft className="h-4 w-4" />
              Installation
            </Link>
            <Link
              href="/docs/tokens"
              className="flex items-center gap-2 text-sm font-medium text-(--nova-text-primary) hover:underline"
            >
              Design Tokens
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>

      <OnThisPage headings={headings} />
    </div>
  );
}
