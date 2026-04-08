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

const skillCategories = [
  {
    title: 'Languages',
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    ),
    skills: ['JavaScript', 'TypeScript', 'Python', 'HTML', 'CSS', 'SQL'],
  },
  {
    title: 'Frameworks & Libraries',
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L12 12.75 6.429 9.75m11.142 0l4.179 2.25L12 17.25 2.25 12l4.179-2.25m11.142 0l4.179 2.25L12 21.75l-9.75-5.25 4.179-2.25" />
      </svg>
    ),
    skills: ['React', 'Next.js', 'Vue.js', 'Vite', 'Node.js', 'FastAPI', 'Express', 'Tailwind CSS'],
  },
  {
    title: 'Cloud & DevOps',
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" />
      </svg>
    ),
    skills: ['AWS', 'Docker', 'SST', 'Hetzner', 'Coolify', 'CI/CD', 'GitHub Actions'],
  },
  {
    title: 'APIs & Integrationen',
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
      </svg>
    ),
    skills: ['Stripe API', 'WhatsApp API', 'Claude API', 'REST APIs', 'Webhooks', 'Google APIs'],
  },
  {
    title: 'Datenbanken',
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
      </svg>
    ),
    skills: ['PostgreSQL', 'Redis', 'DynamoDB', 'SQLAlchemy'],
  },
  {
    title: 'Tools & Workflow',
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.1-5.1m0 0L12 4.37m-5.68 5.7h11.8M18.36 19.63l-5.1-5.1m0 0l5.7-5.68m-5.7 5.68V3.17" />
      </svg>
    ),
    skills: ['Git', 'n8n', 'Mautic', 'Sentry', 'Grafana', 'LangGraph'],
  },
]

export default function Skills() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef)

  return (
    <section id="skills" className="py-24 relative" ref={sectionRef}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className={`mb-16 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-gh-border" />
            <span className="font-mono text-sm text-gh-accent">03</span>
            <h2 className="text-2xl font-bold text-gh-text">Skills</h2>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-gh-border" />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillCategories.map((cat, catIdx) => (
            <div
              key={cat.title}
              className={`rounded-xl border border-gh-border bg-gh-bg-secondary/30 p-5 hover:border-gh-text-tertiary transition-all duration-500 ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${200 + catIdx * 80}ms` }}
            >
              {/* Category header */}
              <div className="flex items-center gap-2.5 mb-4 pb-3 border-b border-gh-border">
                <div className="text-gh-accent">
                  {cat.icon}
                </div>
                <h3 className="font-semibold text-gh-text text-sm">{cat.title}</h3>
              </div>

              {/* Skill tags */}
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, skillIdx) => (
                  <span
                    key={skill}
                    className={`text-xs font-mono px-2.5 py-1 rounded-md border border-gh-border bg-gh-bg text-gh-text-secondary hover:text-gh-accent hover:border-gh-accent/40 transition-all duration-200 cursor-default ${
                      isInView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                    }`}
                    style={{
                      transitionDelay: `${300 + catIdx * 80 + skillIdx * 40}ms`,
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
