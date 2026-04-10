'use client';

import Link from 'next/link';
import { useTheme, NovaButton } from '@nova-ui';
import { Breadcrumb } from '@/components/Breadcrumb';
import { CodeBlock } from '@/components/CodeBlock';
import { ComponentPreview } from '@/components/ComponentPreview';
import { OnThisPage } from '@/components/OnThisPage';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const headings = [
  { id: 'live-switcher', text: 'Live Switcher', level: 2 },
  { id: 'brands', text: 'Brands', level: 2 },
  { id: 'setup', text: 'Setup', level: 2 },
  { id: 'use-theme-hook', text: 'useTheme Hook', level: 2 },
  { id: 'how-it-works', text: 'How It Works', level: 2 },
  { id: 'tokens', text: 'Available Tokens', level: 2 },
  { id: 'flash-prevention', text: 'Flash Prevention', level: 2 },
];

function Code({ children }: { children: string }) {
  return (
    <code className="rounded bg-(--nova-bg-tertiary) px-1.5 py-0.5 text-xs font-mono text-(--nova-color-primary)">
      {children}
    </code>
  );
}

export default function ThemingPage() {
  const { theme, resolvedTheme, setTheme, brand, setBrand } = useTheme();

  return (
    <div className="flex gap-10">
      <div className="min-w-0 flex-1">
        <Breadcrumb
          items={[
            { label: 'Docs', href: '/docs/getting-started' },
            { label: 'Theming' },
          ]}
        />

        <h1 className="text-3xl font-bold tracking-tight text-(--nova-text-primary)">Theming</h1>
        <p className="mt-2 text-lg text-(--nova-text-secondary) leading-relaxed">
          Nova UI supports two brands — <strong>Acefone</strong> and <strong>Smartflo</strong> —
          each with light and dark modes. Themes are driven purely by CSS custom properties; no
          runtime re-render is needed for color changes.
        </p>

        <div className="mt-8 space-y-10">

          {/* Live Switcher */}
          <section>
            <h2 id="live-switcher" className="scroll-mt-20 text-xl font-semibold text-(--nova-text-primary) mb-4">
              Live Switcher
            </h2>
            <p className="mb-3 text-sm text-(--nova-text-secondary)">
              Try switching the brand and mode. The entire page re-themes instantly.
            </p>
            <ComponentPreview
              code={`const { theme, setTheme, brand, setBrand } = useTheme();`}
            >
              <div className="flex flex-col items-center gap-5">
                <div className="flex flex-col items-center gap-3">
                  <p className="text-xs font-medium uppercase tracking-wider text-(--nova-text-tertiary)">Brand</p>
                  <div className="flex items-center gap-2">
                    <NovaButton
                      variant={brand === 'acefone' ? 'primary' : 'secondary'}
                      size="sm"
                      onClick={() => setBrand('acefone')}
                    >
                      Acefone
                    </NovaButton>
                    <NovaButton
                      variant={brand === 'smartflo' ? 'primary' : 'secondary'}
                      size="sm"
                      onClick={() => setBrand('smartflo')}
                    >
                      Smartflo
                    </NovaButton>
                  </div>
                </div>

                <div className="flex flex-col items-center gap-3">
                  <p className="text-xs font-medium uppercase tracking-wider text-(--nova-text-tertiary)">Mode</p>
                  <div className="flex items-center gap-2">
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
                </div>

                <p className="text-sm text-(--nova-text-tertiary)">
                  Active: <strong className="text-(--nova-text-primary)">{brand}-{resolvedTheme}</strong>
                  {' '}— applied as <Code>{`html.${brand}-${resolvedTheme}`}</Code>
                </p>
              </div>
            </ComponentPreview>
          </section>

          {/* Brands */}
          <section>
            <h2 id="brands" className="scroll-mt-20 text-xl font-semibold text-(--nova-text-primary) mb-4">
              Brands
            </h2>
            <p className="mb-4 text-sm text-(--nova-text-secondary) leading-relaxed">
              Four theme classes are available. Apply one to the <Code>{'<html>'}</Code> element:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              {[
                { cls: 'acefone-light', primary: '#2837c3', bg: '#f1f6fd', label: 'Acefone Light' },
                { cls: 'acefone-dark', primary: '#4458d8', bg: '#040c24', label: 'Acefone Dark' },
                { cls: 'smartflo-light', primary: '#f46c23', bg: '#fef7f1', label: 'Smartflo Light' },
                { cls: 'smartflo-dark', primary: '#f46c23', bg: '#21130c', label: 'Smartflo Dark' },
              ].map((t) => (
                <div
                  key={t.cls}
                  className="flex items-center gap-3 rounded-lg border border-(--nova-border-default) p-4"
                  style={{ background: t.bg }}
                >
                  <span
                    className="h-8 w-8 shrink-0 rounded-full"
                    style={{ background: t.primary }}
                  />
                  <div>
                    <p className="text-sm font-semibold" style={{ color: t.primary }}>{t.label}</p>
                    <p className="text-xs font-mono" style={{ color: t.primary, opacity: 0.7 }}>
                      html.{t.cls}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <CodeBlock
              code={`<!-- Apply by adding a class to <html> -->
<html class="acefone-light"> ... </html>
<html class="acefone-dark"> ... </html>
<html class="smartflo-light"> ... </html>
<html class="smartflo-dark"> ... </html>`}
              language="html"
            />
          </section>

          {/* Setup */}
          <section>
            <h2 id="setup" className="scroll-mt-20 text-xl font-semibold text-(--nova-text-primary) mb-4">
              Setup
            </h2>
            <p className="mb-3 text-sm text-(--nova-text-secondary)">
              Wrap your app with <Code>NovaThemeProvider</Code>. Pass <Code>defaultBrand</Code> to
              set the initial brand.
            </p>
            <CodeBlock
              code={`import { NovaThemeProvider } from '@nova-ui';

function App() {
  return (
    <NovaThemeProvider defaultTheme="system" defaultBrand="acefone">
      {/* Your app */}
    </NovaThemeProvider>
  );
}`}
              language="tsx"
              filename="App.tsx"
            />
          </section>

          {/* useTheme Hook */}
          <section>
            <h2 id="use-theme-hook" className="scroll-mt-20 text-xl font-semibold text-(--nova-text-primary) mb-4">
              useTheme Hook
            </h2>
            <CodeBlock
              code={`import { useTheme } from '@nova-ui';

function ThemeToggle() {
  const {
    theme,        // 'light' | 'dark' | 'system'
    resolvedTheme, // 'light' | 'dark' — actual applied value
    setTheme,
    brand,        // 'acefone' | 'smartflo'
    setBrand,
  } = useTheme();
}`}
              language="tsx"
              filename="ThemeToggle.tsx"
            />
          </section>

          {/* How It Works */}
          <section>
            <h2 id="how-it-works" className="scroll-mt-20 text-xl font-semibold text-(--nova-text-primary) mb-4">
              How It Works
            </h2>
            <p className="mb-3 text-sm text-(--nova-text-secondary) leading-relaxed">
              <Code>NovaThemeProvider</Code> adds a class like <Code>acefone-light</Code> to{' '}
              <Code>{'<html>'}</Code>. The tokens.css file defines all <Code>--nova-*</Code> tokens
              under each class. Switching brands or modes is a single <Code>classList</Code> swap —
              no JS re-render, instant.
            </p>
            <CodeBlock
              code={`/* tokens.css — each brand+mode combo maps to --nova-* tokens */

html.acefone-light {
  --nova-color-primary: #2837c3;
  --nova-bg-primary: #ffffff;
  --nova-text-primary: #040c2d;
  /* ... */
}

html.smartflo-light {
  --nova-color-primary: #f46c23;
  --nova-bg-primary: #ffffff;
  --nova-text-primary: #2e0d05;
  /* ... */
}

html.acefone-dark { /* ... */ }
html.smartflo-dark { /* ... */ }`}
              language="css"
              filename="tokens.css"
            />
          </section>

          {/* Available Tokens */}
          <section>
            <h2 id="tokens" className="scroll-mt-20 text-xl font-semibold text-(--nova-text-primary) mb-4">
              Available Tokens
            </h2>
            <p className="mb-3 text-sm text-(--nova-text-secondary)">
              All components consume only <Code>--nova-*</Code> tokens. Override any token on a
              parent element to customise a section without touching global styles.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b border-(--nova-border-default)">
                    <th className="py-2 pr-4 text-left font-semibold text-(--nova-text-primary)">Token</th>
                    <th className="py-2 pr-4 text-left font-semibold text-(--nova-text-primary)">Purpose</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-(--nova-border-default)">
                  {[
                    ['--nova-color-primary', 'Brand primary color'],
                    ['--nova-color-primary-hover', 'Primary hover state'],
                    ['--nova-color-primary-active', 'Primary active/pressed state'],
                    ['--nova-color-success / error / warning / info', 'Semantic status colors'],
                    ['--nova-bg-primary / secondary / tertiary', 'Background layers'],
                    ['--nova-text-primary / secondary / tertiary / link', 'Text colors'],
                    ['--nova-border-default / strong / focus', 'Border colors'],
                    ['--nova-shadow-sm / md / lg', 'Elevation shadows'],
                    ['--nova-radius-sm / md / lg / xl / 2xl / full', 'Border radius scale'],
                    ['--nova-space-{0…24}', 'Spacing scale (4px grid)'],
                    ['--nova-duration-fast / normal / slow', 'Animation durations'],
                    ['--nova-sidebar-bg / text / border', 'Sidebar-specific colors'],
                    ['--nova-color-call-answered / rejected', 'Call status colors'],
                  ].map(([token, desc]) => (
                    <tr key={token}>
                      <td className="py-2 pr-4 font-mono text-xs text-(--nova-color-primary)">{token}</td>
                      <td className="py-2 text-(--nova-text-secondary)">{desc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Flash Prevention */}
          <section>
            <h2 id="flash-prevention" className="scroll-mt-20 text-xl font-semibold text-(--nova-text-primary) mb-4">
              Flash Prevention
            </h2>
            <p className="mb-3 text-sm text-(--nova-text-secondary)">
              Add an inline script before your app renders to restore the saved brand and theme
              without a flash of the wrong colors:
            </p>
            <CodeBlock
              code={`// In your root layout <head> — runs before first paint
<script dangerouslySetInnerHTML={{ __html: \`(function(){
  var t = localStorage.getItem('nova-ui-theme') || 'system';
  var b = localStorage.getItem('nova-ui-brand') || 'acefone';
  var r = t === 'system'
    ? window.matchMedia('(prefers-color-scheme:dark)').matches ? 'dark' : 'light'
    : t;
  document.documentElement.setAttribute('data-theme', r);
  document.documentElement.classList.add(b + '-' + r);
})()\` }} />`}
              language="tsx"
              filename="layout.tsx"
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
