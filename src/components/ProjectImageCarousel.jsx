import { useEffect, useRef, useState } from 'react'
import {
  AnimatePresence,
  motion,
  useInView,
  useReducedMotion,
} from 'framer-motion'
import { ChevronLeft, ChevronRight, Pause } from 'lucide-react'
import PortfolioImage from './PortfolioImage'

const MotionImg = motion.img

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

  const hasImages = images.length > 0
  const hasMultipleImages = images.length > 1
  const isPaused = isHovered || hasFocusWithin

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
      <AnimatePresence mode="wait" initial={false}>
        <MotionImg
          key={activeImage.src}
          src={activeImage.src}
          alt={activeImage.alt}
          className="absolute inset-0 h-full w-full object-cover"
          decoding="async"
          loading="lazy"
          {...motionProps}
        />
      </AnimatePresence>

      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,12,10,0.08)_0%,rgba(15,12,10,0)_38%,rgba(15,12,10,0.45)_100%)]" />

      {hasMultipleImages ? (
        <>
          <div className="absolute inset-x-4 top-4 flex items-center justify-between gap-3">
            <div className="rounded-full border border-white/30 bg-black/20 px-3 py-1.5 text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-white/90 backdrop-blur-md">
              {String(activeIndex + 1).padStart(2, '0')} /{' '}
              {String(images.length).padStart(2, '0')}
            </div>

            {isPaused ? (
              <div className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-black/20 px-3 py-1.5 text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-white/90 backdrop-blur-md">
                <Pause size={12} />
                Pausado
              </div>
            ) : null}
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

      <div className="absolute bottom-5 left-5 rounded-full border border-white/25 bg-black/18 px-4 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-white/90 backdrop-blur-md">
        {projectTitle}
      </div>
    </div>
  )
}

export default ProjectImageCarousel
