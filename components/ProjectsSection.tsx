import Image from 'next/image'
import Link from 'next/link'
import styles from './ProjectsSection.module.css'

const projects = [
  {
    id: 1,
    brand: 'Porsche',
    name: '911 GT3 (992)',
    specs: '+35 л.с. • -25 кг • 6 модификаций',
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&h=600&fit=crop',
    link: '/projects/gt3',
  },
  {
    id: 2,
    brand: 'BMW',
    name: 'M3 Competition',
    specs: '+50 л.с. • -18 кг • 7 модификаций',
    image: 'https://img.freepik.com/free-photo/silver-sedan-with-red-lights-parked-port_114579-4385.jpg',
    link: '/projects/m3',
  },
  {
    id: 3,
    brand: 'Mercedes-AMG',
    name: 'GT 63 S 4MATIC+',
    specs: '+45 л.с. • -22 кг • 8 модификаций',
    image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&h=600&fit=crop',
    link: '/projects/amg-gt',
  },
  {
    id: 4,
    brand: 'Audi',
    name: 'RS6 Avant (C8)',
    specs: '+70 л.с. • -20 кг • 9 модификаций',
    image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&h=600&fit=crop',
    link: '/projects/rs6',
  },
  {
    id: 5,
    brand: 'Porsche',
    name: 'Cayenne Turbo GT',
    specs: '+40 л.с. • -15 кг • 6 модификаций',
    image: 'https://img.freepik.com/free-photo/white-mini-coupe-road_114579-5082.jpg',
    link: '/projects/cayenne',
  },
  {
    id: 6,
    brand: 'BMW',
    name: 'M5 Competition',
    specs: '+60 л.с. • -20 кг • 8 модификаций',
    image: 'https://img.freepik.com/premium-photo/robotic-car-assembly_931086-3062.jpg',
    link: '/projects/m5',
  },
]

export default function ProjectsSection() {
  return (
    <section className={styles.projectsSection} id="projects">
      <div className={styles.projectsContainer}>
        <div className={styles.sectionHeader}>
          <div className={styles.sectionLabel}>Portfolio</div>
          <h2 className={styles.sectionTitle}>
            <strong>Проекты</strong> под ключ
          </h2>
          <p className={styles.sectionDescription}>
            Комплексные решения для популярных моделей. Готовые спек-листы модификаций: 
            от выхлопной системы до полной трансформации автомобиля.
          </p>
        </div>

        <div className={styles.projectsGrid}>
          {projects.map((project) => (
            <Link key={project.id} href={project.link} className={styles.projectCard}>
              <Image
                src={project.image}
                alt={project.name}
                fill
                className={styles.projectImage}
                quality={85}
              />
              <div className={styles.projectOverlay}>
                <span className={styles.projectBadge}>{project.brand}</span>
                <h3 className={styles.projectName}>{project.name}</h3>
                <p className={styles.projectSpecs}>{project.specs}</p>
                <span className={styles.projectAction}>Подробнее</span>
              </div>
            </Link>
          ))}
        </div>

        <Link href="/projects" className={styles.viewAllBtn}>
          Смотреть все проекты
        </Link>
      </div>
    </section>
  )
}
