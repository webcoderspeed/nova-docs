'use client';

import { NovaButton } from '@nova-ui';
import { Breadcrumb } from '@/components/Breadcrumb';
import { ComponentPreview } from '@/components/ComponentPreview';
import { PropsTable } from '@/components/PropsTable';
import { OnThisPage } from '@/components/OnThisPage';

const headings = [
  { id: 'variants', text: 'Variants', level: 2 },
  { id: 'outline', text: 'Outline', level: 2 },
  { id: 'ghost', text: 'Ghost', level: 2 },
  { id: 'link', text: 'Link', level: 2 },
  { id: 'danger', text: 'Danger', level: 2 },
  { id: 'sizes', text: 'Sizes', level: 2 },
  { id: 'with-icon', text: 'With Icon', level: 2 },
  { id: 'icon-only', text: 'Icon Only', level: 2 },
  { id: 'shape', text: 'Shape', level: 2 },
  { id: 'block', text: 'Block / Full Width', level: 2 },
  { id: 'loading', text: 'Loading', level: 2 },
  { id: 'disabled', text: 'Disabled', level: 2 },
  { id: 'polymorphic', text: 'Polymorphic (as prop)', level: 2 },
  { id: 'api-reference', text: 'API Reference', level: 2 },
];

function ChevronRightIcon() {
  return (
    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  );
}

function PlusIcon() {
  return (
    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
    </svg>
  );
}

function DownloadIcon() {
  return (
    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 15V3" />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <circle cx="11" cy="11" r="8" />
      <path strokeLinecap="round" d="M21 21l-4.35-4.35" />
    </svg>
  );
}

function TrashIcon() {
  return (
    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
    </svg>
  );
}

