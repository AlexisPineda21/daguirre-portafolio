import { useEffect } from 'react'
import { createPortal } from 'react-dom'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'

const MotionDiv = motion.div
const MotionImg = motion.img

function ImageLightbox({
  images,
  activeIndex,
  title,
  onClose,
  onPrevious,
  onNext,
}) {
  const shouldReduceMotion = useReducedMotion()
  const activeImage = images[activeIndex] || images[0]
  const hasMultipleImages = images.length > 1

  useEffect(() => {
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [])

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose()
      }

      if (event.key === 'ArrowLeft' && hasMultipleImages) {
        onPrevious()
      }

      if (event.key === 'ArrowRight' && hasMultipleImages) {
        onNext()
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [hasMultipleImages, onClose, onNext, onPrevious])

  if (!activeImage) {
    return null
  }

  const overlayMotion = shouldReduceMotion
    ? {}
    : {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        transition: { duration: 0.24, ease: 'easeOut' },
      }

  const imageMotion = shouldReduceMotion
    ? {}
    : {
        initial: { opacity: 0, scale: 0.98 },
        animate: { opacity: 1, scale: 1 },
        exit: { opacity: 0, scale: 0.985 },
        transition: { duration: 0.34, ease: [0.22, 1, 0.36, 1] },
      }

  return createPortal(
    <AnimatePresence>
      <MotionDiv
        className="fixed inset-0 z-[100] flex items-center justify-center bg-[rgba(18,15,13,0.92)] p-4 backdrop-blur-xl sm:p-6"
        role="dialog"
        aria-modal="true"
        aria-label={`Imagen ampliada de ${title}`}
        onMouseDown={(event) => {
          if (event.target === event.currentTarget) {
            onClose()
          }
        }}
        {...overlayMotion}
      >
        <div className="absolute inset-x-4 top-4 z-10 flex items-center justify-between gap-3 sm:inset-x-6 sm:top-6">
          <div className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-white/85 backdrop-blur-md">
            {title}
          </div>

          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-white/90 backdrop-blur-md transition-colors duration-300 hover:bg-white/18 focus:outline-none focus:ring-2 focus:ring-white/70"
            aria-label="Cerrar imagen ampliada"
            onClick={onClose}
          >
            Cerrar
            <X size={16} />
          </button>
        </div>

        {hasMultipleImages ? (
          <div className="absolute inset-x-4 top-1/2 z-10 flex -translate-y-1/2 items-center justify-between sm:inset-x-6">
            <button
              type="button"
              className="grid size-12 place-items-center rounded-full border border-white/25 bg-white/10 text-white backdrop-blur-md transition-all duration-300 hover:-translate-x-0.5 hover:bg-white/18 focus:outline-none focus:ring-2 focus:ring-white/70"
              aria-label={`Ver imagen anterior de ${title}`}
              onClick={onPrevious}
            >
              <ChevronLeft size={22} />
            </button>
            <button
              type="button"
              className="grid size-12 place-items-center rounded-full border border-white/25 bg-white/10 text-white backdrop-blur-md transition-all duration-300 hover:translate-x-0.5 hover:bg-white/18 focus:outline-none focus:ring-2 focus:ring-white/70"
              aria-label={`Ver imagen siguiente de ${title}`}
              onClick={onNext}
            >
              <ChevronRight size={22} />
            </button>
          </div>
        ) : null}

        <AnimatePresence mode="wait" initial={false}>
          <MotionImg
            key={activeImage.src}
            src={activeImage.src}
            alt={activeImage.alt}
            className="max-h-[86vh] max-w-[94vw] object-contain shadow-[0_28px_90px_rgba(0,0,0,0.32)]"
            decoding="async"
            {...imageMotion}
          />
        </AnimatePresence>

        {hasMultipleImages ? (
          <div className="absolute bottom-4 left-1/2 z-10 -translate-x-1/2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-white/85 backdrop-blur-md sm:bottom-6">
            {String(activeIndex + 1).padStart(2, '0')} /{' '}
            {String(images.length).padStart(2, '0')}
          </div>
        ) : null}
      </MotionDiv>
    </AnimatePresence>,
    document.body,
  )
}

export default ImageLightbox
