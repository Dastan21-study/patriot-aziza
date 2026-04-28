import { useState } from 'react'
import styles from './Stories.module.css'
import s from './shared.module.css'

const STORIES = [
  {
    id: 1,
    name: 'Геннадий Головкин',
    role: 'многократный чемпион мира',
    img: 'https://vlast.kz/media/pages/cb/1497851135t8dq5_1000x768.jpg',
  },
  {
    id: 2,
    name: 'Димаш Кудайберген',
    role: 'мировой вокалист',
    img: 'https://media.cmn.kz/cmn-photobank/media/2025-12-24/5f9f2323-ce57-406c-87f9-4b580e2c6ee3.jpeg ',
  },
  {
    id: 3,
    name: 'Кайрат Нуртас',
    role: 'эстрадный певец',
    img: 'https://avatars.mds.yandex.net/i?id=649a2011d721e6739429de2e7aae7a843b834d9a-4423990-images-thumbs&n=13',
  },
  {
    id: 4,
    name: 'Нурлан Сабуров',
    role: 'Комик и юморист',
    img: 'https://img.championat.com/s/732x488/news/big/q/h/blagodaren-strane-nurlan-saburov-vpervye-prokommentiroval-zapret-na-vezd-v-rossiyu_177204496055914962.jpg',
  },
]

function PersonIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="18" cy="12" r="7" stroke="#4a7fb5" strokeWidth="2" />
      <path d="M4 34c0-8 6-14 14-14s14 6 14 14" stroke="#4a7fb5" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

export default function Stories() {
  const [offset, setOffset] = useState(0)
  const visible = 3
  const max = STORIES.length - visible

  const prev = () => setOffset(o => Math.max(0, o - 1))
  const next = () => setOffset(o => Math.min(max, o + 1))

  return (
    <section className={styles.section}>
      <h2 className={s.sectionTitle}>
        <span className={styles.ornament} />
        Истории Успеха
      </h2>

      <div className={styles.carouselWrap}>
        <button
          className={`${styles.carouselBtn} ${styles.prev}`}
          onClick={prev}
          disabled={offset === 0}
          aria-label="Назад"
        >{"<"}</button>

        <div className={styles.grid}>
          {STORIES.slice(offset, offset + visible).map(story => (
            <article key={story.id} className={styles.card}>
              <div className={styles.imgWrap}>


                  <img src={story.img} alt={story.name} className={styles.img} />


              </div>
              <div className={styles.body}>
                <h3>{story.name}</h3>
                <p>{story.role}</p>
                <a href="#" className={`${s.btn} ${s.btnGold} ${styles.btn}`}>Подробнее</a>
              </div>
            </article>
          ))}
        </div>

        <button
          className={`${styles.carouselBtn} ${styles.next}`}
          onClick={next}
          disabled={offset >= max}
          aria-label="Вперёд"
        >{">"}</button>
      </div>
    </section>
  )
}
