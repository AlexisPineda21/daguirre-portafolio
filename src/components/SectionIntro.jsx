function SectionIntro({ eyebrow, title, description, className = '' }) {
  return (
    <div className={`space-y-4 ${className}`}>
      <p className="text-[0.72rem] font-semibold uppercase tracking-[0.32em] text-[color:var(--accent)]">
        {eyebrow}
      </p>
      <h2 className="font-display max-w-3xl text-4xl leading-[0.96] text-[color:var(--ink)] sm:text-5xl lg:text-[3.6rem]">
        {title}
      </h2>
      <p className="max-w-2xl text-base leading-7 text-[color:var(--ink-soft)] sm:text-lg">
        {description}
      </p>
    </div>
  )
}

export default SectionIntro
