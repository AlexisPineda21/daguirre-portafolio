import Container from './Container'

function Footer({ footer }) {
  return (
    <footer className="border-t hairline mt-8">
      <Container className="flex flex-col gap-3 py-8 text-sm text-[color:var(--ink-soft)] sm:flex-row sm:items-center sm:justify-between">
        <p className="font-display text-2xl text-[color:var(--ink)]">
          {footer.name}
        </p>
        <p>{new Date().getFullYear()}</p>
        <p>{footer.message}</p>
      </Container>
    </footer>
  )
}

export default Footer
