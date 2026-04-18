import Container from '../components/Container'
import Reveal from '../components/Reveal'
import SectionIntro from '../components/SectionIntro'

function AboutSection({ about }) {
  return (
    <section id="sobre-mi" className="scroll-mt-32 py-16 sm:py-24 lg:py-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <Reveal>
            <SectionIntro
              eyebrow={about.eyebrow}
              title={about.title}
              description={about.description}
            />
            <p className="mt-6 max-w-xl border-l border-[color:var(--line)] pl-5 text-base leading-7 text-[color:var(--ink-soft)] sm:text-lg">
              {about.note}
            </p>
          </Reveal>

          <div className="grid gap-5">
            {about.focusAreas.map((item, index) => (
              <Reveal key={item.title} delay={0.08 * (index + 1)}>
                <article className="glass-panel rounded-[1.8rem] border hairline p-6 sm:p-8">
                  <div className="flex items-start gap-5">
                    <p className="font-display text-4xl leading-none text-[rgba(125,99,80,0.55)]">
                      {String(index + 1).padStart(2, '0')}
                    </p>
                    <div>
                      <h3 className="font-display text-[2rem] leading-tight text-[color:var(--ink)]">
                        {item.title}
                      </h3>
                      <p className="mt-3 max-w-xl text-sm leading-7 text-[color:var(--ink-soft)] sm:text-base">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}

export default AboutSection
