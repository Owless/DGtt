import Image from 'next/image'
import Link from 'next/link'
import styles from './projects.module.css'

export const metadata = {
  title: 'Проекты - DGT-studio',
  description: 'Комплексные решения для популярных моделей автомобилей',
}

const allProjects = [
  {
    id: 'gt3',
    brand: 'Porsche',
    name: '911 GT3 (992)',
    specs: '+35 л.с. • -25 кг • 6 модификаций',
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&h=600&fit=crop',
  },
  {
    id: 'm3',
    brand: 'BMW',
    name: 'M3 Competition',
    specs: '+50 л.с. • -18 кг • 7 модификаций',
    image: 'https://img.freepik.com/free-photo/silver-sedan-with-red-lights-parked-port_114579-4385.jpg',
  },
  {
    id: 'amg-gt',
    brand: 'Mercedes-AMG',
    name: 'GT 63 S 4MATIC+',
    specs: '+45 л.с. • -22 кг • 8 модификаций',
    image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&h=600&fit=crop',
  },
  {
    id: 'rs6',
    brand: 'Audi',
    name: 'RS6 Avant (C8)',
    specs: '+70 л.с. • -20 кг • 9 модификаций',
    image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&h=600&fit=crop',
  },
  {
    id: 'cayenne',
    brand: 'Porsche',
    name: 'Cayenne Turbo GT',
    specs: '+40 л.с. • -15 кг • 6 модификаций',
    image: 'https://img.freepik.com/free-photo/white-mini-coupe-road_114579-5082.jpg',
  },
  {
    id: 'm5',
    brand: 'BMW',
    name: 'M5 Competition',
    specs: '+60 л.с. • -20 кг • 8 модификаций',
    image: 'https://img.freepik.com/premium-photo/robotic-car-assembly_931086-3062.jpg',
  },
  {
    id: 'urus',
    brand: 'Lamborghini',
    name: 'Urus Performante',
    specs: '+55 л.с. • -18 кг • 7 модификаций',
    image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&h=600&fit=crop',
  },
  {
    id: 'g63',
    brand: 'Mercedes-AMG',
    name: 'G 63 AMG',
    specs: '+50 л.с. • -12 кг • 6 модификаций',
    image: 'https://images.unsplash.com/photo-1502877338535-766e1452684a?w=800&h=600&fit=crop',
  },
  {
    id: 'x5m',
    brand: 'BMW',
    name: 'X5 M Competition',
    specs: '+65 л.с. • -16 кг • 7 модификаций',
    image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&h=600&fit=crop',
  },
]

export default function ProjectsPage() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            <strong>Проекты</strong> под ключ
          </h1>
          <p className={styles.heroDescription}>
            Комплексные решения для популярных моделей. Готовые спек-листы модификаций от выхлопной системы до полной трансформации автомобиля.
          </p>
        </div>
      </section>

      <section className={styles.projects}>
        <div className={styles.container}>
          <div className={styles.projectsGrid}>
            {allProjects.map((project) => (
              <Link
                key={project.id}
                href={`/projects/${project.id}`}
                className={styles.projectCard}
              >
                <div className={styles.projectImage}>
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    style={{ objectFit: 'cover' }}
                    quality={85}
                  />
                </div>
                <div className={styles.projectOverlay}>
                  <span className={styles.projectBadge}>{project.brand}</span>
                  <h3 className={styles.projectName}>{project.name}</h3>
                  <p className={styles.projectSpecs}>{project.specs}</p>
                  <span className={styles.projectAction}>Подробнее</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
