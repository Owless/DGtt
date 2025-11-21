'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import styles from './Header.module.css'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
    document.body.style.overflow = !mobileMenuOpen ? 'hidden' : 'auto'
  }

  const closeMobileMenu = () => {
    setMobileMenuOpen(false)
    document.body.style.overflow = 'auto'
  }

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.headerContainer}>
        {/* Logo */}
        <Link href="/" className={styles.logo}>
          <div className={styles.logoIcon}>DGT</div>
          <div className={styles.logoText}>
            <span className={styles.brand}>
              <span className={styles.dgt}>DGT</span>-<span className={styles.studio}>studio</span>
            </span>
            <span className={styles.tagline}>Premium Tuning</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className={styles.navMain}>
          <ul className={styles.navLinks}>
            <li><a href="/#exhaust">Выхлоп</a></li>
            <li><a href="/#brakes">Тормоза</a></li>
            <li><a href="/#wheels">Диски</a></li>
            <li><a href="/#suspension">Подвеска</a></li>
            <li><a href="/#projects">Проекты</a></li>
          </ul>
          
          <div className={styles.headerContact}>
            <a href="tel:+74951280227" className={styles.headerPhone}>
              <span className={styles.phoneIcon}>📞</span>
              <span>+7 (495) 128-02-27</span>
            </a>
            <button className={styles.contactBtn} onClick={() => alert('Форма обратной связи')}>
              Связаться
            </button>
          </div>
        </nav>

        {/* Mobile Toggle */}
        <div
          className={`${styles.mobileToggle} ${mobileMenuOpen ? styles.active : ''}`}
          onClick={toggleMobileMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`${styles.mobileMenu} ${mobileMenuOpen ? styles.active : ''}`}>
        <ul className={styles.mobileNav}>
          <li><a href="/#exhaust" onClick={closeMobileMenu}>Выхлопные системы</a></li>
          <li><a href="/#brakes" onClick={closeMobileMenu}>Тормозные системы</a></li>
          <li><a href="/#wheels" onClick={closeMobileMenu}>Кованые диски</a></li>
          <li><a href="/#suspension" onClick={closeMobileMenu}>Подвеска</a></li>
          <li><a href="/#projects" onClick={closeMobileMenu}>Проекты</a></li>
        </ul>
        <div className={styles.mobileContact}>
          <a href="tel:+74951280227" className={styles.headerPhone}>
            <span className={styles.phoneIcon}>📞</span>
            <span>+7 (495) 128-02-27</span>
          </a>
          <button className={styles.contactBtn} style={{width: '100%'}} onClick={() => alert('Форма обратной связи')}>
            Связаться с нами
          </button>
        </div>
      </div>
    </header>
  )
}
