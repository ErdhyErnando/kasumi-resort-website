import type { ImageMetadata } from "astro";

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
	/** Imported image — enables Astro image optimization (srcset/formats). */
	heroImage: ImageMetadata;
	images: ImageMetadata[];
	capacity: number;
	bedrooms: number;
	bathrooms: number;
	price: number;
	amenities: LocalizedValue[];
}

import gake1 from "../assets/villa/gake-1.webp";
import gake2 from "../assets/villa/gake-2.webp";
import gake3 from "../assets/villa/gake-3.webp";
import gake4 from "../assets/villa/gake-4.webp";
import gake5 from "../assets/villa/gake-5.webp";
import hana1 from "../assets/villa/hana-1.webp";
import hana2 from "../assets/villa/hana-2.webp";
import hana3 from "../assets/villa/hana-3.webp";
import hana4 from "../assets/villa/hana-4.webp";
import kawa1 from "../assets/villa/kawa-1.webp";
import kawa2 from "../assets/villa/kawa-2.webp";
import kawa3 from "../assets/villa/kawa-3.webp";
import kawa4 from "../assets/villa/kawa-4.webp";
import kawa5 from "../assets/villa/kawa-5.webp";
import koeda1 from "../assets/villa/koeda-1.webp";
import koeda2 from "../assets/villa/koeda-2.webp";
import koeda3 from "../assets/villa/koeda-3.webp";
import koeda4 from "../assets/villa/koeda-4.webp";
import koeda5 from "../assets/villa/koeda-5.webp";
// ESM image imports (optimized at build time by astro:assets)
import oka1 from "../assets/villa/oka-1.webp";
import oka2 from "../assets/villa/oka-2.webp";
import oka3 from "../assets/villa/oka-3.webp";
import oka4 from "../assets/villa/oka-4.webp";
import oka5 from "../assets/villa/oka-5.webp";
import sora1 from "../assets/villa/sora-1.webp";
import sora2 from "../assets/villa/sora-2.webp";
import sora3 from "../assets/villa/sora-3.webp";
import sora4 from "../assets/villa/sora-4.webp";
import sora5 from "../assets/villa/sora-5.webp";
import tani1 from "../assets/villa/tani-1.webp";
import tani2 from "../assets/villa/tani-2.webp";
import tani3 from "../assets/villa/tani-3.webp";
import tani4 from "../assets/villa/tani-4.webp";
import tani5 from "../assets/villa/tani-5.webp";

/**
 * Shared villa data source for ID/EN pages.
 * Add the next villas by appending objects to this array.
 */
