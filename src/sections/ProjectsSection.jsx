import { ArrowUpRight } from 'lucide-react'
import Container from '../components/Container'
import Reveal from '../components/Reveal'
import SectionIntro from '../components/SectionIntro'
import { getProjectImages } from '../data/projectImages'
import { getProjectPath } from '../utils/projectRoutes'

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

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {projects.map((project, index) => {
            const cover = getProjectImages(project.imageFolder, project.title)[0]

            return (
              <Reveal key={project.id} delay={0.06 * index}>
                <a
                  href={getProjectPath(project.id)}
                  className="group block h-full overflow-hidden rounded-[1.8rem] border hairline glass-panel transition-all duration-500 hover:-translate-y-1 hover:bg-white/70 hover:shadow-[0_34px_90px_rgba(68,48,29,0.14)]"
                >
                  <div className="relative aspect-[4/5] overflow-hidden rounded-[1.65rem] bg-[rgba(255,251,246,0.55)]">
                    {cover ? (
                      <>
                        <img
                          src={cover.src}
                          alt=""
                          aria-hidden="true"
                          className="absolute inset-0 h-full w-full scale-110 object-cover opacity-24 blur-xl transition-transform duration-700 group-hover:scale-115"
                          loading="lazy"
                          decoding="async"
                        />
                        <img
                          src={cover.src}
                          alt={`Portada del proyecto ${project.title}`}
                          className="absolute inset-0 h-full w-full object-contain p-3 transition-transform duration-700 group-hover:scale-[1.03]"
                          loading="lazy"
                          decoding="async"
                        />
                      </>
                    ) : (
                      <div
                        className="absolute inset-0"
                        style={{
                          background: `linear-gradient(145deg, ${project.image.palette[0]} 0%, ${project.image.palette[1]} 55%, ${project.image.palette[2]} 100%)`,
                        }}
                      />
                    )}
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,12,10,0)_30%,rgba(15,12,10,0.54)_100%)]" />
                    <div className="absolute right-4 top-4 grid size-10 place-items-center rounded-full border border-white/30 bg-black/20 text-white backdrop-blur-md transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                      <ArrowUpRight size={17} />
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <p className="text-[0.64rem] font-semibold uppercase tracking-[0.24em] text-white/75">
                        {project.year}
                      </p>
                      <h3 className="font-display mt-2 text-3xl leading-none text-white">
                        {project.title}
                      </h3>
                    </div>
                  </div>
                  <div className="p-5">
                    <p className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-[color:var(--accent)]">
                      {project.category}
                    </p>
                    <p className="mt-3 text-sm leading-6 text-[color:var(--ink-soft)]">
                      Ver proyecto completo
                    </p>
                  </div>
                </a>
              </Reveal>
            )
          })}
        </div>
      </Container>
    </section>
  )
}

export default ProjectsSection
