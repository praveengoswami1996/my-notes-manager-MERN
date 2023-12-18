import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@components/Header';
import Footer from '@components/Footer';
import TanstackProvider from '../providers/TanstackProvider';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'My Notes Manager',
  description: 'Generated by create next app',
}

export default function RootLayout({ children } : { children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <TanstackProvider>
          <main className="h-[94vh] w-full bg-white px-20">
            { children }
          </main>
        </TanstackProvider>
        <Footer />
      </body>
    </html>
  )
}
