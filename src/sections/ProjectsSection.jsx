import { ArrowDownRight } from 'lucide-react'
import Container from '../components/Container'
import ProjectImageCarousel from '../components/ProjectImageCarousel'
import Reveal from '../components/Reveal'
import SectionIntro from '../components/SectionIntro'
import { getProjectImages } from '../data/projectImages'

function getProjectsByYear(projects) {
  return projects.reduce((acc, project) => {
    if (!acc[project.year]) {
      acc[project.year] = []
    }

    acc[project.year].push(project)
    return acc
  }, {})
}

function ProjectsSection({ sectionIntro, projects }) {
  const projectsByYear = getProjectsByYear(projects)
  const years = Object.keys(projectsByYear).sort((a, b) => Number(a) - Number(b))

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

        <Reveal>
          <div className="glass-panel rounded-[2rem] border hairline p-6 sm:p-8 lg:p-10">
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.3em] text-[color:var(--accent)]">
              Línea de tiempo
            </p>

            <div className="mt-8 space-y-8">
              {years.map((year) => (
                <div
                  key={year}
                  className="grid gap-5 border-t border-[color:var(--line)] pt-8 first:border-0 first:pt-0 md:grid-cols-[160px_1fr]"
                >
                  <p className="font-display text-5xl leading-none text-[color:var(--ink)]">
                    {year}
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {projectsByYear[year].map((project) => (
                      <a
                        key={project.id}
                        href={`#proyecto-${project.id}`}
                        className="group inline-flex items-center gap-3 rounded-full border hairline bg-white/35 px-5 py-3 text-sm font-semibold text-[color:var(--ink)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/70"
                      >
                        {project.title}
                        <ArrowDownRight
                          size={16}
                          className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5"
                        />
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <div className="mt-12 space-y-12 lg:mt-16 lg:space-y-16">
          {projects.map((project, index) => {
            const projectImages = getProjectImages(
              project.imageFolder,
              project.title,
            )

            return (
              <Reveal key={project.id} delay={0.06 * index}>
                <article
                  id={`proyecto-${project.id}`}
                  className="scroll-mt-32 overflow-hidden rounded-[2.25rem] border hairline glass-panel"
                >
                  <div className="grid gap-0 lg:grid-cols-[0.9fr_1.1fr]">
                    <div className="p-6 sm:p-8 lg:p-10">
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="rounded-full border hairline px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-[color:var(--accent)]">
                          {project.year}
                        </span>
                        <span className="text-[0.72rem] uppercase tracking-[0.22em] text-[color:var(--ink-soft)]">
                          {project.category}
                        </span>
                      </div>

                      <h3 className="font-display mt-7 max-w-2xl text-5xl leading-[0.92] text-[color:var(--ink)] sm:text-[4.5rem]">
                        {project.title}
                      </h3>
                      <p className="mt-6 max-w-2xl text-base leading-8 text-[color:var(--ink-soft)] sm:text-lg">
                        {project.description}
                      </p>

                      <div className="mt-9 space-y-4">
                        {project.details.map((detail, detailIndex) => (
                          <div
                            key={detail}
                            className="grid grid-cols-[42px_1fr] gap-4 border-t border-[color:var(--line)] pt-4 text-sm leading-7 text-[color:var(--ink-soft)] sm:text-base"
                          >
                            <span className="font-display text-3xl leading-none text-[rgba(125,99,80,0.5)]">
                              {String(detailIndex + 1).padStart(2, '0')}
                            </span>
                            <p>{detail}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="border-t border-[color:var(--line)] p-4 sm:p-5 lg:border-l lg:border-t-0">
                      <ProjectImageCarousel
                        images={projectImages}
                        fallbackImage={project.image}
                        projectTitle={project.title}
                        className="aspect-[4/5] min-h-[430px] sm:min-h-[560px] lg:min-h-[680px]"
                      />
                    </div>
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
