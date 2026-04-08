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

const projects = [
  {
    title: 'Automatisiertes Enrollment & Payment System',
    description:
      'End-to-End Anmelde- und Zahlungssystem für Bildungseinrichtungen. Automatisierte Dokumentengenerierung, AI-Chatbot, Stripe Payment Plans und CRM-Integration – komplett Full-Stack.',
    tags: ['Next.js 15', 'FastAPI', 'Stripe', 'Mautic', 'Claude AI'],
    highlights: [
      'Stripe Invoices, Webhooks & Payment Plans',
      'AI-Chatbot (Claude API + Redis Sessions)',
      'Auto-Dokumentengenerierung via Google Docs API',
      'CRM mit Mautic (Lead Scoring, Campaigns)',
      'NextAuth.js + Google Domain-Wide Delegation',
      'Docker Compose Deployment auf Hetzner',
    ],
    stackDetails: [
      { label: 'Frontend', items: ['Next.js 15 (App Router)', 'React', 'TypeScript', 'Tailwind CSS', 'Lucide Icons'] },
      { label: 'AI-Service', items: ['Python / FastAPI', 'Anthropic Claude API', 'Redis (Session State)'] },
      { label: 'Datenbank', items: ['Google Sheets (59 Spalten)', 'Google Drive (Dokumente)'] },
      { label: 'Dokumente', items: ['Google Docs API (Template → PDF)', '4 Templates: Offer, Agreement, Enrollment, Matriculation'] },
      { label: 'Zahlungen', items: ['Stripe Invoices API', 'Webhooks', 'Payment Plans', 'Service Fee'] },
      { label: 'CRM', items: ['Mautic v4 (Docker + MariaDB)', 'Transaktionale Emails', 'Lead Scoring & Tags'] },
      { label: 'Auth', items: ['NextAuth.js', 'Google Service Account'] },
      { label: 'Deployment', items: ['Docker / Docker Compose', 'Hetzner VPS'] },
    ],
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
      </svg>
    ),
    gradient: 'from-gh-accent-emphasis to-gh-purple',
    featured: true,
  },
  {
    title: 'KI-Agent für Handwerker',
    description:
      'WhatsApp-First SaaS-Plattform: KI-Assistent übernimmt den kompletten Büroalltag für Handwerksbetriebe – vom Erstkontakt bis zur Rechnungsstellung. Dual Interface: Endkunden via WhatsApp, Handwerker via WhatsApp oder Web-Dashboard.',
    tags: ['LangGraph', 'FastAPI', 'Stripe Connect', 'WhatsApp API', 'Next.js 14'],
    highlights: [
      'KI-Bildanalyse für Schadensfotos (Claude Vision)',
      'Automatische Angebots- & Rechnungserstellung',
      'WhatsApp-Bot mit Sprachnachricht-Support',
      'Multi-Tenant SaaS mit Mandantentrennung',
      '201 Features, 183 User Stories',
      'Self-hosted in DE, DSGVO-konform',
    ],
    stackDetails: [
      { label: 'Frontend', items: ['Next.js 14 (TypeScript)', 'shadcn/ui', 'Tailwind CSS', 'NextAuth.js'] },
      { label: 'Backend', items: ['Python 3.12', 'FastAPI', 'SQLAlchemy 2.0', 'Pydantic v2'] },
      { label: 'KI-Agent', items: ['LangGraph (Zustandsgraph)', 'Human-in-the-Loop', 'Claude Haiku + Sonnet', 'faster-whisper (STT)'] },
      { label: 'Datenbank', items: ['PostgreSQL 16 + pgvector', 'PostGIS (Geodaten)', 'Redis 7', 'MinIO (S3)'] },
      { label: 'Workflow', items: ['n8n (Cron, Webhooks)', '360dialog (WhatsApp BSP)', 'Amazon SES', 'Mautic'] },
      { label: 'Zahlungen', items: ['Stripe Connect Express', 'Stripe Billing', 'WeasyPrint (PDF)'] },
      { label: 'Monitoring', items: ['Sentry', 'Langfuse (LLM Obs.)', 'Uptime Kuma', 'Grafana + Loki'] },
      { label: 'Hosting', items: ['Hetzner Cloud', 'Coolify (PaaS)', 'GitHub Actions (CI/CD)'] },
    ],
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
      </svg>
    ),
    gradient: 'from-gh-green to-gh-accent',
    featured: true,
  },
  {
    title: 'Cloud Infrastructure Setup',
    description:
      'Design und Implementierung einer skalierbaren AWS-Infrastruktur mit Infrastructure as Code. Automatisierte CI/CD-Pipeline für nahtlose Deployments.',
    tags: ['AWS', 'SST', 'Lambda', 'DynamoDB', 'CloudFront'],
    highlights: [
      'Serverless Architecture',
      'Auto-Scaling & Cost Optimization',
      'CDN-powered Content Delivery',
      'Monitoring & Alerting Setup',
    ],
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" />
      </svg>
    ),
    gradient: 'from-gh-orange to-gh-red',
  },
  {
    title: 'Digital Wallet & Loyalty System',
    description:
      'Apple Wallet-basiertes Kundenbindungssystem mit QR-Code-Scanner. Stempelkarten, Push-Benachrichtigungen und automatisierte Marketing-Kampagnen.',
    tags: ['Vue.js', 'Apple Wallet', 'PWA', 'Push API', 'SST'],
    highlights: [
      'Apple Wallet Pass Generation',
      'QR-Code Scanner für Stempel',
      'Push-Notification Campaigns',
      'Analytics Dashboard',
    ],
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a2.25 2.25 0 00-2.25-2.25H15a3 3 0 11-6 0H5.25A2.25 2.25 0 003 12m18 0v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 9m18 0V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v3" />
      </svg>
    ),
    gradient: 'from-gh-green to-gh-accent',
  },
]

