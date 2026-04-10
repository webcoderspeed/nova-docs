'use client';

import { useState } from 'react';
import { NovaPagination } from '@nova-ui';
import { Breadcrumb } from '@/components/Breadcrumb';
import { ComponentPreview } from '@/components/ComponentPreview';
import { PropsTable } from '@/components/PropsTable';
import { OnThisPage } from '@/components/OnThisPage';

const headings = [
  { id: 'basic-usage', text: 'Basic Usage', level: 2 },
  { id: 'sibling-count', text: 'Sibling Count', level: 2 },
  { id: 'single-page', text: 'Few Pages', level: 2 },
  { id: 'api-reference', text: 'API Reference', level: 2 },
];

function BasicDemo() {
  const [page, setPage] = useState(3);
  return (
    <div className="space-y-3">
      <NovaPagination page={page} totalPages={10} onChange={setPage} />
      <p className="text-sm text-(--nova-text-tertiary)">Current page: {page}</p>
    </div>
  );
}

function SiblingDemo() {
  const [page, setPage] = useState(5);
  return (
    <div className="space-y-3">
      <NovaPagination page={page} totalPages={20} siblingCount={2} onChange={setPage} />
      <p className="text-sm text-(--nova-text-tertiary)">Current page: {page} / 20</p>
    </div>
  );
}

function FewPagesDemo() {
  const [page, setPage] = useState(1);
  return <NovaPagination page={page} totalPages={3} onChange={setPage} />;
}

export default function PaginationPage() {
  return (
    <div className="flex gap-10">
      <div className="min-w-0 flex-1">
        <Breadcrumb items={[{ label: 'Docs', href: '/docs/getting-started' }, { label: 'Components', href: '/docs/components/button' }, { label: 'Pagination' }]} />

        <h1 className="text-3xl font-bold tracking-tight text-(--nova-text-primary)">Pagination</h1>
        <p className="mt-2 text-lg text-(--nova-text-secondary) leading-relaxed">Navigate between pages of content with accessible prev/next controls and page buttons.</p>

        <div className="mt-8 space-y-10">
          <section>
            <h2 id="basic-usage" className="scroll-mt-20 text-xl font-semibold text-(--nova-text-primary) mb-4">Basic Usage</h2>
            <ComponentPreview code={`const [page, setPage] = useState(3);\n\n<NovaPagination\n  page={page}\n  totalPages={10}\n  onChange={setPage}\n/>`}>
              <BasicDemo />
            </ComponentPreview>
          </section>

          <section>
            <h2 id="sibling-count" className="scroll-mt-20 text-xl font-semibold text-(--nova-text-primary) mb-4">Sibling Count</h2>
            <p className="mb-4 text-sm text-(--nova-text-secondary)">Control how many page buttons appear around the current page with <code>siblingCount</code>.</p>
            <ComponentPreview code={`<NovaPagination\n  page={page}\n  totalPages={20}\n  siblingCount={2}\n  onChange={setPage}\n/>`}>
              <SiblingDemo />
            </ComponentPreview>
          </section>

          <section>
            <h2 id="single-page" className="scroll-mt-20 text-xl font-semibold text-(--nova-text-primary) mb-4">Few Pages</h2>
            <ComponentPreview code={`<NovaPagination page={page} totalPages={3} onChange={setPage} />`}>
              <FewPagesDemo />
            </ComponentPreview>
          </section>

          <section>
            <h2 id="api-reference" className="scroll-mt-20 text-xl font-semibold text-(--nova-text-primary) mb-4">API Reference</h2>
            <PropsTable data={[
              { name: 'page', type: 'number', description: 'Current active page (1-based)' },
              { name: 'totalPages', type: 'number', description: 'Total number of pages' },
              { name: 'onChange', type: '(page: number) => void', description: 'Called when user selects a different page' },
              { name: 'siblingCount', type: 'number', default: '1', description: 'Sibling pages shown around the current page' },
              { name: 'aria-label', type: 'string', default: "'Pagination'", description: 'Accessible label for the nav element' },
              { name: 'novaTestId', type: 'string', default: "'pagination'" },
            ]} />
          </section>
        </div>
      </div>
      <OnThisPage headings={headings} />
    </div>
  );
}
