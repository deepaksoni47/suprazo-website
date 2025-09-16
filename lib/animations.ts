export const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] },
}

export const fadeInLeft = {
  initial: { opacity: 0, x: -60 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] },
}

export const fadeInRight = {
  initial: { opacity: 0, x: 60 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] },
}

export const scaleIn = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.5, ease: [0.6, -0.05, 0.01, 0.99] },
}

export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
}

export const slideInFromBottom = {
  initial: { opacity: 0, y: 100 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] },
}

export const rotateIn = {
  initial: { opacity: 0, rotate: -10, scale: 0.9 },
  animate: { opacity: 1, rotate: 0, scale: 1 },
  transition: { duration: 0.7, ease: [0.6, -0.05, 0.01, 0.99] },
}

export const bounceIn = {
  initial: { opacity: 0, scale: 0.3 },
  animate: { opacity: 1, scale: 1 },
  transition: {
    duration: 0.6,
    ease: [0.68, -0.55, 0.265, 1.55],
    scale: {
      type: "spring",
      damping: 5,
      stiffness: 100,
      restDelta: 0.001,
    },
  },
}

export const floatingAnimation = {
  animate: {
    y: [-10, 10, -10],
    transition: {
      duration: 6,
      repeat: Number.POSITIVE_INFINITY,
      ease: "easeInOut",
    },
  },
}

export const pulseGlow = {
  animate: {
    boxShadow: [
      "0 0 20px rgba(11, 100, 212, 0.3)",
      "0 0 40px rgba(11, 100, 212, 0.6)",
      "0 0 20px rgba(11, 100, 212, 0.3)",
    ],
    transition: {
      duration: 2,
      repeat: Number.POSITIVE_INFINITY,
      ease: "easeInOut",
    },
  },
}
