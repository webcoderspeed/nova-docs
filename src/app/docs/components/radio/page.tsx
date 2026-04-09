'use client';

import { NovaRadioGroup, NovaRadio } from '@nova-ui';
import { Breadcrumb } from '@/components/Breadcrumb';
import { ComponentPreview } from '@/components/ComponentPreview';
import { PropsTable } from '@/components/PropsTable';
import { OnThisPage } from '@/components/OnThisPage';

const headings = [
  { id: 'basic-usage', text: 'Basic Usage', level: 2 },
  { id: 'disabled-state', text: 'Disabled State', level: 2 },
  { id: 'radiogroup-api', text: 'NovaRadioGroup API', level: 2 },
  { id: 'radio-api', text: 'NovaRadio API', level: 2 },
];

export default function RadioPage() {
  return (
    <div className="flex gap-10">
      <div className="min-w-0 flex-1">
        <Breadcrumb items={[{ label: 'Docs', href: '/docs/getting-started' }, { label: 'Components', href: '/docs/components/button' }, { label: 'Radio' }]} />

        <h1 className="text-3xl font-bold tracking-tight text-(--nova-text-primary)">Radio</h1>
        <p className="mt-2 text-lg text-(--nova-text-secondary) leading-relaxed">Radio group for selecting a single option from a set of choices.</p>

        <div className="mt-8 space-y-10">
          <section>
            <h2 id="basic-usage" className="scroll-mt-20 text-xl font-semibold text-(--nova-text-primary) mb-4">Basic Usage</h2>
            <ComponentPreview code={`<NovaRadioGroup name="plan" value="pro">
  <NovaRadio radioValue="starter" label="Starter" />
  <NovaRadio radioValue="pro" label="Pro" />
  <NovaRadio radioValue="enterprise" label="Enterprise" />
</NovaRadioGroup>`}>
              <NovaRadioGroup name="plan" value="pro">
                <NovaRadio radioValue="starter" label="Starter" />
                <NovaRadio radioValue="pro" label="Pro" />
                <NovaRadio radioValue="enterprise" label="Enterprise" />
              </NovaRadioGroup>
            </ComponentPreview>
          </section>

          <section>
            <h2 id="disabled-state" className="scroll-mt-20 text-xl font-semibold text-(--nova-text-primary) mb-4">Disabled State</h2>
            <ComponentPreview code={`<NovaRadioGroup name="plan-disabled" value="starter">
  <NovaRadio radioValue="starter" label="Starter" />
  <NovaRadio radioValue="pro" label="Pro" disabled />
  <NovaRadio radioValue="enterprise" label="Enterprise" />
</NovaRadioGroup>`}>
              <NovaRadioGroup name="plan-disabled" value="starter">
                <NovaRadio radioValue="starter" label="Starter" />
                <NovaRadio radioValue="pro" label="Pro" disabled />
                <NovaRadio radioValue="enterprise" label="Enterprise" />
              </NovaRadioGroup>
            </ComponentPreview>
          </section>

          <section>
            <h2 id="radiogroup-api" className="scroll-mt-20 text-xl font-semibold text-(--nova-text-primary) mb-4">NovaRadioGroup API</h2>
            <PropsTable data={[
              { name: 'name', type: 'string', description: 'Form field name (required)' },
              { name: 'value', type: 'string', description: 'Currently selected value' },
              { name: 'onChange', type: '(value: string) => void' },
              { name: 'disabled', type: 'boolean', description: 'Disable all radios in the group' },
              { name: 'novaTestId', type: 'string', default: "'radio-group'" },
            ]} />
          </section>

          <section>
            <h2 id="radio-api" className="scroll-mt-20 text-xl font-semibold text-(--nova-text-primary) mb-4">NovaRadio API</h2>
            <PropsTable data={[
              { name: 'radioValue', type: 'string', description: 'Value for this radio option (required)' },
              { name: 'label', type: 'string' },
              { name: 'disabled', type: 'boolean', default: "'false'" },
              { name: 'novaTestId', type: 'string', default: "'radio'" },
            ]} />
          </section>
        </div>
      </div>
      <OnThisPage headings={headings} />
    </div>
  );
}
