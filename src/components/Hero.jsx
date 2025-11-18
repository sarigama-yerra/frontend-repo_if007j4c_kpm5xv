import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center overflow-hidden bg-[#0A0E27]">
      {/* Spline 3D background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/wwTRdG1D9CkNs368/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlays */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-20 -left-20 w-[40rem] h-[40rem] bg-gradient-to-br from-indigo-600/30 via-fuchsia-500/20 to-cyan-400/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[30rem] h-[30rem] bg-gradient-to-tr from-cyan-400/20 via-indigo-500/20 to-fuchsia-500/20 rounded-full blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 w-full grid md:grid-cols-2 gap-10 items-center">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight text-white"
          >
            Building the future with
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-indigo-400 to-fuchsia-500">
              Modern Tech Consulting
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="mt-6 text-lg md:text-xl text-slate-200/90 max-w-xl"
          >
            We design, build, and scale digital products with a focus on quality, velocity, and reliability.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, delay: 0.2 }}
            className="mt-8 flex items-center gap-4"
          >
            <a
              href="#contact"
              className="relative inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-white rounded-xl bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-500 shadow-[0_0_30px_rgba(56,189,248,0.35)] hover:scale-[1.02] active:scale-[0.99] transition-transform focus:outline-none focus:ring-2 focus:ring-cyan-400"
              aria-label="Get in touch"
            >
              Let’s talk
              <span className="ml-2 text-cyan-200">→</span>
            </a>
            <a href="#services" className="text-slate-200 hover:text-white/90 underline/30 hover:underline">Explore services</a>
          </motion.div>

          <div className="mt-10 flex items-center gap-6 opacity-90">
            <div className="h-px w-16 bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />
            <p className="text-slate-300 text-sm">Trusted by startups and enterprises</p>
          </div>
        </div>

        {/* Right column empty for 3D breathing room on large screens */}
        <div className="hidden md:block" />
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
        <div className="w-6 h-10 rounded-full border border-slate-500/40 flex items-start justify-center p-1 overflow-hidden">
          <motion.span
            initial={{ y: 0, opacity: 0 }}
            animate={{ y: 16, opacity: [0, 1, 0] }}
            transition={{ repeat: Infinity, duration: 1.8 }}
            className="w-1 h-3 bg-cyan-400 rounded-full"
          />
        </div>
      </div>
    </section>
  )
}
