import type { Metadata } from 'next';
import { NovaThemeProvider } from '@nova-ui';
import './globals.css';

export const metadata: Metadata = {
  title: 'Nova UI - Design System',
  description:
    'A production-grade design system for Acefone built from scratch with React, TypeScript, and TailwindCSS v4.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var t=localStorage.getItem('nova-ui-theme')||'system';var r=t==='system'?window.matchMedia('(prefers-color-scheme:dark)').matches?'dark':'light':t;document.documentElement.setAttribute('data-theme',r);document.documentElement.classList.add(r)})()`,
          }}
        />
      </head>
      <body className="min-h-screen bg-(--nova-bg-primary) text-(--nova-text-primary) font-sans antialiased">
        <NovaThemeProvider defaultTheme="system">{children}</NovaThemeProvider>
      </body>
    </html>
  );
}
