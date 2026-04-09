'use client';

import { useState } from 'react';
import { NovaSelect } from '@nova-ui';
import { Breadcrumb } from '@/components/Breadcrumb';
import { ComponentPreview } from '@/components/ComponentPreview';
import { PropsTable } from '@/components/PropsTable';
import { OnThisPage } from '@/components/OnThisPage';

const headings = [
  { id: 'basic-usage', text: 'Basic Usage', level: 2 },
  { id: 'sizes', text: 'Sizes', level: 2 },
  { id: 'with-label-and-helper', text: 'With Label & Helper Text', level: 2 },
  { id: 'error-state', text: 'Error State', level: 2 },
  { id: 'disabled', text: 'Disabled', level: 2 },
  { id: 'controlled', text: 'Controlled', level: 2 },
  { id: 'api-reference', text: 'API Reference', level: 2 },
];

const frameworkOptions = [
  { value: 'react', label: 'React' },
  { value: 'vue', label: 'Vue' },
  { value: 'angular', label: 'Angular' },
  { value: 'svelte', label: 'Svelte' },
];

const languageOptions = [
  { value: 'ts', label: 'TypeScript' },
  { value: 'js', label: 'JavaScript' },
  { value: 'rust', label: 'Rust' },
  { value: 'go', label: 'Go', disabled: true },
];

export default function SelectPage() {
  const [controlled, setControlled] = useState('react');

  return (
    <div className="flex gap-10">
      <div className="min-w-0 flex-1">
        <Breadcrumb items={[{ label: 'Docs', href: '/docs/getting-started' }, { label: 'Components', href: '/docs/components/button' }, { label: 'Select' }]} />

        <h1 className="text-3xl font-bold tracking-tight text-(--nova-text-primary)">Select</h1>
        <p className="mt-2 text-lg text-(--nova-text-secondary) leading-relaxed">Custom dropdown select with keyboard navigation, typeahead, and accessibility.</p>

        <div className="mt-8 space-y-10">
          <section>
            <h2 id="basic-usage" className="scroll-mt-20 text-xl font-semibold text-(--nova-text-primary) mb-4">Basic Usage</h2>
            <ComponentPreview code={`<NovaSelect\n  options={[\n    { value: 'react', label: 'React' },\n    { value: 'vue', label: 'Vue' },\n    { value: 'angular', label: 'Angular' },\n    { value: 'svelte', label: 'Svelte' },\n  ]}\n  placeholder="Choose a framework"\n/>`}>
              <div className="max-w-xs">
                <NovaSelect options={frameworkOptions} placeholder="Choose a framework" />
              </div>
            </ComponentPreview>
          </section>

          <section>
            <h2 id="sizes" className="scroll-mt-20 text-xl font-semibold text-(--nova-text-primary) mb-4">Sizes</h2>
            <ComponentPreview code={`<NovaSelect size="sm" options={options} placeholder="Small" />\n<NovaSelect size="md" options={options} placeholder="Medium (default)" />\n<NovaSelect size="lg" options={options} placeholder="Large" />`}>
              <div className="flex flex-col gap-4 max-w-xs">
                <NovaSelect size="sm" options={frameworkOptions} placeholder="Small" />
                <NovaSelect size="md" options={frameworkOptions} placeholder="Medium (default)" />
                <NovaSelect size="lg" options={frameworkOptions} placeholder="Large" />
              </div>
            </ComponentPreview>
          </section>

          <section>
            <h2 id="with-label-and-helper" className="scroll-mt-20 text-xl font-semibold text-(--nova-text-primary) mb-4">With Label & Helper Text</h2>
            <ComponentPreview code={`<NovaSelect\n  label="Programming Language"\n  helperText="Choose your preferred language"\n  options={languageOptions}\n  placeholder="Select a language"\n/>`}>
              <div className="max-w-xs">
                <NovaSelect label="Programming Language" helperText="Choose your preferred language" options={languageOptions} placeholder="Select a language" />
              </div>
            </ComponentPreview>
          </section>

          <section>
            <h2 id="error-state" className="scroll-mt-20 text-xl font-semibold text-(--nova-text-primary) mb-4">Error State</h2>
            <ComponentPreview code={`<NovaSelect\n  label="Framework"\n  error="Please select a framework"\n  options={options}\n  placeholder="Select..."\n/>`}>
              <div className="max-w-xs">
                <NovaSelect label="Framework" error="Please select a framework" options={frameworkOptions} placeholder="Select..." />
              </div>
            </ComponentPreview>
          </section>

          <section>
            <h2 id="disabled" className="scroll-mt-20 text-xl font-semibold text-(--nova-text-primary) mb-4">Disabled</h2>
            <ComponentPreview code={`<NovaSelect disabled options={options} placeholder="Disabled select" />`}>
              <div className="max-w-xs">
                <NovaSelect disabled options={frameworkOptions} placeholder="Disabled select" />
              </div>
            </ComponentPreview>
          </section>

          <section>
            <h2 id="controlled" className="scroll-mt-20 text-xl font-semibold text-(--nova-text-primary) mb-4">Controlled</h2>
            <ComponentPreview code={`const [value, setValue] = useState('react');\n\n<NovaSelect\n  label="Controlled Select"\n  value={value}\n  onChange={setValue}\n  options={options}\n/>`}>
              <div className="max-w-xs space-y-2">
                <NovaSelect label="Controlled Select" value={controlled} onChange={setControlled} options={frameworkOptions} />
                <p className="text-sm text-(--nova-text-secondary)">Selected: <strong>{controlled}</strong></p>
              </div>
            </ComponentPreview>
          </section>

          <section>
            <h2 id="api-reference" className="scroll-mt-20 text-xl font-semibold text-(--nova-text-primary) mb-4">API Reference</h2>
            <PropsTable data={[
              { name: 'options', type: 'SelectOption[]', description: 'Array of { value, label, disabled? }' },
              { name: 'value', type: 'string', description: 'Controlled selected value' },
              { name: 'defaultValue', type: 'string', default: "''", description: 'Uncontrolled default value' },
              { name: 'onChange', type: '(value: string) => void', description: 'Called when selection changes' },
              { name: 'placeholder', type: 'string', default: "'Select an option'", description: 'Placeholder text' },
              { name: 'label', type: 'string', description: 'Label text above the select' },
              { name: 'error', type: 'string', description: 'Error message below the select' },
              { name: 'helperText', type: 'string', description: 'Helper text below the select' },
              { name: 'disabled', type: 'boolean', default: 'false', description: 'Disables the select' },
              { name: 'size', type: "'sm' | 'md' | 'lg'", default: "'md'", description: 'Select size' },
              { name: 'novaTestId', type: 'string', default: "'select'", description: 'Test ID for data-nova-test' },
            ]} />
          </section>
        </div>
      </div>
      <OnThisPage headings={headings} />
    </div>
  );
}
