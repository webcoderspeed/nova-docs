'use client';

import { NovaBadge } from '@nova-ui';
import { Breadcrumb } from '@/components/Breadcrumb';
import { ComponentPreview } from '@/components/ComponentPreview';
import { PropsTable } from '@/components/PropsTable';
import { OnThisPage } from '@/components/OnThisPage';

const headings = [
  { id: 'variants', text: 'Variants', level: 2 },
  { id: 'sizes-and-dot', text: 'Sizes & Dot Indicator', level: 2 },
  { id: 'api-reference', text: 'API Reference', level: 2 },
];

export default function BadgePage() {
  return (
    <div className="flex gap-10">
      <div className="min-w-0 flex-1">
        <Breadcrumb items={[{ label: 'Docs', href: '/docs/getting-started' }, { label: 'Components', href: '/docs/components/button' }, { label: 'Badge' }]} />

        <h1 className="text-3xl font-bold tracking-tight text-(--nova-text-primary)">Badge</h1>
        <p className="mt-2 text-lg text-(--nova-text-secondary) leading-relaxed">Compact label for status, counts, or categorization with variant, size, and dot indicator support.</p>

        <div className="mt-8 space-y-10">
          <section>
            <h2 id="variants" className="scroll-mt-20 text-xl font-semibold text-(--nova-text-primary) mb-4">Variants</h2>
            <ComponentPreview code={`<NovaBadge variant="default">Default</NovaBadge>\n<NovaBadge variant="info">Info</NovaBadge>\n<NovaBadge variant="success">Success</NovaBadge>\n<NovaBadge variant="warning">Warning</NovaBadge>\n<NovaBadge variant="error">Error</NovaBadge>`}>
              <div className="flex items-center gap-3 flex-wrap">
                <NovaBadge variant="default">Default</NovaBadge>
                <NovaBadge variant="info">Info</NovaBadge>
                <NovaBadge variant="success">Success</NovaBadge>
                <NovaBadge variant="warning">Warning</NovaBadge>
                <NovaBadge variant="error">Error</NovaBadge>
              </div>
            </ComponentPreview>
          </section>

          <section>
            <h2 id="sizes-and-dot" className="scroll-mt-20 text-xl font-semibold text-(--nova-text-primary) mb-4">Sizes & Dot Indicator</h2>
            <ComponentPreview code={`<NovaBadge size="sm">Small</NovaBadge>\n<NovaBadge size="md">Medium</NovaBadge>\n<NovaBadge size="lg">Large</NovaBadge>\n<NovaBadge dot variant="success">Online</NovaBadge>\n<NovaBadge dot variant="error">Offline</NovaBadge>`}>
              <div className="flex items-center gap-3 flex-wrap">
                <NovaBadge size="sm">Small</NovaBadge>
                <NovaBadge size="md">Medium</NovaBadge>
                <NovaBadge size="lg">Large</NovaBadge>
                <NovaBadge dot variant="success">Online</NovaBadge>
                <NovaBadge dot variant="error">Offline</NovaBadge>
              </div>
            </ComponentPreview>
          </section>

          <section>
            <h2 id="api-reference" className="scroll-mt-20 text-xl font-semibold text-(--nova-text-primary) mb-4">API Reference</h2>
            <PropsTable data={[
              { name: 'variant', type: "'default' | 'success' | 'warning' | 'error' | 'info'", default: "'default'" },
              { name: 'size', type: "'sm' | 'md' | 'lg'", default: "'md'" },
              { name: 'dot', type: 'boolean', default: 'false' },
              { name: 'novaTestId', type: 'string', default: "'badge'" },
            ]} />
          </section>
        </div>
      </div>
      <OnThisPage headings={headings} />
    </div>
  );
}
