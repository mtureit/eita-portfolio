import s from './page.module.scss'
import Hero from './_components/Hero'
import Profile from './_components/Profile'
import Production from './_components/Production'
import Skills from './_components/Skills'
import Footer from './_components/Footer'

export default function Home() {
  return (
    <main>
      <div>
        <Hero />
      </div>
      <div>
        <Profile />
      </div>
      <div>
        <Production />
      </div>
      <div>
        <Skills />
      </div>
      <div>
        <Footer />
      </div>
    </main>
  )
}
