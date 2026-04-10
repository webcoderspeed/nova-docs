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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Poppins — Acefone brand font */}
        {/* Roboto — Smartflo brand font */}
        {/* JetBrains Mono — code blocks */}
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Roboto:wght@300;400;500;700&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
        {/* Inline script: restore brand + theme before first paint to avoid flash */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){
  var t=localStorage.getItem('nova-ui-theme')||'system';
  var b=localStorage.getItem('nova-ui-brand')||'acefone';
  var r=t==='system'?window.matchMedia('(prefers-color-scheme:dark)').matches?'dark':'light':t;
  document.documentElement.setAttribute('data-theme',r);
  document.documentElement.classList.add(b+'-'+r);
})()`,
          }}
        />
      </head>
      <body className="min-h-screen bg-(--nova-bg-primary) text-(--nova-text-primary) font-sans antialiased">
        <NovaThemeProvider defaultTheme="system" defaultBrand="acefone">
          {children}
        </NovaThemeProvider>
      </body>
    </html>
  );
}
