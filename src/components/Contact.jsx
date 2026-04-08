import { useEffect, useRef, useState } from 'react'

function useInView(ref) {
  const [isInView, setIsInView] = useState(false)
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsInView(true) },
      { threshold: 0.15 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [ref])
  return isInView
}

export default function Contact() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef)
  const [copied, setCopied] = useState(false)

  const copyEmail = () => {
    navigator.clipboard.writeText('vullnet@vazi.dev')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section id="contact" className="py-24 relative" ref={sectionRef}>

      
      <div className="relative max-w-3xl mx-auto px-6 text-center">
        {/* Section header */}
        <div className={`mb-12 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-center gap-3 mb-4 justify-center">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-gh-border" />
            <span className="font-mono text-sm text-gh-accent">04</span>
            <h2 className="text-2xl font-bold text-gh-text">Kontakt</h2>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-gh-border" />
          </div>
        </div>

        <div className={`transition-all duration-700 delay-200 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Terminal-style contact card */}
          <div className="rounded-xl border border-gh-border bg-gh-bg-secondary/50 overflow-hidden">
            {/* Terminal header */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-gh-border bg-gh-bg-secondary/80">
              <div className="w-3 h-3 rounded-full bg-gh-red/70" />
              <div className="w-3 h-3 rounded-full bg-gh-orange/70" />
              <div className="w-3 h-3 rounded-full bg-gh-green/70" />
              <span className="ml-2 text-xs font-mono text-gh-text-tertiary">contact.sh</span>
            </div>

            <div className="p-8">
              <div className="font-mono text-left space-y-4 text-sm">
                <div>
                  <span className="text-gh-green">vullnet@vazi</span>
                  <span className="text-gh-text-tertiary">:</span>
                  <span className="text-gh-accent">~</span>
                  <span className="text-gh-text-tertiary">$ </span>
                  <span className="text-gh-text">cat contact.json</span>
                </div>
                
                <div className="bg-gh-bg rounded-lg p-4 border border-gh-border-muted">
                  <pre className="text-gh-text-secondary">
{`{
  `}<span className="text-gh-accent">"name"</span>{`: `}<span className="text-gh-green">"Vullnet Ajvazi"</span>{`,
  `}<span className="text-gh-accent">"email"</span>{`: `}<span className="text-gh-green">"vullnet@vazi.dev"</span>{`,
  `}<span className="text-gh-accent">"web"</span>{`: `}<span className="text-gh-green">"https://vazi.dev"</span>{`,
  `}<span className="text-gh-accent">"location"</span>{`: `}<span className="text-gh-green">"Berlin, DE"</span>{`,
  `}<span className="text-gh-accent">"status"</span>{`: `}<span className="text-gh-green">"open to opportunities"</span>{`
}`}
                  </pre>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-3 justify-center mt-8">
                <a
                  href="mailto:vullnet@vazi.dev"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gh-accent-emphasis hover:bg-gh-accent-emphasis/80 text-white font-medium rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-gh-accent-emphasis/25"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                  E-Mail schreiben
                </a>

                <button
                  onClick={copyEmail}
                  className="inline-flex items-center gap-2 px-6 py-3 border border-gh-border hover:border-gh-text-tertiary text-gh-text font-medium rounded-lg transition-all duration-200 hover:bg-gh-bg-secondary"
                >
                  {copied ? (
                    <>
                      <svg className="w-4 h-4 text-gh-green" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      Kopiert!
                    </>
                  ) : (
                    <>
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9.75a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184" />
                      </svg>
                      E-Mail kopieren
                    </>
                  )}
                </button>

                <a
                  href="https://www.linkedin.com/in/vullnet-ajvazi-57361a38a/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-gh-border hover:border-gh-text-tertiary text-gh-text font-medium rounded-lg transition-all duration-200 hover:bg-gh-bg-secondary"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
