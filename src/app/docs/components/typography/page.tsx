'use client';

import { NovaHeading, NovaText } from '@nova-ui';
import { Breadcrumb } from '@/components/Breadcrumb';
import { ComponentPreview } from '@/components/ComponentPreview';
import { PropsTable } from '@/components/PropsTable';
import { OnThisPage } from '@/components/OnThisPage';

const headings = [
  { id: 'heading-levels', text: 'Heading Levels', level: 2 },
  { id: 'text-sizes-colors', text: 'Text Sizes & Colors', level: 2 },
  { id: 'font-weights', text: 'Font Weights', level: 2 },
  { id: 'heading-api', text: 'NovaHeading API', level: 2 },
  { id: 'text-api', text: 'NovaText API', level: 2 },
];

export default function TypographyPage() {
  return (
    <div className="flex gap-10">
      <div className="min-w-0 flex-1">
        <Breadcrumb items={[{ label: 'Docs', href: '/docs/getting-started' }, { label: 'Components', href: '/docs/components/button' }, { label: 'Typography' }]} />

        <h1 className="text-3xl font-bold tracking-tight text-(--nova-text-primary)">Typography</h1>
        <p className="mt-2 text-lg text-(--nova-text-secondary) leading-relaxed">Heading and text components for consistent typographic hierarchy and styling.</p>

        <div className="mt-8 space-y-10">
          <section>
            <h2 id="heading-levels" className="scroll-mt-20 text-xl font-semibold text-(--nova-text-primary) mb-4">Heading Levels</h2>
            <ComponentPreview code={`<NovaHeading level={1}>Heading 1</NovaHeading>
<NovaHeading level={2}>Heading 2</NovaHeading>
<NovaHeading level={3}>Heading 3</NovaHeading>
<NovaHeading level={4}>Heading 4</NovaHeading>
<NovaHeading level={5}>Heading 5</NovaHeading>
<NovaHeading level={6}>Heading 6</NovaHeading>`}>
              <div className="space-y-3">
                <NovaHeading level={1}>Heading 1</NovaHeading>
                <NovaHeading level={2}>Heading 2</NovaHeading>
                <NovaHeading level={3}>Heading 3</NovaHeading>
                <NovaHeading level={4}>Heading 4</NovaHeading>
                <NovaHeading level={5}>Heading 5</NovaHeading>
                <NovaHeading level={6}>Heading 6</NovaHeading>
              </div>
            </ComponentPreview>
          </section>

          <section>
            <h2 id="text-sizes-colors" className="scroll-mt-20 text-xl font-semibold text-(--nova-text-primary) mb-4">Text Sizes &amp; Colors</h2>
            <ComponentPreview code={`<NovaText size="xs">Extra small text</NovaText>
<NovaText size="sm">Small text</NovaText>
<NovaText size="base">Base text</NovaText>
<NovaText size="lg">Large text</NovaText>
<NovaText size="xl">Extra large text</NovaText>

<NovaText color="primary">Primary color</NovaText>
<NovaText color="secondary">Secondary color</NovaText>
<NovaText color="error">Error color</NovaText>`}>
              <div className="space-y-3">
                <div className="flex flex-wrap items-baseline gap-4">
                  <NovaText size="xs">Extra small text</NovaText>
                  <NovaText size="sm">Small text</NovaText>
                  <NovaText size="base">Base text</NovaText>
                  <NovaText size="lg">Large text</NovaText>
                  <NovaText size="xl">Extra large text</NovaText>
                </div>
                <div className="flex flex-wrap gap-4">
                  <NovaText color="primary">Primary color</NovaText>
                  <NovaText color="secondary">Secondary color</NovaText>
                  <NovaText color="error">Error color</NovaText>
                </div>
              </div>
            </ComponentPreview>
          </section>

          <section>
            <h2 id="font-weights" className="scroll-mt-20 text-xl font-semibold text-(--nova-text-primary) mb-4">Font Weights</h2>
            <ComponentPreview code={`<NovaText weight="light">Light weight</NovaText>
<NovaText weight="normal">Normal weight</NovaText>
<NovaText weight="medium">Medium weight</NovaText>
<NovaText weight="semibold">Semibold weight</NovaText>
<NovaText weight="bold">Bold weight</NovaText>`}>
              <div className="flex flex-wrap gap-4">
                <NovaText weight="light">Light weight</NovaText>
                <NovaText weight="normal">Normal weight</NovaText>
                <NovaText weight="medium">Medium weight</NovaText>
                <NovaText weight="semibold">Semibold weight</NovaText>
                <NovaText weight="bold">Bold weight</NovaText>
              </div>
            </ComponentPreview>
          </section>

          <section>
            <h2 id="heading-api" className="scroll-mt-20 text-xl font-semibold text-(--nova-text-primary) mb-4">NovaHeading API</h2>
            <PropsTable data={[
              { name: 'level', type: '1 | 2 | 3 | 4 | 5 | 6', default: '2' },
              { name: 'as', type: 'ElementType', default: 'auto (h1-h6 based on level)' },
              { name: 'novaTestId', type: 'string', default: "'heading'" },
            ]} />
          </section>

          <section>
            <h2 id="text-api" className="scroll-mt-20 text-xl font-semibold text-(--nova-text-primary) mb-4">NovaText API</h2>
            <PropsTable data={[
              { name: 'as', type: 'ElementType', default: "'span'" },
              { name: 'size', type: "'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl'", default: "'base'" },
              { name: 'weight', type: "'thin' | 'light' | 'normal' | 'medium' | 'semibold' | 'bold' | 'extrabold'", default: "'normal'" },
              { name: 'color', type: "'primary' | 'secondary' | 'tertiary' | 'inverse' | 'link' | 'success' | 'error' | 'warning'", default: "'primary'" },
              { name: 'truncate', type: 'boolean', default: 'false' },
              { name: 'novaTestId', type: 'string', default: "'text'" },
            ]} />
          </section>
        </div>
      </div>
      <OnThisPage headings={headings} />
    </div>
  );
}
