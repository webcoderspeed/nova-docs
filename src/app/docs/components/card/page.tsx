'use client';

import { NovaCard, NovaButton, NovaHeading, NovaText } from '@nova-ui';
import { Breadcrumb } from '@/components/Breadcrumb';
import { ComponentPreview } from '@/components/ComponentPreview';
import { PropsTable } from '@/components/PropsTable';
import { OnThisPage } from '@/components/OnThisPage';

const headings = [
  { id: 'basic-card', text: 'Basic Card', level: 2 },
  { id: 'variants', text: 'Variants', level: 2 },
  { id: 'api-reference', text: 'API Reference', level: 2 },
];

export default function CardPage() {
  return (
    <div className="flex gap-10">
      <div className="min-w-0 flex-1">
        <Breadcrumb items={[{ label: 'Docs', href: '/docs/getting-started' }, { label: 'Components', href: '/docs/components/button' }, { label: 'Card' }]} />

        <h1 className="text-3xl font-bold tracking-tight text-(--nova-text-primary)">Card</h1>
        <p className="mt-2 text-lg text-(--nova-text-secondary) leading-relaxed">Compound card component with Header, Body, and Footer sub-components for structured content containers.</p>

        <div className="mt-8 space-y-10">
          <section>
            <h2 id="basic-card" className="scroll-mt-20 text-xl font-semibold text-(--nova-text-primary) mb-4">Basic Card</h2>
            <ComponentPreview code={`<NovaCard>\n  <NovaCard.Header>\n    <NovaHeading level={3}>Card Title</NovaHeading>\n  </NovaCard.Header>\n  <NovaCard.Body>\n    <NovaText as="p" color="secondary">\n      This is the card body content.\n    </NovaText>\n  </NovaCard.Body>\n  <NovaCard.Footer>\n    <NovaButton size="sm">Action</NovaButton>\n  </NovaCard.Footer>\n</NovaCard>`}>
              <div className="max-w-md">
                <NovaCard>
                  <NovaCard.Header>
                    <NovaHeading level={3}>Card Title</NovaHeading>
                  </NovaCard.Header>
                  <NovaCard.Body>
                    <NovaText as="p" color="secondary">
                      This is the card body content. It can contain any elements you need.
                    </NovaText>
                  </NovaCard.Body>
                  <NovaCard.Footer>
                    <NovaButton size="sm">Action</NovaButton>
                  </NovaCard.Footer>
                </NovaCard>
              </div>
            </ComponentPreview>
          </section>

          <section>
            <h2 id="variants" className="scroll-mt-20 text-xl font-semibold text-(--nova-text-primary) mb-4">Variants</h2>
            <ComponentPreview code={`<NovaCard variant="outlined">\n  <NovaCard.Body>\n    <NovaText as="p" weight="medium">Outlined</NovaText>\n    <NovaText as="p" size="sm" color="secondary">Border-only card style</NovaText>\n  </NovaCard.Body>\n</NovaCard>\n\n<NovaCard variant="elevated">\n  <NovaCard.Body>\n    <NovaText as="p" weight="medium">Elevated</NovaText>\n    <NovaText as="p" size="sm" color="secondary">Shadow-based card style</NovaText>\n  </NovaCard.Body>\n</NovaCard>`}>
              <div className="grid gap-4 sm:grid-cols-2">
                <NovaCard variant="outlined">
                  <NovaCard.Body>
                    <NovaText as="p" weight="medium">Outlined</NovaText>
                    <NovaText as="p" size="sm" color="secondary">Border-only card style</NovaText>
                  </NovaCard.Body>
                </NovaCard>
                <NovaCard variant="elevated">
                  <NovaCard.Body>
                    <NovaText as="p" weight="medium">Elevated</NovaText>
                    <NovaText as="p" size="sm" color="secondary">Shadow-based card style</NovaText>
                  </NovaCard.Body>
                </NovaCard>
              </div>
            </ComponentPreview>
          </section>

          <section>
            <h2 id="api-reference" className="scroll-mt-20 text-xl font-semibold text-(--nova-text-primary) mb-4">API Reference</h2>
            <PropsTable data={[
              { name: 'variant', type: "'elevated' | 'outlined' | 'filled'", default: "'elevated'" },
              { name: 'children', type: 'ReactNode' },
              { name: 'novaTestId', type: 'string', default: "'card'" },
            ]} />
          </section>
        </div>
      </div>
      <OnThisPage headings={headings} />
    </div>
  );
}
