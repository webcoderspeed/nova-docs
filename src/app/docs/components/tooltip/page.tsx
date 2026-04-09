'use client';

import { NovaTooltip, NovaButton } from '@nova-ui';
import { Breadcrumb } from '@/components/Breadcrumb';
import { ComponentPreview } from '@/components/ComponentPreview';
import { PropsTable } from '@/components/PropsTable';
import { OnThisPage } from '@/components/OnThisPage';

const headings = [
  { id: 'basic-usage', text: 'Basic Usage', level: 2 },
  { id: 'placement', text: 'Placement', level: 2 },
  { id: 'api-reference', text: 'API Reference', level: 2 },
];

export default function TooltipPage() {
  return (
    <div className="flex gap-10">
      <div className="min-w-0 flex-1">
        <Breadcrumb items={[{ label: 'Docs', href: '/docs/getting-started' }, { label: 'Components', href: '/docs/components/button' }, { label: 'Tooltip' }]} />

        <h1 className="text-3xl font-bold tracking-tight text-(--nova-text-primary)">Tooltip</h1>
        <p className="mt-2 text-lg text-(--nova-text-secondary) leading-relaxed">Accessible tooltip that appears on hover or focus with configurable placement and delay.</p>

        <div className="mt-8 space-y-10">
          <section>
            <h2 id="basic-usage" className="scroll-mt-20 text-xl font-semibold text-(--nova-text-primary) mb-4">Basic Usage</h2>
            <ComponentPreview code={`<NovaTooltip content="This is a tooltip">\n  <NovaButton variant="secondary">Hover me</NovaButton>\n</NovaTooltip>`}>
              <NovaTooltip content="This is a tooltip">
                <NovaButton variant="secondary">Hover me</NovaButton>
              </NovaTooltip>
            </ComponentPreview>
          </section>

          <section>
            <h2 id="placement" className="scroll-mt-20 text-xl font-semibold text-(--nova-text-primary) mb-4">Placement</h2>
            <ComponentPreview code={`<NovaTooltip content="Top" position="top">\n  <NovaButton variant="ghost">Top</NovaButton>\n</NovaTooltip>\n<NovaTooltip content="Bottom" position="bottom">\n  <NovaButton variant="ghost">Bottom</NovaButton>\n</NovaTooltip>\n<NovaTooltip content="Left" position="left">\n  <NovaButton variant="ghost">Left</NovaButton>\n</NovaTooltip>\n<NovaTooltip content="Right" position="right">\n  <NovaButton variant="ghost">Right</NovaButton>\n</NovaTooltip>`}>
              <div className="flex flex-wrap items-center gap-4">
                <NovaTooltip content="Top" position="top">
                  <NovaButton variant="ghost">Top</NovaButton>
                </NovaTooltip>
                <NovaTooltip content="Bottom" position="bottom">
                  <NovaButton variant="ghost">Bottom</NovaButton>
                </NovaTooltip>
                <NovaTooltip content="Left" position="left">
                  <NovaButton variant="ghost">Left</NovaButton>
                </NovaTooltip>
                <NovaTooltip content="Right" position="right">
                  <NovaButton variant="ghost">Right</NovaButton>
                </NovaTooltip>
              </div>
            </ComponentPreview>
          </section>

          <section>
            <h2 id="api-reference" className="scroll-mt-20 text-xl font-semibold text-(--nova-text-primary) mb-4">API Reference</h2>
            <PropsTable data={[
              { name: 'content', type: 'ReactNode', description: 'Tooltip content to display (required)' },
              { name: 'position', type: "'top' | 'bottom' | 'left' | 'right'", default: "'top'", description: 'Placement relative to the trigger element' },
              { name: 'delay', type: 'number', default: '200', description: 'Delay in milliseconds before showing the tooltip' },
              { name: 'children', type: 'ReactElement', description: 'Trigger element (required, must accept ref-forwarding props)' },
              { name: 'className', type: 'string', description: 'Additional classes for the tooltip popup' },
              { name: 'novaTestId', type: 'string', default: "'tooltip'" },
            ]} />
          </section>
        </div>
      </div>
      <OnThisPage headings={headings} />
    </div>
  );
}
