import Link from 'next/link'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerMain}>
        {/* About Column */}
        <div className={styles.footerAbout}>
          <div className={styles.footerLogo}>
            <div className={styles.logoIcon}>DGT</div>
            <div className={styles.logoText}>
              <span className={styles.brand}>
                <span className={styles.dgt}>DGT</span>-<span className={styles.studio}>studio</span>
              </span>
              <span className={styles.tagline}>Premium Tuning</span>
            </div>
          </div>
          <p>
            DGT-studio — ведущий центр по тюнингу и доработке премиум автомобилей в Москве. 
            Специализируемся на выхлопных системах, тормозах, кованых дисках и комплексных проектах. 
            Работаем только с оригинальной продукцией мировых брендов.
          </p>
          
          <div className={styles.footerStats}>
            <div className={styles.statItem}>
              <div className={styles.statValue}>500+</div>
              <div className={styles.statLabel}>Проектов</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statValue}>10+</div>
              <div className={styles.statLabel}>Лет опыта</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statValue}>15+</div>
              <div className={styles.statLabel}>Брендов</div>
            </div>
          </div>

          <div className={styles.footerSocial}>
            <a href="https://instagram.com/dgtstudio" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="Instagram">📷</a>
            <a href="https://youtube.com/dgtstudio" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="YouTube">▶</a>
            <a href="https://vk.com/dgtstudio" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="VK">В</a>
            <a href="https://t.me/dgtstudio" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="Telegram">✈</a>
          </div>
        </div>

        {/* Services Column */}
        <div className={styles.footerSection}>
          <h3>Услуги</h3>
          <ul className={styles.footerLinks}>
            <li><Link href="/exhaust">Выхлопные системы</Link></li>
            <li><Link href="/brakes">Тормозные системы</Link></li>
            <li><Link href="/wheels">Кованые диски</Link></li>
            <li><Link href="/suspension">Подвеска</Link></li>
            <li><Link href="/projects">Комплексные проекты</Link></li>
          </ul>
        </div>

        {/* Contact Column */}
        <div className={styles.footerSection}>
          <h3>Контакты</h3>
          <ul className={styles.footerContactInfo}>
            <li>
              <span className={styles.icon}>📍</span>
              <span>Москва, Киевская ул., 14, стр. 1</span>
            </li>
            <li>
              <span className={styles.icon}>📞</span>
              <a href="tel:+74951280227">+7 (495) 128-02-27</a>
            </li>
            <li>
              <span className={styles.icon}>✉</span>
              <a href="mailto:info@dgt-studio.ru">info@dgt-studio.ru</a>
            </li>
            <li>
              <span className={styles.icon}>🕐</span>
              <span>Пн-Вс: 9:00 - 21:00<br/>Без выходных</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className={styles.footerBottom}>
        <div className={styles.footerCopyright}>
          © 2025 DGT-studio. Все права защищены.
        </div>
        <div className={styles.footerBottomLinks}>
          <Link href="/privacy">Политика конфиденциальности</Link>
          <Link href="/terms">Условия использования</Link>
        </div>
      </div>
    </footer>
  )
}
