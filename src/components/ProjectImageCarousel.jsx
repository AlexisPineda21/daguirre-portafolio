import { useEffect, useRef, useState } from 'react'
import {
  AnimatePresence,
  motion,
  useInView,
  useReducedMotion,
} from 'framer-motion'
import { ChevronLeft, ChevronRight, Maximize2, Pause } from 'lucide-react'
import ImageLightbox from './ImageLightbox'
import PortfolioImage from './PortfolioImage'

const MotionImg = motion.img

const expandButtonClass =
  'inline-flex items-center gap-1 rounded-full border border-white/30 bg-black/20 px-2 py-1 text-[0.58rem] font-semibold uppercase tracking-[0.14em] text-white/90 opacity-0 backdrop-blur-md transition-all duration-300 hover:bg-black/32 focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-white/70 group-hover:opacity-100 group-focus-within:opacity-100'

function ProjectImageCarousel({
  images = [],
  fallbackImage,
  projectTitle,
  className = '',
}) {
  const shouldReduceMotion = useReducedMotion()
  const carouselRef = useRef(null)
  const isInView = useInView(carouselRef, { amount: 0.35 })
  const [activeIndex, setActiveIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const [hasFocusWithin, setHasFocusWithin] = useState(false)
  const [isLightboxOpen, setIsLightboxOpen] = useState(false)

  const hasImages = images.length > 0
  const hasMultipleImages = images.length > 1
  const isPaused = isHovered || hasFocusWithin || isLightboxOpen

  useEffect(() => {
    if (!hasMultipleImages || isPaused || !isInView) {
      return undefined
    }

    const intervalId = window.setInterval(() => {
      setActiveIndex((currentIndex) => (currentIndex + 1) % images.length)
    }, 5000)

    return () => window.clearInterval(intervalId)
  }, [hasMultipleImages, images.length, isInView, isPaused])

  if (!hasImages) {
    return <PortfolioImage image={fallbackImage} className={className} />
  }

  const activeImage = images[activeIndex]

  const goToPrevious = () => {
    setActiveIndex((currentIndex) =>
      currentIndex === 0 ? images.length - 1 : currentIndex - 1,
    )
  }

  const goToNext = () => {
    setActiveIndex((currentIndex) => (currentIndex + 1) % images.length)
  }

  const handleBlur = (event) => {
    if (!event.currentTarget.contains(event.relatedTarget)) {
      setHasFocusWithin(false)
    }
  }

  const motionProps = shouldReduceMotion
    ? {}
    : {
        initial: { opacity: 0, scale: 1.02 },
        animate: { opacity: 1, scale: 1 },
        exit: { opacity: 0, scale: 0.99 },
        transition: { duration: 0.72, ease: [0.22, 1, 0.36, 1] },
      }

  return (
    <div
      ref={carouselRef}
      className={`group relative isolate overflow-hidden rounded-[2rem] border hairline glass-panel ${className}`}
      aria-label={`Galería de imágenes de ${projectTitle}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setHasFocusWithin(true)}
      onBlur={handleBlur}
    >
      <img
        src={activeImage.src}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full scale-110 object-cover opacity-28 blur-2xl"
        decoding="async"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,251,246,0.78),rgba(210,198,184,0.42)),radial-gradient(circle_at_center,rgba(255,255,255,0.48),transparent_54%)]" />

      <AnimatePresence mode="wait" initial={false}>
        <MotionImg
          key={activeImage.src}
          src={activeImage.src}
          alt={activeImage.alt}
          className="absolute inset-0 h-full w-full object-contain p-4 sm:p-6"
          decoding="async"
          loading="lazy"
          {...motionProps}
        />
      </AnimatePresence>

      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,12,10,0.04)_0%,rgba(15,12,10,0)_38%,rgba(15,12,10,0.28)_100%)]" />

      {hasMultipleImages ? (
        <>
          <div className="absolute inset-x-4 top-4 flex items-center justify-between gap-3">
            <div className="rounded-full border border-white/30 bg-black/20 px-3 py-1.5 text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-white/90 backdrop-blur-md">
              {String(activeIndex + 1).padStart(2, '0')} /{' '}
              {String(images.length).padStart(2, '0')}
            </div>

            <div className="flex items-center gap-2">
              {isPaused ? (
                <div className="hidden items-center gap-2 rounded-full border border-white/30 bg-black/20 px-3 py-1.5 text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-white/90 backdrop-blur-md sm:inline-flex">
                  <Pause size={12} />
                  Pausado
                </div>
              ) : null}

              <button
                type="button"
                className={expandButtonClass}
                aria-label={`Expandir imagen de ${projectTitle}`}
                onClick={() => setIsLightboxOpen(true)}
              >
                <span className="hidden sm:inline">Expandir</span>
                <Maximize2 size={10} />
              </button>
            </div>
          </div>

          <div className="absolute inset-x-4 top-1/2 flex -translate-y-1/2 items-center justify-between">
            <button
              type="button"
              className="grid size-11 place-items-center rounded-full border border-white/35 bg-black/18 text-white shadow-sm backdrop-blur-md transition-all duration-300 hover:-translate-x-0.5 hover:bg-black/30 focus:outline-none focus:ring-2 focus:ring-white/70"
              aria-label={`Ver imagen anterior de ${projectTitle}`}
              onClick={goToPrevious}
            >
              <ChevronLeft size={19} />
            </button>
            <button
              type="button"
              className="grid size-11 place-items-center rounded-full border border-white/35 bg-black/18 text-white shadow-sm backdrop-blur-md transition-all duration-300 hover:translate-x-0.5 hover:bg-black/30 focus:outline-none focus:ring-2 focus:ring-white/70"
              aria-label={`Ver imagen siguiente de ${projectTitle}`}
              onClick={goToNext}
            >
              <ChevronRight size={19} />
            </button>
          </div>

          <div className="absolute bottom-5 right-5 flex max-w-[60%] flex-wrap justify-end gap-2">
            {images.map((image, index) => (
              <button
                key={image.src}
                type="button"
                className={`h-1.5 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/70 ${
                  index === activeIndex
                    ? 'w-8 bg-white'
                    : 'w-3 bg-white/45 hover:bg-white/75'
                }`}
                aria-label={`Ir a imagen ${index + 1} de ${projectTitle}`}
                aria-current={index === activeIndex ? 'true' : undefined}
                onClick={() => setActiveIndex(index)}
              />
            ))}
          </div>
        </>
      ) : null}

      {!hasMultipleImages ? (
        <div className="absolute right-4 top-4">
          <button
            type="button"
            className={expandButtonClass}
            aria-label={`Expandir imagen de ${projectTitle}`}
            onClick={() => setIsLightboxOpen(true)}
          >
            <span className="hidden sm:inline">Expandir</span>
            <Maximize2 size={10} />
          </button>
        </div>
      ) : null}

      <div className="absolute bottom-5 left-5 rounded-full border border-white/25 bg-black/18 px-4 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-white/90 backdrop-blur-md">
        {projectTitle}
      </div>

      {isLightboxOpen ? (
        <ImageLightbox
          images={images}
          activeIndex={activeIndex}
          title={projectTitle}
          onClose={() => setIsLightboxOpen(false)}
          onPrevious={goToPrevious}
          onNext={goToNext}
        />
      ) : null}
    </div>
  )
}

export default ProjectImageCarousel
