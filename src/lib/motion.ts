/**
 * Centralized motion tokens and variants for premium, restrained animations.
 * Respects prefers-reduced-motion via MotionConfig.
 */

export const easing = {
  smooth: [0.4, 0, 0.2, 1] as const,
  easeOut: [0, 0, 0.2, 1] as const,
  easeInOut: [0.4, 0, 0.2, 1] as const,
  gentle: [0.25, 0.1, 0.25, 1] as const,
};

export const duration = {
  fast: 0.2,
  normal: 0.35,
  slow: 0.5,
  slower: 0.7,
};

export const spring = {
  gentle: { type: "spring" as const, stiffness: 260, damping: 28 },
  soft: { type: "spring" as const, stiffness: 200, damping: 25 },
  subtle: { type: "spring" as const, stiffness: 300, damping: 30 },
};

/** Viewport: animate once (first enter only) */
export const viewportOnce = { once: true, amount: 0.15, margin: "-30px" } as const;

/** Viewport: re-animate when re-entering (subtle re-entry for living feel) */
export const viewportReEnter = { once: false, amount: 0.2, margin: "-20px" } as const;

/** Subtle re-entry: low amplitude for sections revisiting */
export const reEnterReveal = {
  initial: { opacity: 0.7, y: 8 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.4, ease: easing.smooth },
  viewport: viewportReEnter,
} as const;

/** Section heading re-entry */
export const fadeUpReEnter = {
  initial: { opacity: 0.85, y: 10 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.4, ease: easing.smooth },
  viewport: viewportReEnter,
} as const;

/** Stagger item re-entry - use with custom delay */
export const staggerItemReEnter = (delay = 0) => ({
  initial: { opacity: 0.8, y: 6 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.35, delay, ease: easing.smooth },
  viewport: viewportReEnter,
});

/** Ambient float - for persistent floating layers */
export const ambientFloat = {
  animate: { y: [0, -3, 0] },
  transition: { duration: 8, repeat: Infinity, ease: easing.easeInOut },
};

/** Ambient pulse glow */
export const ambientPulse = {
  animate: { opacity: [0.4, 0.6, 0.4] },
  transition: { duration: 6, repeat: Infinity, ease: "easeInOut" },
};

/** Node pulse - subtle scale/opacity for graph nodes */
export const nodePulse = {
  animate: { scale: [1, 1.05, 1], opacity: [1, 0.85, 1] },
  transition: { duration: 3, repeat: Infinity, ease: "easeInOut" },
};

export function useReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export const reducedMotionVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

export const fadeUp = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0 },
  transition: { duration: duration.normal, ease: easing.smooth },
};

export const fadeUpStagger = (i: number) => ({
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0 },
  transition: { duration: duration.normal, ease: easing.smooth, delay: i * 0.06 },
});

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  transition: { duration: duration.normal },
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.98 },
  visible: { opacity: 1, scale: 1 },
  transition: { duration: duration.slow, ease: easing.smooth },
};

export const cardHover = {
  rest: { y: 0, transition: { duration: duration.fast } },
  hover: {
    y: -2,
    transition: { duration: duration.fast, ease: easing.easeOut },
  },
};
