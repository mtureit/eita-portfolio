import s from './index.module.scss'

// 16x16 pixel art. 'e' = eye (closes when blinking), 'V' = steam, 'u' = ripple.
const ART = [
  '..V....V....V...',
  '...V....V....V..',
  '..V....V....V...',
  '....WWWWWWWW....',
  '...OWWWWWWWWO...',
  '..OOOOOOOOOOOO..',
  '.OOOOOOOOOOOOOO.',
  '.OOOeeOOOOeeOOO.',
  '.OOOOOOOOOOOOOO.',
  '.OOPOOOKKOOOPOO.',
  '.OOOOOOOOOOOOOO.',
  'UUUUUUUUUUUUUUUU',
  'UuUUUUUUUuUUUUUU',
  'UUUUUUUUUUUUUUUU',
  'UUUUUUuUUUUUUUuU',
  'UUUUUUUUUUUUUUUU',
]

const COLORS: Record<string, string> = {
  O: '#f59e0b',
  P: '#f48fa0',
  K: '#1b1f2e',
  W: '#f2f1ea',
  V: '#8e97b3',
  U: '#2f7fc8',
  u: '#8fd3ff',
  e: '#1b1f2e',
}

type Pixel = { x: number; y: number; ch: string }

const pixels: Pixel[] = ART.flatMap((row, y) =>
  Array.from(row).flatMap((ch, x) => (ch === '.' ? [] : [{ x, y, ch }])),
)

function rects(filter: (p: Pixel) => boolean, fill?: string) {
  return pixels
    .filter(filter)
    .map((p) => (
      <rect key={`${p.x}-${p.y}`} x={p.x} y={p.y} width={1} height={1} fill={fill ?? COLORS[p.ch]} />
    ))
}

export default function OnsenMikan({ label }: { label: string }) {
  return (
    <svg
      className={s.art}
      viewBox="0 0 16 16"
      shapeRendering="crispEdges"
      role="img"
      aria-label={label}
    >
      {rects((p) => !['V', 'u'].includes(p.ch))}
      <g className={s.steam}>{rects((p) => p.ch === 'V')}</g>
      <g className={s.ripple}>{rects((p) => p.ch === 'u')}</g>
      {/* Eyelids: same color as the peel, shown briefly to blink */}
      <g className={s.lids}>{rects((p) => p.ch === 'e', COLORS.O)}</g>
    </svg>
  )
}
