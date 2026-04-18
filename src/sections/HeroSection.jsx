import { ArrowRight } from 'lucide-react'
import Container from '../components/Container'
import PortfolioImage from '../components/PortfolioImage'
import Reveal from '../components/Reveal'

function HeroSection({ hero }) {
  return (
    <section id="inicio" className="scroll-mt-32 pb-16 pt-10 sm:pb-24 sm:pt-16 lg:pb-28 lg:pt-20">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(360px,0.95fr)] lg:items-center lg:gap-14">
          <Reveal className="space-y-8">
            <div className="inline-flex items-center rounded-full border hairline bg-white/55 px-4 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.32em] text-[color:var(--accent)]">
              {hero.badge}
            </div>

            <div className="space-y-6">
              <p className="text-[0.76rem] font-semibold uppercase tracking-[0.4em] text-[color:var(--ink-soft)]">
                {hero.role}
              </p>
              <h1 className="font-display max-w-3xl text-[4rem] leading-[0.86] text-[color:var(--ink)] sm:text-[5.3rem] lg:text-[6.8rem]">
                {hero.name}
              </h1>
              <p className="max-w-xl text-lg leading-8 text-[color:var(--ink-soft)] sm:text-xl">
                {hero.tagline}
              </p>
              <p className="max-w-xl text-base leading-7 text-[color:var(--ink-soft)]">
                {hero.description}
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href={hero.primaryCta.href}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[color:var(--ink)] px-6 py-3 text-[0.78rem] font-semibold uppercase tracking-[0.24em] text-white transition-transform duration-300 hover:-translate-y-0.5"
              >
                {hero.primaryCta.label}
                <ArrowRight size={16} />
              </a>
              <a
                href={hero.secondaryCta.href}
                className="inline-flex items-center justify-center rounded-full border hairline px-6 py-3 text-[0.78rem] font-semibold uppercase tracking-[0.24em] text-[color:var(--ink)] transition-all duration-300 hover:bg-white/60"
              >
                {hero.secondaryCta.label}
              </a>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {hero.highlights.map((item, index) => (
                <Reveal
                  key={item.title}
                  delay={0.08 * (index + 1)}
                  className="glass-panel rounded-[1.6rem] border hairline p-5"
                >
                  <p className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-[color:var(--accent)]">
                    {item.title}
                  </p>
                  <p className="font-display mt-4 text-[2.1rem] leading-none text-[color:var(--ink)]">
                    {item.value}
                  </p>
                  <p className="mt-3 text-sm leading-6 text-[color:var(--ink-soft)]">
                    {item.description}
                  </p>
                </Reveal>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.12} className="lg:pl-6">
            <PortfolioImage
              image={hero.image}
              className="aspect-[4/5] min-h-[430px] sm:min-h-[540px]"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  )
}

export default HeroSection
