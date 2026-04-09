'use client';

import Link from 'next/link';
import { Breadcrumb } from '@/components/Breadcrumb';
import { CodeBlock } from '@/components/CodeBlock';
import { OnThisPage } from '@/components/OnThisPage';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const headings = [
  { id: 'add-submodule', text: '1. Add the submodule', level: 2 },
  { id: 'install-deps', text: '2. Install peer dependencies', level: 2 },
  { id: 'configure-ts', text: '3. Configure TypeScript', level: 2 },
  { id: 'configure-tailwind', text: '4. Configure Tailwind CSS', level: 2 },
  { id: 'configure-vite', text: '5. Configure Vite (or Next.js)', level: 2 },
  { id: 'use-components', text: '6. Use components', level: 2 },
];

export default function InstallationPage() {
  return (
    <div className="flex gap-10">
      <div className="min-w-0 flex-1">
        <Breadcrumb
          items={[
            { label: 'Docs', href: '/docs/getting-started' },
            { label: 'Installation' },
          ]}
        />

        <h1 className="text-3xl font-bold tracking-tight text-(--nova-text-primary)">
          Installation
        </h1>
        <p className="mt-2 text-lg text-(--nova-text-secondary) leading-relaxed">
          How to install dependencies and structure your app.
        </p>

        <div className="mt-8 space-y-8">
          <section>
            <h2
              id="add-submodule"
              className="scroll-mt-20 text-xl font-semibold text-(--nova-text-primary) mb-3"
            >
              1. Add the submodule
            </h2>
            <p className="mb-3 text-sm text-(--nova-text-secondary)">
              Add Nova UI as a git submodule pinned to a release tag.
            </p>
            <CodeBlock
              code={`git submodule add git@bitbucket.org:your-workspace/nova-ui.git nova-ui
cd nova-ui && git checkout v1.0.0 && cd ..
git add nova-ui .gitmodules
git commit -m "feat: add Nova UI v1.0.0"`}
              language="bash"
              filename="Terminal"
            />
          </section>

          <section>
            <h2
              id="install-deps"
              className="scroll-mt-20 text-xl font-semibold text-(--nova-text-primary) mb-3"
            >
              2. Install peer dependencies
            </h2>
            <p className="mb-3 text-sm text-(--nova-text-secondary)">
              Nova UI requires <code className="rounded bg-(--nova-bg-tertiary) px-1.5 py-0.5 text-xs font-mono text-(--nova-color-primary)">clsx</code> and <code className="rounded bg-(--nova-bg-tertiary) px-1.5 py-0.5 text-xs font-mono text-(--nova-color-primary)">tailwind-merge</code> as utility dependencies.
            </p>
            <CodeBlock code="npm install clsx tailwind-merge" language="bash" filename="Terminal" />
          </section>

          <section>
            <h2
              id="configure-ts"
              className="scroll-mt-20 text-xl font-semibold text-(--nova-text-primary) mb-3"
            >
              3. Configure TypeScript
            </h2>
            <p className="mb-3 text-sm text-(--nova-text-secondary)">
              Add a path alias so you can import from <code className="rounded bg-(--nova-bg-tertiary) px-1.5 py-0.5 text-xs font-mono text-(--nova-color-primary)">@nova-ui</code>.
            </p>
            <CodeBlock
              code={`{
  "compilerOptions": {
    "paths": {
      "@nova-ui": ["./nova-ui/src"],
      "@nova-ui/*": ["./nova-ui/src/*"]
    }
  }
}`}
              language="json"
              filename="tsconfig.json"
            />
          </section>

          <section>
            <h2
              id="configure-tailwind"
              className="scroll-mt-20 text-xl font-semibold text-(--nova-text-primary) mb-3"
            >
              4. Configure Tailwind CSS
            </h2>
            <p className="mb-3 text-sm text-(--nova-text-secondary)">
              Import Nova UI{"'"}s design tokens and tell Tailwind to scan the submodule for classes.
            </p>
            <CodeBlock
              code={`@import "tailwindcss";

/* Scan Nova UI submodule for Tailwind classes */
@source "../nova-ui/src/**/*.{ts,tsx}";

/* Import Nova UI design tokens & base styles */
@import "../nova-ui/src/css/tokens.css";
@import "../nova-ui/src/css/typography.css";
@import "../nova-ui/src/css/animations.css";`}
              language="css"
              filename="globals.css"
            />
          </section>

          <section>
            <h2
              id="configure-vite"
              className="scroll-mt-20 text-xl font-semibold text-(--nova-text-primary) mb-3"
            >
              5. Configure Vite (or Next.js)
            </h2>
            <p className="mb-3 text-sm text-(--nova-text-secondary)">
              Add a resolve alias so Vite can find the submodule.
            </p>
            <CodeBlock
              code={`import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  resolve: {
    alias: {
      '@nova-ui': path.resolve(__dirname, './nova-ui/src'),
    },
  },
});`}
              language="ts"
              filename="vite.config.ts"
            />
            <p className="mt-4 mb-3 text-sm text-(--nova-text-secondary)">
              For <strong>Next.js</strong>, configure <code className="rounded bg-(--nova-bg-tertiary) px-1.5 py-0.5 text-xs font-mono text-(--nova-color-primary)">next.config.ts</code> instead:
            </p>
            <CodeBlock
              code={`import path from 'node:path';
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  transpilePackages: ['nova-ui'],
  webpack: (config) => {
    config.resolve.alias['@nova-ui'] = path.resolve(__dirname, './nova-ui/src');
    return config;
  },
};

export default nextConfig;`}
              language="ts"
              filename="next.config.ts"
            />
          </section>

          <section>
            <h2
              id="use-components"
              className="scroll-mt-20 text-xl font-semibold text-(--nova-text-primary) mb-3"
            >
              6. Use components
            </h2>
            <CodeBlock
              code={`import { NovaThemeProvider, NovaButton, NovaHeading } from '@nova-ui';

function App() {
  return (
    <NovaThemeProvider defaultTheme="system">
      <NovaHeading level={1}>Hello Nova UI</NovaHeading>
      <NovaButton variant="primary">Get Started</NovaButton>
    </NovaThemeProvider>
  );
}`}
              language="tsx"
              filename="App.tsx"
            />
          </section>

          {/* Pagination */}
          <div className="flex items-center justify-between border-t border-(--nova-border-default) pt-6 mt-10">
            <Link
              href="/docs/getting-started"
              className="flex items-center gap-2 text-sm font-medium text-(--nova-text-primary) hover:underline"
            >
              <ArrowLeft className="h-4 w-4" />
              Introduction
            </Link>
            <Link
              href="/docs/theming"
              className="flex items-center gap-2 text-sm font-medium text-(--nova-text-primary) hover:underline"
            >
              Theming
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>

      <OnThisPage headings={headings} />
    </div>
  );
}
