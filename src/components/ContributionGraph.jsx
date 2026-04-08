import { useEffect, useRef, useState, useMemo } from 'react'

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

export default function ContributionGraph() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef)

  // Generate a deterministic but varied contribution graph (52 weeks x 7 days)
  const contributions = useMemo(() => {
    const data = []
    const seed = 42
    let state = seed
    const pseudoRandom = () => {
      state = (state * 1103515245 + 12345) & 0x7fffffff
      return state / 0x7fffffff
    }
    
    for (let week = 0; week < 52; week++) {
      const weekData = []
      for (let day = 0; day < 7; day++) {
        const r = pseudoRandom()
        let level = 0
        if (r > 0.35) level = 1
        if (r > 0.55) level = 2
        if (r > 0.75) level = 3
        if (r > 0.9) level = 4
        weekData.push(level)
      }
      data.push(weekData)
    }
    return data
  }, [])

  const levelColors = [
    'bg-gh-bg-secondary',        // 0: none
    'bg-gh-green/20',            // 1: few
    'bg-gh-green/40',            // 2: some
    'bg-gh-green/60',            // 3: many
    'bg-gh-green',               // 4: most
  ]

  const months = ['Jan', 'Feb', 'Mär', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dez']

  return (
    <section ref={sectionRef} className="py-16 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className={`rounded-xl border border-gh-border bg-gh-bg-secondary/30 p-6 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-medium text-gh-text-secondary">
              Beiträge im letzten Jahr
            </h3>
            <span className="text-xs text-gh-text-tertiary font-mono">
              847 contributions
            </span>
          </div>

          {/* Month labels */}
          <div className="flex gap-0 mb-1 ml-8 overflow-hidden">
            {months.map((month, i) => (
              <span
                key={month}
                className="text-[10px] text-gh-text-tertiary font-mono"
                style={{ width: `${100 / 12}%` }}
              >
                {month}
              </span>
            ))}
          </div>

          {/* Graph */}
          <div className="flex gap-1 overflow-hidden">
            {/* Day labels */}
            <div className="flex flex-col gap-1 mr-1 shrink-0">
              {['', 'Mo', '', 'Mi', '', 'Fr', ''].map((day, i) => (
                <span key={i} className="text-[10px] text-gh-text-tertiary font-mono h-[11px] leading-[11px]">
                  {day}
                </span>
              ))}
            </div>

            {/* Contribution grid */}
            <div className="flex gap-[3px] flex-1 overflow-hidden">
              {contributions.map((week, weekIdx) => (
                <div key={weekIdx} className="flex flex-col gap-[3px]">
                  {week.map((level, dayIdx) => (
                    <div
                      key={dayIdx}
                      className={`w-[11px] h-[11px] rounded-[2px] ${levelColors[level]} ${
                        isInView ? 'contribution-dot' : 'opacity-0'
                      }`}
                      style={{
                        animationDelay: isInView ? `${(weekIdx * 7 + dayIdx) * 3}ms` : '0ms',
                      }}
                      title={`${level} contributions`}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Legend */}
          <div className="flex items-center justify-end gap-2 mt-4">
            <span className="text-[10px] text-gh-text-tertiary">Weniger</span>
            {levelColors.map((color, i) => (
              <div key={i} className={`w-[11px] h-[11px] rounded-[2px] ${color}`} />
            ))}
            <span className="text-[10px] text-gh-text-tertiary">Mehr</span>
          </div>
        </div>
      </div>
    </section>
  )
}
