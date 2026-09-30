import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {
  title: 'Manisha Baroliya — Product & UX/UI Designer',
  description: 'Product & UX/UI designer shipping research-led design for SaaS and B2B platforms.',
  icons: { icon: '/logo.png' },
};
export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) {
  return <html lang="en"><body>{children}</body></html>;
}
