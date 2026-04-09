'use client';

import { useState, useRef } from 'react';
import { Check, Copy, Terminal } from 'lucide-react';

interface CodeBlockProps {
  code: string;
  language?: string;
  filename?: string;
  showLineNumbers?: boolean;
}

export function CodeBlock({
  code,
  language = 'tsx',
  filename,
  showLineNumbers = false,
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false);
  const preRef = useRef<HTMLPreElement>(null);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const lines = code.split('\n');

  return (
    <div className="group relative rounded-xl border border-(--nova-border-default) bg-(--nova-bg-secondary) overflow-hidden shadow-sm">
      {filename && (
        <div className="flex items-center gap-2 border-b border-(--nova-border-default) px-4 py-2.5 text-xs">
          {language === 'bash' ? (
            <Terminal className="h-3.5 w-3.5 text-(--nova-text-tertiary)" />
          ) : (
            <svg className="h-3.5 w-3.5 text-(--nova-text-tertiary)" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" />
              <polyline points="13 2 13 9 20 9" />
            </svg>
          )}
          <span className="font-medium text-(--nova-text-secondary)">{filename}</span>
        </div>
      )}
      <div className="relative">
        <pre
          ref={preRef}
          className="overflow-x-auto px-4 py-4 text-[13px] leading-[1.7]"
        >
          <code className="text-(--nova-text-primary) font-mono">
            {showLineNumbers
              ? lines.map((line, i) => (
                  <span key={i} className="table-row">
                    <span className="table-cell select-none pr-4 text-right text-(--nova-text-tertiary) opacity-40 text-xs w-8">
                      {i + 1}
                    </span>
                    <span className="table-cell">{line}{'\n'}</span>
                  </span>
                ))
              : code}
          </code>
        </pre>
        <button
          onClick={handleCopy}
          className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-lg border border-(--nova-border-default) bg-(--nova-bg-primary) text-(--nova-text-tertiary) opacity-0 shadow-sm transition-all hover:text-(--nova-text-primary) hover:bg-(--nova-bg-secondary) group-hover:opacity-100"
          aria-label="Copy code"
        >
          {copied ? (
            <Check className="h-3.5 w-3.5 text-emerald-500" />
          ) : (
            <Copy className="h-3.5 w-3.5" />
          )}
        </button>
      </div>
    </div>
  );
}
