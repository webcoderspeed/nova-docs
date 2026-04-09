'use client';

import { NovaButton } from '@nova-ui';
import { Breadcrumb } from '@/components/Breadcrumb';
import { ComponentPreview } from '@/components/ComponentPreview';
import { PropsTable } from '@/components/PropsTable';
import { OnThisPage } from '@/components/OnThisPage';

const headings = [
  { id: 'variants', text: 'Variants', level: 2 },
  { id: 'sizes', text: 'Sizes', level: 2 },
  { id: 'states', text: 'States', level: 2 },
  { id: 'polymorphic', text: 'Polymorphic (as prop)', level: 2 },
  { id: 'api-reference', text: 'API Reference', level: 2 },
];

export default function ButtonPage() {
  return (
    <div className="flex gap-10">
      <div className="min-w-0 flex-1">
        <Breadcrumb items={[{ label: 'Docs', href: '/docs/getting-started' }, { label: 'Components', href: '/docs/components/button' }, { label: 'Button' }]} />

        <h1 className="text-3xl font-bold tracking-tight text-(--nova-text-primary)">Button</h1>
        <p className="mt-2 text-lg text-(--nova-text-secondary) leading-relaxed">Polymorphic button with variants, sizes, loading state, and icon support. Renders as any element via the <code>as</code> prop.</p>

        <div className="mt-8 space-y-10">
          <section>
            <h2 id="variants" className="scroll-mt-20 text-xl font-semibold text-(--nova-text-primary) mb-4">Variants</h2>
            <ComponentPreview code={`<NovaButton variant="primary">Primary</NovaButton>\n<NovaButton variant="secondary">Secondary</NovaButton>\n<NovaButton variant="ghost">Ghost</NovaButton>\n<NovaButton variant="danger">Danger</NovaButton>`}>
              <div className="flex items-center gap-3 flex-wrap">
                <NovaButton variant="primary">Primary</NovaButton>
                <NovaButton variant="secondary">Secondary</NovaButton>
                <NovaButton variant="ghost">Ghost</NovaButton>
                <NovaButton variant="danger">Danger</NovaButton>
              </div>
            </ComponentPreview>
          </section>

          <section>
            <h2 id="sizes" className="scroll-mt-20 text-xl font-semibold text-(--nova-text-primary) mb-4">Sizes</h2>
            <ComponentPreview code={`<NovaButton size="sm">Small</NovaButton>\n<NovaButton size="md">Medium</NovaButton>\n<NovaButton size="lg">Large</NovaButton>`}>
              <div className="flex items-center gap-3">
                <NovaButton size="sm">Small</NovaButton>
                <NovaButton size="md">Medium</NovaButton>
                <NovaButton size="lg">Large</NovaButton>
              </div>
            </ComponentPreview>
          </section>

          <section>
            <h2 id="states" className="scroll-mt-20 text-xl font-semibold text-(--nova-text-primary) mb-4">States</h2>
            <ComponentPreview code={`<NovaButton loading>Loading</NovaButton>\n<NovaButton disabled>Disabled</NovaButton>`}>
              <div className="flex items-center gap-3">
                <NovaButton loading>Loading</NovaButton>
                <NovaButton disabled>Disabled</NovaButton>
              </div>
            </ComponentPreview>
          </section>

          <section>
            <h2 id="polymorphic" className="scroll-mt-20 text-xl font-semibold text-(--nova-text-primary) mb-4">Polymorphic (as prop)</h2>
            <ComponentPreview code={`<NovaButton as="a" href="/link" variant="secondary">\n  Renders as <a>\n</NovaButton>`}>
              <div className="flex items-center gap-3">
                <NovaButton as="a" href="#" variant="secondary">
                  Renders as {'<a>'}
                </NovaButton>
              </div>
            </ComponentPreview>
          </section>

          <section>
            <h2 id="api-reference" className="scroll-mt-20 text-xl font-semibold text-(--nova-text-primary) mb-4">API Reference</h2>
            <PropsTable data={[
              { name: 'variant', type: "'primary' | 'secondary' | 'ghost' | 'danger'", default: "'primary'" },
              { name: 'size', type: "'sm' | 'md' | 'lg'", default: "'md'" },
              { name: 'loading', type: 'boolean', default: 'false' },
              { name: 'disabled', type: 'boolean', default: 'false' },
              { name: 'as', type: 'ElementType', default: "'button'" },
              { name: 'leftIcon', type: 'ReactNode' },
              { name: 'rightIcon', type: 'ReactNode' },
              { name: 'novaTestId', type: 'string', default: "'button'" },
            ]} />
          </section>
        </div>
      </div>
      <OnThisPage headings={headings} />
    </div>
  );
}