export const villas: VillaContent[] = [
	{
		id: "oka",
		name: "Villa Oka",
		shortDescription: {
			id: "Studio dengan 1 twin bed dan 1 single bed, dapur, kamar mandi, dan teras.",
			en: "Studio with 1 twin bed and 1 single bed, kitchen, bathroom, and terrace.",
		},
		description: {
			id: "Villa Oka adalah pilihan sempurna untuk pasangan atau traveler solo yang mencari akomodasi nyaman dengan sentuhan alam. Studio ini dilengkapi dengan 1 twin bed dan 1 single bed, memberikan fleksibilitas untuk berbagai kebutuhan tamu. Fasilitas lengkap mencakup dapur fungsional, kamar mandi pribadi, dan teras yang menghadap ke pemandangan alam sekitar. Cocok untuk liburan singkat atau istirahat di tengah kesibukan.",
			en: "Villa Oka is the perfect choice for couples or solo travelers seeking comfortable accommodation surrounded by nature's beauty. This studio features 1 twin bed and 1 single bed, offering flexibility for various guest needs. Complete amenities include a functional kitchen, private bathroom, and a terrace overlooking the natural surroundings. Ideal for short getaways or a peaceful retreat.",
		},
		heroImage: oka1,
		images: [oka1, oka2, oka3, oka4, oka5],
		capacity: 2,
		bedrooms: 1,
		bathrooms: 1,
		price: 1300000,
		amenities: [
			{ id: "1 twin bed dan 1 single bed", en: "1 twin bed and 1 single bed" },
			{ id: "Dapur", en: "Kitchen" },
			{ id: "Kamar mandi pribadi", en: "Private bathroom" },
			{ id: "Teras", en: "Terrace" },
		],
	},
	{
		id: "sora",
		name: "Villa Sora",
		shortDescription: {
			id: "Studio dengan 1 twin bed dan 1 single bed, dapur, kamar mandi, dan teras.",
			en: "Studio with 1 twin bed and 1 single bed, kitchen, bathroom, and terrace.",
		},
		description: {
			id: "Villa Sora menghadirkan pengalaman menginap yang hangat dan intim di tengah hutan tropis Cidahu. Dengan desain studio yang efisien, villa ini menawarkan 1 twin bed dan 1 single bed untuk kenyamanan maksimal. Dilengkapi dapur modern, kamar mandi lengkap, dan teras yang ideal untuk bersantai sambil menikmati udara segar pegunungan. Sempurna untuk pasangan muda atau tamu yang menghargai privasi dan kemudahan.",
			en: "Villa Sora offers a warm and intimate stay experience in the heart of Cidahu's tropical forest. With an efficient studio design, it features 1 twin bed and 1 single bed for maximum comfort. Equipped with a modern kitchen, complete bathroom, and a terrace perfect for relaxing while enjoying fresh mountain air. Perfect for young couples or guests who value privacy and convenience.",
		},
		heroImage: sora1,
		images: [sora1, sora2, sora3, sora4, sora5],
		capacity: 2,
		bedrooms: 1,
		bathrooms: 1,
		price: 1300000,
		amenities: [
			{ id: "1 twin bed dan 1 single bed", en: "1 twin bed and 1 single bed" },
			{ id: "Dapur", en: "Kitchen" },
			{ id: "Kamar mandi pribadi", en: "Private bathroom" },
			{ id: "Teras", en: "Terrace" },
		],
	},
	{
		id: "tani",
		name: "Villa Tani",
		shortDescription: {
			id: "Studio dengan 1 twin bed dan 1 single bed, dapur, kamar mandi, dan teras.",
			en: "Studio with 1 twin bed and 1 single bed, kitchen, bathroom, and terrace.",
		},
		description: {
			id: "Villa Tani adalah studio yang dirancang khusus untuk memberikan kenyamanan dan kepraktisan bagi tamu yang menginginkan istirahat yang berkualitas. Dengan 1 twin bed dan 1 single bed, tamu memiliki pilihan tempat tidur yang fleksibel. Fasilitas meliputi dapur yang lengkap untuk menyiapkan makanan ringan, kamar mandi modern, dan teras yang sempurna untuk menikmati ketenangan alam Kasumi Resort.",
			en: "Villa Tani is a studio specially designed to provide comfort and practicality for guests seeking quality rest. With 1 twin bed and 1 single bed, guests have flexible bedding options. Facilities include a complete kitchen for light meals, modern bathroom, and a terrace perfect for enjoying the tranquility of Kasumi Resort's natural surroundings.",
		},
		heroImage: tani1,
		images: [tani1, tani2, tani3, tani4, tani5],
		capacity: 2,
		bedrooms: 1,
		bathrooms: 1,
		price: 1300000,
		amenities: [
			{ id: "1 twin bed dan 1 single bed", en: "1 twin bed and 1 single bed" },
			{ id: "Dapur", en: "Kitchen" },
			{ id: "Kamar mandi pribadi", en: "Private bathroom" },
			{ id: "Teras", en: "Terrace" },
		],
	},
	{
		id: "gake",
		name: "Villa Gake",
		shortDescription: {
			id: "2 kamar tidur, 2 kamar mandi, dapur, ruang keluarga, teras. Bisa sampai 8 orang dengan extra bed.",
			en: "2 bedrooms, 2 bathrooms, kitchen, family room, terrace. Accommodates up to 8 with extra beds.",
		},
		description: {
			id: "Villa Gake adalah pilihan utama untuk keluarga besar atau rombongan yang menginginkan ruang luas dengan fasilitas premium. Dirancang dengan konsep tingkat (2 level), villa ini memberikan privasi maksimal dengan 2 kamar tidur dan 2 kamar mandi yang lengkap. Ruang keluarga yang nyaman, dapur fungsional, dan teras luas menjadi tempat berkumpul yang ideal. Dengan opsi menambah extra bed, kapasitas dapat meningkat hingga 8 orang. Sempurna untuk liburan keluarga yang berkesan.",
			en: "Villa Gake is the premier choice for large families or groups seeking spacious accommodation with premium facilities. Designed with a 2-level concept, this villa offers maximum privacy with 2 well-appointed bedrooms and 2 bathrooms. A comfortable family room, functional kitchen, and expansive terrace create the ideal gathering space. With the option to add extra beds, capacity can reach up to 8 people. Perfect for memorable family vacations.",
		},
		heroImage: gake1,
		images: [gake1, gake2, gake3, gake4, gake5],
		capacity: 8,
		bedrooms: 2,
		bathrooms: 2,
		price: 2450000,
		amenities: [
			{ id: "2 kamar tidur", en: "2 bedrooms" },
			{ id: "2 kamar mandi", en: "2 bathrooms" },
			{ id: "Dapur", en: "Kitchen" },
			{ id: "Ruang keluarga", en: "Family room" },
			{ id: "Teras luas", en: "Spacious terrace" },
			{ id: "Extra bed tersedia", en: "Extra beds available" },
			{ id: "Desain tingkat (2 level)", en: "2-level design" },
		],
	},
	{
		id: "koeda",
		name: "Villa Koeda",
		shortDescription: {
			id: "2 kamar tidur, 2 kamar mandi, dapur, ruang keluarga, teras. Bisa sampai 8 orang dengan extra bed.",
			en: "2 bedrooms, 2 bathrooms, kitchen, family room, terrace. Accommodates up to 8 with extra beds.",
		},
		description: {
			id: "Villa Koeda menawarkan kemewahan dan kenyamanan yang setara dengan Villa Gake, dengan desain tingkat yang memaksimalkan ruang dan privasi. Dilengkapi 2 kamar tidur yang nyaman, 2 kamar mandi modern, ruang keluarga yang luas, dan dapur yang siap untuk memasak. Teras menghadap ke pemandangan hijau menjadi lokasi sempurna untuk bersantai bersama keluarga. Dengan kemampuan menambah extra bed hingga 8 orang, villa ini ideal untuk grup besar atau keluarga extended yang ingin menikmati quality time bersama.",
			en: "Villa Koeda offers luxury and comfort comparable to Villa Gake, with a 2-level design that maximizes space and privacy. Equipped with 2 comfortable bedrooms, 2 modern bathrooms, a spacious family room, and a fully-equipped kitchen. The terrace overlooking lush greenery is the perfect spot to relax with family. With the ability to accommodate up to 8 people with extra beds, this villa is ideal for large groups or extended families wanting to enjoy quality time together.",
		},
		heroImage: koeda1,
		images: [koeda1, koeda2, koeda3, koeda4, koeda5],
		capacity: 8,
		bedrooms: 2,
		bathrooms: 2,
		price: 2450000,
		amenities: [
			{ id: "2 kamar tidur", en: "2 bedrooms" },
			{ id: "2 kamar mandi", en: "2 bathrooms" },
			{ id: "Dapur", en: "Kitchen" },
			{ id: "Ruang keluarga", en: "Family room" },
			{ id: "Teras luas", en: "Spacious terrace" },
			{ id: "Extra bed tersedia", en: "Extra beds available" },
			{ id: "Desain tingkat (2 level)", en: "2-level design" },
		],
	},
	{
		id: "kawa",
		name: "Villa Kawa",
		shortDescription: {
			id: "2 kamar tidur, 2 kamar mandi, dapur, ruang keluarga, teras. Bisa sampai 8 orang dengan extra bed.",
			en: "2 bedrooms, 2 bathrooms, kitchen, family room, terrace. Accommodates up to 8 with extra beds.",
		},
		description: {
			id: "Villa Kawa adalah villa 2 kamar dengan desain single-level yang memberikan kemudahan akses dan mobilitas untuk semua tamu. Meskipun tidak bertingkat seperti Gake dan Koeda, villa ini tetap menawarkan ruang yang luas dan fasilitas lengkap dengan 2 kamar tidur, 2 kamar mandi modern, dapur, ruang keluarga yang nyaman, dan teras yang mengundang. Cocok untuk keluarga yang menghargai desain terbuka dan kemudahan bergerak. Dengan tambahan extra bed, dapat menampung hingga 8 orang dan menjadi pilihan sempurna untuk grup atau keluarga besar.",
			en: "Villa Kawa is a 2-bedroom villa with a single-level design that provides easy access and mobility for all guests. While not multi-level like Gake and Koeda, this villa still offers spacious rooms and complete facilities with 2 bedrooms, 2 modern bathrooms, kitchen, comfortable family room, and an inviting terrace. Ideal for families who appreciate open design and ease of movement. With additional extra beds, it can accommodate up to 8 people and serves as the perfect choice for groups or large families.",
		},
		heroImage: kawa1,
		images: [kawa1, kawa2, kawa3, kawa4, kawa5],
		capacity: 8,
		bedrooms: 2,
		bathrooms: 2,
		price: 2450000,
		amenities: [
			{ id: "2 kamar tidur", en: "2 bedrooms" },
			{ id: "2 kamar mandi", en: "2 bathrooms" },
			{ id: "Dapur", en: "Kitchen" },
			{ id: "Ruang keluarga", en: "Family room" },
			{ id: "Teras luas", en: "Spacious terrace" },
			{ id: "Extra bed tersedia", en: "Extra beds available" },
			{ id: "Desain single-level", en: "Single-level design" },
		],
	},
	{
		id: "hana",
		name: "Villa Hana",
		shortDescription: {
			id: "1 kamar tidur, 1 kamar mandi, dapur. Akomodasi intim untuk pasangan atau individu.",
			en: "1 bedroom, 1 bathroom, kitchen. Intimate accommodation for couples or individuals.",
		},
		description: {
			id: "Villa Hana adalah solusi sempurna untuk traveler yang menginginkan akomodasi pribadi dengan harga terjangkau. Dengan 1 kamar tidur, 1 kamar mandi, dan dapur, villa ini ideal untuk pasangan muda, honeymoon, atau perjalanan bisnis singkat. Meskipun lebih sederhana dari villa lainnya, Hana tetap menawarkan kenyamanan dan privasi yang dibutuhkan untuk istirahat berkualitas. Lokasi yang strategis di tengah alam Kasumi Resort menjadikan villa ini tempat yang tenang dan menenangkan.",
			en: "Villa Hana is the perfect solution for travelers seeking private accommodation at an affordable price. With 1 bedroom, 1 bathroom, and kitchen, it's ideal for young couples, honeymooners, or short business trips. Though simpler than other villas, Hana still offers the comfort and privacy needed for quality rest. Its strategic location in the heart of Kasumi Resort's natural surroundings makes it a peaceful and relaxing retreat.",
		},
		// NOTE: hana-5.webp does not exist in assets (was a 404 before the refactor)
		heroImage: hana1,
		images: [hana1, hana2, hana3, hana4],
		capacity: 2,
		bedrooms: 1,
		bathrooms: 1,
		price: 1300000,
		amenities: [
			{ id: "1 kamar tidur", en: "1 bedroom" },
			{ id: "1 kamar mandi", en: "1 bathroom" },
			{ id: "Dapur", en: "Kitchen" },
			{ id: "Lokasi strategis", en: "Strategic location" },
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
