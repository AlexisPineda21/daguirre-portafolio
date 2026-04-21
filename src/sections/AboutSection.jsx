import Container from '../components/Container'
import Reveal from '../components/Reveal'
import SectionIntro from '../components/SectionIntro'

function AboutSection({ about, skills, languages }) {
  return (
    <section id="sobre-mi" className="scroll-mt-32 py-16 sm:py-24 lg:py-28">
      <Container>
        <Reveal>
          <SectionIntro
            eyebrow={about.eyebrow}
            title={about.title}
            description={about.description}
            className="mb-10 lg:mb-14"
          />
        </Reveal>

        <div className="grid gap-6 lg:grid-cols-[0.92fr_1.08fr]">
          <Reveal className="glass-panel rounded-[2rem] border hairline p-6 sm:p-8 lg:p-10">
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.3em] text-[color:var(--accent)]">
              Historia
            </p>
            <div className="mt-8 space-y-6">
              {about.story.map((paragraph) => (
                <p
                  key={paragraph}
                  className="max-w-2xl text-base leading-8 text-[color:var(--ink-soft)] sm:text-lg"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </Reveal>

          <div className="grid gap-5 lg:h-full lg:grid-rows-3">
            {about.pillars.map((item, index) => (
              <Reveal key={item.title} delay={0.08 * (index + 1)}>
                <article className="glass-panel h-full rounded-[1.8rem] border hairline p-6 sm:p-8">
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

        <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skills.groups.map((group, index) => (
            <Reveal
              key={group.title}
              delay={0.08 * (index + 1)}
              className="glass-panel rounded-[2rem] border hairline p-6 sm:p-8"
            >
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.3em] text-[color:var(--accent)]">
                Habilidades
              </p>
              <h3 className="font-display mt-6 text-3xl leading-none text-[color:var(--ink)]">
                {group.title}
              </h3>
              <ul className="mt-6 space-y-3">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="border-t border-[color:var(--line)] pt-3 text-sm leading-7 text-[color:var(--ink-soft)] first:border-0 first:pt-0"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}

          <Reveal
            delay={0.08 * (skills.groups.length + 1)}
            className="glass-panel rounded-[2rem] border hairline p-6 sm:p-8 md:col-span-2 lg:col-span-1"
          >
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.3em] text-[color:var(--accent)]">
              Idiomas
            </p>
            <div className="mt-6 space-y-5">
              {languages.map((item) => (
                <div
                  key={item.language}
                  className="border-t border-[color:var(--line)] pt-5 first:border-0 first:pt-0"
                >
                  <h3 className="font-display text-3xl leading-none text-[color:var(--ink)]">
                    {item.language}
                  </h3>
                  <p className="mt-2 text-sm font-semibold text-[color:var(--ink)]">
                    {item.level}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-[color:var(--ink-soft)]">
                    {item.note}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}

export default AboutSection
