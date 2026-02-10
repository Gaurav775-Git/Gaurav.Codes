import React from 'react'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'

const HighlightLink = ({ children }) => (
  <button type="button" className="text-[#4ade80] hover:text-[#bbf7d0] underline-offset-4">
    {children}
  </button>
)

const Hero = () => (
  <section className="pt-4 text-center lg:pt-8">
    <div className="flex flex-col items-center gap-6">
      <div className="relative">
        <div className="h-24 w-24 rounded-full bg-[conic-gradient(at_top,_#4ade80,_#22c55e,_#14b8a6,_#4ade80)] opacity-80 blur-sm" />
        <div className="absolute inset-1 flex items-center justify-center rounded-full bg-[#11111a] border border-[#252530]">
          <span className="text-lg font-semibold text-[#e2e2e8]">GA</span>
        </div>
      </div>
      <div className="space-y-4 max-w-2xl">
        <p className="text-xs font-medium uppercase tracking-[0.25em] text-[#4ade80]/70">Web Developer</p>
        <h1 className="text-3xl font-semibold text-[#f4f4f8] sm:text-4xl lg:text-[2.6rem] lg:leading-tight">
          Hi, I&apos;m Gaurav — A Full Stack Web Developer.
        </h1>
        <p className="text-sm leading-relaxed text-[#6b6b78] sm:text-base">
          I build accessible, fast, and carefully crafted web experiences. Focused on{' '}
          <HighlightLink>TypeScript</HighlightLink>, <HighlightLink>React</HighlightLink>,{' '}
          <HighlightLink>Next.js</HighlightLink>, <HighlightLink>Bun</HighlightLink>, and{' '}
          <HighlightLink>PostgreSQL</HighlightLink>. Currently crafting performant dashboards and developer tools.
        </p>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-3">
        <button
          type="button"
          className="rounded-full border border-[#252530] bg-[#141418] px-5 py-2 text-sm text-[#e2e2e8] shadow-[0_0_0_1px_rgba(37,37,48,1)] hover:border-[#4ade80]/80 hover:shadow-[0_0_18px_rgba(74,222,128,0.35)] transition-colors transition-shadow"
        >
          Resume / CV
        </button>
        <button
          type="button"
          className="rounded-full border border-[#252530] bg-transparent px-5 py-2 text-sm text-[#e2e2e8] hover:border-[#4ade80]/80 hover:shadow-[0_0_18px_rgba(74,222,128,0.35)] transition-colors transition-shadow"
        >
          Get in touch
        </button>
      </div>
    </div>
  </section>
)

const App = () => (
  <div className="min-h-screen bg-[#0a0a0f] text-[#e2e2e8] antialiased">
    <Header />
    <Hero />
    {/* uncomment this to make the footer at one click */}
    {/* <Footer /> */}
  </div>
)

export default App