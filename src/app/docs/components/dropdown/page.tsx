'use client';

import { NovaDropdown } from '@nova-ui';
import { Breadcrumb } from '@/components/Breadcrumb';
import { ComponentPreview } from '@/components/ComponentPreview';
import { PropsTable } from '@/components/PropsTable';
import { OnThisPage } from '@/components/OnThisPage';

const headings = [
  { id: 'basic-usage', text: 'Basic Usage', level: 2 },
  { id: 'with-groups', text: 'With Groups & Labels', level: 2 },
  { id: 'danger-items', text: 'Danger Items', level: 2 },
  { id: 'align-right', text: 'Right-aligned Menu', level: 2 },
  { id: 'api-reference', text: 'API Reference', level: 2 },
];

export default function DropdownPage() {
  return (
    <div className="flex gap-10">
      <div className="min-w-0 flex-1">
        <Breadcrumb items={[{ label: 'Docs', href: '/docs/getting-started' }, { label: 'Components', href: '/docs/components/button' }, { label: 'Dropdown' }]} />

        <h1 className="text-3xl font-bold tracking-tight text-(--nova-text-primary)">Dropdown</h1>
        <p className="mt-2 text-lg text-(--nova-text-secondary) leading-relaxed">A compound component that reveals a floating menu of actions when the trigger is clicked.</p>

        <div className="mt-8 space-y-10">
          <section>
            <h2 id="basic-usage" className="scroll-mt-20 text-xl font-semibold text-(--nova-text-primary) mb-4">Basic Usage</h2>
            <ComponentPreview code={`<NovaDropdown>\n  <NovaDropdown.Trigger>Actions</NovaDropdown.Trigger>\n  <NovaDropdown.Menu>\n    <NovaDropdown.Item>Edit</NovaDropdown.Item>\n    <NovaDropdown.Item>Duplicate</NovaDropdown.Item>\n    <NovaDropdown.Separator />\n    <NovaDropdown.Item variant="danger">Delete</NovaDropdown.Item>\n  </NovaDropdown.Menu>\n</NovaDropdown>`}>
              <NovaDropdown>
                <NovaDropdown.Trigger>Actions</NovaDropdown.Trigger>
                <NovaDropdown.Menu>
                  <NovaDropdown.Item>Edit</NovaDropdown.Item>
                  <NovaDropdown.Item>Duplicate</NovaDropdown.Item>
                  <NovaDropdown.Separator />
                  <NovaDropdown.Item variant="danger">Delete</NovaDropdown.Item>
                </NovaDropdown.Menu>
              </NovaDropdown>
            </ComponentPreview>
          </section>

          <section>
            <h2 id="with-groups" className="scroll-mt-20 text-xl font-semibold text-(--nova-text-primary) mb-4">With Groups &amp; Labels</h2>
            <ComponentPreview code={`<NovaDropdown>\n  <NovaDropdown.Trigger>Account</NovaDropdown.Trigger>\n  <NovaDropdown.Menu>\n    <NovaDropdown.Label>Account</NovaDropdown.Label>\n    <NovaDropdown.Item>Profile</NovaDropdown.Item>\n    <NovaDropdown.Item>Settings</NovaDropdown.Item>\n    <NovaDropdown.Separator />\n    <NovaDropdown.Label>Session</NovaDropdown.Label>\n    <NovaDropdown.Item variant="danger">Sign out</NovaDropdown.Item>\n  </NovaDropdown.Menu>\n</NovaDropdown>`}>
              <NovaDropdown>
                <NovaDropdown.Trigger>Account</NovaDropdown.Trigger>
                <NovaDropdown.Menu>
                  <NovaDropdown.Label>Account</NovaDropdown.Label>
                  <NovaDropdown.Item>Profile</NovaDropdown.Item>
                  <NovaDropdown.Item>Settings</NovaDropdown.Item>
                  <NovaDropdown.Separator />
                  <NovaDropdown.Label>Session</NovaDropdown.Label>
                  <NovaDropdown.Item variant="danger">Sign out</NovaDropdown.Item>
                </NovaDropdown.Menu>
              </NovaDropdown>
            </ComponentPreview>
          </section>

          <section>
            <h2 id="danger-items" className="scroll-mt-20 text-xl font-semibold text-(--nova-text-primary) mb-4">Danger Items</h2>
            <ComponentPreview code={`<NovaDropdown.Item variant="danger">Delete account</NovaDropdown.Item>`}>
              <NovaDropdown>
                <NovaDropdown.Trigger>More</NovaDropdown.Trigger>
                <NovaDropdown.Menu>
                  <NovaDropdown.Item>View</NovaDropdown.Item>
                  <NovaDropdown.Item disabled>Archive (disabled)</NovaDropdown.Item>
                  <NovaDropdown.Separator />
                  <NovaDropdown.Item variant="danger">Delete account</NovaDropdown.Item>
                </NovaDropdown.Menu>
              </NovaDropdown>
            </ComponentPreview>
          </section>

          <section>
            <h2 id="align-right" className="scroll-mt-20 text-xl font-semibold text-(--nova-text-primary) mb-4">Right-aligned Menu</h2>
            <ComponentPreview code={`<NovaDropdown>\n  <NovaDropdown.Trigger>Options</NovaDropdown.Trigger>\n  <NovaDropdown.Menu align="right">\n    <NovaDropdown.Item>Item 1</NovaDropdown.Item>\n  </NovaDropdown.Menu>\n</NovaDropdown>`}>
              <div className="flex justify-end">
                <NovaDropdown>
                  <NovaDropdown.Trigger>Options</NovaDropdown.Trigger>
                  <NovaDropdown.Menu align="right">
                    <NovaDropdown.Item>Item 1</NovaDropdown.Item>
                    <NovaDropdown.Item>Item 2</NovaDropdown.Item>
                  </NovaDropdown.Menu>
                </NovaDropdown>
              </div>
            </ComponentPreview>
          </section>

          <section>
            <h2 id="api-reference" className="scroll-mt-20 text-xl font-semibold text-(--nova-text-primary) mb-4">API Reference</h2>
            <h3 className="mb-2 text-base font-semibold text-(--nova-text-primary)">NovaDropdown (Root)</h3>
            <PropsTable data={[
              { name: 'children', type: 'ReactNode' },
              { name: 'novaTestId', type: 'string', default: "'dropdown'" },
            ]} />
            <h3 className="mb-2 mt-6 text-base font-semibold text-(--nova-text-primary)">NovaDropdown.Menu</h3>
            <PropsTable data={[
              { name: 'align', type: "'left' | 'right'", default: "'left'", description: 'Alignment of the menu relative to the trigger' },
            ]} />
            <h3 className="mb-2 mt-6 text-base font-semibold text-(--nova-text-primary)">NovaDropdown.Item</h3>
            <PropsTable data={[
              { name: 'onClick', type: '() => void' },
              { name: 'disabled', type: 'boolean', default: 'false' },
              { name: 'variant', type: "'default' | 'danger'", default: "'default'" },
              { name: 'icon', type: 'ReactNode', description: 'Optional leading icon' },
            ]} />
          </section>
        </div>
      </div>
      <OnThisPage headings={headings} />
    </div>
  );
}
