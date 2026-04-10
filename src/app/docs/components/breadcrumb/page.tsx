'use client';

import { NovaBreadcrumb } from '@nova-ui';
import { Breadcrumb } from '@/components/Breadcrumb';
import { ComponentPreview } from '@/components/ComponentPreview';
import { PropsTable } from '@/components/PropsTable';
import { OnThisPage } from '@/components/OnThisPage';

const headings = [
  { id: 'basic-usage', text: 'Basic Usage', level: 2 },
  { id: 'custom-separator', text: 'Custom Separator', level: 2 },
  { id: 'api-reference', text: 'API Reference', level: 2 },
];

export default function BreadcrumbPage() {
  return (
    <div className="flex gap-10">
      <div className="min-w-0 flex-1">
        <Breadcrumb items={[{ label: 'Docs', href: '/docs/getting-started' }, { label: 'Components', href: '/docs/components/button' }, { label: 'Breadcrumb' }]} />

        <h1 className="text-3xl font-bold tracking-tight text-(--nova-text-primary)">Breadcrumb</h1>
        <p className="mt-2 text-lg text-(--nova-text-secondary) leading-relaxed">Navigation component that shows the path to the current page within a hierarchy.</p>

        <div className="mt-8 space-y-10">
          <section>
            <h2 id="basic-usage" className="scroll-mt-20 text-xl font-semibold text-(--nova-text-primary) mb-4">Basic Usage</h2>
            <ComponentPreview code={`<NovaBreadcrumb\n  items={[\n    { label: 'Home', href: '/' },\n    { label: 'Products', href: '/products' },\n    { label: 'Phones' },\n  ]}\n/>`}>
              <NovaBreadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Products', href: '/products' }, { label: 'Phones' }]} />
            </ComponentPreview>
          </section>

          <section>
            <h2 id="custom-separator" className="scroll-mt-20 text-xl font-semibold text-(--nova-text-primary) mb-4">Custom Separator</h2>
            <ComponentPreview code={`<NovaBreadcrumb\n  separator={<span>/</span>}\n  items={[\n    { label: 'Home', href: '/' },\n    { label: 'Docs', href: '/docs' },\n    { label: 'Breadcrumb' },\n  ]}\n/>`}>
              <NovaBreadcrumb separator={<span className="text-(--nova-text-tertiary)">/</span>} items={[{ label: 'Home', href: '/' }, { label: 'Docs', href: '/docs' }, { label: 'Breadcrumb' }]} />
            </ComponentPreview>
          </section>

          <section>
            <h2 id="api-reference" className="scroll-mt-20 text-xl font-semibold text-(--nova-text-primary) mb-4">API Reference</h2>
            <PropsTable data={[
              { name: 'items', type: 'BreadcrumbItem[]', description: 'Array of { label, href? }. Last item is treated as current page.' },
              { name: 'separator', type: 'ReactNode', description: 'Custom separator (default: chevron icon)' },
              { name: 'novaTestId', type: 'string', default: "'breadcrumb'" },
            ]} />
          </section>
        </div>
      </div>
      <OnThisPage headings={headings} />
    </div>
  );
}
