/**
 * Page animation orchestration.
 *
 * GSAP is loaded lazily: pages that contain no animated elements
 * (`[data-animate]`, hero headline) never download the animation bundle.
 * Must be called on every `astro:page-load` event to re-bind animations
 * after view-transition swaps.
 */

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

/** True when the current page has elements that need animating. */
function pageNeedsAnimations(): boolean {
    return (
        document.querySelector('[data-animate], #hero-headline') !== null
    );
}

/**
 * Kill all ScrollTrigger instances and re-initialize page animations.
 * No-op (with no GSAP download) on pages without animated elements.
 * Called on `astro:page-load` from BaseLayout.
 */
export async function initAnimations(): Promise<void> {
    if (!pageNeedsAnimations()) return;

    const { gsap, ScrollTrigger } = await import('./gsap');

    // Kill all existing ScrollTrigger instances from previous page
    ScrollTrigger.getAll().forEach((t) => t.kill());
    ScrollTrigger.refresh();

    const skipEntrance = isReturningToVillaIndex();

    // ── Fade-up on scroll ──────────────────────────────────────────────
    const fadeUpElements = document.querySelectorAll('[data-animate="fade-up"]');
    fadeUpElements.forEach((el) => {
        if (skipEntrance) {
            revealImmediately(gsap, el);
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
            revealImmediately(gsap, group.children);
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

/** Reveal elements immediately without animating (used when skipping entrances). */
function revealImmediately(
    gsap: typeof import('./gsap').gsap,
    targets: Element | Element[] | HTMLCollection,
): void {
    const elements = Array.isArray(targets)
        ? targets
        : targets instanceof HTMLCollection
          ? Array.from(targets)
          : [targets];
    gsap.set(elements, { opacity: 1, y: 0, clearProps: 'transform' });
}
