'use client'

import s from './index.module.scss'
import React from 'react'
import Image from 'next/image'

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
            <Image
              src="/mail.png"
              alt="Production Image"
              width={60}
              height={60}
              layout="responsive"
            />
          </a>
          <a href="https://yourwebsite.com">
            <Image
              src="/git.png"
              alt="Production Image"
              width={60}
              height={60}
              layout="responsive"
            />
          </a>
          <a href="https://github.com/youruseraame">
            <Image
              src="/x.png"
              alt="Production Image"
              width={60}
              height={60}
              layout="responsive"
            />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
