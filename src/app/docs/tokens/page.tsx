'use client';

import Link from 'next/link';
import { Breadcrumb } from '@/components/Breadcrumb';
import { OnThisPage } from '@/components/OnThisPage';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const headings = [
  { id: 'brand-colors', text: 'Brand Colors', level: 2 },
  { id: 'backgrounds', text: 'Backgrounds', level: 2 },
  { id: 'text-colors', text: 'Text Colors', level: 2 },
  { id: 'typography-scale', text: 'Typography Scale', level: 2 },
  { id: 'spacing', text: 'Spacing', level: 2 },
  { id: 'shadows', text: 'Shadows', level: 2 },
  { id: 'border-radius', text: 'Border Radius', level: 2 },
];

const colorTokens = [
  { name: '--nova-color-primary', label: 'Primary' },
  { name: '--nova-color-success', label: 'Success' },
  { name: '--nova-color-warning', label: 'Warning' },
  { name: '--nova-color-error', label: 'Error' },
  { name: '--nova-color-info', label: 'Info' },
];

const bgTokens = [
  { name: '--nova-bg-primary', label: 'Primary' },
  { name: '--nova-bg-secondary', label: 'Secondary' },
  { name: '--nova-bg-tertiary', label: 'Tertiary' },
  { name: '--nova-bg-inverse', label: 'Inverse' },
];

const textTokens = [
  { name: '--nova-text-primary', label: 'Primary' },
  { name: '--nova-text-secondary', label: 'Secondary' },
  { name: '--nova-text-tertiary', label: 'Tertiary' },
  { name: '--nova-text-link', label: 'Link' },
];

const spacingSteps = [1, 2, 3, 4, 5, 6, 8, 10, 12, 16, 20];

