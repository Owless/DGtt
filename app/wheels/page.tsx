import Image from 'next/image'
import styles from '../exhaust/exhaust.module.css'

export const metadata = {
  title: 'Кованые диски - DGT-studio',
  description: 'Эксклюзивные кованые диски ручной работы по индивидуальному дизайну',
}

const wheelSets = [
  {
    id: 1,
    brand: 'HRE',
    model: 'P101 Forged',
    description: 'Легкие кованые диски с индивидуальным дизайном',
    price: 'от 850 000 ₽',
    weight: '-40% от OEM',
    sizes: '19"-23"',
    image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&h=600&fit=crop',
  },
  {
    id: 2,
    brand: 'Vossen',
    model: 'HF-2 Hybrid Forged',
    description: 'Гибридная технология ковки с премиум отделкой',
    price: 'от 620 000 ₽',
    weight: '-35% от OEM',
    sizes: '19"-22"',
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&h=600&fit=crop',
  },
  {
    id: 3,
    brand: 'BBS',
    model: 'FI-R Forged',
    description: 'Легендарное немецкое качество ковки',
    price: 'от 780 000 ₽',
    weight: '-38% от OEM',
    sizes: '18"-21"',
    image: 'https://images.unsplash.com/photo-1502877338535-766e1452684a?w=800&h=600&fit=crop',
  },
  {
    id: 4,
    brand: 'ADV.1',
    model: 'ADV5.0 M.V2',
    description: 'Кастомные диски с неограниченными вариантами цвета',
    price: 'от 920 000 ₽',
    weight: '-42% от OEM',
    sizes: '20"-24"',
    image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&h=600&fit=crop',
  },
]

export default function WheelsPage() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <Image
          src="https://img.freepik.com/premium-photo/car-alloy-wheels-store-selective-focus-sale-replacement_326821-1799.jpg?w=2000"
          alt="Forged Wheels"
          fill
          className={styles.heroBg}
          quality={90}
          priority
        />
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <div className={styles.heroLabel}>Услуга 03</div>
          <h1 className={styles.heroTitle}>
            <strong>Кованые</strong> диски
          </h1>
          <p className={styles.heroDescription}>
            Эксклюзивные кованые диски ручной работы. Индивидуальный дизайн, любые размеры и цвета. 
            Легкие, прочные и уникальные — созданы специально для вашего автомобиля.
          </p>
        </div>
      </section>

      <section className={styles.products}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Каталог дисков</h2>
            <p className={styles.sectionDescription}>
              Премиальные кованые диски от ведущих мировых производителей
            </p>
          </div>

          <div className={styles.productsGrid}>
            {wheelSets.map((wheel) => (
              <div key={wheel.id} className={styles.productCard}>
                <div className={styles.productImage}>
                  <Image
                    src={wheel.image}
                    alt={wheel.model}
                    fill
                    style={{ objectFit: 'cover' }}
                    quality={85}
                  />
                </div>
                <div className={styles.productContent}>
                  <div className={styles.productBrand}>{wheel.brand}</div>
                  <h3 className={styles.productName}>{wheel.model}</h3>
                  <p className={styles.productDescription}>{wheel.description}</p>
                  <div className={styles.productSpecs}>
                    <span className={styles.spec}>{wheel.weight}</span>
                    <span className={styles.spec}>{wheel.sizes}</span>
                  </div>
                  <div className={styles.productFooter}>
                    <div className={styles.productPrice}>{wheel.price}</div>
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
              <div className={styles.featureIcon}>⚖️</div>
              <h3>Легче на 40%</h3>
              <p>Снижение неподрессоренных масс улучшает динамику</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>💪</div>
              <h3>Прочнее литых</h3>
              <p>Выдерживают в 3 раза большие нагрузки</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>🎨</div>
              <h3>Индивидуальный дизайн</h3>
              <p>Любые цвета, финиши и кастомизация</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>✅</div>
              <h3>Пожизненная гарантия</h3>
              <p>Производители дают гарантию на всю жизнь</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
