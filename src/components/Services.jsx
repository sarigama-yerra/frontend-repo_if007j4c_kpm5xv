import { motion } from 'framer-motion'
import { Code2, Database, Cloud, Shield, Sparkles } from 'lucide-react'

const cards = [
  {
    icon: Code2,
    title: 'Product Engineering',
    desc: 'Full-stack web and mobile development with modern tooling and proven delivery practices.'
  },
  {
    icon: Database,
    title: 'Data & AI',
    desc: 'Data platforms, analytics, and AI integrations that unlock insights and automation.'
  },
  {
    icon: Cloud,
    title: 'Cloud & DevOps',
    desc: 'Secure, scalable infrastructure with CI/CD, observability, and cost optimization.'
  },
  {
    icon: Shield,
    title: 'Security & Compliance',
    desc: 'Security reviews, hardening, and governance aligned to best practices and standards.'
  }
]

export default function Services() {
  return (
    <section id="services" className="relative py-24 bg-[#0A0E27]">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-10 w-64 h-64 rounded-full bg-gradient-to-tr from-cyan-500/20 to-fuchsia-500/20 blur-3xl" />
        <div className="absolute bottom-10 left-10 w-72 h-72 rounded-full bg-gradient-to-tr from-indigo-500/20 to-cyan-500/20 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-cyan-300 text-sm">
            <Sparkles className="w-4 h-4" /> Our Expertise
          </div>
          <h2 className="mt-4 text-3xl md:text-5xl font-bold text-white">Services</h2>
          <p className="mt-3 text-slate-300 max-w-2xl mx-auto">High-impact capabilities to accelerate your roadmap and outperform expectations.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative rounded-2xl p-6 bg-white/5 border border-white/10 backdrop-blur-md shadow-lg overflow-hidden"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute inset-[-1px] rounded-2xl bg-gradient-to-br from-cyan-500/30 via-indigo-500/20 to-fuchsia-500/30 blur-md" />
              </div>

              <div className="relative z-10">
                <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-cyan-500/20 to-indigo-500/20 border border-white/10 text-cyan-300 group-hover:scale-105 transition-transform">
                  <c.icon className="w-6 h-6" />
                </div>
                <h3 className="mt-4 text-xl font-semibold text-white">{c.title}</h3>
                <p className="mt-2 text-slate-300 text-sm">{c.desc}</p>
              </div>

              <motion.a
                href="#contact"
                className="relative z-10 mt-6 inline-flex items-center text-cyan-300 hover:text-white"
                whileHover={{ x: 2 }}
              >
                Learn more <span className="ml-1">→</span>
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
