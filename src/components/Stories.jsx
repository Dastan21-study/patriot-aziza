import { useState } from 'react'
import styles from './Stories.module.css'
import s from './shared.module.css'

const DEFAULT_STORIES = [
{
id: 1,
name: 'Геннадий Головкин',
role: 'многократный чемпион мира',
img: 'https://vlast.kz/media/pages/cb/1497851135t8dq5_1000x768.jpg',
href: 'https://ru.wikipedia.org/wiki/%D0%93%D0%BE%D0%BB%D0%BE%D0%B2%D0%BA%D0%B8%D0%BD,*%D0%93%D0%B5%D0%BD%D0%BD%D0%B0%D0%B4%D0%B8%D0%B9*%D0%93%D0%B5%D0%BD%D0%BD%D0%B0%D0%B4%D1%8C%D0%B5%D0%B2%D0%B8%D1%87',
},
{
id: 2,
name: 'Димаш Кудайберген',
role: 'мировой вокалист',
img: 'https://media.cmn.kz/cmn-photobank/media/2025-12-24/5f9f2323-ce57-406c-87f9-4b580e2c6ee3.jpeg',
href: 'https://ru.wikipedia.org/wiki/%D0%9A%D1%83%D0%B4%D0%B0%D0%B9%D0%B1%D0%B5%D1%80%D0%B3%D0%B5%D0%BD,*%D0%94%D0%B8%D0%BC%D0%B0%D1%88',
},
{
id: 3,
name: 'Кайрат Нуртас',
role: 'эстрадный певец',
img: 'https://avatars.mds.yandex.net/i?id=649a2011d721e6739429de2e7aae7a843b834d9a-4423990-images-thumbs&n=13',
href: 'https://ru.wikipedia.org/wiki/%D0%9D%D1%83%D1%80%D1%82%D0%B0%D1%81,*%D0%9A%D0%B0%D0%B9%D1%80%D0%B0%D1%82',
},
{
id: 4,
name: 'Нурлан Сабуров',
role: 'Комик и юморист',
img: 'https://img.championat.com/s/732x488/news/big/q/h/blagodaren-strane-nurlan-saburov-vpervye-prokommentiroval-zapret-na-vezd-v-rossiyu_177204496055914962.jpg',
href: 'https://ru.wikipedia.org/wiki/%D0%A1%D0%B0%D0%B1%D1%83%D1%80%D0%BE%D0%B2,*%D0%9D%D1%83%D1%80%D0%BB%D0%B0%D0%BD*%D0%90%D0%BB%D0%B8%D0%B1%D0%B5%D0%BA%D0%BE%D0%B2%D0%B8%D1%87',
},
]

export default function Stories({ stories }) {

const [offset, setOffset] = useState(0)

const visible = 3

const allStories = [...DEFAULT_STORIES, ...stories]

const max = Math.max(0, allStories.length - visible)

const prev = () => {
setOffset(o => Math.max(0, o - 1))
}

const next = () => {
setOffset(o => Math.min(max, o + 1))
}

return ( <section className={styles.section}> <h2 className={s.sectionTitle}> <span className={styles.ornament} />
Истории Успеха </h2>
  <div className={styles.carouselWrap}>

    <button
      className={`${styles.carouselBtn} ${styles.prev}`}
      onClick={prev}
      disabled={offset === 0}
      aria-label="Назад"
    >
      {"<"}
    </button>

    <div className={styles.grid}>
      {allStories
        .slice(offset, offset + visible)
        .map(story => (
          <article
            key={story.id}
            className={styles.card}
          >
            <div className={styles.imgWrap}>
              <img
                src={story.img}
                alt={story.name}
                className={styles.img}
              />
            </div>

            <div className={styles.body}>
              <h3>{story.name}</h3>

              <p>{story.role}</p>

              <a
                href={story.href}
                target="_blank"
                rel="noreferrer"
                className={`${s.btn} ${s.btnGold} ${styles.btn}`}
              >
                Подробнее
              </a>
            </div>
          </article>
        ))}
    </div>

    <button
      className={`${styles.carouselBtn} ${styles.next}`}
      onClick={next}
      disabled={offset >= max}
      aria-label="Вперёд"
    >
      {">"}
    </button>

  </div>
</section>
)
}
