import { Suspense } from 'react'
import Navbar from '../components/Navbar'
import Lanyard from '../components/Lanyard'
import Hero from '../components/Hero'
import Experience from '../components/Experience'
import Projects from '../components/Projects'
import Footer from '../components/Footer'

export default function MainPage() {
  return (
    <div className="font-display bg-background-light text-black selection:bg-primary selection:text-black overflow-x-hidden">
      <Navbar />
      {/* Lanyard hangs from top, full width below navbar */}
      <section className="w-full h-[260px] sm:h-[320px] md:h-[380px] lg:h-[420px] relative z-0">
        <Suspense
          fallback={
            <div className="w-full h-full bg-background-light flex items-center justify-center">
              <span className="font-mono text-sm text-black">Loading…</span>
            </div>
          }
        >
          <Lanyard
            className="w-full h-full"
            position={[0, 0, 30]}
            fov={20}
            transparent={true}
          />
        </Suspense>
      </section>
      <main className="max-w-[1440px] mx-auto px-4 sm:px-6 space-y-16 sm:space-y-24 pb-16 sm:pb-24 overflow-x-hidden">
        <Hero />
        <Experience />
        <Projects />
        <Footer />
      </main>
    </div>
  )
}
