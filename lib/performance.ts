export const preloadImage = (src: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.onload = () => resolve()
    img.onerror = reject
    img.src = src
  })
}

export const preloadImages = async (srcs: string[]): Promise<void> => {
  await Promise.all(srcs.map(preloadImage))
}

export const lazyLoadImage = (img: HTMLImageElement, src: string, placeholder?: string) => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        img.src = src
        img.classList.remove("blur-sm")
        observer.unobserve(img)
      }
    })
  })

  if (placeholder) {
    img.src = placeholder
    img.classList.add("blur-sm", "transition-all", "duration-300")
  }

  observer.observe(img)
}

export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number,
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout
  return (...args: Parameters<T>) => {
    clearTimeout(timeout)
    timeout = setTimeout(() => func(...args), wait)
  }
}

export const throttle = <T extends (...args: any[]) => any>(
  func: T,
  limit: number,
): ((...args: Parameters<T>) => void) => {
  let inThrottle: boolean
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args)
      inThrottle = true
      setTimeout(() => (inThrottle = false), limit)
    }
  }
}
