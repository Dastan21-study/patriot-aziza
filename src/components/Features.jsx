import { useState } from 'react'
import styles from './Features.module.css'
import KazakhstanQuiz from './viktorina'

const FEATURES = [
  { emoji: '🏅', title: 'Проходи Викторины', sub: 'Проверь свои знания!' },
  { emoji: '🗺️', title: 'Путешествуй по Карте', sub: 'Открой места Казахстана!' },
  { emoji: '📸', title: 'Создай Контент', sub: 'Добавь фото и истории!' },
  { emoji: '📔', title: 'Дневник Патриота', sub: 'Веди свой прогресс!' },
]

export default function Features() {
  const [openQuiz, setOpenQuiz] = useState(false)

  return (
    <section className={styles.features}>
      <div className={styles.grid}>
        {FEATURES.map((f, index) => (
          <button
            key={f.title}
            className={styles.card}
            onClick={() => {
              if (index === 0) {
                setOpenQuiz(true)
              } else {
                console.log(f.title)
              }
            }}
          >
            <div className={styles.icon}>{f.emoji}</div>

            <div className={styles.body}>
              <strong>{f.title}</strong>
              <span>{f.sub}</span>
            </div>
          </button>
        ))}
      </div>

      {openQuiz && <KazakhstanQuiz />}
    </section>
  )
}