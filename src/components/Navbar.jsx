import { useState, useEffect } from 'react'
import { Menu, X, Sparkles } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navClasses = scrolled ? 'bg-white/5 backdrop-blur-md border border-white/10 shadow-lg' : 'bg-white/0'

  const LinkItem = ({ href, children }) => (
    <a
      href={href}
      className="text-slate-200/90 hover:text-white px-3 py-2 rounded-md transition-colors"
      onClick={() => setOpen(false)}
    >
      {children}
    </a>
  )

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all ${navClasses}`}
      aria-label="Primary">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#home" className="inline-flex items-center gap-2 group" aria-label="Teveer Tech home">
            <div className="relative w-8 h-8 rounded-lg bg-gradient-to-tr from-indigo-500 via-purple-500 to-cyan-400 shadow-[0_0_25px_rgba(99,102,241,0.6)]"></div>
            <span className="text-white font-semibold tracking-tight">
              Teveer Tech
            </span>
            <Sparkles className="w-4 h-4 text-cyan-300 opacity-70 group-hover:opacity-100 transition-opacity" />
          </a>

          <div className="hidden md:flex items-center gap-2">
            <LinkItem href="#services">Services</LinkItem>
            <LinkItem href="#why">Why Us</LinkItem>
            <LinkItem href="#contact">Contact</LinkItem>
          </div>

          <button
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-slate-200 hover:text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-slate-900/80 backdrop-blur-xl">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <LinkItem href="#services">Services</LinkItem>
            <LinkItem href="#why">Why Us</LinkItem>
            <LinkItem href="#contact">Contact</LinkItem>
          </div>
        </div>
      )}
    </header>
  )
}
