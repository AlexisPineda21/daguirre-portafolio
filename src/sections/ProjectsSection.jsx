import Container from '../components/Container'
import ProjectImageCarousel from '../components/ProjectImageCarousel'
import Reveal from '../components/Reveal'
import SectionIntro from '../components/SectionIntro'
import { getProjectImages } from '../data/projectImages'

function ProjectsSection({ sectionIntro, projects }) {
  return (
    <section id="proyectos" className="scroll-mt-32 py-16 sm:py-24 lg:py-28">
      <Container>
        <Reveal>
          <SectionIntro
            eyebrow={sectionIntro.eyebrow}
            title={sectionIntro.title}
            description={sectionIntro.description}
            className="mb-10 lg:mb-14"
          />
        </Reveal>

        <div className="space-y-8 lg:space-y-12">
          {projects.map((project, index) => {
            const isReversed = index % 2 === 1
            const projectImages = getProjectImages(
              project.imageFolder,
              project.title,
            )

            return (
              <Reveal key={project.title} delay={0.08 * index}>
                <article className="grid gap-5 lg:grid-cols-12 lg:items-center">
                  <div
                    className={`lg:col-span-7 ${
                      isReversed ? 'lg:order-2' : ''
                    }`}
                  >
                    <ProjectImageCarousel
                      images={projectImages}
                      fallbackImage={project.image}
                      projectTitle={project.title}
                      className="aspect-[16/11] min-h-[280px] sm:min-h-[380px]"
                    />
                  </div>

                  <div
                    className={`glass-panel rounded-[2rem] border hairline p-6 sm:p-8 lg:col-span-5 lg:p-9 ${
                      isReversed ? 'lg:order-1' : ''
                    }`}
                  >
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="rounded-full border hairline px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-[color:var(--accent)]">
                        {project.year}
                      </span>
                      <span className="text-[0.72rem] uppercase tracking-[0.22em] text-[color:var(--ink-soft)]">
                        {project.category}
                      </span>
                    </div>

                    <h3 className="font-display mt-6 text-4xl leading-[0.98] text-[color:var(--ink)] sm:text-[3rem]">
                      {project.title}
                    </h3>
                    <p className="mt-5 text-base leading-7 text-[color:var(--ink-soft)]">
                      {project.description}
                    </p>

                    <div className="mt-8 space-y-4">
                      {project.details.map((detail) => (
                        <div
                          key={detail}
                          className="border-t border-[color:var(--line)] pt-4 text-sm leading-7 text-[color:var(--ink-soft)] sm:text-base"
                        >
                          {detail}
                        </div>
                      ))}
                    </div>

                    {project.note ? (
                      <div className="mt-8 rounded-[1.4rem] border hairline bg-white/45 p-4 text-sm leading-6 text-[color:var(--ink)]">
                        {project.note}
                      </div>
                    ) : null}
                  </div>
                </article>
              </Reveal>
            )
          })}
        </div>
      </Container>
    </section>
  )
}

export default ProjectsSection
