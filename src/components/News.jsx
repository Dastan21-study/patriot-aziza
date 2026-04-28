import styles from './News.module.css'
import s from './shared.module.css'

const NEWS = [
  {
    id: 1,
    title: 'Онлайн Викторина «Знай Казахстан»',
    desc: 'Проверь свои знания об истории и культуре Казахстана в нашей ежемесячной викторине.',
    btnLabel: 'Участвовать',
    btnStyle: 'btnGold',
    date: null,
    // img: '/news/quiz.jpg',
  },
  {
    id: 2,
    title: 'Флешмоб «Флаг в сердце»',
    desc: 'Присоединись к национальному флешмобу и покажи любовь к родной стране вместе с нами.',
    btnLabel: 'Участвовать',
    btnStyle: 'btnGold',
    date: null,
    // img: '/news/flashmob.jpg',
  },
  {
    id: 3,
    title: 'Концерт народных ансамблей Казахстана',
    desc: 'Большой праздничный концерт с участием ведущих коллективов страны. Не пропусти!',
    btnLabel: 'Подробнее',
    btnStyle: 'btnBlue',
    date: '22 мая',
    // img: '/news/concert.jpg',
  },
]

function DocIcon() {
  return (
    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="5" y="4" width="20" height="22" rx="3" stroke="currentColor" strokeWidth="2" />
      <path d="M9 12h12M9 17h12M9 22h7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

export default function News() {
  return (
    <section className={styles.section}>
      <h2 className={s.sectionTitle}>
        <span className={styles.ornament} />
        Новости и События
      </h2>

      <div className={styles.grid}>
        {NEWS.map(item => (
          <article key={item.id} className={styles.card}>
            <div className={`${s.imgPlaceholder} ${styles.thumb}`}>
              {item.date && <div className={styles.date}>{item.date}</div>}
              <DocIcon />
              <span>Фото события</span>
            </div>
            <div className={styles.body}>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
              <a href="#" className={`${s.btn} ${s[item.btnStyle]} ${styles.btn}`}>
                {item.btnLabel}
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
