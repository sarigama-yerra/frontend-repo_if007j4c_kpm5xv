import { motion, useInView } from 'framer-motion'
import { CheckCircle2, GaugeCircle, Award, Users } from 'lucide-react'
import { useRef } from 'react'

function Counter({ to = 100, prefix = '', suffix = '' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-50px' })
  const steps = 40
  return (
    <span ref={ref} aria-live="polite">
      {inView ? Array.from({ length: steps }).map((_, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0 }}
          animate={{ opacity: i === steps - 1 ? 1 : 0 }}
          transition={{ duration: 0.02, delay: (i / steps) * 1.2 }}
        >
          {prefix}{Math.round((i / (steps - 1)) * to)}{suffix}
        </motion.span>
      )) : `${prefix}0${suffix}`}
    </span>
  )
}

export default function WhyUs() {
  return (
    <section id="why" className="relative py-24 bg-[#0A0E27]">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-white">Why choose us</h2>
            <p className="mt-4 text-slate-300">We combine deep technical expertise with battle-tested delivery to reduce risk and maximize outcomes.</p>

            <div className="mt-8 space-y-4">
              {["Senior-only teams", "Design + Engineering partnership", "Measurable outcomes", "Security-first mindset"].map((t) => (
                <div key={t} className="flex items-center gap-3 text-slate-200">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400" /> {t}
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {[
              { icon: GaugeCircle, label: 'Avg. time-to-MVP', value: '6-8', suffix: ' wks' },
              { icon: Award, label: 'Projects delivered', value: 120, suffix: '+' },
              { icon: Users, label: 'Client retention', value: 96, suffix: '%' },
              { icon: Award, label: 'NPS', value: 72, suffix: '' },
            ].map((m, i) => (
              <motion.div
                key={m.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="relative rounded-2xl p-6 bg-white/5 border border-white/10 backdrop-blur-md"
              >
                <div className="inline-flex p-2 rounded-lg bg-cyan-400/10 text-cyan-300">
                  <m.icon className="w-5 h-5" />
                </div>
                <div className="mt-3 text-3xl font-semibold text-white">
                  {typeof m.value === 'number' ? <Counter to={m.value} suffix={m.suffix} /> : m.value + m.suffix}
                </div>
                <div className="text-slate-300 text-sm mt-1">{m.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
