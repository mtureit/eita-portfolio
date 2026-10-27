import { BIZ_UDPGothic, DotGothic16 } from 'next/font/google'

export const dotFont = DotGothic16({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-dot',
})

export const bodyFont = BIZ_UDPGothic({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body',
  preload: false,
})
