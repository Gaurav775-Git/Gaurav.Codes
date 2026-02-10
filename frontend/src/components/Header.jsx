import React from 'react'

const Header = () => (
  <header className="sticky top-0 z-30 border-b border-white/5 bg-black/40 backdrop-blur-md">
    <div className="flex items-center justify-between py-4 max-w-6xl mx-auto px-6 lg:px-8">
      <div className="flex items-center gap-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#141418] border border-[#252530] text-sm font-semibold text-[#4ade80]">
          GA
        </div>
        <span className="text-xs text-[#6b6b78]">Full Stack Developer</span>
      </div>
      <nav className="hidden items-center gap-6 text-sm text-[#a1a1b0] md:flex">
        <a href="#work" className="hover:text-[#4ade80] transition-colors">Work</a>
        <a href="#projects" className="hover:text-[#4ade80] transition-colors">Projects</a>
        <a href="#blogs" className="hover:text-[#4ade80] transition-colors">Blogs</a>
      </nav>
      <div className="flex items-center gap-3">
        <div className="hidden items-center gap-2 rounded-full bg-[#141418] border border-[#252530] px-3 py-1.5 text-xs text-[#6b6b78] md:flex">
          <span className="text-[11px] text-[#4ade80]/80">Search</span>
          <span className="h-4 w-px bg-[#252530]" />
          <span className="flex items-center gap-1 rounded-md bg-[#0f0f14] px-1.5 py-0.5 text-[10px] text-[#a1a1b0] border border-[#252530]">Ctrl <span className="text-[9px]">+</span> K</span>
        </div>
        <button type="button" className="flex h-9 w-9 items-center justify-center rounded-full bg-[#141418] border border-[#252530] text-xs text-[#a1a1b0] hover:text-[#4ade80] hover:border-[#4ade80]/70 transition-colors" aria-label="Toggle theme">☾</button>
      </div>
    </div>
  </header>
)

export default Header
