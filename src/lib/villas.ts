export type Locale = "id" | "en";

type LocalizedValue = {
  id: string;
  en: string;
};

export interface VillaContent {
  id: string;
  name: string;
  shortDescription: LocalizedValue;
  description: LocalizedValue;
  heroImage: string;
  images: string[];
  capacity: number;
  bedrooms: number;
  bathrooms: number;
  price: number;
  amenities: LocalizedValue[];
}

/**
 * Shared villa data source for ID/EN pages.
 * Add the next villas by appending objects to this array.
 */
export const villas: VillaContent[] = [
  {
    id: "gake",
    name: "Villa Gake",
    shortDescription: {
      id: "2 kamar tidur, 2 kamar mandi, dapur, ruang keluarga, teras, dan spot api unggun.",
      en: "2 bedrooms, 2 bathrooms, kitchen, family room, terrace, and campfire spot.",
    },
    description: {
      id: "Villa Gake cocok untuk keluarga atau rombongan kecil yang ingin menikmati suasana hutan dengan fasilitas lengkap. Villa ini memiliki 2 kamar tidur, 2 kamar mandi, dapur, ruang keluarga, teras, dan area api unggun untuk momen malam yang hangat.",
      en: "Villa Gake is ideal for families or small groups who want to enjoy a forest stay with complete amenities. It includes 2 bedrooms, 2 bathrooms, a kitchen, family room, terrace, and a campfire area for warm evenings.",
    },
    heroImage: "/images/villa/gake-1.webp",
    images: ["/images/villa/gake-1.webp"],
    capacity: 8,
    bedrooms: 2,
    bathrooms: 2,
    price: 2450000,
    amenities: [
      { id: "2 kamar tidur", en: "2 bedrooms" },
      { id: "2 kamar mandi", en: "2 bathrooms" },
      { id: "dapur", en: "kitchen" },
      { id: "ruang keluarga", en: "family room" },
      { id: "teras", en: "terrace" },
      { id: "spot api unggun", en: "campfire spot" },
    ],
  },
  {
    id: "yama",
    name: "Villa Yama",
    shortDescription: {
      id: "2 kamar tidur, 2 kamar mandi, dapur, ruang keluarga, teras, dan spot api unggun.",
      en: "2 bedrooms, 2 bathrooms, kitchen, family room, terrace, and campfire spot.",
    },
    description: {
      id: "Villa Yama cocok untuk keluarga atau rombongan kecil yang ingin menikmati suasana hutan dengan fasilitas lengkap. Villa ini memiliki 2 kamar tidur, 2 kamar mandi, dapur, ruang keluarga, teras, dan area api unggun untuk momen malam yang hangat.",
      en: "Villa Yama is ideal for families or small groups who want to enjoy a forest stay with complete amenities. It includes 2 bedrooms, 2 bathrooms, a kitchen, family room, terrace, and a campfire area for warm evenings.",
    },
    heroImage: "/images/villa/yama-1.webp",
    images: ["/images/villa/yama-1.jpg"],
    capacity: 8,
    bedrooms: 2,
    bathrooms: 2,
    price: 2450000,
    amenities: [
      { id: "2 kamar tidur", en: "2 bedrooms" },
      { id: "2 kamar mandi", en: "2 bathrooms" },
      { id: "dapur", en: "kitchen" },
      { id: "ruang keluarga", en: "family room" },
      { id: "teras", en: "terrace" },
      { id: "spot api unggun", en: "campfire spot" },
    ],
  },
  {
    id: "hana",
    name: "Villa Hana",
    shortDescription: {
      id: "1 kamar tidur, 1 kamar mandi, dapur, ruang keluarga, teras, dan spot api unggun.",
      en: "1 bedroom, 1 bathroom, kitchen, family room, terrace, and campfire spot.",
    },
    description: {
      id: "Villa Hana cocok untuk keluarga atau rombongan kecil yang ingin menikmati suasana hutan dengan fasilitas lengkap. Villa ini memiliki 1 kamar tidur, 1 kamar mandi, dapur, ruang keluarga, teras, dan area api unggun untuk momen malam yang hangat.",
      en: "Villa Hana is ideal for families or small groups who want to enjoy a forest stay with complete amenities. It includes 1 bedroom, 1 bathroom, a kitchen, family room, terrace, and a campfire area for warm evenings.",
    },
    heroImage: "/images/villa/hana-1.jpg",
    images: ["/images/villa/hana-1.jpg"],
    capacity: 4,
    bedrooms: 1,
    bathrooms: 1,
    price: 1750000,
    amenities: [
      { id: "1 kamar tidur", en: "1 bedroom" },
      { id: "1 kamar mandi", en: "1 bathroom" },
      { id: "dapur", en: "kitchen" },
      { id: "ruang keluarga", en: "family room" },
      { id: "teras", en: "terrace" },
      { id: "spot api unggun", en: "campfire spot" },
    ],
  },
  {
    id: "mori",
    name: "Villa Mori",
    shortDescription: {
      id: "1 kamar tidur, 1 kamar mandi, dapur, ruang keluarga, teras, dan spot api unggun.",
      en: "1 bedroom, 1 bathroom, kitchen, family room, terrace, and campfire spot.",
    },
    description: {
      id: "Villa Hana cocok untuk keluarga atau rombongan kecil yang ingin menikmati suasana hutan dengan fasilitas lengkap. Villa ini memiliki 1 kamar tidur, 1 kamar mandi, dapur, ruang keluarga, teras, dan area api unggun untuk momen malam yang hangat.",
      en: "Villa Hana is ideal for families or small groups who want to enjoy a forest stay with complete amenities. It includes 1 bedroom, 1 bathroom, a kitchen, family room, terrace, and a campfire area for warm evenings.",
    },
    heroImage: "/images/villa/mori-1.jpg",
    images: ["/images/villa/mori-1.jpg"],
    capacity: 4,
    bedrooms: 1,
    bathrooms: 1,
    price: 1750000,
    amenities: [
      { id: "1 kamar tidur", en: "1 bedroom" },
      { id: "1 kamar mandi", en: "1 bathroom" },
      { id: "dapur", en: "kitchen" },
      { id: "ruang keluarga", en: "family room" },
      { id: "teras", en: "terrace" },
      { id: "spot api unggun", en: "campfire spot" },
    ],
  },
];

export function getVillaById(id: string): VillaContent | undefined {
  return villas.find((villa) => villa.id === id);
}

export function formatVillaPrice(price: number, locale: Locale): string {
  return new Intl.NumberFormat(locale === "id" ? "id-ID" : "en-US").format(
    price,
  );
}
