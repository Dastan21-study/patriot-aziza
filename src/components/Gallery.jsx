import styles from './Gallery.module.css'
import s from './shared.module.css'

const ITEMS = [
  {
    id: 1,
    label: 'Природа',
    img: 'https://www.advantour.com/img/kazakhstan/images/nature.jpg',
    video: false,
  },
  {
    id: 2,
    label: 'Традиции',
    img: 'https://shopomania.kz/uploads/posts/2019-12/1576854114_tradicii-i-obychai-kazahskogo-naroda-besikke-salu.jpg',
    video: false,
  },
  {
    id: 3,
    label: 'Танцы',
    img: 'https://ibirzha.kz/wp-content/uploads/2017/02/IMG_6765.jpg',
    video: false,
  },
]

function ImageIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 24L12 12l6 8 5-6 5 10H4Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <circle cx="22" cy="9" r="3" stroke="currentColor" strokeWidth="2" />
    </svg>
  )
}

export default function Gallery() {
  return (
    <section className={styles.section}>
      <h2 className={s.sectionTitle}>
        <span className={styles.ornament} />
        Галерея Казахстана
      </h2>

      <div className={styles.grid}>
        {ITEMS.map(item => (
          <div key={item.id} className={styles.item}>


              <img src={item.img} alt={item.label} className={styles.thumb} />



            <div className={styles.overlay}>
              {item.video && (
                <div className={styles.playBtn}>&#9654;</div>
              )}
            </div>

            {item.video && (
              <div className={styles.videoLabel}>
                &#9654; Смотреть видео
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
