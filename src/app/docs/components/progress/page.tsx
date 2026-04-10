'use client';

import { NovaProgress } from '@nova-ui';
import { Breadcrumb } from '@/components/Breadcrumb';
import { ComponentPreview } from '@/components/ComponentPreview';
import { PropsTable } from '@/components/PropsTable';
import { OnThisPage } from '@/components/OnThisPage';

const headings = [
  { id: 'basic-usage', text: 'Basic Usage', level: 2 },
  { id: 'sizes', text: 'Sizes', level: 2 },
  { id: 'variants', text: 'Variants', level: 2 },
  { id: 'with-label', text: 'With Label', level: 2 },
  { id: 'indeterminate', text: 'Indeterminate', level: 2 },
  { id: 'api-reference', text: 'API Reference', level: 2 },
];

export default function ProgressPage() {
  return (
    <div className="flex gap-10">
      <div className="min-w-0 flex-1">
        <Breadcrumb items={[{ label: 'Docs', href: '/docs/getting-started' }, { label: 'Components', href: '/docs/components/button' }, { label: 'Progress' }]} />

        <h1 className="text-3xl font-bold tracking-tight text-(--nova-text-primary)">Progress</h1>
        <p className="mt-2 text-lg text-(--nova-text-secondary) leading-relaxed">Progress bar component to show completion state of tasks and operations.</p>

        <div className="mt-8 space-y-10">
          <section>
            <h2 id="basic-usage" className="scroll-mt-20 text-xl font-semibold text-(--nova-text-primary) mb-4">Basic Usage</h2>
            <ComponentPreview code={`<NovaProgress value={60} />`}>
              <NovaProgress value={60} />
            </ComponentPreview>
          </section>

          <section>
            <h2 id="sizes" className="scroll-mt-20 text-xl font-semibold text-(--nova-text-primary) mb-4">Sizes</h2>
            <ComponentPreview code={`<NovaProgress value={40} size="sm" />\n<NovaProgress value={60} size="md" />\n<NovaProgress value={80} size="lg" />`}>
              <div className="space-y-4">
                <NovaProgress value={40} size="sm" />
                <NovaProgress value={60} size="md" />
                <NovaProgress value={80} size="lg" />
              </div>
            </ComponentPreview>
          </section>

          <section>
            <h2 id="variants" className="scroll-mt-20 text-xl font-semibold text-(--nova-text-primary) mb-4">Variants</h2>
            <ComponentPreview code={`<NovaProgress value={60} variant="primary" />\n<NovaProgress value={60} variant="success" />\n<NovaProgress value={60} variant="warning" />\n<NovaProgress value={60} variant="error" />`}>
              <div className="space-y-4">
                <NovaProgress value={60} variant="primary" />
                <NovaProgress value={60} variant="success" />
                <NovaProgress value={60} variant="warning" />
                <NovaProgress value={60} variant="error" />
              </div>
            </ComponentPreview>
          </section>

          <section>
            <h2 id="with-label" className="scroll-mt-20 text-xl font-semibold text-(--nova-text-primary) mb-4">With Label</h2>
            <ComponentPreview code={`<NovaProgress value={75} showLabel label="Uploading" />`}>
              <NovaProgress value={75} showLabel label="Uploading" />
            </ComponentPreview>
          </section>

          <section>
            <h2 id="indeterminate" className="scroll-mt-20 text-xl font-semibold text-(--nova-text-primary) mb-4">Indeterminate</h2>
            <ComponentPreview code={`<NovaProgress value={0} indeterminate />`}>
              <NovaProgress value={0} indeterminate />
            </ComponentPreview>
          </section>

          <section>
            <h2 id="api-reference" className="scroll-mt-20 text-xl font-semibold text-(--nova-text-primary) mb-4">API Reference</h2>
            <PropsTable data={[
              { name: 'value', type: 'number', description: 'Current progress value (0 to max)' },
              { name: 'max', type: 'number', default: '100', description: 'Maximum value' },
              { name: 'size', type: "'sm' | 'md' | 'lg'", default: "'md'" },
              { name: 'variant', type: "'primary' | 'success' | 'warning' | 'error'", default: "'primary'" },
              { name: 'showLabel', type: 'boolean', default: 'false' },
              { name: 'label', type: 'string', default: "'Progress'", description: 'Accessible label text' },
              { name: 'indeterminate', type: 'boolean', default: 'false' },
              { name: 'novaTestId', type: 'string', default: "'progress'" },
            ]} />
          </section>
        </div>
      </div>
      <OnThisPage headings={headings} />
    </div>
  );
}
