'use client'

import s from './index.module.scss'
import React from 'react'
import { RxTriangleRight } from 'react-icons/rx'

const Skills: React.FC = () => {
  return (
    <section className={s.container}>
      <h2>Skills</h2>
      <div className={s.component}>
        <div className={s.box}>
          <div className={s.status}>
            <div className={s.about}>
              <p>front</p>
            </div>
            <div className={s.detail}>
              <div className={s.icon}>
                <RxTriangleRight />
              </div>
              <div>
                <p>HTML</p>
                <p>CSS</p>
                <p>TypeScript</p>
                <p>React</p>
                <p>Next.js</p>
              </div>
            </div>
          </div>
          <div className={s.status}>
            <div className={s.about}>
              <p>back</p>
            </div>
            <div className={s.detail}>
              <div className={s.icon}>
                <RxTriangleRight />
              </div>
              <div>
                <p>Unity</p>
                <p>C#</p>
                <p>Java</p>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
