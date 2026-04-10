'use client';

import { useState } from 'react';
import { NovaAlert } from '@nova-ui';
import { Breadcrumb } from '@/components/Breadcrumb';
import { ComponentPreview } from '@/components/ComponentPreview';
import { PropsTable } from '@/components/PropsTable';
import { OnThisPage } from '@/components/OnThisPage';

const headings = [
  { id: 'basic-usage', text: 'Basic Usage', level: 2 },
  { id: 'variants', text: 'Variants', level: 2 },
  { id: 'with-title', text: 'With Title', level: 2 },
  { id: 'dismissible', text: 'Dismissible', level: 2 },
  { id: 'api-reference', text: 'API Reference', level: 2 },
];

export default function AlertPage() {
  const [visible, setVisible] = useState(true);

  return (
    <div className="flex gap-10">
      <div className="min-w-0 flex-1">
        <Breadcrumb items={[{ label: 'Docs', href: '/docs/getting-started' }, { label: 'Components', href: '/docs/components/button' }, { label: 'Alert' }]} />

        <h1 className="text-3xl font-bold tracking-tight text-(--nova-text-primary)">Alert</h1>
        <p className="mt-2 text-lg text-(--nova-text-secondary) leading-relaxed">Contextual feedback messages for user actions with four variants and optional dismiss action.</p>

        <div className="mt-8 space-y-10">
          <section>
            <h2 id="basic-usage" className="scroll-mt-20 text-xl font-semibold text-(--nova-text-primary) mb-4">Basic Usage</h2>
            <ComponentPreview code={`<NovaAlert>This is an informational alert message.</NovaAlert>`}>
              <NovaAlert>This is an informational alert message.</NovaAlert>
            </ComponentPreview>
          </section>

          <section>
            <h2 id="variants" className="scroll-mt-20 text-xl font-semibold text-(--nova-text-primary) mb-4">Variants</h2>
            <ComponentPreview code={`<NovaAlert variant="info">Informational message</NovaAlert>\n<NovaAlert variant="success">Operation successful</NovaAlert>\n<NovaAlert variant="warning">Please review carefully</NovaAlert>\n<NovaAlert variant="error">Something went wrong</NovaAlert>`}>
              <div className="space-y-3">
                <NovaAlert variant="info">Informational message</NovaAlert>
                <NovaAlert variant="success">Operation successful</NovaAlert>
                <NovaAlert variant="warning">Please review carefully</NovaAlert>
                <NovaAlert variant="error">Something went wrong</NovaAlert>
              </div>
            </ComponentPreview>
          </section>

          <section>
            <h2 id="with-title" className="scroll-mt-20 text-xl font-semibold text-(--nova-text-primary) mb-4">With Title</h2>
            <ComponentPreview code={`<NovaAlert variant="success" title="Account created">\n  Your account has been successfully created. Check your email for verification.\n</NovaAlert>`}>
              <NovaAlert variant="success" title="Account created">
                Your account has been successfully created. Check your email for verification.
              </NovaAlert>
            </ComponentPreview>
          </section>

          <section>
            <h2 id="dismissible" className="scroll-mt-20 text-xl font-semibold text-(--nova-text-primary) mb-4">Dismissible</h2>
            <ComponentPreview code={`const [visible, setVisible] = useState(true);\n\n{visible && (\n  <NovaAlert variant="warning" title="Warning" onClose={() => setVisible(false)}>\n    This alert can be dismissed.\n  </NovaAlert>\n)}`}>
              {visible ? (
                <NovaAlert variant="warning" title="Warning" onClose={() => setVisible(false)}>
                  This alert can be dismissed. Click the X to close.
                </NovaAlert>
              ) : (
                <button type="button" onClick={() => setVisible(true)} className="text-sm text-(--nova-color-primary) underline">Show alert again</button>
              )}
            </ComponentPreview>
          </section>

          <section>
            <h2 id="api-reference" className="scroll-mt-20 text-xl font-semibold text-(--nova-text-primary) mb-4">API Reference</h2>
            <PropsTable data={[
              { name: 'variant', type: "'info' | 'success' | 'warning' | 'error'", default: "'info'" },
              { name: 'title', type: 'string', description: 'Bold title above the message' },
              { name: 'icon', type: 'ReactNode', description: 'Custom icon (overrides default)' },
              { name: 'onClose', type: '() => void', description: 'Shows close button when provided' },
              { name: 'children', type: 'ReactNode', description: 'Alert body content' },
              { name: 'novaTestId', type: 'string', default: "'alert'" },
            ]} />
          </section>
        </div>
      </div>
      <OnThisPage headings={headings} />
    </div>
  );
}
