import { useState, useEffect } from 'react'

const navItems = [
  { label: 'Über mich', href: '#about' },
  { label: 'Projekte', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Kontakt', href: '#contact' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-gh-bg/80 backdrop-blur-xl border-b border-gh-border'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="font-mono font-semibold text-gh-text hover:text-gh-accent transition-colors tracking-tight"
        >
          vazi.dev
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="px-3 py-2 text-sm text-gh-text-secondary hover:text-gh-text rounded-md hover:bg-gh-bg-secondary transition-all duration-200"
            >
              {item.label}
            </a>
          ))}
          <a
            href="mailto:vullnet@vazi.dev"
            className="ml-3 px-4 py-1.5 text-sm font-medium text-white bg-gh-accent-emphasis hover:bg-gh-accent-emphasis/80 rounded-md transition-colors"
          >
            Kontakt
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 text-gh-text-secondary hover:text-gh-text"
          aria-label="Menü öffnen"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
            {mobileOpen ? (
              <path d="M5 5l10 10M15 5L5 15" />
            ) : (
              <path d="M3 6h14M3 10h14M3 14h14" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="md:hidden bg-gh-bg-secondary border-b border-gh-border">
          <nav className="flex flex-col px-6 py-4 gap-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="px-3 py-2.5 text-sm text-gh-text-secondary hover:text-gh-text rounded-md hover:bg-gh-bg transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
