import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import Stories from './components/Stories'
import Gallery from './components/Gallery'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Header />
      <Hero />
      <Features />
      <main style={{padding: '52px 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <Stories />
          <Gallery />
        </div>
      </main>
      <Footer />
    </>
  )
}
