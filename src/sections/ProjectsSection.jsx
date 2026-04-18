import { ArrowDownRight } from 'lucide-react'
import Container from '../components/Container'
import Reveal from '../components/Reveal'
import SectionIntro from '../components/SectionIntro'
import { getProjectPath } from '../utils/projectRoutes'

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
                        href={getProjectPath(project.id)}
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
      </Container>
    </section>
  )
}

export default ProjectsSection
