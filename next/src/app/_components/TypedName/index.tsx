'use client'

import { useEffect, useState } from 'react'
import { useBootDone } from '@/app/_lib/boot'
import s from './index.module.scss'

const CHAR_INTERVAL_MS = 140

function Typer({ chars }: { chars: string[] }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const timer = window.setInterval(
      () =>
        setCount((n) => {
          const next = reduceMotion ? chars.length : n + 1
          if (next >= chars.length) window.clearInterval(timer)
          return next
        }),
      reduceMotion ? 0 : CHAR_INTERVAL_MS,
    )
    return () => window.clearInterval(timer)
  }, [chars.length])

  return <>{chars.slice(0, count).join('')}</>
}

export default function TypedName({ name }: { name: string }) {
  const done = useBootDone()
  const chars = Array.from(name)

  return (
    <h1 className={s.name} aria-label={name}>
      <span aria-hidden="true">{done ? <Typer key="typing" chars={chars} /> : name}</span>
      <span className={s.cursor} aria-hidden="true" />
    </h1>
  )
}
