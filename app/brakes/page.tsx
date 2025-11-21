import Image from 'next/image'
import styles from '../exhaust/exhaust.module.css'

export const metadata = {
  title: 'Тормозные системы - DGT-studio',
  description: 'Высокопроизводительные тормозные системы с многопоршневыми суппортами',
}

const brakeSystems = [
  {
    id: 1,
    brand: 'Brembo',
    model: 'GT-R Big Brake Kit',
    description: '6-поршневые суппорты с 380мм дисками',
    price: 'от 680 000 ₽',
    calipers: '6 поршней',
    discs: '380×34 мм',
    image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&h=600&fit=crop',
  },
  {
    id: 2,
    brand: 'AP Racing',
    model: 'Competition Brake Kit',
    description: 'Профессиональная система для трека',
    price: 'от 750 000 ₽',
    calipers: '6 поршней',
    discs: '380×32 мм',
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&h=600&fit=crop',
  },
  {
    id: 3,
    brand: 'Endless',
    model: 'Racing Mono 6',
    description: 'Карбон-керамические диски премиум класса',
    price: 'от 920 000 ₽',
    calipers: '6 поршней',
    discs: '400×38 мм',
    image: 'https://images.unsplash.com/photo-1502877338535-766e1452684a?w=800&h=600&fit=crop',
  },
  {
    id: 4,
    brand: 'Brembo',
    model: 'CCM-R Carbon Ceramic',
    description: 'Топовая карбон-керамическая система',
    price: 'от 1 200 000 ₽',
    calipers: '6 поршней',
    discs: '410×38 мм',
    image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&h=600&fit=crop',
  },
]

export default function BrakesPage() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <Image
          src="https://img.freepik.com/premium-photo/colorful-red-yellow-blue-green-sport-racing-brake-discs-isolated-gray-background-3d-rende_475765-57.jpg?w=1060"
          alt="Brake Systems"
          fill
          className={styles.heroBg}
          quality={90}
          priority
        />
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <div className={styles.heroLabel}>Услуга 02</div>
          <h1 className={styles.heroTitle}>
            <strong>Тормозные</strong> системы
          </h1>
          <p className={styles.heroDescription}>
            Высокопроизводительные тормозные системы с многопоршневыми суппортами и карбон-керамическими дисками. 
            Максимальный контроль и безопасность на любой скорости.
          </p>
        </div>
      </section>

      <section className={styles.products}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Каталог систем</h2>
            <p className={styles.sectionDescription}>
              Профессиональные тормозные системы для вашего автомобиля
            </p>
          </div>

          <div className={styles.productsGrid}>
            {brakeSystems.map((system) => (
              <div key={system.id} className={styles.productCard}>
                <div className={styles.productImage}>
                  <Image
                    src={system.image}
                    alt={system.model}
                    fill
                    style={{ objectFit: 'cover' }}
                    quality={85}
                  />
                </div>
                <div className={styles.productContent}>
                  <div className={styles.productBrand}>{system.brand}</div>
                  <h3 className={styles.productName}>{system.model}</h3>
                  <p className={styles.productDescription}>{system.description}</p>
                  <div className={styles.productSpecs}>
                    <span className={styles.spec}>{system.calipers}</span>
                    <span className={styles.spec}>{system.discs}</span>
                  </div>
                  <div className={styles.productFooter}>
                    <div className={styles.productPrice}>{system.price}</div>
                    <button className={styles.productBtn}>Подробнее</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.features}>
        <div className={styles.container}>
          <h2 className={styles.featuresTitle}>Преимущества</h2>
          <div className={styles.featuresGrid}>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>🛑</div>
              <h3>Короткий тормозной путь</h3>
              <p>Уменьшение дистанции торможения на 20-30%</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>🔥</div>
              <h3>Термостойкость</h3>
              <p>Работа без потери эффективности до 800°C</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>💎</div>
              <h3>Долговечность</h3>
              <p>Карбон-керамика служит до 300 000 км</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>⚙️</div>
              <h3>Профессиональная установка</h3>
              <p>Гарантия 2 года на работы и материалы</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
