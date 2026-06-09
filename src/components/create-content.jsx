import { useState } from 'react'

export default function CreateContent({ addStory }) {

  const [image, setImage] = useState('')
  const [name, setName] = useState('')
  const [role, setRole] = useState('')
  const [source, setSource] = useState('')

  function handleSubmit() {

  addStory({
    img: image,
    name,
    role,
    href: source,
  })

  setImage('')
  setName('')
  setRole('')
  setSource('')
}

  return (
    <section style={styles.wrapper}>

      <h2 style={styles.title}>
        Создать Контент
      </h2>

      <div style={styles.form}>

        {/* URL ФОТО */}
        <input
          type="text"
          placeholder="URL фотографии"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          style={styles.input}
        />

        {/* ФИО */}
        <input
          type="text"
          placeholder="ФИО"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={styles.input}
        />

        {/* ПРОФЕССИЯ */}
        <input
          type="text"
          placeholder="Профессия"
          value={role}
          onChange={(e) => setRole(e.target.value)}
          style={styles.input}
        />

        {/* ССЫЛКА */}
        <input
          type="text"
          placeholder="Ссылка на источник"
          value={source}
          onChange={(e) => setSource(e.target.value)}
          style={styles.input}
        />

        <button
          onClick={handleSubmit}
          style={styles.button}
        >
          Сохранить
        </button>

      </div>

    </section>
  )
}

const styles = {

  wrapper: {
    padding: '40px',
    background: '#fff',
    borderRadius: '20px',
    maxWidth: '600px',
    margin: '40px auto',
    boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
  },

  title: {
    fontSize: '32px',
    marginBottom: '24px',
    textAlign: 'center',
  },

  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  },

  input: {
    padding: '14px',
    borderRadius: '12px',
    border: '1px solid #ccc',
    fontSize: '16px',
  },

  button: {
    padding: '14px',
    border: 'none',
    borderRadius: '12px',
    background: '#1D9E75',
    color: '#fff',
    fontSize: '16px',
    cursor: 'pointer',
  },

}