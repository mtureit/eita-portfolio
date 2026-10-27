import type { Metadata } from 'next'
import RootDocument from '../_lib/RootDocument'
import en from '@/content/en'
import '../globals.css'

export const metadata: Metadata = {
  title: en.meta.title,
  description: en.meta.description,
  icons: { icon: '/icon.svg' },
  alternates: { languages: { ja: '/' } },
}

export default function EnLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <RootDocument lang="en">{children}</RootDocument>
}
