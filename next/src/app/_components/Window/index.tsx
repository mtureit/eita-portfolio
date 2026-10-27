import s from './index.module.scss'

type Props = {
  id: string
  title: string
  subtitle?: string
  children: React.ReactNode
}

// A pixel-style window with a title bar, used for each section
export default function Window({ id, title, subtitle, children }: Props) {
  const headingId = `${id}-heading`
  return (
    <section id={id} className={s.window} aria-labelledby={headingId}>
      <div className={s.bar}>
        <h2 id={headingId} className={s.title}>
          {title}
          {subtitle && <span className={s.subtitle}>{subtitle}</span>}
        </h2>
        <span className={s.controls} aria-hidden="true">
          <span className={s.box} />
          <span className={s.dot} />
        </span>
      </div>
      <div className={s.body}>{children}</div>
    </section>
  )
}
