'use client';

import { NovaSpinner } from '@nova-ui';
import { Breadcrumb } from '@/components/Breadcrumb';
import { ComponentPreview } from '@/components/ComponentPreview';
import { PropsTable } from '@/components/PropsTable';
import { OnThisPage } from '@/components/OnThisPage';

const headings = [
  { id: 'sizes', text: 'Sizes', level: 2 },
  { id: 'api-reference', text: 'API Reference', level: 2 },
];

export default function SpinnerPage() {
  return (
    <div className="flex gap-10">
      <div className="min-w-0 flex-1">
        <Breadcrumb items={[{ label: 'Docs', href: '/docs/getting-started' }, { label: 'Components', href: '/docs/components/button' }, { label: 'Spinner' }]} />

        <h1 className="text-3xl font-bold tracking-tight text-(--nova-text-primary)">Spinner</h1>
        <p className="mt-2 text-lg text-(--nova-text-secondary) leading-relaxed">Loading spinner indicator available in multiple sizes.</p>

        <div className="mt-8 space-y-10">
          <section>
            <h2 id="sizes" className="scroll-mt-20 text-xl font-semibold text-(--nova-text-primary) mb-4">Sizes</h2>
            <ComponentPreview code={`<NovaSpinner size="sm" />
<NovaSpinner size="md" />
<NovaSpinner size="lg" />`}>
              <div className="flex items-center gap-6">
                <NovaSpinner size="sm" />
                <NovaSpinner size="md" />
                <NovaSpinner size="lg" />
              </div>
            </ComponentPreview>
          </section>

          <section>
            <h2 id="api-reference" className="scroll-mt-20 text-xl font-semibold text-(--nova-text-primary) mb-4">API Reference</h2>
            <PropsTable data={[
              { name: 'size', type: "'sm' | 'md' | 'lg'", default: "'md'" },
              { name: 'novaTestId', type: 'string', default: "'spinner'" },
            ]} />
          </section>
        </div>
      </div>
      <OnThisPage headings={headings} />
    </div>
  );
}
