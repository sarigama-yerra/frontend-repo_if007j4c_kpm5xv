import { motion } from 'framer-motion'

export default function FooterCTA() {
  return (
    <section id="contact" className="relative py-24 bg-[#0A0E27]">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-indigo-600/20 via-purple-600/10 to-transparent" />
      </div>

      <div className="max-w-5xl mx-auto px-6 md:px-10">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-600/20 via-purple-600/20 to-cyan-500/10 border border-white/10 backdrop-blur-xl p-8 md:p-12">
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-gradient-to-br from-cyan-400/30 to-fuchsia-500/30 rounded-full blur-3xl pointer-events-none" />
          <div className="relative">
            <h3 className="text-2xl md:text-4xl font-bold text-white">Ship faster with confidence</h3>
            <p className="mt-3 text-slate-200 max-w-2xl">Tell us about your goals. We’ll propose a clear plan, timeline, and team to make it happen.</p>

            <form className="mt-8 grid md:grid-cols-3 gap-4" onSubmit={(e) => e.preventDefault()} aria-label="Contact form">
              <input aria-label="Your name" placeholder="Your name" className="w-full rounded-xl bg-white/10 border border-white/15 px-4 py-3 text-white placeholder-slate-300/70 focus:outline-none focus:ring-2 focus:ring-cyan-400" />
              <input type="email" aria-label="Email" placeholder="Email" className="w-full rounded-xl bg-white/10 border border-white/15 px-4 py-3 text-white placeholder-slate-300/70 focus:outline-none focus:ring-2 focus:ring-cyan-400" />
              <button className="w-full rounded-xl px-4 py-3 font-semibold text-white bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-500 hover:scale-[1.02] active:scale-[0.99] transition-transform focus:outline-none focus:ring-2 focus:ring-cyan-400">Request a proposal</button>
            </form>

            <p className="mt-3 text-xs text-slate-300">By submitting, you agree to our privacy policy.</p>
          </div>
        </div>

        <div className="mt-10 text-center text-slate-400 text-sm">
          © {new Date().getFullYear()} Teveer Tech. All rights reserved.
        </div>
      </div>
    </section>
  )
}
