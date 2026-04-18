import { Trophy } from 'lucide-react'
import Container from '../components/Container'
import Reveal from '../components/Reveal'
import SectionIntro from '../components/SectionIntro'

function RecognitionsSection({ sectionIntro, recognitions }) {
  return (
    <section
      id="reconocimientos"
      className="scroll-mt-32 py-16 sm:py-24 lg:py-28"
    >
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.86fr_1.14fr] lg:items-start">
          <Reveal>
            <SectionIntro
              eyebrow={sectionIntro.eyebrow}
              title={sectionIntro.title}
              description={sectionIntro.description}
            />
          </Reveal>

          <div className="space-y-4">
            {recognitions.map((recognition, index) => (
              <Reveal
                key={`${recognition.title}-${recognition.project}`}
                delay={0.06 * index}
              >
                <article className="glass-panel rounded-[1.8rem] border hairline p-6 sm:p-8">
                  <div className="grid gap-5 sm:grid-cols-[96px_1fr]">
                    <div>
                      <div className="grid size-12 place-items-center rounded-full border hairline text-[color:var(--accent)]">
                        <Trophy size={18} />
                      </div>
                      <p className="font-display mt-5 text-4xl leading-none text-[color:var(--ink)]">
                        {recognition.year}
                      </p>
                    </div>

                    <div>
                      <p className="text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-[color:var(--accent)]">
                        {recognition.project}
                      </p>
                      <h3 className="font-display mt-3 text-4xl leading-none text-[color:var(--ink)]">
                        {recognition.title}
                      </h3>
                      <p className="mt-4 text-sm leading-7 text-[color:var(--ink-soft)] sm:text-base">
                        {recognition.description}
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

export default RecognitionsSection
