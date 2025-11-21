import Image from 'next/image'
import styles from '../exhaust/exhaust.module.css'

export const metadata = {
  title: 'Подвеска - DGT-studio',
  description: 'Профессиональные системы подвески: койловеры, пневмоподвеска, стабилизаторы',
}

const suspensionSystems = [
  {
    id: 1,
    brand: 'KW',
    model: 'Variant 3 Coilovers',
    description: 'Премиальные койловеры с раздельной регулировкой',
    price: 'от 320 000 ₽',
    adjustment: 'Высота + Жесткость',
    drop: '25-55 мм',
    image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&h=600&fit=crop',
  },
  {
    id: 2,
    brand: 'Öhlins',
    model: 'Road & Track',
    description: 'Профессиональная подвеска для трека и дороги',
    price: 'от 480 000 ₽',
    adjustment: 'Высота + 30 кликов жесткости',
    drop: '20-50 мм',
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&h=600&fit=crop',
  },
  {
    id: 3,
    brand: 'Air Lift',
    model: 'Performance 3P',
    description: 'Пневмоподвеска с электронным управлением',
    price: 'от 550 000 ₽',
    adjustment: 'Электронное управление',
    drop: '0-120 мм',
    image: 'https://images.unsplash.com/photo-1502877338535-766e1452684a?w=800&h=600&fit=crop',
  },
  {
    id: 4,
    brand: 'KW',
    model: 'HAS (Hydraulic Lift System)',
    description: 'Гидравлическая система подъема передней оси',
    price: 'от 280 000 ₽',
    adjustment: '+45 мм подъем',
    drop: 'С койловерами',
    image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&h=600&fit=crop',
  },
]

export default function SuspensionPage() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <Image
          src="https://img.freepik.com/free-photo/mechanical-female-changing-car-wheels_23-2148327504.jpg?t=st=1763580470~exp=1763584070~hmac=018a8e89baecb86fc0b5fd521071a31d96f76f05a23d71e36c4d4544118af34b&w=2000"
          alt="Suspension"
          fill
          className={styles.heroBg}
          quality={90}
          priority
        />
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <div className={styles.heroLabel}>Услуга 04</div>
          <h1 className={styles.heroTitle}>
            <strong>Подвеска</strong>
          </h1>
          <p className={styles.heroDescription}>
            Профессиональные системы подвески: койловеры, пневмоподвеска, стабилизаторы. 
            Улучшение управляемости, регулировка жесткости и клиренса под любые задачи.
          </p>
        </div>
      </section>

      <section className={styles.products}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Каталог подвески</h2>
            <p className={styles.sectionDescription}>
              Профессиональные системы для улучшения управляемости
            </p>
          </div>

          <div className={styles.productsGrid}>
            {suspensionSystems.map((system) => (
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
                    <span className={styles.spec}>{system.adjustment}</span>
                    <span className={styles.spec}>{system.drop}</span>
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
              <div className={styles.featureIcon}>🎯</div>
              <h3>Точная настройка</h3>
              <p>Регулировка высоты и жесткости под ваши задачи</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>🏎️</div>
              <h3>Улучшенная управляемость</h3>
              <p>Снижение кренов и повышение стабильности</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>💨</div>
              <h3>Комфорт и спорт</h3>
              <p>Оптимальный баланс между комфортом и драйвом</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>🔧</div>
              <h3>Профессиональная установка</h3>
              <p>Полная геометрия после установки</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
