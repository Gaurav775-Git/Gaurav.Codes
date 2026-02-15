const EXPERIENCE_DATA = [
  {
    title: 'SENIOR FULLSTACK DEVELOPER',
    company: 'TechCorp Solutions Inc.',
    date: '2021 — PRESENT',
    dateDark: true,
    description:
      'Leading the architecture of high-scale React applications. Implementing neobrutalist design systems and optimizing performance across distributed systems. Managed a team of 12 developers.',
    techs: ['REACT', 'TYPESCRIPT', 'NODE.JS', 'POSTGRES'],
  },
  {
    title: 'UI ENGINEER',
    company: 'Creative Studio X',
    date: '2018 — 2021',
    dateDark: false,
    description:
      'Focused on building pixel-perfect user interfaces and interactive prototypes. Bridged the gap between design and engineering teams using styled-components and Framer Motion.',
    techs: ['NEXT.JS', 'TAILWIND', 'FIGMA'],
  },
]

export default function Experience() {
  return (
    <section className="space-y-8 sm:space-y-12" id="experience">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b-[6px] border-black pb-4">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter">EXPERIENCE</h2>
        <span className="font-mono text-base sm:text-xl font-bold">01 / HISTORY</span>
      </div>
      <div className="space-y-6 sm:space-y-8">
        {EXPERIENCE_DATA.map((job) => (
          <div
            key={job.title}
            className="border-4 border-black bg-white p-5 sm:p-6 md:p-8 neo-shadow-static hover:bg-primary/10 transition-colors"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="min-w-0">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold break-words">{job.title}</h3>
                <p className="text-base sm:text-lg md:text-xl font-medium opacity-80 uppercase">{job.company}</p>
              </div>
              <div className="text-left md:text-right flex-shrink-0">
                <span
                  className={`inline-block border-2 border-black px-3 py-1 sm:px-4 font-mono font-bold text-sm sm:text-base ${
                    job.dateDark ? 'bg-black text-white' : 'bg-white'
                  }`}
                >
                  {job.date}
                </span>
              </div>
            </div>
            <p className="mt-4 sm:mt-6 text-base sm:text-lg max-w-3xl leading-relaxed">{job.description}</p>
            <div className="mt-4 sm:mt-6 flex flex-wrap gap-2">
              {job.techs.map((tech) => (
                <span key={tech} className="border-2 border-black px-3 py-1 font-bold text-sm">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
