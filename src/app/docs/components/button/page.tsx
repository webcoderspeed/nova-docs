'use client';

import { NovaButton } from '@nova-ui';
import { Breadcrumb } from '@/components/Breadcrumb';
import { ComponentPreview } from '@/components/ComponentPreview';
import { PropsTable } from '@/components/PropsTable';
import { OnThisPage } from '@/components/OnThisPage';

const headings = [
  { id: 'variants', text: 'Variants', level: 2 },
  { id: 'dashed', text: 'Dashed', level: 2 },
  { id: 'ghost', text: 'Ghost', level: 2 },
  { id: 'link', text: 'Link', level: 2 },
  { id: 'danger', text: 'Danger', level: 2 },
  { id: 'sizes', text: 'Sizes', level: 2 },
  { id: 'with-icon', text: 'With Icon', level: 2 },
  { id: 'icon-only', text: 'Icon Only', level: 2 },
  { id: 'shape', text: 'Shape', level: 2 },
  { id: 'block', text: 'Block / Full Width', level: 2 },
  { id: 'loading', text: 'Loading', level: 2 },
  { id: 'loading-custom', text: 'Loading — Custom Icon', level: 2 },
  { id: 'loading-delay', text: 'Loading — Delay', level: 2 },
  { id: 'html-type', text: 'HTML Type', level: 2 },
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

function StarIcon() {
  return (
    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}

function Code({ children }: { children: string }) {
  return (
    <code className="rounded bg-(--nova-bg-tertiary) px-1.5 py-0.5 text-xs font-mono text-(--nova-color-primary)">
      {children}
    </code>
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

        <h1 className="text-3xl font-bold tracking-tight text-(--nova-text-primary)">Button</h1>
        <p className="mt-2 text-lg text-(--nova-text-secondary) leading-relaxed">
          Triggers an operation. Supports 8 variants, 5 sizes, shapes, icon placement, block mode,
          loading state (with delay and custom icon), and polymorphic rendering.
        </p>

        <div className="mt-8 space-y-10">

          {/* All Variants */}
          <section>
            <h2 id="variants" className="scroll-mt-20 text-xl font-semibold text-(--nova-text-primary) mb-4">
              Variants
            </h2>
            <p className="mb-3 text-sm text-(--nova-text-secondary)">
              Eight visual styles covering the full spectrum from primary actions to destructive ones.
            </p>
            <ComponentPreview
              code={`<NovaButton variant="primary">Primary</NovaButton>
<NovaButton variant="secondary">Secondary</NovaButton>
<NovaButton variant="outline">Outline</NovaButton>
<NovaButton variant="dashed">Dashed</NovaButton>
<NovaButton variant="ghost">Ghost</NovaButton>
<NovaButton variant="link">Link</NovaButton>
<NovaButton variant="danger">Danger</NovaButton>
<NovaButton variant="danger-outline">Danger Outline</NovaButton>`}
            >
              <div className="flex items-center gap-3 flex-wrap">
                <NovaButton variant="primary">Primary</NovaButton>
                <NovaButton variant="secondary">Secondary</NovaButton>
                <NovaButton variant="outline">Outline</NovaButton>
                <NovaButton variant="dashed">Dashed</NovaButton>
                <NovaButton variant="ghost">Ghost</NovaButton>
                <NovaButton variant="link">Link</NovaButton>
                <NovaButton variant="danger">Danger</NovaButton>
                <NovaButton variant="danger-outline">Danger Outline</NovaButton>
              </div>
            </ComponentPreview>
          </section>

          {/* Dashed */}
          <section>
            <h2 id="dashed" className="scroll-mt-20 text-xl font-semibold text-(--nova-text-primary) mb-4">
              Dashed
            </h2>
            <p className="mb-3 text-sm text-(--nova-text-secondary)">
              Commonly used for adding more actions or placeholder-style triggers.
            </p>
            <ComponentPreview
              code={`<NovaButton variant="dashed">Add Item</NovaButton>
<NovaButton variant="dashed" leftIcon={<PlusIcon />}>New Section</NovaButton>`}
            >
              <div className="flex items-center gap-3">
                <NovaButton variant="dashed">Add Item</NovaButton>
                <NovaButton variant="dashed" leftIcon={<PlusIcon />}>New Section</NovaButton>
              </div>
            </ComponentPreview>
          </section>

          {/* Ghost */}
          <section>
            <h2 id="ghost" className="scroll-mt-20 text-xl font-semibold text-(--nova-text-primary) mb-4">
              Ghost
            </h2>
            <ComponentPreview code={`<NovaButton variant="ghost">Ghost</NovaButton>`}>
              <NovaButton variant="ghost">Ghost</NovaButton>
            </ComponentPreview>
          </section>

          {/* Link */}
          <section>
            <h2 id="link" className="scroll-mt-20 text-xl font-semibold text-(--nova-text-primary) mb-4">
              Link
            </h2>
            <ComponentPreview code={`<NovaButton variant="link">Link Button</NovaButton>`}>
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
              <div className="flex items-center gap-3 flex-wrap">
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
            <p className="mb-3 text-sm text-(--nova-text-secondary)">
              Use <Code>leftIcon</Code> or <Code>rightIcon</Code> to place icons before or after the label.
            </p>
            <ComponentPreview
              code={`<NovaButton leftIcon={<MailIcon />}>Login with Email</NovaButton>
<NovaButton variant="secondary" rightIcon={<ChevronRightIcon />}>Next Step</NovaButton>
<NovaButton variant="outline" leftIcon={<DownloadIcon />}>Download</NovaButton>`}
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
              Use <Code>iconOnly</Code> or <Code>{'size="icon"'}</Code> for square icon buttons.
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
<NovaButton block variant="dashed">Full Width Dashed</NovaButton>`}
            >
              <div className="flex flex-col gap-3 w-full max-w-md">
                <NovaButton block>Full Width Primary</NovaButton>
                <NovaButton block variant="secondary">Full Width Secondary</NovaButton>
                <NovaButton block variant="dashed">Full Width Dashed</NovaButton>
              </div>
            </ComponentPreview>
          </section>

          {/* Loading */}
          <section>
            <h2 id="loading" className="scroll-mt-20 text-xl font-semibold text-(--nova-text-primary) mb-4">
              Loading
            </h2>
            <p className="mb-3 text-sm text-(--nova-text-secondary)">
              Pass <Code>loading</Code> to show a spinner, disable the button, and set{' '}
              <Code>aria-busy</Code>. Replaces the left icon while active.
            </p>
            <ComponentPreview
              code={`<NovaButton loading>Loading</NovaButton>
<NovaButton loading variant="secondary">Please wait</NovaButton>
<NovaButton loading variant="outline">Saving...</NovaButton>
<NovaButton loading variant="dashed">Processing</NovaButton>`}
            >
              <div className="flex items-center gap-3 flex-wrap">
                <NovaButton loading>Loading</NovaButton>
                <NovaButton loading variant="secondary">Please wait</NovaButton>
                <NovaButton loading variant="outline">Saving...</NovaButton>
                <NovaButton loading variant="dashed">Processing</NovaButton>
              </div>
            </ComponentPreview>
          </section>

          {/* Loading — Custom Icon */}
          <section>
            <h2 id="loading-custom" className="scroll-mt-20 text-xl font-semibold text-(--nova-text-primary) mb-4">
              Loading — Custom Icon
            </h2>
            <p className="mb-3 text-sm text-(--nova-text-secondary)">
              Pass <Code>{'loading={{ icon: <Node /> }}'}</Code> to replace the default spinner with any icon.
            </p>
            <ComponentPreview
              code={`<NovaButton loading={{ icon: <StarIcon /> }}>
  Saving
</NovaButton>`}
            >
              <div className="flex items-center gap-3">
                <NovaButton loading={{ icon: <StarIcon /> }}>Saving</NovaButton>
              </div>
            </ComponentPreview>
          </section>

          {/* Loading — Delay */}
          <section>
            <h2 id="loading-delay" className="scroll-mt-20 text-xl font-semibold text-(--nova-text-primary) mb-4">
              Loading — Delay
            </h2>
            <p className="mb-3 text-sm text-(--nova-text-secondary)">
              Pass <Code>{'loading={{ delay: 800 }}'}</Code> to defer the spinner by a number of
              milliseconds. The button stays interactive until the delay elapses — useful to avoid
              flashing for fast operations.
            </p>
            <ComponentPreview
              code={`// Spinner appears after 800 ms
<NovaButton loading={{ delay: 800 }}>Submit</NovaButton>`}
            >
              <div className="flex items-center gap-3">
                <NovaButton loading={{ delay: 800 }}>Submit (delayed 800ms)</NovaButton>
              </div>
            </ComponentPreview>
          </section>

          {/* HTML Type */}
          <section>
            <h2 id="html-type" className="scroll-mt-20 text-xl font-semibold text-(--nova-text-primary) mb-4">
              HTML Type
            </h2>
            <p className="mb-3 text-sm text-(--nova-text-secondary)">
              Use <Code>htmlType</Code> to set the native <Code>type</Code> attribute (
              <Code>button</Code>, <Code>submit</Code>, <Code>reset</Code>). Defaults to{' '}
              <Code>button</Code> to prevent accidental form submissions. Automatically omitted when
              rendered as a non-button element.
            </p>
            <ComponentPreview
              code={`<form>
  <NovaButton htmlType="submit">Submit Form</NovaButton>
  <NovaButton htmlType="reset" variant="secondary">Reset</NovaButton>
</form>`}
            >
              <form onSubmit={(e) => e.preventDefault()} className="flex items-center gap-3">
                <NovaButton htmlType="submit">Submit Form</NovaButton>
                <NovaButton htmlType="reset" variant="secondary">Reset</NovaButton>
              </form>
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
<NovaButton disabled variant="dashed">Dashed</NovaButton>
<NovaButton disabled variant="danger">Danger</NovaButton>`}
            >
              <div className="flex items-center gap-3 flex-wrap">
                <NovaButton disabled>Primary</NovaButton>
                <NovaButton disabled variant="secondary">Secondary</NovaButton>
                <NovaButton disabled variant="outline">Outline</NovaButton>
                <NovaButton disabled variant="dashed">Dashed</NovaButton>
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
              Render as any HTML element or React component using the <Code>as</Code> prop. All
              props from the target element are forwarded and fully typed.
            </p>
            <ComponentPreview
              code={`<NovaButton as="a" href="#" variant="secondary">
  Renders as {'<a>'}
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
                  type: "'primary' | 'secondary' | 'outline' | 'dashed' | 'ghost' | 'link' | 'danger' | 'danger-outline'",
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
                  name: 'htmlType',
                  type: "'button' | 'submit' | 'reset'",
                  default: "'button'",
                  description: 'Native type attribute. Omitted when rendered as a non-button element.',
                },
                {
                  name: 'loading',
                  type: "boolean | { delay?: number; icon?: ReactNode }",
                  default: 'false',
                  description: 'Show spinner and disable. Object form supports delayed activation and a custom loading icon.',
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
                  name: 'leftIcon',
                  type: 'ReactNode',
                  description: 'Icon rendered before children. Hidden while loading.',
                },
                {
                  name: 'rightIcon',
                  type: 'ReactNode',
                  description: 'Icon rendered after children. Hidden while loading.',
                },
                {
                  name: 'as',
                  type: 'ElementType',
                  default: "'button'",
                  description: 'Render as a different element or component (e.g. "a", Link)',
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
