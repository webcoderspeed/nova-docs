'use client';

import { NovaAvatar } from '@nova-ui';
import { Breadcrumb } from '@/components/Breadcrumb';
import { ComponentPreview } from '@/components/ComponentPreview';
import { PropsTable } from '@/components/PropsTable';
import { OnThisPage } from '@/components/OnThisPage';

const headings = [
  { id: 'sizes', text: 'Sizes', level: 2 },
  { id: 'fallback-initials', text: 'Fallback Initials', level: 2 },
  { id: 'api-reference', text: 'API Reference', level: 2 },
];

export default function AvatarPage() {
  return (
    <div className="flex gap-10">
      <div className="min-w-0 flex-1">
        <Breadcrumb items={[{ label: 'Docs', href: '/docs/getting-started' }, { label: 'Components', href: '/docs/components/button' }, { label: 'Avatar' }]} />

        <h1 className="text-3xl font-bold tracking-tight text-(--nova-text-primary)">Avatar</h1>
        <p className="mt-2 text-lg text-(--nova-text-secondary) leading-relaxed">User avatar with image support, fallback initials, and multiple sizes.</p>

        <div className="mt-8 space-y-10">
          <section>
            <h2 id="sizes" className="scroll-mt-20 text-xl font-semibold text-(--nova-text-primary) mb-4">Sizes</h2>
            <ComponentPreview code={`<NovaAvatar size="xs" fallback="John Doe" />\n<NovaAvatar size="sm" fallback="John Doe" />\n<NovaAvatar size="md" fallback="John Doe" />\n<NovaAvatar size="lg" fallback="John Doe" />\n<NovaAvatar size="xl" fallback="John Doe" />`}>
              <div className="flex items-center gap-4">
                <NovaAvatar size="xs" fallback="John Doe" />
                <NovaAvatar size="sm" fallback="John Doe" />
                <NovaAvatar size="md" fallback="John Doe" />
                <NovaAvatar size="lg" fallback="John Doe" />
                <NovaAvatar size="xl" fallback="John Doe" />
              </div>
            </ComponentPreview>
          </section>

          <section>
            <h2 id="fallback-initials" className="scroll-mt-20 text-xl font-semibold text-(--nova-text-primary) mb-4">Fallback Initials</h2>
            <ComponentPreview code={`<NovaAvatar fallback="Alice Brown" />\n<NovaAvatar fallback="Bob Carter" />\n<NovaAvatar fallback="Eve" />\n<NovaAvatar /> {/* No fallback — shows default icon */}`}>
              <div className="flex items-center gap-4">
                <NovaAvatar fallback="Alice Brown" />
                <NovaAvatar fallback="Bob Carter" />
                <NovaAvatar fallback="Eve" />
                <NovaAvatar />
              </div>
            </ComponentPreview>
          </section>

          <section>
            <h2 id="api-reference" className="scroll-mt-20 text-xl font-semibold text-(--nova-text-primary) mb-4">API Reference</h2>
            <PropsTable data={[
              { name: 'src', type: 'string', description: 'Image URL for the avatar' },
              { name: 'alt', type: 'string', description: 'Alt text for the image' },
              { name: 'fallback', type: 'string', description: 'Full name used to derive fallback initials' },
              { name: 'size', type: "'xs' | 'sm' | 'md' | 'lg' | 'xl'", default: "'md'" },
              { name: 'novaTestId', type: 'string', default: "'avatar'" },
            ]} />
          </section>
        </div>
      </div>
      <OnThisPage headings={headings} />
    </div>
  );
}
