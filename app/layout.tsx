import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'James Kocher — Sr. Technical Product Manager',
  description:
    'Senior Technical Product Manager productizing ML, AI, and complex technical systems. 10+ years across Amazon | Ring, Teltech, and Locus Energy.',
  metadataBase: new URL('https://resume.jameskocher.com'),
  openGraph: {
    title: 'James Kocher — Sr. Technical Product Manager',
    description:
      'Senior Technical Product Manager productizing ML, AI, and complex technical systems.',
    url: 'https://resume.jameskocher.com',
    siteName: 'James Kocher',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');var d=t?t==='dark':true;document.documentElement.classList.toggle('dark',d);}catch(e){}})();`,
          }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Source+Sans+3:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400;1,600&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
