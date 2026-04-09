'use client';

import { NovaSwitch } from '@nova-ui';
import { Breadcrumb } from '@/components/Breadcrumb';
import { ComponentPreview } from '@/components/ComponentPreview';
import { PropsTable } from '@/components/PropsTable';
import { OnThisPage } from '@/components/OnThisPage';

const headings = [
  { id: 'basic-usage', text: 'Basic Usage', level: 2 },
  { id: 'sizes', text: 'Sizes', level: 2 },
  { id: 'api-reference', text: 'API Reference', level: 2 },
];

export default function SwitchPage() {
  return (
    <div className="flex gap-10">
      <div className="min-w-0 flex-1">
        <Breadcrumb items={[{ label: 'Docs', href: '/docs/getting-started' }, { label: 'Components', href: '/docs/components/button' }, { label: 'Switch' }]} />

        <h1 className="text-3xl font-bold tracking-tight text-(--nova-text-primary)">Switch</h1>
        <p className="mt-2 text-lg text-(--nova-text-secondary) leading-relaxed">Toggle switch for binary on/off settings with label, sizes, and disabled state.</p>

        <div className="mt-8 space-y-10">
          <section>
            <h2 id="basic-usage" className="scroll-mt-20 text-xl font-semibold text-(--nova-text-primary) mb-4">Basic Usage</h2>
            <ComponentPreview code={`<NovaSwitch label="Notifications" />
<NovaSwitch label="Dark Mode" defaultChecked />
<NovaSwitch label="Maintenance" disabled />`}>
              <div className="flex flex-col gap-4">
                <NovaSwitch label="Notifications" />
                <NovaSwitch label="Dark Mode" defaultChecked />
                <NovaSwitch label="Maintenance" disabled />
              </div>
            </ComponentPreview>
          </section>

          <section>
            <h2 id="sizes" className="scroll-mt-20 text-xl font-semibold text-(--nova-text-primary) mb-4">Sizes</h2>
            <ComponentPreview code={`<NovaSwitch switchSize="sm" label="Small" />
<NovaSwitch switchSize="md" label="Medium" />
<NovaSwitch switchSize="lg" label="Large" />`}>
              <div className="flex flex-col gap-4">
                <NovaSwitch switchSize="sm" label="Small" />
                <NovaSwitch switchSize="md" label="Medium" />
                <NovaSwitch switchSize="lg" label="Large" />
              </div>
            </ComponentPreview>
          </section>

          <section>
            <h2 id="api-reference" className="scroll-mt-20 text-xl font-semibold text-(--nova-text-primary) mb-4">API Reference</h2>
            <PropsTable data={[
              { name: 'label', type: 'string' },
              { name: 'checked', type: 'boolean' },
              { name: 'defaultChecked', type: 'boolean', default: "'false'" },
              { name: 'switchSize', type: "'sm' | 'md' | 'lg'", default: "'md'" },
              { name: 'disabled', type: 'boolean', default: "'false'" },
              { name: 'onChange', type: 'ChangeEventHandler<HTMLInputElement>' },
              { name: 'novaTestId', type: 'string', default: "'switch'" },
            ]} />
          </section>
        </div>
      </div>
      <OnThisPage headings={headings} />
    </div>
  );
}
