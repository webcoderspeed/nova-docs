'use client';

import { useState } from 'react';
import { NovaModal, NovaButton } from '@nova-ui';
import { Breadcrumb } from '@/components/Breadcrumb';
import { ComponentPreview } from '@/components/ComponentPreview';
import { PropsTable } from '@/components/PropsTable';
import { OnThisPage } from '@/components/OnThisPage';

const headings = [
  { id: 'basic-usage', text: 'Basic Usage', level: 2 },
  { id: 'custom-width', text: 'Custom Width', level: 2 },
  { id: 'composition', text: 'Composition', level: 2 },
  { id: 'api-reference', text: 'API Reference', level: 2 },
];

function BasicModalDemo() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <NovaButton onClick={() => setOpen(true)}>Open Modal</NovaButton>
      <NovaModal open={open} onClose={() => setOpen(false)}>
        <NovaModal.Overlay />
        <NovaModal.Content>
          <NovaModal.Close />
          <NovaModal.Header>
            <NovaModal.Title>Confirm Action</NovaModal.Title>
          </NovaModal.Header>
          <NovaModal.Body>
            <p className="text-sm text-(--nova-text-secondary)">Are you sure you want to proceed? This action cannot be undone.</p>
          </NovaModal.Body>
          <NovaModal.Footer>
            <NovaButton variant="ghost" onClick={() => setOpen(false)}>Cancel</NovaButton>
            <NovaButton variant="primary" onClick={() => setOpen(false)}>Confirm</NovaButton>
          </NovaModal.Footer>
        </NovaModal.Content>
      </NovaModal>
    </>
  );
}

function WideModalDemo() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <NovaButton variant="secondary" onClick={() => setOpen(true)}>Open Wide Modal</NovaButton>
      <NovaModal open={open} onClose={() => setOpen(false)}>
        <NovaModal.Overlay />
        <NovaModal.Content className="max-w-2xl">
          <NovaModal.Close />
          <NovaModal.Header>
            <NovaModal.Title>Wide Modal</NovaModal.Title>
          </NovaModal.Header>
          <NovaModal.Body>
            <p className="text-sm text-(--nova-text-secondary)">This modal uses a custom <code>max-w-2xl</code> class on <code>NovaModal.Content</code> to override the default width.</p>
          </NovaModal.Body>
          <NovaModal.Footer>
            <NovaButton variant="ghost" onClick={() => setOpen(false)}>Close</NovaButton>
          </NovaModal.Footer>
        </NovaModal.Content>
      </NovaModal>
    </>
  );
}

