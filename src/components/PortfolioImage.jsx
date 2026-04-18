const defaultPalette = ['#ede2d5', '#c5ab90', '#8a6d59']

function PortfolioImage({ image, className = '' }) {
  const palette = image?.palette?.length === 3 ? image.palette : defaultPalette

  if (image?.src) {
    return (
      <div
        className={`relative overflow-hidden rounded-[2rem] border hairline glass-panel ${className}`}
      >
        <img
          src={image.src}
          alt={image.alt || image.label || 'Imagen del portafolio'}
          className="h-full w-full object-cover"
        />
      </div>
    )
  }

  return (
    <div
      className={`relative isolate overflow-hidden rounded-[2rem] border hairline glass-panel ${className}`}
    >
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(145deg, ${palette[0]} 0%, ${palette[1]} 52%, ${palette[2]} 100%)`,
        }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_18%,rgba(255,255,255,0.55),transparent_28%),radial-gradient(circle_at_78%_28%,rgba(255,255,255,0.22),transparent_30%),linear-gradient(180deg,rgba(255,255,255,0.26),rgba(255,255,255,0.06)_42%,rgba(0,0,0,0.14)_100%)]" />
      <div className="absolute inset-x-5 top-5 h-[38%] rounded-[1.5rem] border border-white/30" />
      <div className="absolute inset-y-12 right-5 w-[34%] rounded-[1.5rem] border border-white/20" />
      <div className="absolute bottom-5 left-5 right-5 rounded-[1.4rem] border border-white/22 bg-[rgba(26,21,18,0.12)] p-5 backdrop-blur-md">
        <p className="text-[0.65rem] font-medium uppercase tracking-[0.34em] text-white/75">
          {image?.eyebrow || 'Editorial placeholder'}
        </p>
        <p className="font-display mt-4 text-3xl leading-none text-white sm:text-[2.5rem]">
          {image?.label || 'Lookbook'}
        </p>
        <p className="mt-2 max-w-sm text-sm leading-6 text-white/80">
          {image?.caption ||
            'Espacio preparado para incorporar fotografía de colección o retrato editorial.'}
        </p>
      </div>
    </div>
  )
}

export default PortfolioImage
