import Image from 'next/image'
import styles from './exhaust.module.css'

export const metadata = {
  title: 'Выхлопные системы - DGT-studio',
  description: 'Премиальные титановые и стальные выхлопные системы от мировых производителей',
}

const exhaustSystems = [
  {
    id: 1,
    brand: 'Akrapovic',
    model: 'Evolution Line',
    description: 'Премиальная титановая система с карбоновыми насадками',
    price: 'от 450 000 ₽',
    power: '+15 л.с.',
    weight: '-12 кг',
    image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&h=600&fit=crop',
  },
  {
    id: 2,
    brand: 'iPE',
    model: 'F1 Exhaust System',
    description: 'Высокопроизводительная система из нержавеющей стали',
    price: 'от 380 000 ₽',
    power: '+12 л.с.',
    weight: '-10 кг',
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&h=600&fit=crop',
  },
  {
    id: 3,
    brand: 'Capristo',
    model: 'Valvetronic Exhaust',
    description: 'Система с электронным управлением клапанами',
    price: 'от 520 000 ₽',
    power: '+18 л.с.',
    weight: '-14 кг',
    image: 'https://images.unsplash.com/photo-1502877338535-766e1452684a?w=800&h=600&fit=crop',
  },
  {
    id: 4,
    brand: 'Remus',
    model: 'Sport Exhaust',
    description: 'Спортивная система с агрессивным звуком',
    price: 'от 320 000 ₽',
    power: '+10 л.с.',
    weight: '-8 кг',
    image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&h=600&fit=crop',
  },
]

export default function ExhaustPage() {
  return (
    <div className={styles.page}>
      {/* Hero */}
      <section className={styles.hero}>
        <Image
          src="https://img.freepik.com/premium-photo/closeup-view-car39s-triple-exhaust-pipes-reflecting-light_1368099-4350.jpg?w=2000"
          alt="Exhaust Systems"
          fill
          className={styles.heroBg}
          quality={90}
          priority
        />
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <div className={styles.heroLabel}>Услуга 01</div>
          <h1 className={styles.heroTitle}>
            <strong>Выхлопные</strong> системы
          </h1>
          <p className={styles.heroDescription}>
            Премиальные титановые и стальные выхлопные системы от мировых производителей. 
            Улучшение звука, производительности и снижение веса вашего автомобиля на 8-15 кг.
          </p>
        </div>
      </section>

      {/* Products */}
      <section className={styles.products}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Каталог систем</h2>
            <p className={styles.sectionDescription}>
              Подберем идеальную выхлопную систему под ваш автомобиль
            </p>
          </div>

          <div className={styles.productsGrid}>
            {exhaustSystems.map((system) => (
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
                    <span className={styles.spec}>{system.power}</span>
                    <span className={styles.spec}>{system.weight}</span>
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

      {/* Features */}
      <section className={styles.features}>
        <div className={styles.container}>
          <h2 className={styles.featuresTitle}>Преимущества</h2>
          <div className={styles.featuresGrid}>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>🔊</div>
              <h3>Улучшенный звук</h3>
              <p>Глубокий спортивный звук без резонансов</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>⚡</div>
              <h3>Прирост мощности</h3>
              <p>До +20 л.с. за счет оптимизации потока</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>⚖️</div>
              <h3>Снижение веса</h3>
              <p>Титановые системы легче стоковых на 8-15 кг</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>✨</div>
              <h3>Премиум качество</h3>
              <p>Только оригинальная продукция от производителей</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
