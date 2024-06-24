import s from './page.module.scss'
import Hero from './_components/Hero'
import Profile from './_components/Profile'
import Production from './_components/Production'
import Skills from './_components/Skills'
import Footer from './_components/Footer'

export default function Home() {
  return (
    <section className= {s.container}>
      <div className={s.component}>
        <Hero />
      </div>
      <div className={s.component}>
        <Profile />
      </div>
      <div className={s.component}>
        <Production />
      </div>
      <div className={s.component}>
        <Skills />
      </div>
      <div className={s.component}>
        <Footer />
      </div>
    </section>
  )
}
