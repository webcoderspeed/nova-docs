'use client';

import Link from 'next/link';
import { Breadcrumb } from '@/components/Breadcrumb';
import { CodeBlock } from '@/components/CodeBlock';
import { OnThisPage } from '@/components/OnThisPage';
import { ArrowRight } from 'lucide-react';

const headings = [
  { id: 'introduction', text: 'Introduction', level: 2 },
  { id: 'open-code', text: 'Open Code', level: 2 },
  { id: 'token-driven', text: 'Token-Driven', level: 2 },
  { id: 'accessible', text: 'Accessible', level: 2 },
  { id: 'distribution', text: 'Distribution', level: 2 },
];

export default function GettingStartedPage() {
  return (
    <div className="flex gap-10">
      <div className="min-w-0 flex-1">
        <Breadcrumb
          items={[
            { label: 'Docs', href: '/docs/getting-started' },
            { label: 'Introduction' },
          ]}
        />

        <h1 className="text-3xl font-bold tracking-tight text-(--nova-text-primary)">
          Introduction
        </h1>
        <p className="mt-2 text-lg text-(--nova-text-secondary) leading-relaxed">
          Nova UI is a set of beautifully-designed, accessible components built from scratch.
          No external component libraries. Open Code. Open Architecture.
        </p>

        <div className="mt-8 space-y-8">
          <section>
            <h2
              id="introduction"
              className="scroll-mt-20 text-xl font-semibold text-(--nova-text-primary) mb-3"
            >
              Introduction
            </h2>
            <p className="text-sm text-(--nova-text-secondary) leading-relaxed">
              Nova UI is Acefone{"'"}s production-grade design system. It provides 15+ React
              components, a comprehensive design token system, and full theming support
              — all built with TypeScript and TailwindCSS v4. It is distributed via Git
              Submodules, so there is no npm registry involved.
            </p>
            <p className="mt-3 text-sm text-(--nova-text-secondary) leading-relaxed">
              This is not a typical component library. You get the actual source code (TSX files),
              which means you can customize, extend, and inspect every part of it. The consuming
              project{"'"}s Tailwind installation compiles the styles.
            </p>
          </section>

          <section>
            <h2
              id="open-code"
              className="scroll-mt-20 text-xl font-semibold text-(--nova-text-primary) mb-3"
            >
              Open Code
            </h2>
            <p className="text-sm text-(--nova-text-secondary) leading-relaxed">
              Nova UI hands you the actual component code. You have full control to customize
              and extend the components to your needs.
            </p>
            <ul className="mt-3 space-y-2 text-sm text-(--nova-text-secondary)">
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-(--nova-text-tertiary)" />
                <span><strong className="text-(--nova-text-primary)">Full Transparency:</strong> You see exactly how each component is built.</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-(--nova-text-tertiary)" />
                <span><strong className="text-(--nova-text-primary)">Easy Customization:</strong> Modify any part to fit your design and functionality requirements.</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-(--nova-text-tertiary)" />
                <span><strong className="text-(--nova-text-primary)">Better Tree-Shaking:</strong> Source-level imports mean only what you use gets compiled.</span>
              </li>
            </ul>
          </section>

          <section>
            <h2
              id="token-driven"
              className="scroll-mt-20 text-xl font-semibold text-(--nova-text-primary) mb-3"
            >
              Token-Driven
            </h2>
            <p className="text-sm text-(--nova-text-secondary) leading-relaxed">
              Every visual property — colors, typography, spacing, shadows, motion — is backed
              by CSS custom properties following the W3C Design Tokens specification.
              Theme switching is instant with zero runtime overhead.
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
            <h2
              id="accessible"
              className="scroll-mt-20 text-xl font-semibold text-(--nova-text-primary) mb-3"
            >
              Accessible
            </h2>
            <p className="text-sm text-(--nova-text-secondary) leading-relaxed">
              All components follow WAI-ARIA Authoring Practices. Keyboard navigation, focus management,
              screen reader support, and WCAG AA contrast ratios are built-in — not bolted on.
            </p>
          </section>

          <section>
            <h2
              id="distribution"
              className="scroll-mt-20 text-xl font-semibold text-(--nova-text-primary) mb-3"
            >
              Distribution
            </h2>
            <p className="text-sm text-(--nova-text-secondary) leading-relaxed">
              Nova UI is distributed via Git Submodules. Version-pinned, no extra infrastructure, no npm publish step.
            </p>
            <CodeBlock
              code={`git submodule add <nova-ui-repo-url> nova-ui
cd nova-ui && git checkout v1.0.0 && cd ..
git add nova-ui .gitmodules
git commit -m "feat: add Nova UI v1.0.0"`}
              language="bash"
              filename="Terminal"
            />
          </section>

          {/* Pagination */}
          <div className="flex items-center justify-between border-t border-(--nova-border-default) pt-6 mt-10">
            <div />
            <Link
              href="/docs/installation"
              className="flex items-center gap-2 text-sm font-medium text-(--nova-text-primary) hover:underline"
            >
              Installation
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>

      <OnThisPage headings={headings} />
    </div>
  );
}
