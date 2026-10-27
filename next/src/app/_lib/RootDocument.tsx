import GoogleAnalytics from '../_components/thirdparty/GoogleAnalytics'
import type { Locale } from '@/content/types'
import { bodyFont, dotFont } from './fonts'

type Props = {
  lang: Locale
  children: React.ReactNode
}

export default function RootDocument({ lang, children }: Props) {
  return (
    <html lang={lang} className={`${dotFont.variable} ${bodyFont.variable}`}>
      <head>
        <GoogleAnalytics />
        <noscript>
          <style>{'[data-boot-screen]{display:none !important}'}</style>
        </noscript>
      </head>
      <body>{children}</body>
    </html>
  )
}
