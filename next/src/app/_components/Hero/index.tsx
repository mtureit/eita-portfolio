'use client'

import React from 'react'
import { GrMailOption } from 'react-icons/gr'
import { IoLogoGithub } from 'react-icons/io5'
import { FaXTwitter } from 'react-icons/fa6'
import s from './index.module.scss'

const Hero: React.FC = () => {
  return (
    <section className={s.container}>
      <div className={s.component}>
        <h1>Matsuura Eita</h1>
      </div>
      <div className={s.component}>
        <p>front engineer</p>
      </div>
      <div className={s.component}>
        <div className={s.picture}>
          <a href="mailto:your.email@example.com">
            <GrMailOption color="#FFF" size={56} />
          </a>
        </div>
        <div className={s.picture}>
          <a href="https://yourwebsite.com">
            <IoLogoGithub color="#FFF" size={56} />
          </a>
        </div>
        <div className={s.picture}>
          <a href="https://github.com/youruseraame">
            <FaXTwitter color="#FFF" size={56} />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
