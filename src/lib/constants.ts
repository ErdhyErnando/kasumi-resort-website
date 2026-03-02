// ─── Site Configuration ───────────────────────────────────────────────
export const SITE_NAME = 'Kasumi Resort';
export const SITE_TAGLINE = 'Enjoy Living';
export const SITE_URL = 'https://kasumiresorts.com';
export const SITE_DESCRIPTION =
    'Villa dan camping ground di kawasan Taman Nasional Gunung Halimun Salak (TNGHS), Cidahu, Sukabumi, Jawa Barat.';
export const SITE_DESCRIPTION_EN =
    'Villa and camping ground within Gunung Halimun Salak National Park (TNGHS) area in Cidahu, Sukabumi, West Java, Indonesia.';

// ─── Contact ──────────────────────────────────────────────────────────
export const CONTACT_EMAIL = 'info@kasumiresorts.com';
export const WHATSAPP_NUMBER = '6285591189388';
export const WHATSAPP_DISPLAY = '+62 855-9118-9388';
export const ADDRESS = 'TNGHS Cidahu, Sukabumi, Jawa Barat 43358';
export const COORDINATES = { lat: -6.7415, lng: 106.6885 }; // approximate

// ─── Social Links ─────────────────────────────────────────────────────
export const SOCIAL_LINKS = {
    instagram: 'https://instagram.com/kasumi_resort',
    tiktok: 'https://tiktok.com/@kasumi_resort',
} as const;

// ─── Navigation ───────────────────────────────────────────────────────
export interface NavLink {
    label: string;
    labelEn: string;
    href: string;
}

export const NAV_LINKS: NavLink[] = [
    { label: 'Villa', labelEn: 'Villa', href: '/villa' },
    { label: 'Camping', labelEn: 'Camping', href: '/camping' },
    { label: 'Galeri', labelEn: 'Gallery', href: '/gallery' },
    { label: 'Kontak', labelEn: 'Contact', href: '/contact' },
    { label: 'Blog', labelEn: 'Blog', href: '/blog' },
];

// ─── Blog Categories ──────────────────────────────────────────────────
export const BLOG_CATEGORIES = [
    'tips berkemah',
    'wisata sukabumi',
    'update resort',
    'nature info',
] as const;
