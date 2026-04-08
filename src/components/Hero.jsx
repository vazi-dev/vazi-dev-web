export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23e6edf3' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />


      <div className="relative max-w-6xl mx-auto px-6 py-32">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-16">
          {/* Text content */}
          <div className="flex-1 text-center lg:text-left">
            {/* Status badge */}
            <div className="animate-fade-in-up inline-flex items-center gap-2 px-3 py-1 mb-8 rounded-full border border-gh-border bg-gh-bg-secondary/50 text-sm text-gh-text-secondary">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gh-green opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-gh-green"></span>
              </span>
              Verfügbar für Projekte
            </div>

            <h1 className="animate-fade-in-up-delay-1 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gh-text leading-[1.1] mb-3">
              Vullnet Ajvazi
            </h1>

            <p className="animate-fade-in-up-delay-2 font-mono text-lg sm:text-xl text-gh-text-secondary mb-8">
              Software Developer & Solution Architect
            </p>

            <p className="animate-fade-in-up-delay-3 text-gh-text-secondary text-lg max-w-lg mx-auto lg:mx-0 mb-10 leading-relaxed">
              Fokus auf <span className="text-gh-text">Full-Stack Development</span>,{' '}
              <span className="text-gh-text">Stripe Payment-Systeme</span> und{' '}
              <span className="text-gh-text">KI-gestützte Automatisierung</span>.
            </p>

            <div className="animate-fade-in-up-delay-4 flex flex-wrap gap-3 justify-center lg:justify-start">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-gh-accent-emphasis hover:bg-gh-accent-emphasis/80 text-white font-medium rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-gh-accent-emphasis/25"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" />
                </svg>
                Projekte ansehen
              </a>
              <a
                href="https://www.linkedin.com/in/vullnet-ajvazi-57361a38a/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 border border-gh-border hover:border-gh-text-tertiary text-gh-text font-medium rounded-lg transition-all duration-200 hover:bg-gh-bg-secondary"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                LinkedIn
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="animate-fade-in-up flex-shrink-0">
            <div className="w-56 h-56 sm:w-64 sm:h-64 lg:w-72 lg:h-72 rounded-full overflow-hidden border border-gh-border">
              <img
                src="/profile.jpg"
                alt="Vullnet Ajvazi"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in-up-delay-5">
          <div className="flex flex-col items-center gap-2 text-gh-text-tertiary">
            <span className="text-xs font-mono">scroll</span>
            <div className="w-5 h-8 rounded-full border border-gh-border flex items-start justify-center p-1">
              <div className="w-1.5 h-1.5 rounded-full bg-gh-text-tertiary animate-bounce" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
