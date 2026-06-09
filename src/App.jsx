import { useState, useEffect } from 'react'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import Stories from './components/Stories'
import Gallery from './components/Gallery'

export default function App() {
  const [stories, setStories] = useState(() => {
    const saved = localStorage.getItem('stories')

    return saved ? JSON.parse(saved) : []
  })

  useEffect(() => {
    localStorage.setItem('stories', JSON.stringify(stories))
  }, [stories])

  function addStory(newStory) {
    setStories(prev => [
      ...prev,
      {
        id: Date.now(),
        ...newStory,
      },
    ])
  }

  return (
    <>
      <Header />
      <Hero />

      <Features addStory={addStory} />

      <main style={{ padding: '52px 0' }}>
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '0 24px',
          }}
        >
          <Stories stories={stories} />
          <Gallery />
        </div>
      </main>
    </>
  )
}