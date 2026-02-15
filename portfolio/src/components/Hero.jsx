export default function Hero() {
  return (
    <section className="grid grid-cols-12 gap-8 sm:gap-12 pt-8 sm:pt-12 items-center">
      <div className="col-span-12 min-w-0">
        <span className="inline-block border-2 border-black bg-primary px-3 py-1 font-bold mb-4 sm:mb-6 text-xs sm:text-sm uppercase tracking-widest">
          Available for hire
        </span>
        <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-[120px] font-bold leading-[0.9] tracking-tighter mb-6 sm:mb-8 break-words">
          HI, I&apos;M <br />{' '}
          <span className="text-primary underline decoration-black decoration-4 sm:decoration-8">ALEX</span>.
        </h1>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium max-w-xl mb-8 sm:mb-12 font-mono">
          // Building digital products with clean code, heavy shadows, and way too much caffeine.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
          <button
            type="button"
            className="w-full sm:w-auto bg-primary text-black border-4 border-black px-6 py-3 sm:px-8 sm:py-4 font-bold text-base sm:text-xl neo-shadow"
          >
            GET IN TOUCH
          </button>
          <button
            type="button"
            className="w-full sm:w-auto bg-white text-black border-4 border-black px-6 py-3 sm:px-8 sm:py-4 font-bold text-base sm:text-xl neo-shadow"
          >
            MY RESUME
          </button>
        </div>
      </div>
    </section>
  )
}
