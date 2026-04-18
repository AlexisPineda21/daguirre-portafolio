import Container from '../components/Container'
import Reveal from '../components/Reveal'
import SectionIntro from '../components/SectionIntro'

function SkillsSection({ skills }) {
  return (
    <section id="habilidades" className="scroll-mt-32 py-16 sm:py-24 lg:py-28">
      <Container>
        <Reveal>
          <SectionIntro
            eyebrow={skills.eyebrow}
            title={skills.title}
            description={skills.description}
            className="mb-10 lg:mb-14"
          />
        </Reveal>

        <div className="grid gap-6 lg:grid-cols-2">
          {skills.groups.map((group, groupIndex) => (
            <Reveal
              key={group.title}
              delay={0.08 * (groupIndex + 1)}
              className="glass-panel rounded-[2rem] border hairline p-6 sm:p-8 lg:p-9"
            >
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.3em] text-[color:var(--accent)]">
                {group.title}
              </p>
              <div className="mt-8 space-y-4">
                {group.items.map((item, itemIndex) => (
                  <div
                    key={item}
                    className="flex gap-4 border-t border-[color:var(--line)] pt-4 first:border-0 first:pt-0"
                  >
                    <p className="font-display text-3xl leading-none text-[rgba(125,99,80,0.5)]">
                      {String(itemIndex + 1).padStart(2, '0')}
                    </p>
                    <p className="text-sm leading-7 text-[color:var(--ink-soft)] sm:text-base">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default SkillsSection
