import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import localFont from 'next/font/local'
import './globals.css'
import { TailwindIndicator } from '@/components/tailwind-indicator'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Animativa',
  description: 'Campanhas para força de venda'
}

const fontHeading = localFont({
  src: '../../public/fonts/EDNimpkish-Regular.otf',
  variable: '--font-heading'
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={(inter.className, fontHeading.variable)}>
        {children}
        <TailwindIndicator />
      </body>
    </html>
  )
}
