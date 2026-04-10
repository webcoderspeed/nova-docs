'use client';

import { NovaAccordion } from '@nova-ui';
import { Breadcrumb } from '@/components/Breadcrumb';
import { ComponentPreview } from '@/components/ComponentPreview';
import { PropsTable } from '@/components/PropsTable';
import { OnThisPage } from '@/components/OnThisPage';

const headings = [
  { id: 'basic-usage', text: 'Basic Usage', level: 2 },
  { id: 'default-open', text: 'Default Open', level: 2 },
  { id: 'allow-multiple', text: 'Allow Multiple', level: 2 },
  { id: 'api-reference', text: 'API Reference', level: 2 },
];

export default function AccordionPage() {
  return (
    <div className="flex gap-10">
      <div className="min-w-0 flex-1">
        <Breadcrumb items={[{ label: 'Docs', href: '/docs/getting-started' }, { label: 'Components', href: '/docs/components/button' }, { label: 'Accordion' }]} />

        <h1 className="text-3xl font-bold tracking-tight text-(--nova-text-primary)">Accordion</h1>
        <p className="mt-2 text-lg text-(--nova-text-secondary) leading-relaxed">Collapsible content panels for presenting information in limited space. Great for FAQs.</p>

        <div className="mt-8 space-y-10">
          <section>
            <h2 id="basic-usage" className="scroll-mt-20 text-xl font-semibold text-(--nova-text-primary) mb-4">Basic Usage</h2>
            <ComponentPreview code={`<NovaAccordion>\n  <NovaAccordion.Item value="one">\n    <NovaAccordion.Trigger>What is Nova UI?</NovaAccordion.Trigger>\n    <NovaAccordion.Content>A design system for Acefone.</NovaAccordion.Content>\n  </NovaAccordion.Item>\n  <NovaAccordion.Item value="two">\n    <NovaAccordion.Trigger>How do I install it?</NovaAccordion.Trigger>\n    <NovaAccordion.Content>Via git submodule.</NovaAccordion.Content>\n  </NovaAccordion.Item>\n</NovaAccordion>`}>
              <NovaAccordion>
                <NovaAccordion.Item value="one">
                  <NovaAccordion.Trigger>What is Nova UI?</NovaAccordion.Trigger>
                  <NovaAccordion.Content>Nova UI is Acefone's design system built from scratch.</NovaAccordion.Content>
                </NovaAccordion.Item>
                <NovaAccordion.Item value="two">
                  <NovaAccordion.Trigger>How do I install it?</NovaAccordion.Trigger>
                  <NovaAccordion.Content>Add it as a git submodule to your project.</NovaAccordion.Content>
                </NovaAccordion.Item>
                <NovaAccordion.Item value="three">
                  <NovaAccordion.Trigger>Is it accessible?</NovaAccordion.Trigger>
                  <NovaAccordion.Content>Yes, all components follow WAI-ARIA best practices.</NovaAccordion.Content>
                </NovaAccordion.Item>
              </NovaAccordion>
            </ComponentPreview>
          </section>

          <section>
            <h2 id="default-open" className="scroll-mt-20 text-xl font-semibold text-(--nova-text-primary) mb-4">Default Open</h2>
            <ComponentPreview code={`<NovaAccordion defaultValue="two">\n  <NovaAccordion.Item value="one">...</NovaAccordion.Item>\n  <NovaAccordion.Item value="two">...</NovaAccordion.Item>\n</NovaAccordion>`}>
              <NovaAccordion defaultValue="two">
                <NovaAccordion.Item value="one">
                  <NovaAccordion.Trigger>Section 1</NovaAccordion.Trigger>
                  <NovaAccordion.Content>Content for section 1.</NovaAccordion.Content>
                </NovaAccordion.Item>
                <NovaAccordion.Item value="two">
                  <NovaAccordion.Trigger>Section 2 (open by default)</NovaAccordion.Trigger>
                  <NovaAccordion.Content>Content for section 2.</NovaAccordion.Content>
                </NovaAccordion.Item>
              </NovaAccordion>
            </ComponentPreview>
          </section>

          <section>
            <h2 id="allow-multiple" className="scroll-mt-20 text-xl font-semibold text-(--nova-text-primary) mb-4">Allow Multiple</h2>
            <ComponentPreview code={`<NovaAccordion allowMultiple defaultValue={['one', 'two']}>\n  ...\n</NovaAccordion>`}>
              <NovaAccordion allowMultiple defaultValue={['one', 'two']}>
                <NovaAccordion.Item value="one">
                  <NovaAccordion.Trigger>First Item</NovaAccordion.Trigger>
                  <NovaAccordion.Content>This can stay open alongside others.</NovaAccordion.Content>
                </NovaAccordion.Item>
                <NovaAccordion.Item value="two">
                  <NovaAccordion.Trigger>Second Item</NovaAccordion.Trigger>
                  <NovaAccordion.Content>Multiple items can be open at once.</NovaAccordion.Content>
                </NovaAccordion.Item>
                <NovaAccordion.Item value="three">
                  <NovaAccordion.Trigger>Third Item</NovaAccordion.Trigger>
                  <NovaAccordion.Content>Click to toggle independently.</NovaAccordion.Content>
                </NovaAccordion.Item>
              </NovaAccordion>
            </ComponentPreview>
          </section>

          <section>
            <h2 id="api-reference" className="scroll-mt-20 text-xl font-semibold text-(--nova-text-primary) mb-4">API Reference</h2>
            <h3 className="mb-2 text-base font-semibold text-(--nova-text-primary)">NovaAccordion</h3>
            <PropsTable data={[
              { name: 'defaultValue', type: 'string | string[]', description: 'Initially open item(s)' },
              { name: 'value', type: 'string | string[]', description: 'Controlled open item(s)' },
              { name: 'onChange', type: '(value: string | string[]) => void' },
              { name: 'allowMultiple', type: 'boolean', default: 'false' },
              { name: 'novaTestId', type: 'string', default: "'accordion'" },
            ]} />
            <h3 className="mb-2 mt-6 text-base font-semibold text-(--nova-text-primary)">NovaAccordion.Item</h3>
            <PropsTable data={[
              { name: 'value', type: 'string', description: 'Unique identifier for this item' },
            ]} />
          </section>
        </div>
      </div>
      <OnThisPage headings={headings} />
    </div>
  );
}
