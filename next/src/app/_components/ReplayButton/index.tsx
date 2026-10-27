'use client'

import { BOOT_SEEN_KEY, boot } from '@/app/_lib/boot'

type Props = {
  label: string
  className?: string
}

export default function ReplayButton({ label, className }: Props) {
  const replay = () => {
    try {
      sessionStorage.removeItem(BOOT_SEEN_KEY)
    } catch {
      // Ignore blocked storage
    }
    window.scrollTo({ top: 0 })
    boot.restart()
  }

  return (
    <button type="button" className={className} onClick={replay}>
      {label}
    </button>
  )
}
