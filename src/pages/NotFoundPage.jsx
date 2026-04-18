import Container from '../components/Container'
import Reveal from '../components/Reveal'

function NotFoundPage() {
  return (
    <main>
      <section className="py-20 sm:py-28 lg:py-36">
        <Container>
          <Reveal className="glass-panel rounded-[2rem] border hairline p-8 text-center sm:p-12">
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.3em] text-[color:var(--accent)]">
              Página no encontrada
            </p>
            <h1 className="font-display mx-auto mt-6 max-w-2xl text-5xl leading-none text-[color:var(--ink)] sm:text-7xl">
              Este proyecto no existe o cambió de ubicación.
            </h1>
            <a
              href="/#proyectos"
              className="mt-8 inline-flex rounded-full bg-[color:var(--ink)] px-6 py-3 text-[0.78rem] font-semibold uppercase tracking-[0.24em] text-white"
            >
              Volver al portafolio
            </a>
          </Reveal>
        </Container>
      </section>
    </main>
  )
}

export default NotFoundPage
