import { GraduationCap } from 'lucide-react'
import Container from '../components/Container'
import Reveal from '../components/Reveal'
import SectionIntro from '../components/SectionIntro'

function EducationSection({ education }) {
  return (
    <section id="educacion" className="scroll-mt-32 py-16 sm:py-24 lg:py-28">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <Reveal>
            <SectionIntro
              eyebrow={education.eyebrow}
              title={education.title}
              description={education.description}
            />
          </Reveal>

          <Reveal delay={0.12}>
            <article className="glass-panel rounded-[2rem] border hairline p-6 sm:p-8 lg:p-10">
              <div className="flex items-center gap-3 text-[color:var(--accent)]">
                <span className="rounded-full border hairline p-2">
                  <GraduationCap size={18} />
                </span>
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.3em] text-[color:var(--accent)]">
                  Formación
                </p>
              </div>

              <p className="mt-8 text-sm uppercase tracking-[0.24em] text-[color:var(--ink-soft)]">
                {education.institution} - {education.location}
              </p>
              <h3 className="font-display mt-4 max-w-2xl text-4xl leading-[1.02] text-[color:var(--ink)] sm:text-5xl">
                {education.degree}
              </h3>
              <p className="mt-5 max-w-2xl text-base leading-7 text-[color:var(--ink-soft)]">
                {education.emphasis}
              </p>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                <div className="rounded-[1.5rem] border hairline bg-white/40 p-5">
                  <p className="text-[0.72rem] uppercase tracking-[0.26em] text-[color:var(--ink-soft)]">
                    Promedio
                  </p>
                  <p className="font-display mt-3 text-4xl text-[color:var(--ink)]">
                    {education.average}
                  </p>
                </div>
                <div className="rounded-[1.5rem] border hairline bg-white/40 p-5">
                  <p className="text-[0.72rem] uppercase tracking-[0.26em] text-[color:var(--ink-soft)]">
                    Estado
                  </p>
                  <p className="mt-3 text-base font-semibold text-[color:var(--ink)]">
                    {education.stage}
                  </p>
                </div>
                <div className="rounded-[1.5rem] border hairline bg-white/40 p-5">
                  <p className="text-[0.72rem] uppercase tracking-[0.26em] text-[color:var(--ink-soft)]">
                    Enfoque
                  </p>
                  <p className="mt-3 text-base font-semibold text-[color:var(--ink)]">
                    Moda + gestión
                  </p>
                </div>
              </div>
            </article>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}

export default EducationSection
