import styles from './Footer.module.css'

const COLS = [
  {
    title: 'Разделы',
    links: ['Главная', 'История', 'Современный Казахстан', 'Медиа', 'Обучение'],
  },
  {
    title: 'Сообщество',
    links: ['Форум', 'Истории успеха', 'Дневник Патриота', 'Галерея'],
  },
  {
    title: 'Контакты',
    links: ['О нас', 'Написать нам', 'Политика конфиденциальности', 'Условия использования'],
  },
]

function LogoIcon() {
  return (
    <svg width="52" height="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg">
      <circle cx="26" cy="26" r="24" fill="#1a6fbd" />
      <circle cx="26" cy="26" r="18" fill="#f5b800" />
      <text x="26" y="32" textAnchor="middle" fontSize="18" fill="#0d4f94"
            fontFamily="serif" fontWeight="bold">Қ</text>
    </svg>
  )
}

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.inner}>
          {/* Brand */}
          <div className={styles.brand}>
            <div className={styles.logo}>
              <LogoIcon />
              <div className={styles.logoText}>
                <span className={styles.logoTop}>Патриот</span>
                <span className={styles.logoBot}>Казахстана</span>
              </div>
            </div>
            <p>Образовательная платформа, посвящённая истории, культуре и достижениям Казахстана. Любовь к стране начинается с знаний.</p>
          </div>

          {/* Link columns */}
          {COLS.map(col => (
            <div key={col.title} className={styles.col}>
              <h4>{col.title}</h4>
              <ul>
                {col.links.map(link => (
                  <li key={link}><a href="#">{link}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className={styles.bottom}>
          ✦ Создано с любовью к Казахстану ✦ &nbsp;
          &copy; {new Date().getFullYear()} <span className={styles.accent}>Патриот Казахстана</span>
        </div>
      </div>
    </footer>
  )
}
