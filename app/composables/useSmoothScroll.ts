export function useSmoothScroll() {
  const prefersReducedMotion = (): boolean => {
    if (typeof window === 'undefined' || typeof window.matchMedia === 'undefined') {
      return false
    }
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches
  }

  const easeInOutCubic = (t: number): number => {
    return t < 0.5
      ? 4 * t * t * t
      : 1 - Math.pow(-2 * t + 2, 3) / 2
  }

  const getTargetTop = (element: Element): number => {
    const rect = element.getBoundingClientRect()
    const currentY = window.pageYOffset
    const computed = window.getComputedStyle(element)
    const smt = computed.scrollMarginTop || computed.getPropertyValue('scroll-margin-top')
    const scrollMarginTop = smt ? parseFloat(smt) : 0

    const rawTarget = rect.top + currentY - scrollMarginTop
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight
    return Math.min(Math.max(rawTarget, 0), Math.max(maxScroll, 0))
  }

  const scrollToElement = (target: string | Element, options?: { duration?: number, updateHash?: boolean }) => {
    if (typeof window === 'undefined') return

    const duration = options?.duration ?? 700
    const updateHash = options?.updateHash ?? true

    const element = typeof target === 'string'
      ? document.getElementById(target.replace(/^#/, ''))
      : target

    if (!element) return

    if (prefersReducedMotion()) {
      element.scrollIntoView({ behavior: 'auto', block: 'start' })
      if (updateHash && (element as HTMLElement).id) {
        history.replaceState(null, '', `#${(element as HTMLElement).id}`)
      }
      return
    }

    const startY = window.pageYOffset
    const targetY = getTargetTop(element)
    const distance = targetY - startY

    if (Math.abs(distance) < 1) {
      if (updateHash && (element as HTMLElement).id) {
        history.replaceState(null, '', `#${(element as HTMLElement).id}`)
      }
      return
    }

    const startTime = performance.now()

    const step = (now: number) => {
      const elapsed = now - startTime
      const t = Math.min(elapsed / duration, 1)
      const eased = easeInOutCubic(t)
      window.scrollTo(0, startY + distance * eased)
      if (t < 1) {
        requestAnimationFrame(step)
      } else if (updateHash && (element as HTMLElement).id) {
        history.replaceState(null, '', `#${(element as HTMLElement).id}`)
      }
    }

    requestAnimationFrame(step)
  }

  const scrollToHash = (hash: string, options?: { duration?: number, updateHash?: boolean }) => {
    const id = hash.replace(/^#/, '')
    scrollToElement(id, options)
  }

  return { scrollToElement, scrollToHash }
}


