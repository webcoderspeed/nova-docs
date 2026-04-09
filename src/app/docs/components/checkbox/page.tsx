'use client';

import { NovaCheckbox } from '@nova-ui';
import { Breadcrumb } from '@/components/Breadcrumb';
import { ComponentPreview } from '@/components/ComponentPreview';
import { PropsTable } from '@/components/PropsTable';
import { OnThisPage } from '@/components/OnThisPage';

const headings = [
  { id: 'basic-usage', text: 'Basic Usage', level: 2 },
  { id: 'indeterminate-and-disabled', text: 'Indeterminate & Disabled', level: 2 },
  { id: 'api-reference', text: 'API Reference', level: 2 },
];

export default function CheckboxPage() {
  return (
    <div className="flex gap-10">
      <div className="min-w-0 flex-1">
        <Breadcrumb items={[{ label: 'Docs', href: '/docs/getting-started' }, { label: 'Components', href: '/docs/components/button' }, { label: 'Checkbox' }]} />

        <h1 className="text-3xl font-bold tracking-tight text-(--nova-text-primary)">Checkbox</h1>
        <p className="mt-2 text-lg text-(--nova-text-secondary) leading-relaxed">Checkbox input with label, indeterminate state, and disabled support.</p>

        <div className="mt-8 space-y-10">
          <section>
            <h2 id="basic-usage" className="scroll-mt-20 text-xl font-semibold text-(--nova-text-primary) mb-4">Basic Usage</h2>
            <ComponentPreview code={`<NovaCheckbox label="Accept terms and conditions" />\n<NovaCheckbox label="Subscribe to newsletter" defaultChecked />\n<NovaCheckbox label="Remember me" />`}>
              <div className="flex flex-col gap-3">
                <NovaCheckbox label="Accept terms and conditions" />
                <NovaCheckbox label="Subscribe to newsletter" defaultChecked />
                <NovaCheckbox label="Remember me" />
              </div>
            </ComponentPreview>
          </section>

          <section>
            <h2 id="indeterminate-and-disabled" className="scroll-mt-20 text-xl font-semibold text-(--nova-text-primary) mb-4">Indeterminate & Disabled</h2>
            <ComponentPreview code={`<NovaCheckbox label="Select all (indeterminate)" indeterminate />\n<NovaCheckbox label="Disabled unchecked" disabled />\n<NovaCheckbox label="Disabled checked" disabled defaultChecked />`}>
              <div className="flex flex-col gap-3">
                <NovaCheckbox label="Select all (indeterminate)" indeterminate />
                <NovaCheckbox label="Disabled unchecked" disabled />
                <NovaCheckbox label="Disabled checked" disabled defaultChecked />
              </div>
            </ComponentPreview>
          </section>

          <section>
            <h2 id="api-reference" className="scroll-mt-20 text-xl font-semibold text-(--nova-text-primary) mb-4">API Reference</h2>
            <PropsTable data={[
              { name: 'label', type: 'string' },
              { name: 'checked', type: 'boolean' },
              { name: 'defaultChecked', type: 'boolean', default: 'false' },
              { name: 'indeterminate', type: 'boolean', default: 'false' },
              { name: 'disabled', type: 'boolean', default: 'false' },
              { name: 'onChange', type: 'ChangeEventHandler<HTMLInputElement>' },
              { name: 'novaTestId', type: 'string', default: "'checkbox'" },
            ]} />
          </section>
        </div>
      </div>
      <OnThisPage headings={headings} />
    </div>
  );
}
