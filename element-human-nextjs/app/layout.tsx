import type { Metadata } from 'next'
import { Poppins, Lora } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'

const poppins = Poppins({
  weight: ['300', '400', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
})

const lora = Lora({
  weight: ['400', '500', '600'],
  subsets: ['latin'],
  variable: '--font-lora',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Element Human - Reveal the Why Behind Every Impression',
    template: '%s | Element Human',
  },
  description: 'Element Human illuminates unseen moments, transforming your creative into something audiences never forget through behavioral science and emotion tracking.',
  keywords: ['behavioral science', 'creative testing', 'emotion tracking', 'advertising analytics', 'attention measurement'],
  authors: [{ name: 'Element Human' }],
  creator: 'Element Human',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://elementhuman.com',
    siteName: 'Element Human',
    title: 'Element Human - Reveal the Why Behind Every Impression',
    description: 'Element Human illuminates unseen moments, transforming your creative into something audiences never forget.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Element Human',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Element Human',
    description: 'Reveal the Why Behind Every Impression',
    images: ['/twitter-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${poppins.variable} ${lora.variable}`}>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
