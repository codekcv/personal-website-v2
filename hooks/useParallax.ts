import { useScroll, useTransform, MotionValue } from "framer-motion";

export function useParallax(distance: number): MotionValue<number> {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, distance]);
  return y;
}
