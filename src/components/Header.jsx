import styles from './Header.module.css'

const NAV_LINKS = [
  { label: 'Главная',               href: '#', active: true },
  { label: 'История',               href: 'https://ru.wikipedia.org/wiki/%D0%98%D1%81%D1%82%D0%BE%D1%80%D0%B8%D1%8F_%D0%9A%D0%B0%D0%B7%D0%B0%D1%85%D1%81%D1%82%D0%B0%D0%BD%D0%B0' },
  { label: 'Современный Казахстан', href: 'https://ru.wikipedia.org/wiki/%D0%9A%D0%B0%D0%B7%D0%B0%D1%85%D1%81%D1%82%D0%B0%D0%BD' },
  { label: 'Медиа',                 href: 'https://tengrinews.kz/#' },
  { label: 'О нас',                 href: 'https://github.com/Dastan21-study' },
]

function LogoIcon() {
  return (
    <svg className={styles.logoIcon} viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg">
      <circle cx="26" cy="26" r="24" fill="#1a6fbd" />
      <circle cx="26" cy="26" r="18" fill="#f5b800" />
      {/* Replace with actual logo image */}
      <text x="26" y="32" textAnchor="middle" fontSize="18" fill="#0d4f94"
            fontFamily="serif" fontWeight="bold">Қ</text>
    </svg>
  )
}

export default function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <a href="#" className={styles.logo}>
          {/* ── LOGO: swap <LogoIcon /> with <img src="/logo.svg" alt="..." /> ── */}
          <LogoIcon />
          <div className={styles.logoText}>
            <span className={styles.logoTop}>Патриот</span>
            <span className={styles.logoBot}>Казахстана</span>
          </div>
        </a>

<ul className={styles.navList}>
  {NAV_LINKS.map(link => (
    <li key={link.label}>
      <a
        href={link.href}
        className={`${styles.navLink} ${link.active ? styles.active : ''}`}
        target={link.href !== '#' ? '_blank' : '_self'}
        rel={link.href !== '#' ? 'noopener noreferrer' : ''}
      >
        {link.label}
      </a>
    </li>
  ))}
</ul>
      </nav>
    </header>
  )
}
