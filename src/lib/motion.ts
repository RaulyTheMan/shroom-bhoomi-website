export const DURATION = {
  fast: 0.15,
  base: 0.2,
  moderate: 0.3,
  slow: 0.45,
};

export const EASE = {
  out: [0.16, 1, 0.3, 1] as const,
  inOut: [0.65, 0, 0.35, 1] as const,
};

export const tapScale = { scale: 0.97 };

export const revealVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export const revealViewport = { once: true, margin: "-80px" };

export const revealTransition = { duration: DURATION.slow, ease: EASE.out };

export const IMAGE_HOVER_CLASS =
  "transition-transform duration-300 ease-out will-change-transform hover:scale-[1.04]";
