'use client';

import { useState, type ReactNode } from 'react';
import { Check, Copy, Eye, Code2 } from 'lucide-react';

interface ComponentPreviewProps {
  children: ReactNode;
  code?: string;
  className?: string;
}

export function ComponentPreview({
  children,
  code,
  className = '',
}: ComponentPreviewProps) {
  const [activeTab, setActiveTab] = useState<'preview' | 'code'>('preview');
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    if (!code) return;
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="rounded-lg border border-(--nova-border-default) overflow-hidden">
      {code && (
        <div className="flex items-center justify-between border-b border-(--nova-border-default) bg-(--nova-bg-secondary) px-4">
          <div className="flex">
            <button
              onClick={() => setActiveTab('preview')}
              className={`flex items-center gap-1.5 border-b-2 px-3 py-2.5 text-sm font-medium transition-colors ${
                activeTab === 'preview'
                  ? 'border-(--nova-text-primary) text-(--nova-text-primary)'
                  : 'border-transparent text-(--nova-text-tertiary) hover:text-(--nova-text-secondary)'
              }`}
            >
              <Eye className="h-3.5 w-3.5" />
              Preview
            </button>
            <button
              onClick={() => setActiveTab('code')}
              className={`flex items-center gap-1.5 border-b-2 px-3 py-2.5 text-sm font-medium transition-colors ${
                activeTab === 'code'
                  ? 'border-(--nova-text-primary) text-(--nova-text-primary)'
                  : 'border-transparent text-(--nova-text-tertiary) hover:text-(--nova-text-secondary)'
              }`}
            >
              <Code2 className="h-3.5 w-3.5" />
              Code
            </button>
          </div>
          {activeTab === 'code' && (
            <button
              onClick={handleCopy}
              className="flex items-center gap-1.5 rounded-md px-2.5 py-1.5 text-xs text-(--nova-text-tertiary) transition-colors hover:text-(--nova-text-primary) hover:bg-(--nova-bg-tertiary)"
            >
              {copied ? (
                <>
                  <Check className="h-3 w-3 text-green-500" />
                  Copied
                </>
              ) : (
                <>
                  <Copy className="h-3 w-3" />
                  Copy
                </>
              )}
            </button>
          )}
        </div>
      )}

      {activeTab === 'preview' ? (
        <div
          className={`nova-docs-preview-bg flex min-h-[150px] items-center justify-center p-10 ${className}`}
        >
          <div className="w-full">{children}</div>
        </div>
      ) : (
        <pre className="overflow-x-auto bg-(--nova-bg-secondary) p-4 text-[13px] leading-relaxed">
          <code className="text-(--nova-text-primary) font-mono">{code}</code>
        </pre>
      )}
    </div>
  );
}
