import { useState } from 'react'
import styles from './Features.module.css'
import KazakhstanQuiz from './viktorina'

const FEATURES = [
  { emoji: '🏅', title: 'Проходи Викторины', sub: 'Проверь свои знания!' },
  { emoji: '🗺️', title: 'Путешествуй по Карте', sub: 'Открой места Казахстана!' },
  { emoji: '📸', title: 'Создай Контент', sub: 'Добавь фото и истории!' },
  { emoji: '📔', title: 'Дневник Патриота', sub: 'Веди свой прогресс!' },
]

const cities = [
  {
    name: 'Алматы',
    population: '2.3 млн',
    area: '682 км²',
  },

  {
    name: 'Астана',
    population: '1.5 млн',
    area: '797 км²',
  },

  {
    name: 'Шымкент',
    population: '1.2 млн',
    area: '1170 км²',
  },

  {
    name: 'Караганда',
    population: '500 тыс',
    area: '550 км²',
  },

  {
    name: 'Актобе',
    population: '560 тыс',
    area: '428 км²',
  },
]

export default function Features() {
  const [openQuiz, setOpenQuiz] = useState(false)
  const [openMap, setOpenMap] = useState(false)

  return (
    <section className={styles.features}>

      {/* КНОПКИ */}
      <div className={styles.grid}>

        {FEATURES.map((f, index) => (
          <button
            key={f.title}
            className={styles.card}
            onClick={() => {

              // ВИКТОРИНА
             if (index === 0) {
  setOpenQuiz(!openQuiz)
}

              // КАРТА
              else if (index === 1) {
                setOpenMap(!openMap)
              }

              else {
                console.log(f.title)
              }
            }}
          >
            <div className={styles.icon}>
              {f.emoji}
            </div>

            <div className={styles.body}>
              <strong>{f.title}</strong>
              <span>{f.sub}</span>
            </div>
          </button>
        ))}

      </div>

      {/* ВИКТОРИНА */}
      {openQuiz && (
        <KazakhstanQuiz onClose={() => setOpenQuiz(false)}/>
      )}

      {/* КАРТА СНИЗУ */}
      {openMap && (

        <section className={styles.mapSection}>

          <div className={styles.mapTop}>

            <h2>
              Карта Казахстана
            </h2>

            <button
              className={styles.closeBtn}
              onClick={() => setOpenMap(false)}
            >
              ✕
            </button>

          </div>

          <div className={styles.mapContent}>

            {/* КАРТА */}
            <div className={styles.mapSide}>

              <img
                src="/KZ_MAP.webp"
                alt="Карта Казахстана"
                className={styles.mapImage}
              />

            </div>

            {/* ИНФОРМАЦИЯ */}
            <div className={styles.infoSide}>

              <h3>
                Крупные города Казахстана
              </h3>

              <div className={styles.cityList}>

                {cities.map((city) => (
                  <div
                    key={city.name}
                    className={styles.cityCard}
                  >

                    <h4>{city.name}</h4>

                    <p>
                      Население: {city.population}
                    </p>

                    <p>
                      Площадь: ({city.area})
                    </p>

                  </div>
                ))}

              </div>

            </div>

          </div>

        </section>
      )}

    </section>
  )
}