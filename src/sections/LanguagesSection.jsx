import { Languages } from 'lucide-react'
import Container from '../components/Container'
import Reveal from '../components/Reveal'
import SectionIntro from '../components/SectionIntro'

function LanguagesSection({ sectionIntro, languages }) {
  return (
    <section id="idiomas" className="scroll-mt-32 py-16 sm:py-24 lg:py-28">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <Reveal>
            <SectionIntro
              eyebrow={sectionIntro.eyebrow}
              title={sectionIntro.title}
              description={sectionIntro.description}
            />
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2">
            {languages.map((item, index) => (
              <Reveal
                key={item.language}
                delay={0.08 * (index + 1)}
                className="glass-panel rounded-[1.8rem] border hairline p-6 sm:p-8"
              >
                <div className="flex items-center gap-3 text-[color:var(--accent)]">
                  <span className="rounded-full border hairline p-2">
                    <Languages size={16} />
                  </span>
                  <p className="text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-[color:var(--accent)]">
                    Idioma
                  </p>
                </div>
                <h3 className="font-display mt-8 text-4xl leading-none text-[color:var(--ink)]">
                  {item.language}
                </h3>
                <p className="mt-3 text-base font-semibold text-[color:var(--ink)]">
                  {item.level}
                </p>
                <p className="mt-4 text-sm leading-7 text-[color:var(--ink-soft)]">
                  {item.note}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}

export default LanguagesSection
