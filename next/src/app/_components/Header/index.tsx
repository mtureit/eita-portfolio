'use client'

import React, { useState } from 'react'
import s from './index.module.scss'

const Header: React.FC = () => {
  const [open, setOpen] = useState(false)
  const toggleMenu = () => setOpen(!open)

  return (
    <header className={s.header}>
      <div className={s.hamburger} onClick={toggleMenu}>
        <span className={s.bar}></span>
        <span className={s.bar}></span>
        <span className={s.bar}></span>
      </div>
      <nav className={`${s.nav} ${open ? s.open : ''}`}>
        <ul>
          <li>
            <a href="#hero" onClick={() => setOpen(false)}>
              Home
            </a>
          </li>
          <li>
            <a href="#profile" onClick={() => setOpen(false)}>
              Profile
            </a>
          </li>
          <li>
            <a href="#production" onClick={() => setOpen(false)}>
              Production
            </a>
          </li>
          <li>
            <a href="#skills" onClick={() => setOpen(false)}>
              Skills
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
