import { ArrowLeft, ArrowRight } from 'lucide-react'
import Container from '../components/Container'
import ProjectImageCarousel from '../components/ProjectImageCarousel'
import Reveal from '../components/Reveal'
import { getProjectImages } from '../data/projectImages'
import { getProjectPath } from '../utils/projectRoutes'

function ProjectDetailPage({ project, previousProject, nextProject }) {
  const projectImages = getProjectImages(project.imageFolder, project.title)

  return (
    <main>
      <section className="pb-16 pt-10 sm:pb-24 sm:pt-16 lg:pb-28 lg:pt-20">
        <Container>
          <Reveal>
            <a
              href="/#proyectos"
              className="inline-flex items-center gap-2 rounded-full border hairline bg-white/35 px-5 py-3 text-[0.74rem] font-semibold uppercase tracking-[0.24em] text-[color:var(--ink)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/70"
            >
              <ArrowLeft size={16} />
              Volver a proyectos
            </a>
          </Reveal>

          <div
            className="mt-10 overflow-hidden rounded-[2.25rem] border border-black/10 p-4 sm:p-6 lg:p-8"
            style={{ backgroundColor: project.themeColor }}
          >
            <div className="grid gap-8 lg:grid-cols-[0.86fr_1.14fr] lg:items-start">
              <Reveal className="space-y-8">
                <div className="rounded-[2rem] bg-[rgba(255,251,246,0.9)] p-6 sm:p-8">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="rounded-full border hairline px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-[color:var(--accent)]">
                      {project.year}
                    </span>
                    <span className="text-[0.72rem] uppercase tracking-[0.22em] text-[color:var(--ink-soft)]">
                      {project.category}
                    </span>
                  </div>

                  <h1 className="font-display mt-7 max-w-3xl text-[4.2rem] leading-[0.86] text-[color:var(--ink)] sm:text-[6.4rem]">
                    {project.title}
                  </h1>
                  <p className="mt-6 max-w-2xl text-lg leading-8 text-[color:var(--ink-soft)] sm:text-xl">
                    {project.description}
                  </p>
                </div>

                <div className="rounded-[2rem] border hairline bg-[rgba(255,251,246,0.9)] p-6 sm:p-8">
                  <p className="text-[0.72rem] font-semibold uppercase tracking-[0.3em] text-[color:var(--accent)]">
                    Concepto del proyecto
                  </p>
                  <div className="mt-7 space-y-4">
                    {project.details.map((detail, index) => (
                      <div
                        key={detail}
                        className="grid grid-cols-[42px_1fr] gap-4 border-t border-[color:var(--line)] pt-4 text-sm leading-7 text-[color:var(--ink-soft)] first:border-0 first:pt-0 sm:text-base"
                      >
                        <span className="font-display text-3xl leading-none text-[rgba(125,99,80,0.5)]">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                        <p>{detail}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.1}>
                <ProjectImageCarousel
                  images={projectImages}
                  fallbackImage={project.image}
                  projectTitle={project.title}
                  className="aspect-[4/5] min-h-[520px] sm:min-h-[680px] lg:min-h-[760px]"
                />
              </Reveal>
            </div>
          </div>

          <Reveal delay={0.12}>
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {previousProject ? (
                <a
                  href={getProjectPath(previousProject.id)}
                  className="glass-panel group rounded-[1.8rem] border hairline p-6 transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/70"
                >
                  <p className="inline-flex items-center gap-2 text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-[color:var(--accent)]">
                    <ArrowLeft size={14} />
                    Anterior
                  </p>
                  <p className="font-display mt-4 text-4xl leading-none text-[color:var(--ink)]">
                    {previousProject.title}
                  </p>
                </a>
              ) : (
                <div />
              )}

              {nextProject ? (
                <a
                  href={getProjectPath(nextProject.id)}
                  className="glass-panel group rounded-[1.8rem] border hairline p-6 text-left transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/70 sm:text-right"
                >
                  <p className="inline-flex items-center gap-2 text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-[color:var(--accent)]">
                    Siguiente
                    <ArrowRight size={14} />
                  </p>
                  <p className="font-display mt-4 text-4xl leading-none text-[color:var(--ink)]">
                    {nextProject.title}
                  </p>
                </a>
              ) : null}
            </div>
          </Reveal>
        </Container>
      </section>
    </main>
  )
}

export default ProjectDetailPage