export default function ButtonPage() {
  return (
    <div className="flex gap-10">
      <div className="min-w-0 flex-1">
        <Breadcrumb
          items={[
            { label: 'Docs', href: '/docs/getting-started' },
            { label: 'Components', href: '/docs/components/button' },
            { label: 'Button' },
          ]}
        />

        <h1 className="text-3xl font-bold tracking-tight text-(--nova-text-primary)">
          Button
        </h1>
        <p className="mt-2 text-lg text-(--nova-text-secondary) leading-relaxed">
          Displays a button or a component that looks like a button. Supports 7 variants, 5 sizes,
          icon-only, shapes, block mode, loading state, and polymorphic rendering.
        </p>

        <div className="mt-8 space-y-10">
          {/* All Variants */}
          <section>
            <h2 id="variants" className="scroll-mt-20 text-xl font-semibold text-(--nova-text-primary) mb-4">
              Variants
            </h2>
            <ComponentPreview
              code={`<NovaButton variant="primary">Primary</NovaButton>
<NovaButton variant="secondary">Secondary</NovaButton>
<NovaButton variant="outline">Outline</NovaButton>
<NovaButton variant="ghost">Ghost</NovaButton>
<NovaButton variant="link">Link</NovaButton>
<NovaButton variant="danger">Danger</NovaButton>
<NovaButton variant="danger-outline">Danger Outline</NovaButton>`}
            >
              <div className="flex items-center gap-3 flex-wrap">
                <NovaButton variant="primary">Primary</NovaButton>
                <NovaButton variant="secondary">Secondary</NovaButton>
                <NovaButton variant="outline">Outline</NovaButton>
                <NovaButton variant="ghost">Ghost</NovaButton>
                <NovaButton variant="link">Link</NovaButton>
                <NovaButton variant="danger">Danger</NovaButton>
                <NovaButton variant="danger-outline">Danger Outline</NovaButton>
              </div>
            </ComponentPreview>
          </section>

          {/* Outline */}
          <section>
            <h2 id="outline" className="scroll-mt-20 text-xl font-semibold text-(--nova-text-primary) mb-4">
              Outline
            </h2>
            <ComponentPreview
              code={`<NovaButton variant="outline">Outline</NovaButton>`}
            >
              <NovaButton variant="outline">Outline</NovaButton>
            </ComponentPreview>
          </section>

          {/* Ghost */}
          <section>
            <h2 id="ghost" className="scroll-mt-20 text-xl font-semibold text-(--nova-text-primary) mb-4">
              Ghost
            </h2>
            <ComponentPreview
              code={`<NovaButton variant="ghost">Ghost</NovaButton>`}
            >
              <NovaButton variant="ghost">Ghost</NovaButton>
            </ComponentPreview>
          </section>

          {/* Link */}
          <section>
            <h2 id="link" className="scroll-mt-20 text-xl font-semibold text-(--nova-text-primary) mb-4">
              Link
            </h2>
            <ComponentPreview
              code={`<NovaButton variant="link">Link Button</NovaButton>`}
            >
              <NovaButton variant="link">Link Button</NovaButton>
            </ComponentPreview>
          </section>

          {/* Danger */}
          <section>
            <h2 id="danger" className="scroll-mt-20 text-xl font-semibold text-(--nova-text-primary) mb-4">
              Danger
            </h2>
            <ComponentPreview
              code={`<NovaButton variant="danger">Delete</NovaButton>
<NovaButton variant="danger-outline">Delete</NovaButton>`}
            >
              <div className="flex items-center gap-3">
                <NovaButton variant="danger">Delete</NovaButton>
                <NovaButton variant="danger-outline">Delete</NovaButton>
              </div>
            </ComponentPreview>
          </section>

          {/* Sizes */}
          <section>
            <h2 id="sizes" className="scroll-mt-20 text-xl font-semibold text-(--nova-text-primary) mb-4">
              Sizes
            </h2>
            <ComponentPreview
              code={`<NovaButton size="xs">Extra Small</NovaButton>
<NovaButton size="sm">Small</NovaButton>
<NovaButton size="md">Medium</NovaButton>
<NovaButton size="lg">Large</NovaButton>
<NovaButton size="icon"><PlusIcon /></NovaButton>`}
            >
              <div className="flex items-center gap-3">
                <NovaButton size="xs">Extra Small</NovaButton>
                <NovaButton size="sm">Small</NovaButton>
                <NovaButton size="md">Medium</NovaButton>
                <NovaButton size="lg">Large</NovaButton>
                <NovaButton size="icon"><PlusIcon /></NovaButton>
              </div>
            </ComponentPreview>
          </section>

          {/* With Icon */}
          <section>
            <h2 id="with-icon" className="scroll-mt-20 text-xl font-semibold text-(--nova-text-primary) mb-4">
              With Icon
            </h2>
            <ComponentPreview
              code={`<NovaButton leftIcon={<MailIcon />}>
  Login with Email
</NovaButton>

<NovaButton variant="secondary" rightIcon={<ChevronRightIcon />}>
  Next Step
</NovaButton>

<NovaButton variant="outline" leftIcon={<DownloadIcon />}>
  Download
</NovaButton>`}
            >
              <div className="flex items-center gap-3 flex-wrap">
                <NovaButton leftIcon={<MailIcon />}>Login with Email</NovaButton>
                <NovaButton variant="secondary" rightIcon={<ChevronRightIcon />}>Next Step</NovaButton>
                <NovaButton variant="outline" leftIcon={<DownloadIcon />}>Download</NovaButton>
              </div>
            </ComponentPreview>
          </section>

          {/* Icon Only */}
          <section>
            <h2 id="icon-only" className="scroll-mt-20 text-xl font-semibold text-(--nova-text-primary) mb-4">
              Icon Only
            </h2>
            <p className="mb-3 text-sm text-(--nova-text-secondary)">
              Use <code className="rounded bg-(--nova-bg-tertiary) px-1.5 py-0.5 text-xs font-mono text-(--nova-color-primary)">iconOnly</code> or <code className="rounded bg-(--nova-bg-tertiary) px-1.5 py-0.5 text-xs font-mono text-(--nova-color-primary)">size=&quot;icon&quot;</code> for
              square icon buttons.
            </p>
            <ComponentPreview
              code={`<NovaButton iconOnly variant="primary"><PlusIcon /></NovaButton>
<NovaButton iconOnly variant="secondary"><SearchIcon /></NovaButton>
<NovaButton iconOnly variant="outline"><MailIcon /></NovaButton>
<NovaButton iconOnly variant="ghost"><TrashIcon /></NovaButton>
<NovaButton iconOnly variant="danger" shape="circle"><TrashIcon /></NovaButton>`}
            >
              <div className="flex items-center gap-3">
                <NovaButton iconOnly variant="primary"><PlusIcon /></NovaButton>
                <NovaButton iconOnly variant="secondary"><SearchIcon /></NovaButton>
                <NovaButton iconOnly variant="outline"><MailIcon /></NovaButton>
                <NovaButton iconOnly variant="ghost"><TrashIcon /></NovaButton>
                <NovaButton iconOnly variant="danger" shape="circle"><TrashIcon /></NovaButton>
              </div>
            </ComponentPreview>
          </section>

          {/* Shape */}
          <section>
            <h2 id="shape" className="scroll-mt-20 text-xl font-semibold text-(--nova-text-primary) mb-4">
              Shape
            </h2>
            <ComponentPreview
              code={`<NovaButton shape="default">Default</NovaButton>
<NovaButton shape="round">Round</NovaButton>
<NovaButton shape="circle" iconOnly><PlusIcon /></NovaButton>`}
            >
              <div className="flex items-center gap-3">
                <NovaButton shape="default">Default</NovaButton>
                <NovaButton shape="round">Round</NovaButton>
                <NovaButton shape="circle" iconOnly><PlusIcon /></NovaButton>
              </div>
            </ComponentPreview>
          </section>

          {/* Block */}
          <section>
            <h2 id="block" className="scroll-mt-20 text-xl font-semibold text-(--nova-text-primary) mb-4">
              Block / Full Width
            </h2>
            <ComponentPreview
              code={`<NovaButton block>Full Width Primary</NovaButton>
<NovaButton block variant="secondary">Full Width Secondary</NovaButton>
<NovaButton block variant="danger">Full Width Danger</NovaButton>`}
            >
              <div className="flex flex-col gap-3 w-full max-w-md">
                <NovaButton block>Full Width Primary</NovaButton>
                <NovaButton block variant="secondary">Full Width Secondary</NovaButton>
                <NovaButton block variant="danger">Full Width Danger</NovaButton>
              </div>
            </ComponentPreview>
          </section>

          {/* Loading */}
          <section>
            <h2 id="loading" className="scroll-mt-20 text-xl font-semibold text-(--nova-text-primary) mb-4">
              Loading
            </h2>
            <p className="mb-3 text-sm text-(--nova-text-secondary)">
              The <code className="rounded bg-(--nova-bg-tertiary) px-1.5 py-0.5 text-xs font-mono text-(--nova-color-primary)">loading</code> prop
              replaces the left icon with a spinner and disables the button. Sets <code className="rounded bg-(--nova-bg-tertiary) px-1.5 py-0.5 text-xs font-mono">aria-busy</code>.
            </p>
            <ComponentPreview
              code={`<NovaButton loading>Loading</NovaButton>
<NovaButton loading variant="secondary">Please wait</NovaButton>
<NovaButton loading variant="outline">Saving...</NovaButton>`}
            >
              <div className="flex items-center gap-3">
                <NovaButton loading>Loading</NovaButton>
                <NovaButton loading variant="secondary">Please wait</NovaButton>
                <NovaButton loading variant="outline">Saving...</NovaButton>
              </div>
            </ComponentPreview>
          </section>

          {/* Disabled */}
          <section>
            <h2 id="disabled" className="scroll-mt-20 text-xl font-semibold text-(--nova-text-primary) mb-4">
              Disabled
            </h2>
            <ComponentPreview
              code={`<NovaButton disabled>Primary</NovaButton>
<NovaButton disabled variant="secondary">Secondary</NovaButton>
<NovaButton disabled variant="outline">Outline</NovaButton>
<NovaButton disabled variant="danger">Danger</NovaButton>`}
            >
              <div className="flex items-center gap-3 flex-wrap">
                <NovaButton disabled>Primary</NovaButton>
                <NovaButton disabled variant="secondary">Secondary</NovaButton>
                <NovaButton disabled variant="outline">Outline</NovaButton>
                <NovaButton disabled variant="danger">Danger</NovaButton>
              </div>
            </ComponentPreview>
          </section>

          {/* Polymorphic */}
          <section>
            <h2 id="polymorphic" className="scroll-mt-20 text-xl font-semibold text-(--nova-text-primary) mb-4">
              Polymorphic (as prop)
            </h2>
            <p className="mb-3 text-sm text-(--nova-text-secondary)">
              Render the button as any HTML element or React component using the <code className="rounded bg-(--nova-bg-tertiary) px-1.5 py-0.5 text-xs font-mono text-(--nova-color-primary)">as</code> prop.
              All props from the target element are forwarded.
            </p>
            <ComponentPreview
              code={`<NovaButton as="a" href="/link" variant="secondary">
  Renders as <a>
</NovaButton>`}
            >
              <div className="flex items-center gap-3">
                <NovaButton as="a" href="#" variant="secondary">
                  Renders as {'<a>'}
                </NovaButton>
              </div>
            </ComponentPreview>
          </section>

          {/* API Reference */}
          <section>
            <h2 id="api-reference" className="scroll-mt-20 text-xl font-semibold text-(--nova-text-primary) mb-4">
              API Reference
            </h2>
            <PropsTable
              data={[
                {
                  name: 'variant',
                  type: "'primary' | 'secondary' | 'outline' | 'ghost' | 'link' | 'danger' | 'danger-outline'",
                  default: "'primary'",
                  description: 'Visual style of the button',
                },
                {
                  name: 'size',
                  type: "'xs' | 'sm' | 'md' | 'lg' | 'icon'",
                  default: "'md'",
                  description: "Height & padding. 'icon' creates a square button.",
                },
                {
                  name: 'shape',
                  type: "'default' | 'round' | 'circle'",
                  default: "'default'",
                  description: 'Border radius style',
                },
                {
                  name: 'loading',
                  type: 'boolean',
                  default: 'false',
                  description: 'Show spinner, disable clicks, set aria-busy',
                },
                {
                  name: 'disabled',
                  type: 'boolean',
                  default: 'false',
                  description: 'Disable the button',
                },
                {
                  name: 'block',
                  type: 'boolean',
                  default: 'false',
                  description: 'Full-width button (w-full)',
                },
                {
                  name: 'iconOnly',
                  type: 'boolean',
                  default: 'false',
                  description: 'Square icon button (forces size="icon")',
                },
                {
                  name: 'as',
                  type: 'ElementType',
                  default: "'button'",
                  description: 'Render as a different element (e.g. "a", Link)',
                },
                {
                  name: 'leftIcon',
                  type: 'ReactNode',
                  description: 'Icon rendered before children',
                },
                {
                  name: 'rightIcon',
                  type: 'ReactNode',
                  description: 'Icon rendered after children',
                },
                {
                  name: 'novaTestId',
                  type: 'string',
                  default: "'button'",
                  description: 'data-nova-test attribute value',
                },
              ]}
            />
          </section>
        </div>
      </div>

      <OnThisPage headings={headings} />
    </div>
  );
}