export default function ModalPage() {
  return (
    <div className="flex gap-10">
      <div className="min-w-0 flex-1">
        <Breadcrumb items={[{ label: 'Docs', href: '/docs/getting-started' }, { label: 'Components', href: '/docs/components/button' }, { label: 'Modal' }]} />

        <h1 className="text-3xl font-bold tracking-tight text-(--nova-text-primary)">Modal</h1>
        <p className="mt-2 text-lg text-(--nova-text-secondary) leading-relaxed">Compound modal dialog with focus trapping, scroll locking, Escape-to-close, and accessible ARIA attributes.</p>

        <div className="mt-8 space-y-10">
          <section>
            <h2 id="basic-usage" className="scroll-mt-20 text-xl font-semibold text-(--nova-text-primary) mb-4">Basic Usage</h2>
            <ComponentPreview code={`const [open, setOpen] = useState(false);\n\n<NovaButton onClick={() => setOpen(true)}>Open Modal</NovaButton>\n\n<NovaModal open={open} onClose={() => setOpen(false)}>\n  <NovaModal.Overlay />\n  <NovaModal.Content>\n    <NovaModal.Close />\n    <NovaModal.Header>\n      <NovaModal.Title>Confirm Action</NovaModal.Title>\n    </NovaModal.Header>\n    <NovaModal.Body>\n      <p>Are you sure you want to proceed?</p>\n    </NovaModal.Body>\n    <NovaModal.Footer>\n      <NovaButton variant="ghost" onClick={() => setOpen(false)}>Cancel</NovaButton>\n      <NovaButton variant="primary" onClick={() => setOpen(false)}>Confirm</NovaButton>\n    </NovaModal.Footer>\n  </NovaModal.Content>\n</NovaModal>`}>
              <BasicModalDemo />
            </ComponentPreview>
          </section>

          <section>
            <h2 id="custom-width" className="scroll-mt-20 text-xl font-semibold text-(--nova-text-primary) mb-4">Custom Width</h2>
            <p className="mb-4 text-sm text-(--nova-text-secondary)">
              Override the default <code>max-w-lg</code> on <code>NovaModal.Content</code> by passing a custom class.
            </p>
            <ComponentPreview code={`<NovaModal open={open} onClose={() => setOpen(false)}>\n  <NovaModal.Overlay />\n  <NovaModal.Content className="max-w-2xl">\n    <NovaModal.Close />\n    <NovaModal.Header>\n      <NovaModal.Title>Wide Modal</NovaModal.Title>\n    </NovaModal.Header>\n    <NovaModal.Body>\n      <p>A wider modal dialog.</p>\n    </NovaModal.Body>\n    <NovaModal.Footer>\n      <NovaButton variant="ghost" onClick={() => setOpen(false)}>Close</NovaButton>\n    </NovaModal.Footer>\n  </NovaModal.Content>\n</NovaModal>`}>
              <WideModalDemo />
            </ComponentPreview>
          </section>

          <section>
            <h2 id="composition" className="scroll-mt-20 text-xl font-semibold text-(--nova-text-primary) mb-4">Composition</h2>
            <p className="text-sm text-(--nova-text-secondary)">
              NovaModal uses a compound component pattern. The root <code>NovaModal</code> manages open/close state and provides context. Compose the dialog with <code>NovaModal.Overlay</code>, <code>NovaModal.Content</code>, <code>NovaModal.Header</code>, <code>NovaModal.Title</code>, <code>NovaModal.Body</code>, <code>NovaModal.Footer</code>, and <code>NovaModal.Close</code>. All sub-components accept standard HTML attributes and <code>className</code> for customization.
            </p>
          </section>

          <section>
            <h2 id="api-reference" className="scroll-mt-20 text-xl font-semibold text-(--nova-text-primary) mb-4">API Reference</h2>
            <p className="mb-3 text-sm font-medium text-(--nova-text-secondary)">NovaModal (root)</p>
            <PropsTable data={[
              { name: 'open', type: 'boolean', description: 'Whether the modal is visible (required)' },
              { name: 'onClose', type: '() => void', description: 'Callback to close the modal (required)' },
              { name: 'novaTestId', type: 'string', default: "'modal'" },
            ]} />

            <p className="mt-6 mb-3 text-sm font-medium text-(--nova-text-secondary)">NovaModal.Content</p>
            <PropsTable data={[
              { name: 'className', type: 'string', description: 'Override default max-w-lg or add custom styles' },
              { name: 'novaTestId', type: 'string' },
            ]} />

            <p className="mt-6 mb-3 text-sm font-medium text-(--nova-text-secondary)">NovaModal.Close</p>
            <PropsTable data={[
              { name: 'children', type: 'ReactNode', description: 'Custom close icon (defaults to an X icon)' },
              { name: 'novaTestId', type: 'string' },
            ]} />

            <p className="mt-6 mb-3 text-sm text-(--nova-text-secondary)">Sub-components <code>NovaModal.Overlay</code>, <code>NovaModal.Header</code>, <code>NovaModal.Title</code>, <code>NovaModal.Body</code>, and <code>NovaModal.Footer</code> accept standard HTML attributes plus <code>novaTestId</code>.</p>
          </section>
        </div>
      </div>
      <OnThisPage headings={headings} />
    </div>
  );
}
