'use client'

import { useEffect, useState } from 'react'
import { BOOT_SEEN_KEY, boot, useBootDone } from '@/app/_lib/boot'
import s from './index.module.scss'

const LINE_INTERVAL_MS = 380
const HOLD_MS = 500
const FADE_MS = 450

type Props = {
  lines: string[]
  skipLabel: string
  loadingLabel: string
}

function hasSeen() {
  try {
    return sessionStorage.getItem(BOOT_SEEN_KEY) === '1'
  } catch {
    return false
  }
}

function markSeen() {
  try {
    sessionStorage.setItem(BOOT_SEEN_KEY, '1')
  } catch {
    // Storage may be blocked; the screen just shows again next time
  }
}

export default function BootScreen({ lines, skipLabel, loadingLabel }: Props) {
  const done = useBootDone()
  const [step, setStep] = useState(0)
  const [fading, setFading] = useState(false)

  useEffect(() => {
    if (done) return
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduceMotion || hasSeen()) {
      boot.finish()
      return
    }

    const timers: number[] = []
    for (let i = 1; i <= lines.length; i++) {
      timers.push(window.setTimeout(() => setStep(i), i * LINE_INTERVAL_MS))
    }
    const end = lines.length * LINE_INTERVAL_MS + HOLD_MS
    timers.push(window.setTimeout(() => setFading(true), end))
    timers.push(
      window.setTimeout(() => {
        markSeen()
        setStep(0)
        setFading(false)
        boot.finish()
      }, end + FADE_MS),
    )
    return () => timers.forEach((t) => window.clearTimeout(t))
  }, [done, lines.length])

  if (done) return null

  const skip = () => {
    markSeen()
    setStep(0)
    setFading(false)
    boot.finish()
  }
  const percent = Math.round((step / lines.length) * 100)

  return (
    <div
      className={fading ? `${s.overlay} ${s.fading}` : s.overlay}
      data-boot-screen
      role="status"
      aria-label={loadingLabel}
    >
      <div className={s.window}>
        <p className={s.title}>EITA-OS ver.2026.10</p>
        {lines.slice(0, step).map((line) => (
          <p key={line} className={s.line}>
            <span className={s.label}>&gt; {line} ....................................</span>
            <span className={s.ok}>OK</span>
          </p>
        ))}
        <div className={s.progress}>
          <div className={s.track}>
            <div className={s.bar} style={{ width: `${percent}%` }} />
          </div>
          <span className={s.percent}>{percent}%</span>
        </div>
        <button type="button" className={s.skip} onClick={skip}>
          {skipLabel}
        </button>
      </div>
    </div>
  )
}
