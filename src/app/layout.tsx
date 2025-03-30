import '../styles/globals.css';
import React, { FC, ReactNode, Suspense } from 'react';
import { Header } from './_components/Header';
import { Footer } from './_components/Footer';
import { color } from '@/styles/foundation';
import { Metadata } from 'next';

interface Props {
  children: ReactNode;
}

export const metadata: Metadata = {
  title: 'sukemaru|articles',
  description: 'sukemaru.net | By sukemaru',
  icons: {
    icon: '/favicon.ico',
  },
};

const RootLayout: FC<Props> = ({ children }) => {
  return (
    <html>
      <body>
        <Header />
        <Suspense fallback={<p>Loading...</p>}>
          <main style={{ minHeight: '100vh', backgroundColor: color.defaultBg }}>{children}</main>
        </Suspense>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
