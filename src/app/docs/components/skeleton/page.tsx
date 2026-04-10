'use client';

import { NovaSkeleton } from '@nova-ui';
import { Breadcrumb } from '@/components/Breadcrumb';
import { ComponentPreview } from '@/components/ComponentPreview';
import { PropsTable } from '@/components/PropsTable';
import { OnThisPage } from '@/components/OnThisPage';

const headings = [
  { id: 'basic-usage', text: 'Basic Usage', level: 2 },
  { id: 'variants', text: 'Variants', level: 2 },
  { id: 'card-skeleton', text: 'Card Skeleton', level: 2 },
  { id: 'api-reference', text: 'API Reference', level: 2 },
];

export default function SkeletonPage() {
  return (
    <div className="flex gap-10">
      <div className="min-w-0 flex-1">
        <Breadcrumb items={[{ label: 'Docs', href: '/docs/getting-started' }, { label: 'Components', href: '/docs/components/button' }, { label: 'Skeleton' }]} />

        <h1 className="text-3xl font-bold tracking-tight text-(--nova-text-primary)">Skeleton</h1>
        <p className="mt-2 text-lg text-(--nova-text-secondary) leading-relaxed">Loading placeholder component for content that's still being fetched.</p>

        <div className="mt-8 space-y-10">
          <section>
            <h2 id="basic-usage" className="scroll-mt-20 text-xl font-semibold text-(--nova-text-primary) mb-4">Basic Usage</h2>
            <ComponentPreview code={`<NovaSkeleton width="60%" />\n<NovaSkeleton width="80%" />\n<NovaSkeleton width="40%" />`}>
              <div className="space-y-2">
                <NovaSkeleton width="60%" />
                <NovaSkeleton width="80%" />
                <NovaSkeleton width="40%" />
              </div>
            </ComponentPreview>
          </section>

          <section>
            <h2 id="variants" className="scroll-mt-20 text-xl font-semibold text-(--nova-text-primary) mb-4">Variants</h2>
            <ComponentPreview code={`<NovaSkeleton variant="text" width={200} />\n<NovaSkeleton variant="circle" width={40} height={40} />\n<NovaSkeleton variant="rect" width={200} height={100} />`}>
              <div className="flex items-center gap-4">
                <NovaSkeleton variant="circle" width={40} height={40} />
                <NovaSkeleton variant="rect" width={200} height={100} />
              </div>
            </ComponentPreview>
          </section>

          <section>
            <h2 id="card-skeleton" className="scroll-mt-20 text-xl font-semibold text-(--nova-text-primary) mb-4">Card Skeleton</h2>
            <ComponentPreview code={`<div className="space-y-3 rounded-lg border p-4">\n  <div className="flex items-center gap-3">\n    <NovaSkeleton variant="circle" width={48} height={48} />\n    <div className="flex-1 space-y-2">\n      <NovaSkeleton width="40%" />\n      <NovaSkeleton width="60%" />\n    </div>\n  </div>\n  <NovaSkeleton variant="rect" height={120} />\n</div>`}>
              <div className="space-y-3 rounded-lg border border-(--nova-border-default) p-4 max-w-md">
                <div className="flex items-center gap-3">
                  <NovaSkeleton variant="circle" width={48} height={48} />
                  <div className="flex-1 space-y-2">
                    <NovaSkeleton width="40%" />
                    <NovaSkeleton width="60%" />
                  </div>
                </div>
                <NovaSkeleton variant="rect" height={120} />
              </div>
            </ComponentPreview>
          </section>

          <section>
            <h2 id="api-reference" className="scroll-mt-20 text-xl font-semibold text-(--nova-text-primary) mb-4">API Reference</h2>
            <PropsTable data={[
              { name: 'variant', type: "'text' | 'rect' | 'circle'", default: "'text'" },
              { name: 'width', type: 'string | number', description: 'Width as px (number) or any CSS value (string)' },
              { name: 'height', type: 'string | number', description: 'Height as px (number) or any CSS value (string)' },
              { name: 'animation', type: "'pulse' | 'wave' | 'none'", default: "'pulse'" },
              { name: 'novaTestId', type: 'string', default: "'skeleton'" },
            ]} />
          </section>
        </div>
      </div>
      <OnThisPage headings={headings} />
    </div>
  );
}
