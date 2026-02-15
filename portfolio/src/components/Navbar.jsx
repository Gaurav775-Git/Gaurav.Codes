import { useState } from 'react'

function scrollToSection(e, id) {
  e.preventDefault()
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeAndScroll = (e, id) => {
    setMenuOpen(false)
    scrollToSection(e, id)
  }

  return (
    <nav className="sticky top-0 z-50 px-4 py-4 sm:px-6 sm:py-6 bg-background-light">
      <div className="max-w-[1440px] mx-auto flex items-center justify-between border-4 border-black bg-white p-3 sm:p-4 neo-shadow-static">
        <a className="text-lg sm:text-2xl font-bold tracking-tighter px-2 sm:px-4 truncate" href="#">
          DEV_PORTFOLIO
        </a>
        {/* Desktop nav */}
        <div className="hidden md:flex gap-2 lg:gap-4">
          <a
            className="border-4 border-black px-4 py-2 lg:px-6 font-bold hover:bg-primary transition-colors text-sm lg:text-base"
            href="#work"
            onClick={(e) => scrollToSection(e, 'work')}
          >
            WORK
          </a>
          <a
            className="border-4 border-black px-4 py-2 lg:px-6 font-bold hover:bg-primary transition-colors text-sm lg:text-base"
            href="#experience"
            onClick={(e) => scrollToSection(e, 'experience')}
          >
            EXPERIENCE
          </a>
          <a
            className="border-4 border-black px-4 py-2 lg:px-6 font-bold hover:bg-primary transition-colors text-sm lg:text-base"
            href="#contact"
            onClick={(e) => scrollToSection(e, 'contact')}
          >
            CONTACT
          </a>
        </div>
        {/* Mobile menu button */}
        <button
          type="button"
          className="md:hidden flex flex-col justify-center w-10 h-10 border-4 border-black p-1.5 gap-1 hover:bg-primary transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-label="Toggle menu"
        >
          <span className={`w-full h-0.5 bg-black transition-transform ${menuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
          <span className={`w-full h-0.5 bg-black transition-opacity ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`w-full h-0.5 bg-black transition-transform ${menuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
        </button>
      </div>
      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="md:hidden absolute left-4 right-4 top-full mt-2 border-4 border-black bg-white neo-shadow-static p-4 flex flex-col gap-2">
          <a
            className="border-4 border-black px-4 py-3 font-bold hover:bg-primary transition-colors"
            href="#work"
            onClick={(e) => closeAndScroll(e, 'work')}
          >
            WORK
          </a>
          <a
            className="border-4 border-black px-4 py-3 font-bold hover:bg-primary transition-colors"
            href="#experience"
            onClick={(e) => closeAndScroll(e, 'experience')}
          >
            EXPERIENCE
          </a>
          <a
            className="border-4 border-black px-4 py-3 font-bold hover:bg-primary transition-colors"
            href="#contact"
            onClick={(e) => closeAndScroll(e, 'contact')}
          >
            CONTACT
          </a>
        </div>
      )}
    </nav>
  )
}
