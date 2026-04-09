'use client';

import { NovaInput } from '@nova-ui';
import { Breadcrumb } from '@/components/Breadcrumb';
import { ComponentPreview } from '@/components/ComponentPreview';
import { PropsTable } from '@/components/PropsTable';
import { OnThisPage } from '@/components/OnThisPage';

const headings = [
  { id: 'label-helper-text', text: 'Label & Helper Text', level: 2 },
  { id: 'sizes', text: 'Sizes', level: 2 },
  { id: 'addons', text: 'Addons', level: 2 },
  { id: 'api-reference', text: 'API Reference', level: 2 },
];

export default function InputPage() {
  return (
    <div className="flex gap-10">
      <div className="min-w-0 flex-1">
        <Breadcrumb items={[{ label: 'Docs', href: '/docs/getting-started' }, { label: 'Components', href: '/docs/components/button' }, { label: 'Input' }]} />

        <h1 className="text-3xl font-bold tracking-tight text-(--nova-text-primary)">Input</h1>
        <p className="mt-2 text-lg text-(--nova-text-secondary) leading-relaxed">Text input with label, helper text, error state, sizes, and addon support.</p>

        <div className="mt-8 space-y-10">
          <section>
            <h2 id="label-helper-text" className="scroll-mt-20 text-xl font-semibold text-(--nova-text-primary) mb-4">Label &amp; Helper Text</h2>
            <ComponentPreview code={`<NovaInput label="Email" placeholder="you@example.com" />
<NovaInput label="Username" helperText="Choose a unique username" placeholder="johndoe" />
<NovaInput label="Password" error="Password is required" placeholder="********" />`}>
              <div className="flex flex-col gap-4 max-w-sm">
                <NovaInput label="Email" placeholder="you@example.com" />
                <NovaInput label="Username" helperText="Choose a unique username" placeholder="johndoe" />
                <NovaInput label="Password" error="Password is required" placeholder="********" />
              </div>
            </ComponentPreview>
          </section>

          <section>
            <h2 id="sizes" className="scroll-mt-20 text-xl font-semibold text-(--nova-text-primary) mb-4">Sizes</h2>
            <ComponentPreview code={`<NovaInput inputSize="sm" placeholder="Small" />
<NovaInput inputSize="md" placeholder="Medium" />
<NovaInput inputSize="lg" placeholder="Large" />`}>
              <div className="flex flex-col gap-4 max-w-sm">
                <NovaInput inputSize="sm" placeholder="Small" />
                <NovaInput inputSize="md" placeholder="Medium" />
                <NovaInput inputSize="lg" placeholder="Large" />
              </div>
            </ComponentPreview>
          </section>

          <section>
            <h2 id="addons" className="scroll-mt-20 text-xl font-semibold text-(--nova-text-primary) mb-4">Addons</h2>
            <ComponentPreview code={`<NovaInput leftAddon="https://" placeholder="example.com" />
<NovaInput rightAddon=".com" placeholder="domain" />`}>
              <div className="flex flex-col gap-4 max-w-sm">
                <NovaInput leftAddon="https://" placeholder="example.com" />
                <NovaInput rightAddon=".com" placeholder="domain" />
              </div>
            </ComponentPreview>
          </section>

          <section>
            <h2 id="api-reference" className="scroll-mt-20 text-xl font-semibold text-(--nova-text-primary) mb-4">API Reference</h2>
            <PropsTable data={[
              { name: 'label', type: 'string' },
              { name: 'helperText', type: 'string' },
              { name: 'error', type: 'string' },
              { name: 'inputSize', type: "'sm' | 'md' | 'lg'", default: "'md'" },
              { name: 'leftAddon', type: 'ReactNode' },
              { name: 'rightAddon', type: 'ReactNode' },
              { name: 'disabled', type: 'boolean', default: "'false'" },
              { name: 'novaTestId', type: 'string', default: "'input'" },
            ]} />
          </section>
        </div>
      </div>
      <OnThisPage headings={headings} />
    </div>
  );
}
