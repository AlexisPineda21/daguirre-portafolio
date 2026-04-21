import { ArrowLeft, ArrowRight } from 'lucide-react'
import Container from '../components/Container'
import ProjectImageCarousel from '../components/ProjectImageCarousel'
import Reveal from '../components/Reveal'
import { getProjectImages } from '../data/projectImages'
import { getProjectPath } from '../utils/projectRoutes'

const projectInfoPanelClass =
  'flex h-full flex-col justify-center rounded-[2rem] border hairline bg-[color:var(--panel-strong)] p-6 shadow-[0_28px_80px_rgba(18,13,10,0.12)] sm:p-8 lg:min-h-[760px]'

const projectNavPanelClass =
  'group rounded-[1.8rem] border hairline bg-[color:var(--panel-strong)] p-6 shadow-[0_24px_70px_rgba(18,13,10,0.1)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-white'

function ProjectDetailPage({ project, previousProject, nextProject }) {
  const projectImages = getProjectImages(project.imageFolder, project.title)

  return (
    <main>
      <section
        className="min-h-[calc(100vh-96px)] pb-16 pt-10 sm:pb-24 sm:pt-16 lg:pb-28 lg:pt-20"
        style={{ backgroundColor: project.themeColor }}
      >
        <Container>
          <Reveal>
            <a
              href="/#proyectos"
              className="inline-flex items-center gap-2 rounded-full border border-[rgba(31,27,23,0.12)] bg-white px-5 py-3 text-[0.74rem] font-semibold uppercase tracking-[0.24em] text-[color:var(--ink)] shadow-[0_16px_44px_rgba(31,27,23,0.08)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[color:var(--panel-strong)]"
            >
              <ArrowLeft size={16} />
              Volver a proyectos
            </a>
          </Reveal>

          <div className="mt-10">
            <div className="grid gap-8 lg:grid-cols-[0.86fr_1.14fr]">
              <Reveal className="h-full">
                <div className={projectInfoPanelClass}>
                  <h1 className="font-display max-w-3xl text-[4.2rem] leading-[0.86] text-[color:var(--ink)] sm:text-[6.4rem]">
                    {project.title}
                  </h1>
                  <p className="mt-7 max-w-2xl text-base leading-8 text-[color:var(--ink-soft)] sm:text-lg">
                    {project.description}
                  </p>
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
                  className={projectNavPanelClass}
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
                  className={`${projectNavPanelClass} text-left sm:text-right`}
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
