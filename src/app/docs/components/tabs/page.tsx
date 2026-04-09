'use client';

import { NovaTabs } from '@nova-ui';
import { Breadcrumb } from '@/components/Breadcrumb';
import { ComponentPreview } from '@/components/ComponentPreview';
import { PropsTable } from '@/components/PropsTable';
import { OnThisPage } from '@/components/OnThisPage';

const headings = [
  { id: 'basic-usage', text: 'Basic Usage', level: 2 },
  { id: 'disabled-tab', text: 'Disabled Tab', level: 2 },
  { id: 'composition', text: 'Composition', level: 2 },
  { id: 'api-reference', text: 'API Reference', level: 2 },
];

export default function TabsPage() {
  return (
    <div className="flex gap-10">
      <div className="min-w-0 flex-1">
        <Breadcrumb items={[{ label: 'Docs', href: '/docs/getting-started' }, { label: 'Components', href: '/docs/components/button' }, { label: 'Tabs' }]} />

        <h1 className="text-3xl font-bold tracking-tight text-(--nova-text-primary)">Tabs</h1>
        <p className="mt-2 text-lg text-(--nova-text-secondary) leading-relaxed">Compound tab component with keyboard navigation, controlled/uncontrolled modes, and accessible ARIA roles.</p>

        <div className="mt-8 space-y-10">
          <section>
            <h2 id="basic-usage" className="scroll-mt-20 text-xl font-semibold text-(--nova-text-primary) mb-4">Basic Usage</h2>
            <ComponentPreview code={`<NovaTabs defaultValue="account">\n  <NovaTabs.List>\n    <NovaTabs.Trigger value="account">Account</NovaTabs.Trigger>\n    <NovaTabs.Trigger value="security">Security</NovaTabs.Trigger>\n    <NovaTabs.Trigger value="notifications">Notifications</NovaTabs.Trigger>\n  </NovaTabs.List>\n  <NovaTabs.Content value="account">\n    <p>Manage your account settings and preferences.</p>\n  </NovaTabs.Content>\n  <NovaTabs.Content value="security">\n    <p>Update your password and enable two-factor authentication.</p>\n  </NovaTabs.Content>\n  <NovaTabs.Content value="notifications">\n    <p>Choose which notifications you want to receive.</p>\n  </NovaTabs.Content>\n</NovaTabs>`}>
              <NovaTabs defaultValue="account">
                <NovaTabs.List>
                  <NovaTabs.Trigger value="account">Account</NovaTabs.Trigger>
                  <NovaTabs.Trigger value="security">Security</NovaTabs.Trigger>
                  <NovaTabs.Trigger value="notifications">Notifications</NovaTabs.Trigger>
                </NovaTabs.List>
                <NovaTabs.Content value="account">
                  <p className="text-sm text-(--nova-text-primary)">Manage your account settings and preferences.</p>
                </NovaTabs.Content>
                <NovaTabs.Content value="security">
                  <p className="text-sm text-(--nova-text-primary)">Update your password and enable two-factor authentication.</p>
                </NovaTabs.Content>
                <NovaTabs.Content value="notifications">
                  <p className="text-sm text-(--nova-text-primary)">Choose which notifications you want to receive.</p>
                </NovaTabs.Content>
              </NovaTabs>
            </ComponentPreview>
          </section>

          <section>
            <h2 id="disabled-tab" className="scroll-mt-20 text-xl font-semibold text-(--nova-text-primary) mb-4">Disabled Tab</h2>
            <ComponentPreview code={`<NovaTabs defaultValue="active">\n  <NovaTabs.List>\n    <NovaTabs.Trigger value="active">Active</NovaTabs.Trigger>\n    <NovaTabs.Trigger value="disabled" disabled>Disabled</NovaTabs.Trigger>\n    <NovaTabs.Trigger value="other">Other</NovaTabs.Trigger>\n  </NovaTabs.List>\n  <NovaTabs.Content value="active">\n    <p>This tab is active.</p>\n  </NovaTabs.Content>\n  <NovaTabs.Content value="other">\n    <p>Another tab panel.</p>\n  </NovaTabs.Content>\n</NovaTabs>`}>
              <NovaTabs defaultValue="active">
                <NovaTabs.List>
                  <NovaTabs.Trigger value="active">Active</NovaTabs.Trigger>
                  <NovaTabs.Trigger value="disabled" disabled>Disabled</NovaTabs.Trigger>
                  <NovaTabs.Trigger value="other">Other</NovaTabs.Trigger>
                </NovaTabs.List>
                <NovaTabs.Content value="active">
                  <p className="text-sm text-(--nova-text-primary)">This tab is active.</p>
                </NovaTabs.Content>
                <NovaTabs.Content value="other">
                  <p className="text-sm text-(--nova-text-primary)">Another tab panel.</p>
                </NovaTabs.Content>
              </NovaTabs>
            </ComponentPreview>
          </section>

          <section>
            <h2 id="composition" className="scroll-mt-20 text-xl font-semibold text-(--nova-text-primary) mb-4">Composition</h2>
            <p className="mb-4 text-sm text-(--nova-text-secondary)">
              NovaTabs uses a compound component pattern. The root <code>NovaTabs</code> provides context, while <code>NovaTabs.List</code>, <code>NovaTabs.Trigger</code>, and <code>NovaTabs.Content</code> compose the UI. Use the <code>value</code> and <code>onChange</code> props for controlled mode, or <code>defaultValue</code> for uncontrolled.
            </p>
            <ComponentPreview code={`// Controlled mode\nconst [tab, setTab] = useState('one');\n\n<NovaTabs value={tab} onChange={setTab} defaultValue="one">\n  <NovaTabs.List>\n    <NovaTabs.Trigger value="one">Tab One</NovaTabs.Trigger>\n    <NovaTabs.Trigger value="two">Tab Two</NovaTabs.Trigger>\n  </NovaTabs.List>\n  <NovaTabs.Content value="one">Content one</NovaTabs.Content>\n  <NovaTabs.Content value="two">Content two</NovaTabs.Content>\n</NovaTabs>`}>
              <NovaTabs defaultValue="one">
                <NovaTabs.List>
                  <NovaTabs.Trigger value="one">Tab One</NovaTabs.Trigger>
                  <NovaTabs.Trigger value="two">Tab Two</NovaTabs.Trigger>
                </NovaTabs.List>
                <NovaTabs.Content value="one">
                  <p className="text-sm text-(--nova-text-primary)">Content for tab one.</p>
                </NovaTabs.Content>
                <NovaTabs.Content value="two">
                  <p className="text-sm text-(--nova-text-primary)">Content for tab two.</p>
                </NovaTabs.Content>
              </NovaTabs>
            </ComponentPreview>
          </section>

          <section>
            <h2 id="api-reference" className="scroll-mt-20 text-xl font-semibold text-(--nova-text-primary) mb-4">API Reference</h2>
            <p className="mb-3 text-sm font-medium text-(--nova-text-secondary)">NovaTabs (root)</p>
            <PropsTable data={[
              { name: 'defaultValue', type: 'string', description: 'Initial active tab value (required)' },
              { name: 'value', type: 'string', description: 'Controlled active tab value' },
              { name: 'onChange', type: '(value: string) => void', description: 'Callback when the active tab changes' },
              { name: 'className', type: 'string' },
              { name: 'novaTestId', type: 'string', default: "'tabs'" },
            ]} />

            <p className="mt-6 mb-3 text-sm font-medium text-(--nova-text-secondary)">NovaTabs.Trigger</p>
            <PropsTable data={[
              { name: 'value', type: 'string', description: 'Tab identifier (required, must match a Content value)' },
              { name: 'disabled', type: 'boolean', default: 'false', description: 'Prevent interaction with this tab' },
              { name: 'novaTestId', type: 'string' },
            ]} />

            <p className="mt-6 mb-3 text-sm font-medium text-(--nova-text-secondary)">NovaTabs.Content</p>
            <PropsTable data={[
              { name: 'value', type: 'string', description: 'Tab identifier to show this panel for (required)' },
              { name: 'novaTestId', type: 'string' },
            ]} />
          </section>
        </div>
      </div>
      <OnThisPage headings={headings} />
    </div>
  );
}
