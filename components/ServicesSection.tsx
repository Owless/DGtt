import Image from 'next/image'
import Link from 'next/link'
import styles from './ServicesSection.module.css'

const services = [
  {
    id: 'exhaust',
    label: 'Услуга 01',
    title: 'Выхлопные',
    titleBold: 'Выхлопные',
    subtitle: 'системы',
    description: 'Премиальные титановые и стальные выхлопные системы от мировых производителей. Улучшение звука, производительности и снижение веса вашего автомобиля на 8-15 кг.',
    brands: ['Akrapovic', 'iPE', 'Capristo', 'Remus'],
    link: '/exhaust',
    linkText: 'Выбрать систему',
    image: 'https://img.freepik.com/premium-photo/closeup-view-car39s-triple-exhaust-pipes-reflecting-light_1368099-4350.jpg?w=2000',
  },
  {
    id: 'brakes',
    label: 'Услуга 02',
    title: 'Тормозные',
    titleBold: 'Тормозные',
    subtitle: 'системы',
    description: 'Высокопроизводительные тормозные системы с многопоршневыми суппортами и карбон-керамическими дисками. Максимальный контроль и безопасность на любой скорости.',
    brands: ['Brembo', 'AP Racing', 'Endless'],
    link: '/brakes',
    linkText: 'Подобрать систему',
    image: 'https://img.freepik.com/premium-photo/colorful-red-yellow-blue-green-sport-racing-brake-discs-isolated-gray-background-3d-rende_475765-57.jpg?w=1060',
  },
  {
    id: 'wheels',
    label: 'Услуга 03',
    title: 'Кованые',
    titleBold: 'Кованые',
    subtitle: 'диски',
    description: 'Эксклюзивные кованые диски ручной работы. Индивидуальный дизайн, любые размеры и цвета. Легкие, прочные и уникальные — созданы специально для вашего автомобиля.',
    brands: ['HRE', 'Vossen', 'BBS', 'ADV.1'],
    link: '/wheels',
    linkText: 'Рассчитать стоимость',
    image: 'https://img.freepik.com/premium-photo/car-alloy-wheels-store-selective-focus-sale-replacement_326821-1799.jpg?w=2000',
  },
  {
    id: 'suspension',
    label: 'Услуга 04',
    title: 'Подвеска',
    titleBold: 'Подвеска',
    subtitle: '',
    description: 'Профессиональные системы подвески: койловеры, пневмоподвеска, стабилизаторы. Улучшение управляемости, регулировка жесткости и клиренса под любые задачи.',
    brands: ['KW', 'Öhlins', 'Air Lift'],
    link: '/suspension',
    linkText: 'Смотреть каталог',
    image: 'https://img.freepik.com/free-photo/mechanical-female-changing-car-wheels_23-2148327504.jpg?t=st=1763580470~exp=1763584070~hmac=018a8e89baecb86fc0b5fd521071a31d96f76f05a23d71e36c4d4544118af34b&w=2000',
  },
]

export default function ServicesSection() {
  return (
    <section className={styles.servicesSection} id="services">
      {services.map((service) => (
        <div key={service.id} className={styles.serviceItem} id={service.id}>
          <Image
            src={service.image}
            alt={service.title}
            fill
            className={styles.serviceBg}
            quality={85}
          />
          <div className={styles.serviceOverlay} />
          <div className={styles.serviceContent}>
            <div className={styles.serviceLabel}>{service.label}</div>
            <h2 className={styles.serviceTitle}>
              <strong>{service.titleBold}</strong> {service.subtitle}
            </h2>
            <p className={styles.serviceDescription}>{service.description}</p>
            <div className={styles.serviceBrands}>
              {service.brands.map((brand) => (
                <span key={brand} className={styles.brandBadge}>
                  {brand}
                </span>
              ))}
            </div>
            <Link href={service.link} className={styles.serviceLink}>
              {service.linkText}
            </Link>
          </div>
        </div>
      ))}
    </section>
  )
}
