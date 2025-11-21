import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen w-full bg-black">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <CTA />
      </main>
      <footer className="border-t border-white/10 bg-black/80 py-10 text-center text-sm text-white/60">
        © {new Date().getFullYear()} KryptoMark. All rights reserved.
      </footer>
    </div>
  )
}

export default App
