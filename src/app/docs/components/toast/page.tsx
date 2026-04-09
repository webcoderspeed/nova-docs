'use client';

import { NovaToastProvider, useToast, NovaButton } from '@nova-ui';
import { Breadcrumb } from '@/components/Breadcrumb';
import { ComponentPreview } from '@/components/ComponentPreview';
import { PropsTable } from '@/components/PropsTable';
import { OnThisPage } from '@/components/OnThisPage';

const headings = [
  { id: 'basic-usage', text: 'Basic Usage', level: 2 },
  { id: 'variants', text: 'Variants', level: 2 },
  { id: 'api-reference', text: 'API Reference', level: 2 },
];

function ToastBasicDemo() {
  const { toast } = useToast();
  return (
    <NovaButton onClick={() => toast('This is an informational toast.')}>
      Show Toast
    </NovaButton>
  );
}

function ToastVariantsDemo() {
  const { toast } = useToast();
  return (
    <div className="flex flex-wrap gap-3">
      <NovaButton variant="primary" onClick={() => toast('Operation completed successfully.', { variant: 'success' })}>
        Success
      </NovaButton>
      <NovaButton variant="danger" onClick={() => toast('Something went wrong.', { variant: 'error' })}>
        Error
      </NovaButton>
      <NovaButton variant="secondary" onClick={() => toast('Please review your input.', { variant: 'warning' })}>
        Warning
      </NovaButton>
      <NovaButton variant="ghost" onClick={() => toast('Here is some information.', { variant: 'info' })}>
        Info
      </NovaButton>
    </div>
  );
}

export default function ToastPage() {
  return (
    <NovaToastProvider>
      <div className="flex gap-10">
        <div className="min-w-0 flex-1">
          <Breadcrumb items={[{ label: 'Docs', href: '/docs/getting-started' }, { label: 'Components', href: '/docs/components/button' }, { label: 'Toast' }]} />

          <h1 className="text-3xl font-bold tracking-tight text-(--nova-text-primary)">Toast</h1>
          <p className="mt-2 text-lg text-(--nova-text-secondary) leading-relaxed">Non-intrusive notification toasts with variant styling, auto-dismiss, and a convenient <code>useToast</code> hook.</p>

          <div className="mt-8 space-y-10">
            <section>
              <h2 id="basic-usage" className="scroll-mt-20 text-xl font-semibold text-(--nova-text-primary) mb-4">Basic Usage</h2>
              <p className="mb-4 text-sm text-(--nova-text-secondary)">
                Wrap your app with <code>NovaToastProvider</code>, then call <code>useToast()</code> anywhere to trigger notifications.
              </p>
              <ComponentPreview code={`import { NovaToastProvider, useToast } from '@nova-ui';\n\n// In your layout or app root:\n<NovaToastProvider>\n  <App />\n</NovaToastProvider>\n\n// In any child component:\nfunction MyComponent() {\n  const { toast } = useToast();\n  return (\n    <button onClick={() => toast('Hello!')}>\n      Show Toast\n    </button>\n  );\n}`}>
                <ToastBasicDemo />
              </ComponentPreview>
            </section>

            <section>
              <h2 id="variants" className="scroll-mt-20 text-xl font-semibold text-(--nova-text-primary) mb-4">Variants</h2>
              <ComponentPreview code={`const { toast } = useToast();\n\ntoast('Success!', { variant: 'success' });\ntoast('Error!', { variant: 'error' });\ntoast('Warning!', { variant: 'warning' });\ntoast('Info!', { variant: 'info' });`}>
                <ToastVariantsDemo />
              </ComponentPreview>
            </section>

            <section>
              <h2 id="api-reference" className="scroll-mt-20 text-xl font-semibold text-(--nova-text-primary) mb-4">API Reference</h2>
              <p className="mb-3 text-sm font-medium text-(--nova-text-secondary)">NovaToastProvider</p>
              <PropsTable data={[
                { name: 'maxToasts', type: 'number', default: '5', description: 'Maximum number of visible toasts at once' },
                { name: 'novaTestId', type: 'string', default: "'toast'" },
              ]} />

              <p className="mt-6 mb-3 text-sm font-medium text-(--nova-text-secondary)">useToast() return value</p>
              <PropsTable data={[
                { name: 'toast', type: "(message: string, options?: { variant?: 'success' | 'error' | 'warning' | 'info'; duration?: number }) => void", description: 'Trigger a toast notification' },
              ]} />

              <p className="mt-6 mb-3 text-sm font-medium text-(--nova-text-secondary)">Toast options</p>
              <PropsTable data={[
                { name: 'variant', type: "'success' | 'error' | 'warning' | 'info'", default: "'info'", description: 'Visual style of the toast' },
                { name: 'duration', type: 'number', default: '4000', description: 'Auto-dismiss delay in milliseconds' },
              ]} />
            </section>
          </div>
        </div>
        <OnThisPage headings={headings} />
      </div>
    </NovaToastProvider>
  );
}
