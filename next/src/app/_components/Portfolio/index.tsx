import Image from 'next/image'
import { FaGithub } from 'react-icons/fa'
import type { Content } from '@/content/types'
import Background from '../Background'
import BootScreen from '../BootScreen'
import OnsenMikan from '../OnsenMikan'
import ReplayButton from '../ReplayButton'
import TypedName from '../TypedName'
import Window from '../Window'
import s from './index.module.scss'

const GITHUB_URL = 'https://github.com/mtureit'

// English labels shown next to Japanese headings (the English page needs none)
const SUBTITLES = {
  profile: 'Profile',
  research: 'Research',
  works: 'Works',
  contact: 'Contact',
}

export default function Portfolio({ content: c }: { content: Content }) {
  const sub = c.locale === 'ja' ? SUBTITLES : undefined

  return (
    <div className={s.page}>
      <Background />

      <div className={s.content}>
        <header className={s.header}>
          <a href="#top" className={s.logo}>
            EITA MATSUURA<span className={s.logoCursor}>_</span>
          </a>
          <nav className={s.nav}>
            <a href="#profile">{c.nav.profile}</a>
            <a href="#research">{c.nav.research}</a>
            <a href="#works">{c.nav.works}</a>
            <a href="#contact">{c.nav.contact}</a>
            <a
              href={c.nav.switchHref}
              className={s.langSwitch}
              hrefLang={c.locale === 'ja' ? 'en' : 'ja'}
              aria-label={c.nav.switchLabel}
            >
              JA / EN
            </a>
          </nav>
        </header>

        <section id="top" className={s.hero}>
          <div className={s.avatar}>
            <OnsenMikan label={c.hero.avatarLabel} />
          </div>
          <div className={s.heroText}>
            <p className={s.greeting}>{c.hero.greeting}</p>
            <TypedName name={c.hero.name} />
            <p className={s.nameLatin}>{c.hero.nameLatin}</p>
            <p className={s.intro}>{c.hero.intro}</p>
            <p className={s.now}>
              <span className={s.pulse} aria-hidden="true" />
              {c.hero.now}
            </p>
            <div className={s.buttons}>
              <a href="#works" className={`${s.button} ${s.primary}`}>
                {c.hero.worksButton}
              </a>
              <a href={GITHUB_URL} className={s.button}>
                <FaGithub aria-hidden="true" />
                GitHub
              </a>
            </div>
          </div>
        </section>

        <main className={s.main}>
          <Window id="profile" title={c.profile.heading} subtitle={sub?.profile}>
            <div className={s.profile}>
              <div className={s.profileInfo}>
                <p className={s.label}>{c.profile.affiliationLabel}</p>
                <p>
                  {c.profile.affiliation.map((line) => (
                    <span key={line} className={s.lineBlock}>
                      {line}
                    </span>
                  ))}
                </p>
                <p className={s.label}>{c.profile.activitiesLabel}</p>
                <p>{c.profile.activities}</p>
              </div>
              <ol className={s.timeline}>
                {c.profile.timeline.map((item) => (
                  <li key={item.text} className={s.timelineItem}>
                    <span className={item.current ? `${s.date} ${s.dateCurrent}` : s.date}>
                      {item.date ?? ''}
                    </span>
                    <span>{item.text}</span>
                  </li>
                ))}
              </ol>
            </div>
          </Window>

          <Window id="research" title={c.research.heading} subtitle={sub?.research}>
            <ul className={s.research}>
              {c.research.items.map((item) => (
                <li key={item.title} className={s.researchItem}>
                  <span className={item.inProgress ? `${s.venue} ${s.venueMuted}` : s.venue}>
                    {item.venue}
                  </span>
                  <span className={s.researchTitle}>{item.title}</span>
                </li>
              ))}
            </ul>
          </Window>

          <section id="works" className={s.works} aria-labelledby="works-heading">
            <h2 id="works-heading" className={s.worksHeading}>
              {c.works.heading}
              {sub && <span className={s.subtitle}>{sub.works}</span>}
            </h2>
            <ul className={s.workGrid}>
              {c.works.items.map((work) => (
                <li key={work.name} className={s.card}>
                  <div className={s.shot}>
                    {work.image ? (
                      <Image src={work.image} alt="" width={640} height={365} className={s.shotImage} />
                    ) : (
                      <span className={s.shotPlaceholder}>{c.works.noImage}</span>
                    )}
                  </div>
                  <div className={s.cardBody}>
                    <h3 className={s.cardTitle}>{work.name}</h3>
                    <p className={s.cardText}>{work.description}</p>
                    <p className={s.tech}>{work.tech.join(' / ')}</p>
                  </div>
                </li>
              ))}
            </ul>
          </section>


          <section id="contact" className={s.contact} aria-labelledby="contact-heading">
            <div>
              <h2 id="contact-heading" className={s.contactHeading}>
                {c.contact.heading}
                {sub && <span className={s.subtitle}>{sub.contact}</span>}
              </h2>
              <p>{c.contact.message}</p>
            </div>
            <div className={s.buttons}>
              {c.contact.email && (
                <a href={`mailto:${c.contact.email}`} className={`${s.button} ${s.primary}`}>
                  {c.contact.emailLabel}
                </a>
              )}
              <a href={GITHUB_URL} className={s.button}>
                GitHub
              </a>
            </div>
          </section>
        </main>

        <footer className={s.footer}>
          <p>© 2026 Eita Matsuura</p>
          <ReplayButton label={c.boot.replay} className={s.replay} />
        </footer>
      </div>

      <BootScreen lines={c.boot.lines} skipLabel={c.boot.skip} loadingLabel={c.boot.loading} />
    </div>
  )
}
