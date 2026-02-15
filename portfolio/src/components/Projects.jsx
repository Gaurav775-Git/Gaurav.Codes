const PROJECTS_DATA = [
  {
    id: 'neo-dashboard',
    title: 'NEO_DASHBOARD V2',
    description:
      'A high-performance monitoring dashboard built with D3.js and WebSockets. Real-time data visualization with a brutalist twist.',
    imageAlt: 'Code editor interface',
    imageSrc:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAxkpE2HFPilrTDBtEWDStFe5Opk8u8q6TVUmM6I0Phv5U0uthsZDlG_B_QPbY8u7W7zyk98tTHkeK091Nrxc2_7iTYhFWAC_3-LsTWlIGdHloF1Sbci4zt8c7ly4jGPHlcMVWRsYekagq73PgRoqUp32C52idBZeo38xkqa0_x39kYmuLSH_4gtfzTOtczpF71IwEMuWqMisOZE_38gR8YU4OzyAFiPfND-aCtrYo1pZqbGB0Tkwk1ZHicYSyDPZ2GhrUg3PX2uAY',
    buttonPrimary: true,
  },
  {
    id: 'crypt-os',
    title: 'CRYPT_OS ENGINE',
    description:
      'Custom operating system simulation for educational purposes. Built entirely in React and Redux with zero dependencies.',
    imageAlt: 'Laptop on a desk',
    imageSrc:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuB70bCGtsGWeWa4z543HGHpsgiZoLlEp2MMQa2rRpiiHJL6UJwzyCJs0n7vUGX5rd9E4Did4NXQO7m-wYYlsmmE4HsHuSU6gG3_FzV3r0KpVpSKneT1qC-3l7-kKE67A-UxKGNLGoDh2wjfZOYG7mNq7WMt1cEELj_I3L9cg5o33WkFjV1tGEGOsbPouQKGFZpjQpRhdyCzT6eWjAINNvh6U4TuDuQkTrAqlpM6MLqrwhy7DOsIbbTe2Yo-BBTjQ0VnrxBHvFtg2yw',
    buttonPrimary: false,
  },
  {
    id: 'bold-commerce',
    title: 'BOLD_COMMERCE',
    description:
      'E-commerce platform focused on high-end streetwear. Integration with Stripe and Sanity CMS for blazing fast performance.',
    imageAlt: 'Mobile app UI',
    imageSrc:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBJo89fkvmsq1qCX-YFYa95S75rO8a3j8Tzt-taZONC8pFaSQtAm8FWYbFPfNvS-_wSvyzj8EO-vo-46twIlRTYonnNKTM5FKtZ-XLBe9YumqAjXHr-t665yv6GH0Z7G9NY5i99712a9y3C2e2tzdK7t-G5cJlKV1W5qqNrYSOZVZ36cL157Sa45efHWlksY33nZZ2K43Rz4WQE3ZlvEg5gWrsHmV0fSnY7pdijh1ojGPZrV3BZckEA76jDxlCeL4tRB-z3a4tYkuw',
    buttonPrimary: false,
  },
  {
    id: 'wireframe-api',
    title: 'WIRE_FRAME API',
    description:
      'Public API service for generating placeholder UI elements dynamically. Served over 1M requests per month.',
    imageAlt: 'Design mockup',
    imageSrc:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuC6HUOdsZpGTtPg1JRBZ7312OhTPRFmkyhgaZA-QeCreu8ADSILSKjZnasaZGgtxUp8f1ICdAx9eH2F99LHIrGasw9TXLArOXA3sl1YjysqC7yf-RYrXuafD0EruUhOTAP3sWlbExPKzbL0EPHFIdKfU8PbJAFXKfg0gCMJZj-k3InH9bVize4YVzsIpDurFkoBt2QrXXKBV9cBULo7pXbUl3Oxqg53X3HbikAfH1qc5szzvYit1iHKvjJXXj-fRx_W05qYZ6BQook',
    buttonPrimary: false,
  },
]

export default function Projects() {
  return (
    <section className="space-y-8 sm:space-y-12" id="work">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b-[6px] border-black pb-4">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter">PROJECTS</h2>
        <span className="font-mono text-base sm:text-xl font-bold">02 / WORK</span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
        {PROJECTS_DATA.map((project) => (
          <div
            key={project.id}
            className="group border-4 border-black bg-white neo-shadow-static overflow-hidden min-w-0"
          >
            <div className="aspect-video border-b-4 border-black bg-gray-200 overflow-hidden">
              <img
                alt={project.imageAlt}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                src={project.imageSrc}
              />
            </div>
            <div className="p-5 sm:p-6 md:p-8">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 break-words">{project.title}</h3>
              <p className="text-base sm:text-lg mb-6 sm:mb-8 opacity-70 line-clamp-3">{project.description}</p>
              <button
                type="button"
                className={`w-full border-4 border-black py-3 sm:py-4 font-bold text-base sm:text-lg neo-shadow group-hover:bg-primary ${
                  project.buttonPrimary ? 'bg-primary' : 'bg-white'
                }`}
              >
                VIEW PROJECT
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
