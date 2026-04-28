import styles from './Features.module.css'

const FEATURES = [
  { emoji: '🏆', title: 'Проходи Викторины',      sub: 'Проверь свои знания!' },
  { emoji: '🗺️', title: 'Путешествуй по Карте',   sub: 'Открой места Казахстана!' },
  { emoji: '📸', title: 'Создай Контент',          sub: 'Добавь фото и истории!' },
  { emoji: '📖', title: 'Дневник Патриота',        sub: 'Веди свой прогресс!' },
]

export default function Features() {
  return (
    <section className={styles.features}>
      <div className={styles.grid}>
        {FEATURES.map(f => (
          <div key={f.title} className={styles.card}>
            <div className={styles.icon}>{f.emoji}</div>
            <div className={styles.body}>
              <strong>{f.title}</strong>
              <span>{f.sub}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
