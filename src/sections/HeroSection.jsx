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

            <div className="grid max-w-3xl gap-5 sm:grid-cols-2">
              {hero.highlights.map((item, index) => (
                <Reveal
                  key={item.title}
                  delay={0.08 * (index + 1)}
                  className="glass-panel min-h-[210px] rounded-[1.8rem] border hairline p-6 sm:p-7"
                >
                  <p className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-[color:var(--accent)]">
                    {item.title}
                  </p>
                  <p className="font-display mt-5 text-[2.4rem] leading-none text-[color:var(--ink)] sm:text-[2.8rem]">
                    {item.value}
                  </p>
                  <p className="mt-4 text-sm leading-7 text-[color:var(--ink-soft)]">
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
