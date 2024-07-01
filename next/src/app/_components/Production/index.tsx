'use client'

import React from 'react'
import s from './index.module.scss'
import Image from 'next/image'

const Production: React.FC = () => {
  return (
    <section className={s.container}>
      <h2>Production</h2>
      <div className={s.component}>
        <div className={s.box}>
          <div className={s.picture}>
            <Image
              src="/Seeds.png"
              alt="Production Image"
              layout="responsive"
              width={800}
              height={455}
            />
          </div>
          <div className={s.belong}>
            <p>NUTMEG-Seedsに参加した</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Production
