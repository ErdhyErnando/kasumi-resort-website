import type { ImageMetadata } from "astro";
import campingPlaceholder from "../assets/camping-placeholder.webp";

export type Locale = "id" | "en";

type LocalizedValue = {
	id: string;
	en: string;
};

/**
 * Sub-area inside a camping category.
 * `spots` uses the exact bookable unit names from the live availability API
 * (availability.kasumiresort.com), so guests always find the same names
 * when checking availability.
 */
export interface CampingArea {
	/** Anchor slug for index → detail deep links (`/camping/<cat>#<areaId>`). */
	id: string;
	/** Display name (proper noun, same in both locales). */
	name: string;
	spots: string[];
}

export interface CampingContent {
	id: string;
	tabLabel: LocalizedValue;
	name: LocalizedValue;
	tagline: LocalizedValue;
	description: LocalizedValue;
	/** Placeholder art until real zone photos are available — swap per-category imports when assets land. */
	/** Imported image metadata keeps camping media in Astro's asset pipeline. */
	heroImage: ImageMetadata;
	gallery: ImageMetadata[];
	areas: CampingArea[];
	/**
	 * Pricing is dynamic (per-person rates confirmed with management).
	 * No fixed nightly price is shown on camping pages for now —
	 * pages render `pricingNote` and point guests to WhatsApp instead.
	 */
	pricingNote: LocalizedValue;
	amenities: LocalizedValue[];
	perfectFor: LocalizedValue[];
}

/** Interim hero/gallery art while category photos are pending. */
const CAMPING_PLACEHOLDER = campingPlaceholder;

const DYNAMIC_PRICING_NOTE: LocalizedValue = {
	id: "Harga dinamis mengikuti jumlah tamu — konfirmasi ketersediaan dan harga via WhatsApp.",
	en: "Dynamic pricing based on guest count — confirm availability and rates via WhatsApp.",
};

const BASE_AMENITIES = {
	toilet: { id: "akses toilet", en: "bathroom access" },
	electricity: { id: "listrik", en: "electricity" },
	campfire: { id: "api unggun", en: "campfire area" },
	parking: { id: "parkir dekat area", en: "nearby parking" },
	communal: { id: "ruang komunal", en: "communal space" },
} satisfies Record<string, LocalizedValue>;

/**
 * Shared camping data source for ID/EN pages.
 * 5 categories matching the live availability unit table
 * (Riverside / Campervan Land / Deck / Valley / Sengon),
 * covering all 79 bookable campsites.
 */
