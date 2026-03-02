/**
 * Minimal i18n utilities for Kasumi Resort.
 * Will be expanded in Sprint 8 with full translation support.
 */

export type Locale = 'id' | 'en';

/**
 * Get the current locale from a URL pathname.
 */
export function getLocaleFromUrl(url: URL): Locale {
    const [, locale] = url.pathname.split('/');
    if (locale === 'en') return 'en';
    return 'id';
}

/**
 * Get the localized path for a given path and locale.
 */
export function getLocalizedPath(path: string, locale: Locale): string {
    // Strip any existing locale prefix
    const cleanPath = path.replace(/^\/(id|en)/, '');
    return `/${locale}${cleanPath || '/'}`;
}

/**
 * Get the alternate locale.
 */
export function getAlternateLocale(locale: Locale): Locale {
    return locale === 'id' ? 'en' : 'id';
}
