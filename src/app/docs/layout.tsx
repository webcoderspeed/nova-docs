import type { ReactNode } from 'react';
import { Header } from '@/components/Header';
import { Sidebar } from '@/components/Sidebar';

export default function DocsLayout({ children }: { children: ReactNode }) {
  return (
    <div className="relative">
      <Header />
      <div className="flex">
        <Sidebar />
        <main className="min-h-[calc(100vh-3.5rem)] flex-1 lg:pl-[240px]">
          <div className="mx-auto max-w-[980px] px-6 py-10 lg:px-12">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
