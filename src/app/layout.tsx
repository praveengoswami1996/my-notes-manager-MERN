import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

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
        <main className="h-[94vh] w-full bg-white px-20">
          { children }
        </main>
        <Footer />
      </body>
    </html>
  )
}
