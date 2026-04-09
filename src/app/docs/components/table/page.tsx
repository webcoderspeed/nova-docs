'use client';

import { NovaTable } from '@nova-ui';
import { Breadcrumb } from '@/components/Breadcrumb';
import { ComponentPreview } from '@/components/ComponentPreview';
import { PropsTable } from '@/components/PropsTable';
import { OnThisPage } from '@/components/OnThisPage';

const headings = [
  { id: 'basic-table', text: 'Basic Table', level: 2 },
  { id: 'striped-and-bordered', text: 'Striped & Bordered', level: 2 },
  { id: 'compact', text: 'Compact', level: 2 },
  { id: 'api-reference', text: 'API Reference', level: 2 },
];

export default function TablePage() {
  return (
    <div className="flex gap-10">
      <div className="min-w-0 flex-1">
        <Breadcrumb items={[{ label: 'Docs', href: '/docs/getting-started' }, { label: 'Components', href: '/docs/components/button' }, { label: 'Table' }]} />

        <h1 className="text-3xl font-bold tracking-tight text-(--nova-text-primary)">Table</h1>
        <p className="mt-2 text-lg text-(--nova-text-secondary) leading-relaxed">Compound table component with striped rows, hover states, bordered and compact variants.</p>

        <div className="mt-8 space-y-10">
          <section>
            <h2 id="basic-table" className="scroll-mt-20 text-xl font-semibold text-(--nova-text-primary) mb-4">Basic Table</h2>
            <ComponentPreview code={`<NovaTable>\n  <NovaTable.Head>\n    <NovaTable.Row>\n      <NovaTable.HeaderCell>Name</NovaTable.HeaderCell>\n      <NovaTable.HeaderCell>Email</NovaTable.HeaderCell>\n      <NovaTable.HeaderCell>Role</NovaTable.HeaderCell>\n    </NovaTable.Row>\n  </NovaTable.Head>\n  <NovaTable.Body>\n    <NovaTable.Row>\n      <NovaTable.Cell>Alice Johnson</NovaTable.Cell>\n      <NovaTable.Cell>alice@example.com</NovaTable.Cell>\n      <NovaTable.Cell>Admin</NovaTable.Cell>\n    </NovaTable.Row>\n    <NovaTable.Row>\n      <NovaTable.Cell>Bob Smith</NovaTable.Cell>\n      <NovaTable.Cell>bob@example.com</NovaTable.Cell>\n      <NovaTable.Cell>Editor</NovaTable.Cell>\n    </NovaTable.Row>\n    <NovaTable.Row>\n      <NovaTable.Cell>Carol Lee</NovaTable.Cell>\n      <NovaTable.Cell>carol@example.com</NovaTable.Cell>\n      <NovaTable.Cell>Viewer</NovaTable.Cell>\n    </NovaTable.Row>\n  </NovaTable.Body>\n</NovaTable>`}>
              <NovaTable>
                <NovaTable.Head>
                  <NovaTable.Row>
                    <NovaTable.HeaderCell>Name</NovaTable.HeaderCell>
                    <NovaTable.HeaderCell>Email</NovaTable.HeaderCell>
                    <NovaTable.HeaderCell>Role</NovaTable.HeaderCell>
                  </NovaTable.Row>
                </NovaTable.Head>
                <NovaTable.Body>
                  <NovaTable.Row>
                    <NovaTable.Cell>Alice Johnson</NovaTable.Cell>
                    <NovaTable.Cell>alice@example.com</NovaTable.Cell>
                    <NovaTable.Cell>Admin</NovaTable.Cell>
                  </NovaTable.Row>
                  <NovaTable.Row>
                    <NovaTable.Cell>Bob Smith</NovaTable.Cell>
                    <NovaTable.Cell>bob@example.com</NovaTable.Cell>
                    <NovaTable.Cell>Editor</NovaTable.Cell>
                  </NovaTable.Row>
                  <NovaTable.Row>
                    <NovaTable.Cell>Carol Lee</NovaTable.Cell>
                    <NovaTable.Cell>carol@example.com</NovaTable.Cell>
                    <NovaTable.Cell>Viewer</NovaTable.Cell>
                  </NovaTable.Row>
                </NovaTable.Body>
              </NovaTable>
            </ComponentPreview>
          </section>

          <section>
            <h2 id="striped-and-bordered" className="scroll-mt-20 text-xl font-semibold text-(--nova-text-primary) mb-4">Striped & Bordered</h2>
            <ComponentPreview code={`<NovaTable striped bordered hoverable>\n  <NovaTable.Head>\n    <NovaTable.Row>\n      <NovaTable.HeaderCell>Name</NovaTable.HeaderCell>\n      <NovaTable.HeaderCell>Email</NovaTable.HeaderCell>\n      <NovaTable.HeaderCell>Role</NovaTable.HeaderCell>\n    </NovaTable.Row>\n  </NovaTable.Head>\n  <NovaTable.Body>\n    <NovaTable.Row>\n      <NovaTable.Cell>Alice Johnson</NovaTable.Cell>\n      <NovaTable.Cell>alice@example.com</NovaTable.Cell>\n      <NovaTable.Cell>Admin</NovaTable.Cell>\n    </NovaTable.Row>\n    <NovaTable.Row>\n      <NovaTable.Cell>Bob Smith</NovaTable.Cell>\n      <NovaTable.Cell>bob@example.com</NovaTable.Cell>\n      <NovaTable.Cell>Editor</NovaTable.Cell>\n    </NovaTable.Row>\n    <NovaTable.Row>\n      <NovaTable.Cell>Carol Lee</NovaTable.Cell>\n      <NovaTable.Cell>carol@example.com</NovaTable.Cell>\n      <NovaTable.Cell>Viewer</NovaTable.Cell>\n    </NovaTable.Row>\n  </NovaTable.Body>\n</NovaTable>`}>
              <NovaTable striped bordered hoverable>
                <NovaTable.Head>
                  <NovaTable.Row>
                    <NovaTable.HeaderCell>Name</NovaTable.HeaderCell>
                    <NovaTable.HeaderCell>Email</NovaTable.HeaderCell>
                    <NovaTable.HeaderCell>Role</NovaTable.HeaderCell>
                  </NovaTable.Row>
                </NovaTable.Head>
                <NovaTable.Body>
                  <NovaTable.Row>
                    <NovaTable.Cell>Alice Johnson</NovaTable.Cell>
                    <NovaTable.Cell>alice@example.com</NovaTable.Cell>
                    <NovaTable.Cell>Admin</NovaTable.Cell>
                  </NovaTable.Row>
                  <NovaTable.Row>
                    <NovaTable.Cell>Bob Smith</NovaTable.Cell>
                    <NovaTable.Cell>bob@example.com</NovaTable.Cell>
                    <NovaTable.Cell>Editor</NovaTable.Cell>
                  </NovaTable.Row>
                  <NovaTable.Row>
                    <NovaTable.Cell>Carol Lee</NovaTable.Cell>
                    <NovaTable.Cell>carol@example.com</NovaTable.Cell>
                    <NovaTable.Cell>Viewer</NovaTable.Cell>
                  </NovaTable.Row>
                </NovaTable.Body>
              </NovaTable>
            </ComponentPreview>
          </section>

          <section>
            <h2 id="compact" className="scroll-mt-20 text-xl font-semibold text-(--nova-text-primary) mb-4">Compact</h2>
            <ComponentPreview code={`<NovaTable compact bordered>\n  <NovaTable.Head>\n    <NovaTable.Row>\n      <NovaTable.HeaderCell>Name</NovaTable.HeaderCell>\n      <NovaTable.HeaderCell>Email</NovaTable.HeaderCell>\n    </NovaTable.Row>\n  </NovaTable.Head>\n  <NovaTable.Body>\n    <NovaTable.Row>\n      <NovaTable.Cell>Alice Johnson</NovaTable.Cell>\n      <NovaTable.Cell>alice@example.com</NovaTable.Cell>\n    </NovaTable.Row>\n    <NovaTable.Row>\n      <NovaTable.Cell>Bob Smith</NovaTable.Cell>\n      <NovaTable.Cell>bob@example.com</NovaTable.Cell>\n    </NovaTable.Row>\n  </NovaTable.Body>\n</NovaTable>`}>
              <NovaTable compact bordered>
                <NovaTable.Head>
                  <NovaTable.Row>
                    <NovaTable.HeaderCell>Name</NovaTable.HeaderCell>
                    <NovaTable.HeaderCell>Email</NovaTable.HeaderCell>
                  </NovaTable.Row>
                </NovaTable.Head>
                <NovaTable.Body>
                  <NovaTable.Row>
                    <NovaTable.Cell>Alice Johnson</NovaTable.Cell>
                    <NovaTable.Cell>alice@example.com</NovaTable.Cell>
                  </NovaTable.Row>
                  <NovaTable.Row>
                    <NovaTable.Cell>Bob Smith</NovaTable.Cell>
                    <NovaTable.Cell>bob@example.com</NovaTable.Cell>
                  </NovaTable.Row>
                </NovaTable.Body>
              </NovaTable>
            </ComponentPreview>
          </section>

          <section>
            <h2 id="api-reference" className="scroll-mt-20 text-xl font-semibold text-(--nova-text-primary) mb-4">API Reference</h2>
            <p className="mb-3 text-sm text-(--nova-text-secondary)">NovaTable (root)</p>
            <PropsTable data={[
              { name: 'striped', type: 'boolean', default: 'false', description: 'Alternating row background colors' },
              { name: 'hoverable', type: 'boolean', default: 'false', description: 'Highlight rows on hover' },
              { name: 'bordered', type: 'boolean', default: 'false', description: 'Add outer border to the table' },
              { name: 'compact', type: 'boolean', default: 'false', description: 'Reduce cell padding for denser layouts' },
              { name: 'novaTestId', type: 'string', default: "'table'" },
            ]} />
            <p className="mt-6 mb-3 text-sm text-(--nova-text-secondary)">Compound components: <code>NovaTable.Head</code>, <code>NovaTable.Body</code>, <code>NovaTable.Row</code>, <code>NovaTable.HeaderCell</code>, <code>NovaTable.Cell</code> -- all accept standard HTML attributes plus <code>novaTestId</code>.</p>
          </section>
        </div>
      </div>
      <OnThisPage headings={headings} />
    </div>
  );
}
