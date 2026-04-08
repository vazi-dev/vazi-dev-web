import { useEffect, useRef, useState } from 'react'

function useInView(ref) {
  const [isInView, setIsInView] = useState(false)
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsInView(true) },
      { threshold: 0.2 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [ref])
  return isInView
}

const timeline = [
  {
    period: 'Aktuell',
    role: 'Software Developer (Intern)',
    org: 'Fraunhofer IPK',
    description: 'Entwicklung von Software-Lösungen im Forschungsumfeld. Full-Stack-Entwicklung mit Python und Vue.js für innovative Projekte in der Produktionstechnik.',
    tags: ['Python', 'Vue.js', 'Vite', 'Docker', 'Forschung'],
    active: true,
  },
  {
    period: '2024 – 2026',
    role: 'Fachinformatiker Anwendungsentwicklung',
    org: 'BBQ – Bildung und Berufliche Qualifizierung',
    description: 'Umschulung zum Fachinformatiker mit Schwerpunkt Anwendungsentwicklung. Abschluss September 2026.',
    tags: ['Ausbildung', 'IHK', 'Anwendungsentwicklung'],
    active: false,
  },
  {
    period: 'Freelance',
    role: 'Solution Architect & Developer',
    org: 'vazi.dev',
    description: 'Spezialisierung auf Payment-Systeme, Cloud Architecture und Full-Stack Development für Business-Kunden.',
    tags: ['AWS', 'Stripe', 'React', 'Node.js'],
    active: false,
  },
]

export default function About() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef)

  return (
    <section id="about" className="py-24 relative" ref={sectionRef}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className={`mb-16 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-gh-border" />
            <span className="font-mono text-sm text-gh-accent">01</span>
            <h2 className="text-2xl font-bold text-gh-text">Über mich</h2>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-gh-border" />
          </div>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Bio */}
          <div className={`lg:col-span-2 transition-all duration-700 delay-200 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="rounded-xl border border-gh-border bg-gh-bg-secondary/50 p-6">
              {/* Terminal header */}
              <div className="flex items-center gap-2 mb-4 pb-4 border-b border-gh-border">
                <div className="w-3 h-3 rounded-full bg-gh-red/70" />
                <div className="w-3 h-3 rounded-full bg-gh-orange/70" />
                <div className="w-3 h-3 rounded-full bg-gh-green/70" />
                <span className="ml-2 text-xs font-mono text-gh-text-tertiary">about.md</span>
              </div>
              
              <div className="font-mono text-sm space-y-3 text-gh-text-secondary leading-relaxed">
                <p>
                  <span className="text-gh-purple">##</span>{' '}
                  <span className="text-gh-text">Hi, ich bin Vullnet</span>
                </p>
                <p>
                  Angehender Fachinformatiker für Anwendungsentwicklung mit Fokus auf{' '}
                  <span className="text-gh-accent">Full-Stack Development</span> und{' '}
                  <span className="text-gh-accent">KI-gestützte Automatisierung</span>.
                </p>
                <p>
                  Aktuell als Software Developer bei{' '}
                  <span className="text-gh-green">Fraunhofer IPK</span>.{' '}
                  Nebenbei entwickle ich eigene SaaS-Produkte –
                  von Payment-Systemen bis KI-Agenten.
                </p>
                <p>
                  Ich baue Systeme, die Prozesse automatisieren.
                </p>
              </div>
            </div>
          </div>

          {/* Timeline */}
          <div className={`lg:col-span-3 transition-all duration-700 delay-300 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="space-y-6">
              {timeline.map((item, i) => (
                <div
                  key={i}
                  className="relative pl-8 group"
                >
                  {/* Timeline line */}
                  <div className="absolute left-[11px] top-8 bottom-0 w-px bg-gh-border group-last:hidden" />
                  
                  {/* Timeline dot */}
                  <div className={`absolute left-0 top-2 w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                    item.active
                      ? 'border-gh-green bg-gh-green/10'
                      : 'border-gh-border bg-gh-bg-secondary'
                  }`}>
                    {item.active && (
                      <div className="w-2 h-2 rounded-full bg-gh-green animate-pulse" />
                    )}
                  </div>

                  <div className="rounded-lg border border-gh-border bg-gh-bg-secondary/30 p-5 hover:border-gh-text-tertiary transition-colors">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <span className="font-mono text-xs text-gh-accent bg-gh-accent/10 px-2 py-0.5 rounded">
                        {item.period}
                      </span>
                      <span className="text-xs text-gh-text-tertiary">{item.org}</span>
                    </div>
                    <h3 className="text-gh-text font-semibold mb-2">{item.role}</h3>
                    <p className="text-sm text-gh-text-secondary mb-3">{item.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs font-mono px-2 py-0.5 rounded-full border border-gh-border text-gh-text-secondary"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
