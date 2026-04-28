import styles from './Hero.module.css'
import s from './shared.module.css'

export default function Hero() {
  return (
    <section className={styles.hero}>
   <img src="/фон-Header.jpeg" alt="bg" className={styles.heroBgImg} />

      <div className={styles.heroContent}>
        <h1>Познай Казахстан</h1>
        <p>Любовь к стране начинается с знаний</p>
        <button className={`${s.btn} ${s.btnGold}`} onClick={() => window.open("Kazahstan-Serdce-Evrazii.pdf")}>
  Открыть презентацию
</button>
      </div>
    </section>
  )
}
