import type { Metadata } from 'next'
import RootDocument from '../_lib/RootDocument'
import ja from '@/content/ja'
import '../globals.css'

export const metadata: Metadata = {
  title: ja.meta.title,
  description: ja.meta.description,
  icons: { icon: '/icon.svg' },
  alternates: { languages: { en: '/en/' } },
}

export default function JaLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <RootDocument lang="ja">{children}</RootDocument>
}
