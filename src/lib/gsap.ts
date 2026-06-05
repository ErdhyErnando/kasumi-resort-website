/**
 * GSAP + ScrollTrigger initialization helper.
 *
 * Must be called on every `astro:page-load` event to properly
 * kill stale ScrollTrigger instances from previous page transitions
 * and re-init animations for the current page.
 */
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';

// Register plugins once
gsap.registerPlugin(ScrollTrigger, SplitText);

export { gsap, ScrollTrigger, SplitText };

/** Pathname before the current view-transition swap (in-memory, SPA only). */
let previousPath = '';

/**
 * Record the outgoing pathname before Astro swaps page content.
 * Called on `astro:before-swap` from BaseLayout.
 */
export function trackNavigationPath(): void {
    previousPath = window.location.pathname;
}

function isVillaIndexPath(path: string): boolean {
    return /^\/(id|en)\/villa\/?$/.test(path);
}

function isVillaDetailPath(path: string): boolean {
    return /^\/(id|en)\/villa\/[^/]+\/?$/.test(path);
}

/** Skip entrance animations when returning to the listing from a villa detail page. */
function isReturningToVillaIndex(): boolean {
    const current = window.location.pathname;
    return isVillaIndexPath(current) && isVillaDetailPath(previousPath);
}

function revealImmediately(targets: Element | Element[] | HTMLCollection): void {
    const elements = Array.isArray(targets)
        ? targets
        : targets instanceof HTMLCollection
          ? Array.from(targets)
          : [targets];
    gsap.set(elements, { opacity: 1, y: 0, clearProps: 'transform' });
}

/**
 * Kill all ScrollTrigger instances and re-initialize page animations.
 * Called on `astro:page-load` from BaseLayout.
 */
export function initAnimations(): void {
    // Kill all existing ScrollTrigger instances from previous page
    ScrollTrigger.getAll().forEach((t) => t.kill());
    ScrollTrigger.refresh();

    const skipEntrance = isReturningToVillaIndex();

    // ── Fade-up on scroll ──────────────────────────────────────────────
    const fadeUpElements = document.querySelectorAll('[data-animate="fade-up"]');
    fadeUpElements.forEach((el) => {
        if (skipEntrance) {
            revealImmediately(el);
            return;
        }

        gsap.fromTo(
            el,
            { opacity: 0, y: 40 },
            {
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: el,
                    start: 'top 85%',
                    once: true,
                },
            },
        );
    });

    // ── Stagger fade-in for card grids ─────────────────────────────────
    const staggerGroups = document.querySelectorAll('[data-animate="stagger"]');
    staggerGroups.forEach((group) => {
        if (skipEntrance) {
            revealImmediately(group.children);
            return;
        }

        const children = group.children;
        gsap.fromTo(
            children,
            { opacity: 0, y: 30 },
            {
                opacity: 1,
                y: 0,
                duration: 0.6,
                stagger: 0.15,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: group,
                    start: 'top 85%',
                    once: true,
                },
            },
        );
    });
}
