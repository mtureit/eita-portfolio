import type { Metadata } from 'next'
import { DotGothic16 } from 'next/font/google'
import './globals.css'

const dotgothic16 = DotGothic16({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'EITA-PORTFOLIO',
  description: '松浦瑛太のポートフォリオサイト',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja">
      <body className={dotgothic16.className}>{children}</body>
    </html>
  )
}