function FeaturedProject({ project, isInView }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <div
      className={`group relative rounded-xl border border-gh-border bg-gh-bg-secondary/30 overflow-hidden hover:border-gh-text-tertiary transition-all duration-500 ${
        isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: '200ms' }}
    >
      {/* Gradient top bar */}
      <div className={`h-1 bg-gradient-to-r ${project.gradient} opacity-60 group-hover:opacity-100 transition-opacity`} />

      <div className="p-6">
        {/* Featured badge */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gh-green opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-gh-green"></span>
            </span>
            <span className="text-xs font-mono text-gh-green">Featured Project</span>
          </div>
        </div>

        {/* Icon & Title */}
        <div className="flex items-start gap-3 mb-4">
          <div className="p-2.5 rounded-lg bg-gh-bg border border-gh-border text-gh-accent">
            {project.icon}
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gh-text group-hover:text-gh-accent transition-colors">
              {project.title}
            </h3>
          </div>
        </div>

        <p className="text-sm text-gh-text-secondary mb-5 leading-relaxed">
          {project.description}
        </p>

        {/* Highlights */}
        <ul className="grid sm:grid-cols-2 gap-x-4 gap-y-1.5 mb-5">
          {project.highlights.map((h, j) => (
            <li key={j} className="flex items-center gap-2 text-xs text-gh-text-secondary">
              <svg className="w-3.5 h-3.5 text-gh-green shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
              {h}
            </li>
          ))}
        </ul>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-gh-accent/10 text-gh-accent border border-gh-accent/20"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Expand/Collapse Stack Details */}
        {project.stackDetails && (
          <>
            <button
              onClick={() => setExpanded(!expanded)}
              className="flex items-center gap-2 text-xs font-mono text-gh-text-tertiary hover:text-gh-accent transition-colors mt-2"
            >
              <svg
                className={`w-3.5 h-3.5 transition-transform duration-200 ${expanded ? 'rotate-90' : ''}`}
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
              {expanded ? 'Stack verbergen' : 'Vollständigen Stack anzeigen'}
            </button>

            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                expanded ? 'max-h-[600px] opacity-100 mt-4' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="rounded-lg border border-gh-border-muted bg-gh-bg p-4">
                {/* Terminal header */}
                <div className="flex items-center gap-2 mb-3 pb-3 border-b border-gh-border-muted">
                  <div className="w-2.5 h-2.5 rounded-full bg-gh-red/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-gh-orange/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-gh-green/60" />
                  <span className="ml-2 text-[10px] font-mono text-gh-text-tertiary">stack.yml</span>
                </div>

                <div className="grid sm:grid-cols-2 gap-3">
                  {project.stackDetails.map((group) => (
                    <div key={group.label}>
                      <span className="text-[10px] font-mono text-gh-purple uppercase tracking-wider">{group.label}</span>
                      <ul className="mt-1 space-y-0.5">
                        {group.items.map((item) => (
                          <li key={item} className="text-[11px] font-mono text-gh-text-secondary flex items-center gap-1.5">
                            <span className="text-gh-text-tertiary">›</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

function ProjectCard({ project, index, isInView }) {
  return (
    <div
      className={`group relative rounded-xl border border-gh-border bg-gh-bg-secondary/30 overflow-hidden hover:border-gh-text-tertiary transition-all duration-500 ${
        isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${300 + index * 100}ms` }}
    >
      {/* Gradient top bar */}
      <div className={`h-1 bg-gradient-to-r ${project.gradient} opacity-60 group-hover:opacity-100 transition-opacity`} />

      <div className="p-6">
        {/* Icon & Title */}
        <div className="flex items-start gap-3 mb-4">
          <div className="p-2 rounded-lg bg-gh-bg border border-gh-border text-gh-accent">
            {project.icon}
          </div>
          <div>
            <h3 className="font-semibold text-gh-text group-hover:text-gh-accent transition-colors">
              {project.title}
            </h3>
          </div>
        </div>

        <p className="text-sm text-gh-text-secondary mb-4 leading-relaxed">
          {project.description}
        </p>

        {/* Highlights */}
        <ul className="space-y-1.5 mb-5">
          {project.highlights.map((h, j) => (
            <li key={j} className="flex items-center gap-2 text-xs text-gh-text-secondary">
              <svg className="w-3.5 h-3.5 text-gh-green shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
              {h}
            </li>
          ))}
        </ul>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-gh-accent/10 text-gh-accent border border-gh-accent/20"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef)

  const featured = projects.filter((p) => p.featured)
  const regular = projects.filter((p) => !p.featured)

  return (
    <section id="projects" className="py-24 relative" ref={sectionRef}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className={`mb-16 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-gh-border" />
            <span className="font-mono text-sm text-gh-accent">02</span>
            <h2 className="text-2xl font-bold text-gh-text">Projekte</h2>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-gh-border" />
          </div>
        </div>

        {/* Featured Project */}
        {featured.map((project, i) => (
          <div key={i} className="mb-6">
            <FeaturedProject project={project} isInView={isInView} />
          </div>
        ))}

        {/* Regular Projects */}
        <div className="grid md:grid-cols-2 gap-6">
          {regular.map((project, i) => (
            <ProjectCard key={i} project={project} index={i} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  )
}
