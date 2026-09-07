/**
 * GSAP + ScrollTrigger plugin module.
 *
 * Imported only where animations actually run. `lib/animations.ts`
 * lazy-loads this module so pages without animated elements never
 * download the GSAP bundle.
 */
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register plugins once
gsap.registerPlugin(ScrollTrigger);

export { gsap, ScrollTrigger };
