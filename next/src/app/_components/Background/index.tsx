import type { CSSProperties } from 'react'
import s from './index.module.scss'

const STAR_COUNT = 70

// Deterministic pseudo-random so server and client render the same stars
function rnd(i: number) {
  const x = Math.sin(i * 127.1 + 311.7) * 43758.5453
  return x - Math.floor(x)
}

const stars = Array.from({ length: STAR_COUNT }, (_, i) => {
  const size = rnd(i) > 0.85 ? 4 : 2
  return {
    accent: rnd(i + 200) > 0.8,
    style: {
      left: `${(rnd(i + 1) * 100).toFixed(2)}%`,
      top: `${(rnd(i + 2) * 110).toFixed(2)}%`,
      width: size,
      height: size,
      animationDuration: `${(2 + rnd(i + 3) * 4).toFixed(1)}s`,
      animationDelay: `${(rnd(i + 4) * 4).toFixed(1)}s`,
    } satisfies CSSProperties,
  }
})

export default function Background() {
  return (
    <>
      <div className={s.sky} aria-hidden="true">
        <div className={s.field}>
          {stars.map((star, i) => (
            <span
              key={i}
              className={star.accent ? `${s.star} ${s.accent}` : s.star}
              style={star.style}
            />
          ))}
        </div>
        <span className={s.shooting} />
      </div>
      <div className={s.scanlines} aria-hidden="true" />
    </>
  )
}
