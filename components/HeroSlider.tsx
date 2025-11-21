'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from './HeroSlider.module.css'

const slides = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1920&h=1080&fit=crop',
    label: 'DGT-studio',
    title: 'Раскройте потенциал',
    titleBold: 'потенциал',
    subtitle: 'вашего автомобиля',
    description: 'Премиальный тюнинг и доработка автомобилей мировыми брендами',
    cta1: { text: 'Наши услуги', href: '/#services' },
    cta2: { text: 'Портфолио', href: '/#projects' },
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1920&h=1080&fit=crop',
    label: 'Эксклюзивность',
    title: 'Индивидуальный',
    titleBold: 'Индивидуальный',
    subtitle: 'подход',
    description: 'Комплексные проекты от концепции до реализации',
    cta1: { text: 'Проекты под ключ', href: '/projects' },
    cta2: { text: 'Консультация', href: '#contact' },
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1502877338535-766e1452684a?w=1920&h=1080&fit=crop',
    label: 'Премиум качество',
    title: 'Только оригинальные',
    titleBold: 'оригинальные',
    subtitle: 'бренды',
    description: 'Akrapovic • Brembo • HRE • KW • iPE и другие мировые лидеры',
    cta1: { text: 'Наши бренды', href: '#brands' },
    cta2: { text: 'Гарантия', href: '#warranty' },
  },
]

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 6000)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
      } else if (e.key === 'ArrowRight') {
        setCurrentSlide((prev) => (prev + 1) % slides.length)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  return (
    <section className={styles.heroSlider}>
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`${styles.slide} ${index === currentSlide ? styles.active : ''}`}
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            className={styles.slideBg}
            priority={index === 0}
            quality={90}
          />
          <div className={styles.slideOverlay} />
          <div className={styles.slideContent}>
            <div className={styles.slideLabel}>{slide.label}</div>
            <h1>
              {slide.title.includes(slide.titleBold) ? (
                <>
                  {slide.title.split(slide.titleBold)[0]}
                  <strong>{slide.titleBold}</strong>
                  {slide.title.split(slide.titleBold)[1]}
                  <br />
                  {slide.subtitle}
                </>
              ) : (
                <>
                  {slide.title}
                  <br />
                  {slide.subtitle}
                </>
              )}
            </h1>
            <p>{slide.description}</p>
            <div className={styles.slideCta}>
              <Link href={slide.cta1.href} className={styles.ctaBtn}>
                {slide.cta1.text}
              </Link>
              <Link href={slide.cta2.href} className={`${styles.ctaBtn} ${styles.secondary}`}>
                {slide.cta2.text}
              </Link>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation */}
      <div className={`${styles.sliderArrow} ${styles.prev}`} onClick={prevSlide}>
        ‹
      </div>
      <div className={`${styles.sliderArrow} ${styles.next}`} onClick={nextSlide}>
        ›
      </div>

      <div className={styles.sliderNav}>
        {slides.map((_, index) => (
          <div
            key={index}
            className={`${styles.sliderDot} ${index === currentSlide ? styles.active : ''}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </section>
  )
}
