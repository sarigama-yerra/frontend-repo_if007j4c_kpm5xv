import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import WhyUs from './components/WhyUs'
import FooterCTA from './components/FooterCTA'

function App() {
  return (
    <div className="min-h-screen bg-[#0A0E27] text-white selection:bg-cyan-400/30 selection:text-white">
      {/* Subtle tech grid */}
      <div aria-hidden className="pointer-events-none fixed inset-0 [background-image:linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] [background-size:24px_24px]" />

      <Navbar />
      <main className="relative">
        <Hero />
        <Services />
        <WhyUs />
        <FooterCTA />
      </main>
    </div>
  )
}

export default App