export default function TokensPage() {
  return (
    <div className="flex gap-10">
      <div className="min-w-0 flex-1">
        <Breadcrumb
          items={[
            { label: 'Docs', href: '/docs/getting-started' },
            { label: 'Design Tokens' },
          ]}
        />

        <h1 className="text-3xl font-bold tracking-tight text-(--nova-text-primary)">
          Design Tokens
        </h1>
        <p className="mt-2 text-lg text-(--nova-text-secondary) leading-relaxed">
          CSS custom properties that power the entire design system. Theme-aware, consistent, and composable.
        </p>

        <div className="mt-8 space-y-10">
          {/* Brand Colors */}
          <section>
            <h2 id="brand-colors" className="scroll-mt-20 text-xl font-semibold text-(--nova-text-primary) mb-4">
              Brand Colors
            </h2>
            <div className="grid grid-cols-5 gap-4">
              {colorTokens.map((t) => (
                <div key={t.name} className="group">
                  <div
                    className="mb-2 h-20 rounded-lg transition-shadow hover:shadow-md"
                    style={{ backgroundColor: `var(${t.name})` }}
                  />
                  <p className="text-sm font-medium text-(--nova-text-primary)">{t.label}</p>
                  <p className="text-xs text-(--nova-text-tertiary) font-mono">{t.name}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Backgrounds */}
          <section>
            <h2 id="backgrounds" className="scroll-mt-20 text-xl font-semibold text-(--nova-text-primary) mb-4">
              Backgrounds
            </h2>
            <div className="grid grid-cols-4 gap-4">
              {bgTokens.map((t) => (
                <div key={t.name}>
                  <div
                    className="mb-2 h-20 rounded-lg border border-(--nova-border-default)"
                    style={{ backgroundColor: `var(${t.name})` }}
                  />
                  <p className="text-sm font-medium text-(--nova-text-primary)">{t.label}</p>
                  <p className="text-xs text-(--nova-text-tertiary) font-mono">{t.name}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Text Colors */}
          <section>
            <h2 id="text-colors" className="scroll-mt-20 text-xl font-semibold text-(--nova-text-primary) mb-4">
              Text Colors
            </h2>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {textTokens.map((t) => (
                <div
                  key={t.name}
                  className="flex items-center gap-3 rounded-lg border border-(--nova-border-default) p-4"
                >
                  <span className="text-2xl font-bold" style={{ color: `var(${t.name})` }}>
                    Aa
                  </span>
                  <div>
                    <p className="text-sm font-medium text-(--nova-text-primary)">{t.label}</p>
                    <p className="text-xs text-(--nova-text-tertiary) font-mono break-all">{t.name}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Typography Scale */}
          <section>
            <h2 id="typography-scale" className="scroll-mt-20 text-xl font-semibold text-(--nova-text-primary) mb-4">
              Typography Scale (Fluid)
            </h2>
            <div className="rounded-lg border border-(--nova-border-default) overflow-hidden">
              {['4xl', '3xl', '2xl', 'xl', 'lg', 'base', 'sm', 'xs'].map((size, i, arr) => (
                <div
                  key={size}
                  className={`flex items-baseline gap-4 px-4 py-3 ${i < arr.length - 1 ? 'border-b border-(--nova-border-default)' : ''}`}
                >
                  <span className="w-10 shrink-0 text-xs font-mono text-(--nova-text-tertiary)">{size}</span>
                  <span style={{ fontSize: `var(--nova-text-${size})` }} className="text-(--nova-text-primary)">
                    The quick brown fox
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* Spacing */}
          <section>
            <h2 id="spacing" className="scroll-mt-20 text-xl font-semibold text-(--nova-text-primary) mb-4">
              Spacing (4px Grid)
            </h2>
            <div className="rounded-lg border border-(--nova-border-default) overflow-hidden">
              {spacingSteps.map((s, i) => (
                <div
                  key={s}
                  className={`flex items-center gap-4 px-4 py-2.5 ${i < spacingSteps.length - 1 ? 'border-b border-(--nova-border-default)' : ''}`}
                >
                  <span className="w-6 shrink-0 text-right text-xs font-mono text-(--nova-text-tertiary)">{s}</span>
                  <div
                    className="h-3 rounded bg-(--nova-color-primary) opacity-80"
                    style={{ width: `var(--nova-space-${s})` }}
                  />
                  <span className="text-xs text-(--nova-text-tertiary)">{s * 4}px</span>
                </div>
              ))}
            </div>
          </section>

          {/* Shadows */}
          <section>
            <h2 id="shadows" className="scroll-mt-20 text-xl font-semibold text-(--nova-text-primary) mb-4">
              Shadows
            </h2>
            <div className="flex gap-8">
              {['sm', 'md', 'lg'].map((s) => (
                <div
                  key={s}
                  className="flex h-28 w-36 items-center justify-center rounded-lg bg-(--nova-bg-primary) border border-(--nova-border-default)"
                  style={{ boxShadow: `var(--nova-shadow-${s})` }}
                >
                  <span className="text-sm font-medium text-(--nova-text-secondary)">{s}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Border Radius */}
          <section>
            <h2 id="border-radius" className="scroll-mt-20 text-xl font-semibold text-(--nova-text-primary) mb-4">
              Border Radius
            </h2>
            <div className="flex items-end gap-6">
              {['sm', 'md', 'lg', 'xl', '2xl', 'full'].map((r) => (
                <div key={r} className="text-center">
                  <div
                    className="mb-2 h-16 w-16 bg-(--nova-color-primary) opacity-80"
                    style={{ borderRadius: `var(--nova-radius-${r})` }}
                  />
                  <span className="text-xs text-(--nova-text-tertiary) font-mono">{r}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Pagination */}
          <div className="flex items-center justify-between border-t border-(--nova-border-default) pt-6 mt-10">
            <Link
              href="/docs/theming"
              className="flex items-center gap-2 text-sm font-medium text-(--nova-text-primary) hover:underline"
            >
              <ArrowLeft className="h-4 w-4" />
              Theming
            </Link>
            <Link
              href="/docs/components/avatar"
              className="flex items-center gap-2 text-sm font-medium text-(--nova-text-primary) hover:underline"
            >
              Avatar
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>

      <OnThisPage headings={headings} />
    </div>
  );
}
