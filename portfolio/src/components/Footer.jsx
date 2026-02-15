function scrollToTop(e) {
  e.preventDefault()
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

const MARQUEE_ITEMS = [
  "LET'S WORK TOGETHER •",
  'AVAILABLE NOW •',
  'NEOBRUTALISM FOREVER •',
  "LET'S WORK TOGETHER •",
  'AVAILABLE NOW •',
  'NEOBRUTALISM FOREVER •',
]

export default function Footer() {
  return (
    <footer className="pt-8 sm:pt-12" id="contact">
      <div className="border-4 border-black bg-black text-white p-6 sm:p-8 md:p-12 neo-shadow-static overflow-hidden">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 sm:gap-12">
          <div className="max-w-2xl min-w-0">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 sm:mb-6 break-words">
              READY TO BUILD SOMETHING <span className="text-primary italic">LOUD</span>?
            </h2>
            <p className="text-base sm:text-lg md:text-xl font-mono opacity-80 break-all sm:break-normal">
              Drop me a line at hello@devportfolio.com or find me on the social web.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:gap-4 w-full md:w-auto min-w-0">
            <a
              className="border-2 border-white px-6 py-2.5 sm:px-8 sm:py-3 font-bold hover:bg-white hover:text-black text-center transition-colors text-sm sm:text-base"
              href="#"
            >
              LINKEDIN
            </a>
            <a
              className="border-2 border-white px-6 py-2.5 sm:px-8 sm:py-3 font-bold hover:bg-white hover:text-black text-center transition-colors text-sm sm:text-base"
              href="#"
            >
              GITHUB
            </a>
            <a
              className="border-2 border-white px-6 py-2.5 sm:px-8 sm:py-3 font-bold hover:bg-white hover:text-black text-center transition-colors text-sm sm:text-base"
              href="#"
            >
              TWITTER
            </a>
          </div>
        </div>
        <div className="mt-12 sm:mt-24 border-t-2 border-white/20 pt-6 sm:pt-8 flex flex-col md:flex-row justify-between gap-4 sm:gap-6 font-mono text-xs sm:text-sm uppercase tracking-widest">
          <p className="break-words">© 2024 DEV_PORTFOLIO — BUILT WITH BRUTAL INTENT</p>
          <div className="flex flex-wrap gap-4 sm:gap-8">
            <a href="#" className="hover:text-primary transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Terms
            </a>
            <a href="#" onClick={scrollToTop} className="hover:text-primary transition-colors">
              Back to Top ↑
            </a>
          </div>
        </div>
      </div>

      {/* Marquee */}
      <div className="mt-8 sm:mt-12 overflow-hidden border-y-4 border-black py-3 sm:py-4 bg-primary">
        <div className="flex animate-marquee w-max">
          <div className="flex whitespace-nowrap items-center gap-6 sm:gap-12 text-2xl sm:text-3xl md:text-4xl font-black italic pr-6 sm:pr-12">
            {MARQUEE_ITEMS.map((item, i) => (
              <span key={`m1-${i}`}>{item}</span>
            ))}
          </div>
          <div className="flex whitespace-nowrap items-center gap-6 sm:gap-12 text-2xl sm:text-3xl md:text-4xl font-black italic pr-6 sm:pr-12">
            {MARQUEE_ITEMS.map((item, i) => (
              <span key={`m2-${i}`}>{item}</span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
