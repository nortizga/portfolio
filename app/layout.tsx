import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Nicole Ortiz — Software Engineer',
  description:
    'Software Engineer based in Puerto Rico building cloud-native applications with TypeScript, Next.js, and AWS Serverless.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
