export type Locale = "id" | "en";

type LocalizedValue = {
  id: string;
  en: string;
};

export interface CampingContent {
  id: string;
  tabLabel: LocalizedValue;
  name: LocalizedValue;
  tagline: LocalizedValue;
  description: LocalizedValue;
  heroImage: string;
  gallery: string[];
  price: number;
  amenities: LocalizedValue[];
  perfectFor: LocalizedValue[];
}

/**
 * Shared camping data source for ID/EN pages.
 */
export const campings: CampingContent[] = [
  {
    id: "forest-riverside",
    tabLabel: { id: "Forest Riverside", en: "Forest Riverside" },
    name: { id: "Forest Riverside Camp", en: "Forest Riverside Camp" },
    tagline: {
      id: "Berkemah di bawah rimbun pepohonan, dekat aliran sungai.",
      en: "Camp under tall trees, close to the riverside flow.",
    },
    description: {
      id: "Area camping yang tenang untuk menikmati suara alam, api unggun, dan udara hutan yang sejuk sepanjang malam.",
      en: "A calm camping area to enjoy nature sounds, campfire moments, and cool forest air through the night.",
    },
    heroImage: "/images/camping/forest-riverside-1.webp",
    gallery: [
      "/images/camping/forest-riverside-1.webp",
      "/images/camping/forest-riverside-2.webp",
      "/images/camping/forest-riverside-3.webp",
      "/images/camping/forest-riverside-4.webp",
      "/images/camping/forest-riverside-5.webp",
    ],
    price: 2000000,
    amenities: [
      { id: "api unggun", en: "campfire area" },
      { id: "akses toilet", en: "bathroom access" },
      { id: "listrik", en: "electricity" },
      { id: "parkir dekat area", en: "nearby parking" },
      { id: "ruang komunal", en: "communal space" },
    ],
    perfectFor: [
      { id: "trip camping keluarga", en: "family camping trips" },
      { id: "komunitas outdoor", en: "outdoor communities" },
      { id: "campers & overlanders", en: "campervan travelers" },
      { id: "kegiatan sekolah / kantor", en: "school/company gatherings" },
    ],
  },
  {
    id: "mountain-view",
    tabLabel: { id: "Mountain View", en: "Mountain View" },
    name: { id: "Mountain View Camp", en: "Mountain View Camp" },
    tagline: {
      id: "Bangun pagi dengan panorama pegunungan yang luas.",
      en: "Wake up to wide and open mountain panoramas.",
    },
    description: {
      id: "Spot favorit untuk golden hour, kumpul bareng rombongan, dan menikmati langit malam dengan pemandangan lembah.",
      en: "A favorite spot for golden hour views, group camp moments, and stargazing over the valley.",
    },
    heroImage: "/images/camping/mountain-view-1.webp",
    gallery: [
      "/images/camping/mountain-view-1.webp",
      "/images/camping/mountain-view-2.webp",
      "/images/camping/mountain-view-3.webp",
      "/images/camping/mountain-view-4.webp",
      "/images/camping/mountain-view-5.webp",
    ],
    price: 2200000,
    amenities: [
      { id: "view pegunungan", en: "mountain panorama" },
      { id: "spot sunrise", en: "sunrise spot" },
      { id: "akses toilet", en: "bathroom access" },
      { id: "listrik", en: "electricity" },
      { id: "area kumpul", en: "group gathering area" },
    ],
    perfectFor: [
      { id: "liburan keluarga", en: "family getaways" },
      { id: "gathering komunitas", en: "community camps" },
      { id: "trip campervan", en: "campervan travelers" },
      { id: "retreat perusahaan / sekolah", en: "company/school retreats" },
    ],
  },
  {
    id: "spot-cemara",
    tabLabel: { id: "Spot Cemara", en: "Spot Cemara" },
    name: { id: "Spot Cemara", en: "Spot Cemara" },
    tagline: {
      id: "Tenda di bawah naungan pinus yang teduh dan sejuk.",
      en: "Camp beneath a cool, shaded pine canopy.",
    },
    description: {
      id: "Area lapang dengan tanah yang rata, cocok untuk tenda besar dan aktivitas kelompok di siang hari.",
      en: "A level clearing that fits larger tents and group activities through the afternoon.",
    },
    heroImage: "/images/camping/spot-cemara-1.webp",
    gallery: [
      "/images/camping/spot-cemara-1.webp",
      "/images/camping/spot-cemara-2.webp",
      "/images/camping/spot-cemara-3.webp",
      "/images/camping/spot-cemara-4.webp",
      "/images/camping/spot-cemara-5.webp",
    ],
    price: 2050000,
    amenities: [
      { id: "naungan pepohonan", en: "tree shade" },
      { id: "akses toilet", en: "bathroom access" },
      { id: "listrik", en: "electricity" },
      { id: "api unggun", en: "campfire area" },
      { id: "parkir dekat area", en: "nearby parking" },
    ],
    perfectFor: [
      { id: "camping keluarga", en: "family camping" },
      { id: "rombongan kecil", en: "small groups" },
      { id: "pendaki santai", en: "leisure hikers" },
      { id: "gathering santai", en: "casual gatherings" },
    ],
  },
  {
    id: "spot-cendana",
    tabLabel: { id: "Spot Cendana", en: "Spot Cendana" },
    name: { id: "Spot Cendana", en: "Spot Cendana" },
    tagline: {
      id: "Sudut tenang dengan angin lembut di antara pepohonan.",
      en: "A quiet corner with a gentle breeze between the trees.",
    },
    description: {
      id: "Spot yang lebih privat untuk beristirahat, bercerita api unggun, dan tidur nyenyak di malam hari.",
      en: "A slightly more private pitch for campfire stories and a restful night outdoors.",
    },
    heroImage: "/images/camping/spot-cendana-1.webp",
    gallery: [
      "/images/camping/spot-cendana-1.webp",
      "/images/camping/spot-cendana-2.webp",
      "/images/camping/spot-cendana-3.webp",
      "/images/camping/spot-cendana-4.webp",
      "/images/camping/spot-cendana-5.webp",
    ],
    price: 2100000,
    amenities: [
      { id: "privasi lebih", en: "extra privacy" },
      { id: "akses toilet", en: "bathroom access" },
      { id: "listrik", en: "electricity" },
      { id: "area duduk", en: "seating area" },
      { id: "penerangan jalur", en: "path lighting" },
    ],
    perfectFor: [
      { id: "pasangan & teman", en: "couples & friends" },
      { id: "kelompok kecil", en: "small crews" },
      { id: "malam api unggun", en: "campfire nights" },
      { id: "retreat ringan", en: "light retreats" },
    ],
  },
  {
    id: "spot-damar",
    tabLabel: { id: "Spot Damar", en: "Spot Damar" },
    name: { id: "Spot Damar", en: "Spot Damar" },
    tagline: {
      id: "Bukaan luas untuk aktivitas outdoor dan permainan kelompok.",
      en: "Open ground for outdoor games and group activities.",
    },
    description: {
      id: "Cocok untuk rombongan yang ingin ruang bermain anak, workshop ringan, atau area makan bersama.",
      en: "Ideal for groups who want space for kids to play, light workshops, or shared meals.",
    },
    heroImage: "/images/camping/spot-damar-1.webp",
    gallery: [
      "/images/camping/spot-damar-1.webp",
      "/images/camping/spot-damar-2.webp",
      "/images/camping/spot-damar-3.webp",
      "/images/camping/spot-damar-4.webp",
      "/images/camping/spot-damar-5.webp",
    ],
    price: 2150000,
    amenities: [
      { id: "area luas", en: "spacious ground" },
      { id: "akses toilet", en: "bathroom access" },
      { id: "listrik", en: "electricity" },
      { id: "ruang komunal", en: "communal space" },
      { id: "parkir dekat area", en: "nearby parking" },
    ],
    perfectFor: [
      { id: "keluarga dengan anak", en: "families with kids" },
      { id: "rombongan besar", en: "larger groups" },
      { id: "aktivitas kelompok", en: "group activities" },
      { id: "outing kantor / sekolah", en: "school/company outings" },
    ],
  },
];

export function getCampingById(id: string): CampingContent | undefined {
  return campings.find((camping) => camping.id === id);
}

export function formatCampingPrice(price: number, locale: Locale): string {
  return new Intl.NumberFormat(locale === "id" ? "id-ID" : "en-US").format(
    price,
  );
}
