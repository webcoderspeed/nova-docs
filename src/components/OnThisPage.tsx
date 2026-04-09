'use client';

import { useEffect, useState } from 'react';

interface TocItem {
  id: string;
  text: string;
  level: number;
}

interface OnThisPageProps {
  headings?: TocItem[];
}

export function OnThisPage({ headings }: OnThisPageProps) {
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    if (!headings?.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        }
      },
      { rootMargin: '-80px 0px -80% 0px', threshold: 0 }
    );

    for (const heading of headings) {
      const el = document.getElementById(heading.id);
      if (el) observer.observe(el);
    }

    return () => observer.disconnect();
  }, [headings]);

  if (!headings?.length) return null;

  return (
    <div className="hidden xl:block">
      <div className="sticky top-20">
        <p className="mb-3 text-sm font-medium text-(--nova-text-primary)">
          On This Page
        </p>
        <nav>
          <ul className="space-y-2 text-sm">
            {headings.map((heading) => (
              <li key={heading.id}>
                <a
                  href={`#${heading.id}`}
                  className={`block transition-colors ${
                    heading.level > 2 ? 'pl-3' : ''
                  } ${
                    activeId === heading.id
                      ? 'text-(--nova-text-primary) font-medium'
                      : 'text-(--nova-text-tertiary) hover:text-(--nova-text-secondary)'
                  }`}
                >
                  {heading.text}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}