export const campings: CampingContent[] = [
	{
		id: "riverside",
		tabLabel: { id: "Riverside", en: "Riverside" },
		name: { id: "Riverside Camp", en: "Riverside Camp" },
		tagline: {
			id: "Tidur ditemani gemericik sungai, bangun dengan udara pegunungan.",
			en: "Fall asleep to the river stream, wake up to mountain air.",
		},
		description: {
			id: "Kategori Riverside menghimpun 15 spot di lima area tepi aliran sungai — Cemara, Kiara, Mindi, Kisampang, dan Baros Riverside. Suara air yang mengalir jadi latar alami untuk tidur nyenyak, sementara lokasinya tetap dekat fasilitas utama resort sehingga nyaman untuk keluarga.",
			en: "The Riverside category gathers 15 pitches across five riverside areas — Cemara, Kiara, Mindi, Kisampang, and Baros Riverside. Flowing water sets a natural backdrop for deep sleep, while the location stays close to the resort's main facilities for family comfort.",
		},
		heroImage: CAMPING_PLACEHOLDER,
		gallery: [CAMPING_PLACEHOLDER],
		areas: [
			{
				id: "cemara-riverside",
				name: "Cemara Riverside",
				spots: [
					"Cemara Riverside 1",
					"Cemara Riverside 2",
					"Cemara Riverside 3",
					"Cemara Riverside 4",
					"Cemara Riverside 5",
				],
			},
			{
				id: "kiara-riverside",
				name: "Kiara Riverside",
				spots: ["Kiara Riverside 1", "Kiara Riverside 2"],
			},
			{
				id: "mindi-riverside",
				name: "Mindi Riverside",
				spots: ["Mindi Riverside 1", "Mindi Riverside 2", "Mindi Riverside 3"],
			},
			{
				id: "kisampang-riverside",
				name: "Kisampang Riverside",
				spots: [
					"Kisampang Riverside 1",
					"Kisampang Riverside 2",
					"Kisampang Riverside 3",
				],
			},
			{
				id: "baros-riverside",
				name: "Baros Riverside",
				spots: ["Baros Riverside 1", "Baros Riverside 2"],
			},
		],
		pricingNote: DYNAMIC_PRICING_NOTE,
		amenities: [
			{ id: "dekat aliran sungai", en: "near the river stream" },
			BASE_AMENITIES.toilet,
			BASE_AMENITIES.electricity,
			BASE_AMENITIES.campfire,
			BASE_AMENITIES.communal,
		],
		perfectFor: [
			{ id: "trip camping keluarga", en: "family camping trips" },
			{ id: "pecinta suara alam", en: "nature-sound lovers" },
			{ id: "campers & overlanders", en: "campervan travelers" },
			{ id: "foto dan konten alam", en: "nature photography" },
		],
	},
	{
		id: "campervan-land",
		tabLabel: { id: "Campervan Land", en: "Campervan Land" },
		name: { id: "Campervan Land", en: "Campervan Land" },
		tagline: {
			id: "Parkir di samping tenda — rumah berjalanmu ikut menginap.",
			en: "Park beside your tent — your rolling home stays over too.",
		},
		description: {
			id: "Kategori Campervan Land adalah yang terbesar: 39 spot di sebelas area — Kuray, Puspa, Rasamala, Damar, Saninten, Kadaka, Kisampang, Kecubung, Khiyang, Calik Angin, dan Sungke. Dirancang untuk campervan dan overlanders dengan akses kendaraan yang mudah dan parkir dekat area tenda, sekaligus tetap nyaman untuk tenda biasa dan rombongan besar.",
			en: "The Campervan Land category is the largest: 39 pitches across eleven areas — Kuray, Puspa, Rasamala, Damar, Saninten, Kadaka, Kisampang, Kecubung, Khiyang, Calik Angin, and Sungke. Built for campervans and overlanders with easy vehicle access and parking near the tents, while staying comfortable for regular tents and large groups.",
		},
		heroImage: CAMPING_PLACEHOLDER,
		gallery: [CAMPING_PLACEHOLDER],
		areas: [
			{
				id: "kuray",
				name: "Kuray Campervan Land",
				spots: [
					"Kuray Campervan Land 1",
					"Kuray Campervan Land 2",
					"Kuray Campervan Land 3",
					"Kuray Campervan Land 4",
					"Kuray Campervan Land 5",
					"Kuray Campervan Land 6",
					"Kuray Campervan Land 7",
					"Kuray Campervan Land 8",
				],
			},
			{
				id: "puspa",
				name: "Puspa Campervan Land",
				spots: [
					"Puspa Campervan Land 1",
					"Puspa Campervan Land 2",
					"Puspa Campervan Land 3",
					"Puspa Campervan Land 4",
					"Puspa Campervan Land 5",
					"Puspa Campervan Land 6",
					"Puspa Campervan Land 7",
					"Puspa Campervan Land 8",
					"Puspa Campervan Land 9",
					"Puspa Campervan Land 10",
				],
			},
			{
				id: "rasamala",
				name: "Rasamala Campervan Land",
				spots: ["Rasamala Campervan Land 1", "Rasamala Campervan Land 2"],
			},
			{
				id: "damar",
				name: "Damar Campervan Land",
				spots: ["Damar Campervan Land"],
			},
			{
				id: "saninten",
				name: "Saninten Campervan Land",
				spots: ["Saninten Campervan Land"],
			},
			{
				id: "kadaka",
				name: "Kadaka Campervan Land",
				spots: ["Kadaka Campervan Land 1", "Kadaka Campervan Land 2"],
			},
			{
				id: "kisampang",
				name: "Kisampang Campervan Land",
				spots: [
					"Kisampang Campervan Land 1",
					"Kisampang Campervan Land 2",
					"Kisampang Campervan Land 3",
					"Kisampang Campervan Land 4",
					"Kisampang Campervan Land 5",
				],
			},
			{
				id: "kecubung",
				name: "Kecubung Campervan Land",
				spots: ["Kecubung Campervan Land 1", "Kecubung Campervan Land 2"],
			},
			{
				id: "khiyang",
				name: "Khiyang Campervan Land",
				spots: [
					"Khiyang Campervan Land 1",
					"Khiyang Campervan Land 2",
					"Khiyang Campervan Land 3",
					"Khiyang Campervan Land 4",
					"Khiyang Campervan Land 5",
				],
			},
			{
				id: "calik-angin",
				name: "Calik Angin Campervan Land",
				spots: ["Calik Angin Campervan Land 1", "Calik Angin Campervan Land 2"],
			},
			{
				id: "sungke",
				name: "Sungke Campervan Land",
				spots: ["Sungke Campervan Land"],
			},
		],
		pricingNote: DYNAMIC_PRICING_NOTE,
		amenities: [
			{ id: "akses kendaraan mudah", en: "easy vehicle access" },
			{ id: "parkir dekat tenda", en: "parking near the tents" },
			BASE_AMENITIES.toilet,
			BASE_AMENITIES.electricity,
			BASE_AMENITIES.communal,
		],
		perfectFor: [
			{ id: "campers & overlanders", en: "campervan travelers" },
			{ id: "komunitas outdoor", en: "outdoor communities" },
			{ id: "rombongan besar", en: "larger groups" },
			{ id: "jambore & gathering", en: "jamborees & gatherings" },
		],
	},
	{
		id: "deck",
		tabLabel: { id: "Deck", en: "Deck" },
		name: { id: "Deck Valley & Hill", en: "Deck Valley & Hill" },
		tagline: {
			id: "Dek kayu menghadap lembah — camping naik kelas.",
			en: "Wooden decks facing the valley — camping, upgraded.",
		},
		description: {
			id: "Kategori Deck menawarkan pengalaman camping naik kelas: 7 dek kayu yang rata di Basil Deck Valley (3 spot) dan Sage Deck Hill (4 spot). Bangun pagi langsung disambut kabut dan panorama lembah sejauh mata memandang — favorit untuk golden hour, stargazing, dan momen romantis di alam.",
			en: "The Deck category offers an upgraded camping experience: 7 level wooden decks at Basil Deck Valley (3 pitches) and Sage Deck Hill (4 pitches). Wake up to mist and valley panoramas as far as the eye can see — a favorite for golden hour, stargazing, and romantic moments outdoors.",
		},
		heroImage: CAMPING_PLACEHOLDER,
		gallery: [CAMPING_PLACEHOLDER],
		areas: [
			{
				id: "basil-deck-valley",
				name: "Basil Deck Valley",
				spots: [
					"Basil Deck Valley 1",
					"Basil Deck Valley 2",
					"Basil Deck Valley 3",
				],
			},
			{
				id: "sage-deck-hill",
				name: "Sage Deck Hill",
				spots: [
					"Sage Deck Hill 1",
					"Sage Deck Hill 2",
					"Sage Deck Hill 3",
					"Sage Deck Hill 4",
				],
			},
		],
		pricingNote: DYNAMIC_PRICING_NOTE,
		amenities: [
			{ id: "dek kayu", en: "wooden deck" },
			{ id: "view lembah", en: "valley view" },
			{ id: "spot sunrise", en: "sunrise spot" },
			BASE_AMENITIES.toilet,
			BASE_AMENITIES.electricity,
		],
		perfectFor: [
			{ id: "glamping santai", en: "relaxed glamping" },
			{ id: "pecinta sunrise", en: "sunrise lovers" },
			{ id: "stargazing", en: "stargazing" },
			{ id: "momen romantis", en: "romantic moments" },
		],
	},
	{
		id: "valley",
		tabLabel: { id: "Valley", en: "Valley" },
		name: { id: "Valley Camp", en: "Valley Camp" },
		tagline: {
			id: "Berkemah di antara kebun rempah dan hamparan hijau.",
			en: "Camp among spice gardens and green expanses.",
		},
		description: {
			id: "Kategori Valley menghimpun 17 spot di enam area — Pala, Bunga Lawang, Sereh, Cengkeh, Kapu Laga, dan Rimpang Valley. Dikelilingi pepohonan rempah yang aromatik dan hamparan hijau yang asri, suasananya homey seperti berkemah di kebun sendiri — seimbang untuk istirahat maupun kumpul bersama.",
			en: "The Valley category gathers 17 pitches across six areas — Pala, Bunga Lawang, Sereh, Cengkeh, Kapu Laga, and Rimpang Valley. Surrounded by aromatic spice trees and lush greenery, the vibe feels homey like camping in your own garden — balanced for both rest and gathering.",
		},
		heroImage: CAMPING_PLACEHOLDER,
		gallery: [CAMPING_PLACEHOLDER],
		areas: [
			{
				id: "pala-valley",
				name: "Pala Valley",
				spots: ["Pala Valley 1", "Pala Valley 2", "Pala Valley 3"],
			},
			{
				id: "bunga-lawang-valley",
				name: "Bunga Lawang Valley",
				spots: ["Bunga Lawang Valley 1", "Bunga Lawang Valley 2"],
			},
			{
				id: "sereh-valley",
				name: "Sereh Valley",
				spots: ["Sereh Valley 1", "Sereh Valley 2", "Sereh Valley 3"],
			},
			{
				id: "cengkeh-valley",
				name: "Cengkeh Valley",
				spots: ["Cengkeh Valley 1", "Cengkeh Valley 2", "Cengkeh Valley 3"],
			},
			{
				id: "kapu-laga-valley",
				name: "Kapu Laga Valley",
				spots: [
					"Kapu Laga Valley 1",
					"Kapu Laga Valley 2",
					"Kapu Laga Valley 3",
				],
			},
			{
				id: "rimpang-valley",
				name: "Rimpang Valley",
				spots: ["Rimpang Valley 1", "Rimpang Valley 2", "Rimpang Valley 3"],
			},
		],
		pricingNote: DYNAMIC_PRICING_NOTE,
		amenities: [
			{ id: "kebun rempah", en: "spice gardens" },
			{ id: "area hijau asri", en: "lush green area" },
			BASE_AMENITIES.toilet,
			BASE_AMENITIES.electricity,
			BASE_AMENITIES.campfire,
		],
		perfectFor: [
			{ id: "camping keluarga", en: "family camping" },
			{ id: "pecinta alam", en: "nature lovers" },
			{ id: "keluarga dengan anak", en: "families with kids" },
			{ id: "foto dan konten alam", en: "nature photography" },
		],
	},
	{
		id: "sengon",
		tabLabel: { id: "Sengon", en: "Sengon" },
		name: { id: "Spot Sengon", en: "Spot Sengon" },
		tagline: {
			id: "Satu spot tunggal di bawah pohon sengon yang rindang.",
			en: "A single pitch beneath a shady sengon tree.",
		},
		description: {
			id: "Spot Sengon adalah satu-satunya spot di kategorinya — privasi maksimal untuk satu rombongan tanpa gangguan. Pohon sengon yang rindang membuat udara sejuk sepanjang hari, cocok untuk solo camper, pasangan, atau siapa pun yang mencari ketenangan total di alam.",
			en: "Spot Sengon is the only pitch in its category — maximum privacy for one group with no disturbances. The shady sengon tree keeps the air cool all day, suiting solo campers, couples, or anyone seeking total quiet in nature.",
		},
		heroImage: CAMPING_PLACEHOLDER,
		gallery: [CAMPING_PLACEHOLDER],
		areas: [
			{
				id: "spot-sengon",
				name: "Spot Sengon",
				spots: ["Spot Sengon"],
			},
		],
		pricingNote: DYNAMIC_PRICING_NOTE,
		amenities: [
			{ id: "privasi maksimal", en: "maximum privacy" },
			{ id: "naungan pohon sengon", en: "sengon tree shade" },
			BASE_AMENITIES.toilet,
			BASE_AMENITIES.electricity,
			BASE_AMENITIES.campfire,
		],
		perfectFor: [
			{ id: "solo camper", en: "solo campers" },
			{ id: "pasangan", en: "couples" },
			{ id: "me time di alam", en: "alone time in nature" },
			{ id: "retreat ringan", en: "light retreats" },
		],
	},
];

export function getCampingById(id: string): CampingContent | undefined {
	return campings.find((camping) => camping.id === id);
}

export interface CampingAreaResult {
	camping: CampingContent;
	area: CampingArea;
}

/** Find an individual area (e.g. `cemara-riverside`) across all categories. */
export function getCampingAreaById(areaId: string): CampingAreaResult | undefined {
	for (const camping of campings) {
		const area = camping.areas.find((item) => item.id === areaId);
		if (area) return { camping, area };
	}
	return undefined;
}

/** Flat list of all individual areas with their parent category — used for index carousel + static paths. */
export function getAllCampingAreas(): CampingAreaResult[] {
	return campings.flatMap((camping) =>
		camping.areas.map((area) => ({ camping, area })),
	);
}

/** Total bookable spots inside a category (sum of its areas). */
export function campingSpotsCount(camping: CampingContent): number {
	return camping.areas.reduce((total, area) => total + area.spots.length, 0);
}
