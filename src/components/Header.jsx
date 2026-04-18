import Container from './Container'

function Header({ name, navigation, cta }) {
  return (
    <header className="sticky top-0 z-50 border-b hairline bg-[rgba(247,242,236,0.82)] backdrop-blur-xl">
      <Container className="py-4">
        <div className="flex items-center justify-between gap-4">
          <a
            href="/"
            className="flex items-center gap-3 text-[color:var(--ink)] transition-colors duration-300 hover:text-[color:var(--accent)]"
          >
            <span className="font-display text-[1.9rem] leading-none">DA</span>
            <span className="hidden text-[0.72rem] uppercase tracking-[0.34em] text-[color:var(--ink-soft)] sm:block">
              {name}
            </span>
          </a>

          <nav className="hidden items-center gap-6 lg:flex">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-[0.72rem] font-medium uppercase tracking-[0.26em] text-[color:var(--ink-soft)] transition-colors duration-300 hover:text-[color:var(--ink)]"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href={cta.href}
            className="inline-flex items-center justify-center rounded-full border hairline px-5 py-2.5 text-[0.72rem] font-semibold uppercase tracking-[0.26em] text-[color:var(--ink)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[color:var(--line-strong)] hover:bg-white/60"
          >
            {cta.label}
          </a>
        </div>

        <nav className="hide-scrollbar mt-4 flex gap-2 overflow-x-auto pb-1 lg:hidden">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="shrink-0 rounded-full border hairline px-4 py-2 text-[0.68rem] uppercase tracking-[0.22em] text-[color:var(--ink-soft)] transition-colors duration-300 hover:text-[color:var(--ink)]"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </Container>
    </header>
  )
}

export default Header
