import type { ImageMetadata } from "astro";
import campingPlaceholder from "../assets/camping-placeholder.webp";

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
	/** Placeholder art until real zone photos are available — swap per-zone imports when assets land. */
	/** Imported image metadata keeps camping media in Astro's asset pipeline. */
	heroImage: ImageMetadata;
	gallery: ImageMetadata[];
	/** Exact bookable spot names in the availability system (rooms.seed.kasumi.json). */
	spots: string[];
	/**
	 * Pricing is dynamic (per-person rates confirmed with management).
	 * No fixed nightly price is shown on camping pages for now —
	 * pages render `pricingNote` and point guests to WhatsApp instead.
	 */
	pricingNote: LocalizedValue;
	amenities: LocalizedValue[];
	perfectFor: LocalizedValue[];
}

/** Interim hero/gallery art while zone photos are pending. */
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
 * 25 zones grouped from the 79 bookable spots in the availability system.
 */
export const campings: CampingContent[] = [
	{
		id: "cemara",
		tabLabel: { id: "Cemara", en: "Cemara" },
		name: { id: "Camping Cemara", en: "Cemara Camp" },
		tagline: {
			id: "Lima spot teduh di bawah rimbun pepohonan cemara.",
			en: "Five shaded pitches beneath tall cemara trees.",
		},
		description: {
			id: "Zona Cemara menaungi spot Cemara 1 sampai 5 — area yang sejuk dan teduh untuk tenda keluarga maupun rombongan. Tanahnya relatif rata sehingga nyaman untuk tenda besar dan aktivitas kelompok di siang hari.",
			en: "Cemara zone covers spots Cemara 1 through 5 — a cool, shaded area for family tents and groups. The ground is mostly level, making it comfortable for larger tents and daytime group activities.",
		},
		heroImage: CAMPING_PLACEHOLDER,
		gallery: [CAMPING_PLACEHOLDER],
		spots: ["Cemara 1", "Cemara 2", "Cemara 3", "Cemara 4", "Cemara 5"],
		pricingNote: DYNAMIC_PRICING_NOTE,
		amenities: [
			{ id: "naungan pepohonan cemara", en: "cemara tree shade" },
			BASE_AMENITIES.toilet,
			BASE_AMENITIES.electricity,
			BASE_AMENITIES.campfire,
			BASE_AMENITIES.parking,
		],
		perfectFor: [
			{ id: "trip camping keluarga", en: "family camping trips" },
			{ id: "rombongan kecil", en: "small groups" },
			{ id: "campers & overlanders", en: "campervan travelers" },
			{ id: "kegiatan sekolah / kantor", en: "school/company gatherings" },
		],
	},
	{
		id: "kiara",
		tabLabel: { id: "Kiara", en: "Kiara" },
		name: { id: "Camping Kiara", en: "Kiara Camp" },
		tagline: {
			id: "Dua spot intim di bawah pohon kiara yang rindang.",
			en: "Two intimate pitches under shady kiara trees.",
		},
		description: {
			id: "Zona Kiara hanya memiliki spot Kiara 1 dan 2, sehingga suasananya lebih tenang dan privat. Cocok untuk pasangan atau kelompok kecil yang ingin menjauh dari keramaian dan menikmati suara hutan.",
			en: "Kiara zone holds just spots Kiara 1 and 2, keeping the atmosphere calm and private. It suits couples or small crews who want to escape the crowds and enjoy forest sounds.",
		},
		heroImage: CAMPING_PLACEHOLDER,
		gallery: [CAMPING_PLACEHOLDER],
		spots: ["Kiara 1", "Kiara 2"],
		pricingNote: DYNAMIC_PRICING_NOTE,
		amenities: [
			{ id: "naungan pepohonan", en: "tree shade" },
			{ id: "privasi lebih", en: "extra privacy" },
			BASE_AMENITIES.toilet,
			BASE_AMENITIES.electricity,
			BASE_AMENITIES.campfire,
		],
		perfectFor: [
			{ id: "pasangan & teman", en: "couples & friends" },
			{ id: "kelompok kecil", en: "small crews" },
			{ id: "malam api unggun", en: "campfire nights" },
			{ id: "retreat ringan", en: "light retreats" },
		],
	},
	{
		id: "mindi",
		tabLabel: { id: "Mindi", en: "Mindi" },
		name: { id: "Camping Mindi", en: "Mindi Camp" },
		tagline: {
			id: "Tiga spot lapang di antara pepohonan mindi.",
			en: "Three open pitches among mindi trees.",
		},
		description: {
			id: "Zona Mindi mencakup spot Mindi 1 sampai 3 dengan ruang yang cukup lega untuk beberapa tenda. Pagi hari terasa segar dengan cahaya matahari yang menembus sela pepohonan.",
			en: "Mindi zone covers spots Mindi 1 through 3 with generous room for several tents. Mornings feel fresh as sunlight filters through the trees.",
		},
		heroImage: CAMPING_PLACEHOLDER,
		gallery: [CAMPING_PLACEHOLDER],
		spots: ["Mindi 1", "Mindi 2", "Mindi 3"],
		pricingNote: DYNAMIC_PRICING_NOTE,
		amenities: [
			{ id: "naungan pepohonan", en: "tree shade" },
			BASE_AMENITIES.toilet,
			BASE_AMENITIES.electricity,
			BASE_AMENITIES.campfire,
			BASE_AMENITIES.parking,
		],
		perfectFor: [
			{ id: "camping keluarga", en: "family camping" },
			{ id: "rombongan kecil", en: "small groups" },
			{ id: "pendaki santai", en: "leisure hikers" },
			{ id: "gathering santai", en: "casual gatherings" },
		],
	},
	{
		id: "kisampang-riverside",
		tabLabel: { id: "Kisampang Riverside", en: "Kisampang Riverside" },
		name: { id: "Kisampang Riverside Camp", en: "Kisampang Riverside Camp" },
		tagline: {
			id: "Berkemah di tepi aliran sungai Kisampang.",
			en: "Camp along the Kisampang riverside flow.",
		},
		description: {
			id: "Zona Kisampang Riverside (spot 1–3) berada dekat aliran sungai — favorit untuk yang ingin tidur ditemani gemericik air. Tetap dekat dengan fasilitas utama resort sehingga nyaman untuk keluarga.",
			en: "Kisampang Riverside zone (spots 1–3) sits near the river stream — a favorite for falling asleep to the sound of flowing water. It stays close to the resort's main facilities, keeping things comfortable for families.",
		},
		heroImage: CAMPING_PLACEHOLDER,
		gallery: [CAMPING_PLACEHOLDER],
		spots: [
			"Kisampang Riverside 1",
			"Kisampang Riverside 2",
			"Kisampang Riverside 3",
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
		id: "baros",
		tabLabel: { id: "Baros", en: "Baros" },
		name: { id: "Camping Baros", en: "Baros Camp" },
		tagline: {
			id: "Dua spot praktis yang dekat dengan akses utama.",
			en: "Two convenient pitches close to main access.",
		},
		description: {
			id: "Zona Baros (spot Baros 1–2) cocok untuk camper yang membawa banyak perlengkapan karena aksesnya mudah. Suasananya tetap asri dengan pepohonan di sekeliling area.",
			en: "Baros zone (spots Baros 1–2) suits campers carrying lots of gear thanks to its easy access. The surroundings stay green with trees around the area.",
		},
		heroImage: CAMPING_PLACEHOLDER,
		gallery: [CAMPING_PLACEHOLDER],
		spots: ["Baros 1", "Baros 2"],
		pricingNote: DYNAMIC_PRICING_NOTE,
		amenities: [
			BASE_AMENITIES.parking,
			BASE_AMENITIES.toilet,
			BASE_AMENITIES.electricity,
			BASE_AMENITIES.campfire,
			{ id: "akses mudah", en: "easy access" },
		],
		perfectFor: [
			{ id: "camper pemula", en: "beginner campers" },
			{ id: "keluarga dengan anak", en: "families with kids" },
			{ id: "singgah singkat", en: "short stopovers" },
			{ id: "rombongan kecil", en: "small groups" },
		],
	},
	{
		id: "bambu",
		tabLabel: { id: "Bambu", en: "Bambu" },
		name: { id: "Camping Bambu", en: "Bambu Camp" },
		tagline: {
			id: "Spot tunggal yang rimbun di antara rumpun bambu.",
			en: "A single lush pitch among bamboo groves.",
		},
		description: {
			id: "Spot Bambu adalah satu-satunya spot di zonanya, menawarkan privasi maksimal di antara rumpun bambu yang rindang. Pilihan tepat untuk solo camper atau pasangan yang mencari ketenangan.",
			en: "Bambu spot is the only pitch in its zone, offering maximum privacy among lush bamboo groves. A great pick for solo campers or couples seeking quiet.",
		},
		heroImage: CAMPING_PLACEHOLDER,
		gallery: [CAMPING_PLACEHOLDER],
		spots: ["Bambu"],
		pricingNote: DYNAMIC_PRICING_NOTE,
		amenities: [
			{ id: "rindang bambu", en: "bamboo shade" },
			{ id: "privasi maksimal", en: "maximum privacy" },
			BASE_AMENITIES.toilet,
			BASE_AMENITIES.electricity,
			BASE_AMENITIES.campfire,
		],
		perfectFor: [
			{ id: "solo camper", en: "solo campers" },
			{ id: "pasangan", en: "couples" },
			{ id: "me time di alam", en: "alone time in nature" },
			{ id: "penulis & pekerja remote", en: "writers & remote workers" },
		],
	},
	{
		id: "kuray",
		tabLabel: { id: "Spot Kuray", en: "Spot Kuray" },
		name: { id: "Spot Kuray", en: "Spot Kuray" },
		tagline: {
			id: "Delapan spot fleksibel untuk grup kecil hingga menengah.",
			en: "Eight flexible pitches for small to mid-size groups.",
		},
		description: {
			id: "Zona Spot Kuray 1–8 adalah salah satu zona terbesar, mudah dibagi untuk beberapa tenda atau digabung untuk gathering. Vegetasinya rapat sehingga setiap spot terasa teduh sepanjang hari.",
			en: "Spot Kuray zone (1–8) is one of the largest, easy to split across several tents or combine for gatherings. Dense vegetation keeps every pitch shaded through the day.",
		},
		heroImage: CAMPING_PLACEHOLDER,
		gallery: [CAMPING_PLACEHOLDER],
		spots: [
			"Spot Kuray 1",
			"Spot Kuray 2",
			"Spot Kuray 3",
			"Spot Kuray 4",
			"Spot Kuray 5",
			"Spot Kuray 6",
			"Spot Kuray 7",
			"Spot Kuray 8",
		],
		pricingNote: DYNAMIC_PRICING_NOTE,
		amenities: [
			{ id: "naungan pepohonan", en: "tree shade" },
			{ id: "area luas", en: "spacious ground" },
			BASE_AMENITIES.toilet,
			BASE_AMENITIES.electricity,
			BASE_AMENITIES.communal,
		],
		perfectFor: [
			{ id: "komunitas outdoor", en: "outdoor communities" },
			{ id: "rombongan menengah", en: "mid-size groups" },
			{ id: "aktivitas kelompok", en: "group activities" },
			{ id: "outing kantor / sekolah", en: "school/company outings" },
		],
	},
	{
		id: "puspa",
		tabLabel: { id: "Spot Puspa", en: "Spot Puspa" },
		name: { id: "Spot Puspa", en: "Spot Puspa" },
		tagline: {
			id: "Sepuluh spot — zona camping terbesar di Kasumi.",
			en: "Ten pitches — the largest camping zone at Kasumi.",
		},
		description: {
			id: "Zona Spot Puspa 1–10 mampu menampung acara besar seperti jambore, gathering komunitas, atau outing perusahaan. Dengan sepuluh spot yang berdekatan, koordinasi rombongan besar jadi jauh lebih mudah.",
			en: "Spot Puspa zone (1–10) can host big events like jamborees, community gatherings, or company outings. With ten adjacent pitches, coordinating large groups is much easier.",
		},
		heroImage: CAMPING_PLACEHOLDER,
		gallery: [CAMPING_PLACEHOLDER],
		spots: [
			"Spot Puspa 1",
			"Spot Puspa 2",
			"Spot Puspa 3",
			"Spot Puspa 4",
			"Spot Puspa 5",
			"Spot Puspa 6",
			"Spot Puspa 7",
			"Spot Puspa 8",
			"Spot Puspa 9",
			"Spot Puspa 10",
		],
		pricingNote: DYNAMIC_PRICING_NOTE,
		amenities: [
			{ id: "area luas", en: "spacious ground" },
			{ id: "area kumpul", en: "group gathering area" },
			BASE_AMENITIES.toilet,
			BASE_AMENITIES.electricity,
			BASE_AMENITIES.parking,
		],
		perfectFor: [
			{ id: "rombongan besar", en: "larger groups" },
			{ id: "jambore & gathering", en: "jamborees & gatherings" },
			{ id: "outing perusahaan", en: "company outings" },
			{ id: "acara komunitas", en: "community events" },
		],
	},
	{
		id: "rasamala",
		tabLabel: { id: "Spot Rasamala", en: "Spot Rasamala" },
		name: { id: "Spot Rasamala", en: "Spot Rasamala" },
		tagline: {
			id: "Dua spot khas di bawah pohon rasamala.",
			en: "Two signature pitches under rasamala trees.",
		},
		description: {
			id: "Zona Spot Rasamala 1–2 berada di bawah pohon rasamala khas kawasan ini — peneduh alami yang membuat udara terasa sejuk. Spot terbatas sehingga disarankan booking lebih awal untuk akhir pekan.",
			en: "Spot Rasamala zone (1–2) sits beneath the area's signature rasamala trees — natural shade that keeps the air cool. Pitches are limited, so booking ahead for weekends is recommended.",
		},
		heroImage: CAMPING_PLACEHOLDER,
		gallery: [CAMPING_PLACEHOLDER],
		spots: ["Spot Rasamala 1", "Spot Rasamala 2"],
		pricingNote: DYNAMIC_PRICING_NOTE,
		amenities: [
			{ id: "naungan pohon rasamala", en: "rasamala tree shade" },
			BASE_AMENITIES.toilet,
			BASE_AMENITIES.electricity,
			BASE_AMENITIES.campfire,
			BASE_AMENITIES.parking,
		],
		perfectFor: [
			{ id: "pecinta alam", en: "nature lovers" },
			{ id: "kelompok kecil", en: "small crews" },
			{ id: "foto dan konten alam", en: "nature photography" },
			{ id: "retreat ringan", en: "light retreats" },
		],
	},
	{
		id: "damar",
		tabLabel: { id: "Spot Damar", en: "Spot Damar" },
		name: { id: "Spot Damar", en: "Spot Damar" },
		tagline: {
			id: "Bukaan luas untuk aktivitas outdoor dan permainan kelompok.",
			en: "Open ground for outdoor games and group activities.",
		},
		description: {
			id: "Spot Damar adalah area tunggal yang lapang — cocok untuk rombongan yang ingin ruang bermain anak, workshop ringan, atau area makan bersama di alam terbuka.",
			en: "Spot Damar is a single spacious pitch — ideal for groups wanting play space for kids, light workshops, or shared outdoor meals.",
		},
		heroImage: CAMPING_PLACEHOLDER,
		gallery: [CAMPING_PLACEHOLDER],
		spots: ["Spot Damar"],
		pricingNote: DYNAMIC_PRICING_NOTE,
		amenities: [
			{ id: "area luas", en: "spacious ground" },
			BASE_AMENITIES.toilet,
			BASE_AMENITIES.electricity,
			BASE_AMENITIES.communal,
			BASE_AMENITIES.parking,
		],
		perfectFor: [
			{ id: "keluarga dengan anak", en: "families with kids" },
			{ id: "aktivitas kelompok", en: "group activities" },
			{ id: "workshop outdoor", en: "outdoor workshops" },
			{ id: "makan bersama", en: "shared meals" },
		],
	},
	{
		id: "saninten",
		tabLabel: { id: "Spot Saninten", en: "Spot Saninten" },
		name: { id: "Spot Saninten", en: "Spot Saninten" },
		tagline: {
			id: "Spot tunggal yang tenang untuk istirahat total.",
			en: "A single quiet pitch for total rest.",
		},
		description: {
			id: "Spot Saninten menawarkan sudut yang lebih privat untuk beristirahat, bercerita di sekitar api unggun, dan tidur nyenyak di malam hari. Satu spot, satu rombongan — tanpa gangguan.",
			en: "Spot Saninten offers a more private corner for resting, campfire stories, and deep sleep at night. One pitch, one group — no disturbances.",
		},
		heroImage: CAMPING_PLACEHOLDER,
		gallery: [CAMPING_PLACEHOLDER],
		spots: ["Spot Saninten"],
		pricingNote: DYNAMIC_PRICING_NOTE,
		amenities: [
			{ id: "privasi lebih", en: "extra privacy" },
			BASE_AMENITIES.toilet,
			BASE_AMENITIES.electricity,
			BASE_AMENITIES.campfire,
			{ id: "area duduk", en: "seating area" },
		],
		perfectFor: [
			{ id: "pasangan & teman", en: "couples & friends" },
			{ id: "malam api unggun", en: "campfire nights" },
			{ id: "me time di alam", en: "alone time in nature" },
			{ id: "retreat ringan", en: "light retreats" },
		],
	},
	{
		id: "kadaka",
		tabLabel: { id: "Spot Kadaka", en: "Spot Kadaka" },
		name: { id: "Spot Kadaka", en: "Spot Kadaka" },
		tagline: {
			id: "Dua spot hijau dikelilingi tanaman kadaka.",
			en: "Two green pitches surrounded by kadaka plants.",
		},
		description: {
			id: "Zona Spot Kadaka 1–2 dikelilingi tanaman kadaka yang membuat suasananya terasa seperti taman hutan. Nyaman untuk camper yang suka suasana hijau dan fotogenik.",
			en: "Spot Kadaka zone (1–2) is surrounded by kadaka plants, giving it a forest-garden feel. Comfortable for campers who love green, photogenic surroundings.",
		},
		heroImage: CAMPING_PLACEHOLDER,
		gallery: [CAMPING_PLACEHOLDER],
		spots: ["Spot Kadaka 1", "Spot Kadaka 2"],
		pricingNote: DYNAMIC_PRICING_NOTE,
		amenities: [
			{ id: "taman hijau", en: "green garden feel" },
			BASE_AMENITIES.toilet,
			BASE_AMENITIES.electricity,
			BASE_AMENITIES.campfire,
			BASE_AMENITIES.parking,
		],
		perfectFor: [
			{ id: "foto dan konten alam", en: "nature photography" },
			{ id: "pasangan & teman", en: "couples & friends" },
			{ id: "kelompok kecil", en: "small crews" },
			{ id: "gathering santai", en: "casual gatherings" },
		],
	},
	{
		id: "sungke",
		tabLabel: { id: "Sungke", en: "Sungke" },
		name: { id: "Camping Sungke", en: "Sungke Camp" },
		tagline: {
			id: "Spot tunggal yang simpel dan mudah dijangkau.",
			en: "A single simple pitch within easy reach.",
		},
		description: {
			id: "Spot Sungke adalah pilihan praktis untuk tenda tunggal — mudah dijangkau dari akses utama dan dekat fasilitas. Ideal untuk camper yang ingin setup cepat dan langsung bersantai.",
			en: "Sungke spot is a practical pick for a single tent — easy to reach from main access and close to facilities. Ideal for campers who want a quick setup and instant relaxation.",
		},
		heroImage: CAMPING_PLACEHOLDER,
		gallery: [CAMPING_PLACEHOLDER],
		spots: ["Sungke"],
		pricingNote: DYNAMIC_PRICING_NOTE,
		amenities: [
			{ id: "akses mudah", en: "easy access" },
			BASE_AMENITIES.toilet,
			BASE_AMENITIES.electricity,
			BASE_AMENITIES.campfire,
			BASE_AMENITIES.parking,
		],
		perfectFor: [
			{ id: "camper pemula", en: "beginner campers" },
			{ id: "singgah singkat", en: "short stopovers" },
			{ id: "solo camper", en: "solo campers" },
			{ id: "pasangan", en: "couples" },
		],
	},
	{
		id: "kisampang-cg2",
		tabLabel: { id: "Kisampang CG2", en: "Kisampang CG2" },
		name: { id: "Kisampang CG2 Camp", en: "Kisampang CG2 Camp" },
		tagline: {
			id: "Lima spot kedua di kawasan Kisampang yang asri.",
			en: "Five more pitches in the lush Kisampang area.",
		},
		description: {
			id: "Zona Kisampang CG2 (spot 1–5) melengkapi kawasan Kisampang dengan lima spot tambahan di area yang sama asrinya. Opsi bagus saat zona riverside penuh, atau untuk memecah rombongan besar ke dua titik berdekatan.",
			en: "Kisampang CG2 zone (spots 1–5) complements the Kisampang area with five extra pitches in equally lush surroundings. A good option when the riverside zone is full, or for splitting a large group across two nearby points.",
		},
		heroImage: CAMPING_PLACEHOLDER,
		gallery: [CAMPING_PLACEHOLDER],
		spots: [
			"Kisampang CG2 1",
			"Kisampang CG2 2",
			"Kisampang CG2 3",
			"Kisampang CG2 4",
			"Kisampang CG2 5",
		],
		pricingNote: DYNAMIC_PRICING_NOTE,
		amenities: [
			{ id: "area hijau asri", en: "lush green area" },
			BASE_AMENITIES.toilet,
			BASE_AMENITIES.electricity,
			BASE_AMENITIES.campfire,
			BASE_AMENITIES.communal,
		],
		perfectFor: [
			{ id: "rombongan menengah", en: "mid-size groups" },
			{ id: "trip camping keluarga", en: "family camping trips" },
			{ id: "komunitas outdoor", en: "outdoor communities" },
			{ id: "campers & overlanders", en: "campervan travelers" },
		],
	},
	{
		id: "kecubung",
		tabLabel: { id: "Spot Kecubung", en: "Spot Kecubung" },
		name: { id: "Spot Kecubung", en: "Spot Kecubung" },
		tagline: {
			id: "Dua spot teduh dengan karakter hutan yang kental.",
			en: "Two shaded pitches with a strong forest character.",
		},
		description: {
			id: "Zona Spot Kecubung 1–2 cocok untuk camper yang mencari nuansa hutan sesungguhnya — rindang, sejuk, dan tenang. Jaraknya yang berdekatan memudahkan koordinasi dua tenda.",
			en: "Spot Kecubung zone (1–2) suits campers seeking a true forest feel — shady, cool, and quiet. The two adjacent pitches make coordinating two tents easy.",
		},
		heroImage: CAMPING_PLACEHOLDER,
		gallery: [CAMPING_PLACEHOLDER],
		spots: ["Spot Kecubung 1", "Spot Kecubung 2"],
		pricingNote: DYNAMIC_PRICING_NOTE,
		amenities: [
			{ id: "naungan pepohonan", en: "tree shade" },
			BASE_AMENITIES.toilet,
			BASE_AMENITIES.electricity,
			BASE_AMENITIES.campfire,
			BASE_AMENITIES.parking,
		],
		perfectFor: [
			{ id: "pecinta alam", en: "nature lovers" },
			{ id: "kelompok kecil", en: "small crews" },
			{ id: "pendaki santai", en: "leisure hikers" },
			{ id: "malam api unggun", en: "campfire nights" },
		],
	},
	{
		id: "khiyang",
		tabLabel: { id: "Spot Khiyang", en: "Spot Khiyang" },
		name: { id: "Spot Khiyang", en: "Spot Khiyang" },
		tagline: {
			id: "Lima spot serbaguna untuk berbagai ukuran rombongan.",
			en: "Five versatile pitches for various group sizes.",
		},
		description: {
			id: "Zona Spot Khiyang 1–5 fleksibel untuk tenda tunggal maupun beberapa tenda sekaligus. Lokasinya nyaman untuk basecamp sebelum trekking atau sekadar kumpul santai di alam.",
			en: "Spot Khiyang zone (1–5) flexes from single tents to multi-tent setups. The location works well as a basecamp before trekking or simply a relaxed nature hangout.",
		},
		heroImage: CAMPING_PLACEHOLDER,
		gallery: [CAMPING_PLACEHOLDER],
		spots: [
			"Spot Khiyang 1",
			"Spot Khiyang 2",
			"Spot Khiyang 3",
			"Spot Khiyang 4",
			"Spot Khiyang 5",
		],
		pricingNote: DYNAMIC_PRICING_NOTE,
		amenities: [
			BASE_AMENITIES.toilet,
			BASE_AMENITIES.electricity,
			BASE_AMENITIES.campfire,
			BASE_AMENITIES.communal,
			BASE_AMENITIES.parking,
		],
		perfectFor: [
			{ id: "basecamp trekking", en: "trekking basecamp" },
			{ id: "rombongan menengah", en: "mid-size groups" },
			{ id: "komunitas outdoor", en: "outdoor communities" },
			{ id: "gathering santai", en: "casual gatherings" },
		],
	},
	{
		id: "calik-angin",
		tabLabel: { id: "Calik Angin", en: "Calik Angin" },
		name: { id: "Calik Angin Camp", en: "Calik Angin Camp" },
		tagline: {
			id: "Dua spot berangin dengan udara pegunungan yang segar.",
			en: "Two breezy pitches with fresh mountain air.",
		},
		description: {
			id: "Zona Calik Angin (spot 1–2) sesuai namanya — area duduk santai yang berangin dengan udara pegunungan yang segar. Nikmati sore dengan duduk santai sambil memandang hamparan hijau.",
			en: "Calik Angin zone (spots 1–2) lives up to its name — a breezy lounging area with fresh mountain air. Spend the afternoon relaxing while overlooking the greenery.",
		},
		heroImage: CAMPING_PLACEHOLDER,
		gallery: [CAMPING_PLACEHOLDER],
		spots: ["Calik Angin 1", "Calik Angin 2"],
		pricingNote: DYNAMIC_PRICING_NOTE,
		amenities: [
			{ id: "udara sejuk berangin", en: "cool breezy air" },
			{ id: "area duduk", en: "seating area" },
			BASE_AMENITIES.toilet,
			BASE_AMENITIES.electricity,
			BASE_AMENITIES.campfire,
		],
		perfectFor: [
			{ id: "santai sore", en: "afternoon chilling" },
			{ id: "pasangan & teman", en: "couples & friends" },
			{ id: "foto dan konten alam", en: "nature photography" },
			{ id: "me time di alam", en: "alone time in nature" },
		],
	},
	{
		id: "rimpang",
		tabLabel: { id: "Spot Rimpang", en: "Spot Rimpang" },
		name: { id: "Spot Rimpang", en: "Spot Rimpang" },
		tagline: {
			id: "Tiga spot asri di sudut hijau Kasumi.",
			en: "Three lush pitches in Kasumi's green corner.",
		},
		description: {
			id: "Zona Spot Rimpang 1–3 berada di sudut hijau yang asri dan relatif tenang. Cocok untuk keluarga atau kelompok kecil yang ingin suasana camping yang adem dan tidak terlalu ramai.",
			en: "Spot Rimpang zone (1–3) sits in a lush, relatively quiet green corner. It fits families or small groups wanting a cool, not-too-crowded camping vibe.",
		},
		heroImage: CAMPING_PLACEHOLDER,
		gallery: [CAMPING_PLACEHOLDER],
		spots: ["Spot Rimpang 1", "Spot Rimpang 2", "Spot Rimpang 3"],
		pricingNote: DYNAMIC_PRICING_NOTE,
		amenities: [
			{ id: "area hijau asri", en: "lush green area" },
			BASE_AMENITIES.toilet,
			BASE_AMENITIES.electricity,
			BASE_AMENITIES.campfire,
			BASE_AMENITIES.parking,
		],
		perfectFor: [
			{ id: "camping keluarga", en: "family camping" },
			{ id: "kelompok kecil", en: "small crews" },
			{ id: "gathering santai", en: "casual gatherings" },
			{ id: "pendaki santai", en: "leisure hikers" },
		],
	},
	{
		id: "kapu-laga",
		tabLabel: { id: "Kapu Laga", en: "Kapu Laga" },
		name: { id: "Kapu Laga Camp", en: "Kapu Laga Camp" },
		tagline: {
			id: "Tiga spot lapang untuk kumpul dan aktivitas bersama.",
			en: "Three open pitches for gathering and shared activities.",
		},
		description: {
			id: "Zona Kapu Laga 1–3 menawarkan ruang yang cukup untuk tenda plus area kumpul di tengah. Seru untuk rombongan yang suka masak bersama, main games, atau sekadar ngobrol sampai malam.",
			en: "Kapu Laga zone (1–3) offers room for tents plus a central hangout area. Fun for groups who love cooking together, playing games, or chatting into the night.",
		},
		heroImage: CAMPING_PLACEHOLDER,
		gallery: [CAMPING_PLACEHOLDER],
		spots: ["Kapu Laga 1", "Kapu Laga 2", "Kapu Laga 3"],
		pricingNote: DYNAMIC_PRICING_NOTE,
		amenities: [
			{ id: "area kumpul", en: "group gathering area" },
			BASE_AMENITIES.toilet,
			BASE_AMENITIES.electricity,
			BASE_AMENITIES.campfire,
			BASE_AMENITIES.communal,
		],
		perfectFor: [
			{ id: "makan bersama", en: "shared meals" },
			{ id: "rombongan kecil", en: "small groups" },
			{ id: "aktivitas kelompok", en: "group activities" },
			{ id: "komunitas outdoor", en: "outdoor communities" },
		],
	},
	{
		id: "cengkeh",
		tabLabel: { id: "Cengkeh", en: "Cengkeh" },
		name: { id: "Camping Cengkeh", en: "Cengkeh Camp" },
		tagline: {
			id: "Tiga spot harum di antara pepohonan cengkeh.",
			en: "Three fragrant pitches among clove trees.",
		},
		description: {
			id: "Zona Cengkeh (spot 1–3) berada di antara pepohonan cengkeh yang memberi aroma khas dan keteduhan alami. Suasananya homey — seperti berkemah di kebun sendiri.",
			en: "Cengkeh zone (spots 1–3) sits among clove trees that give a signature aroma and natural shade. The vibe feels homey — like camping in your own garden.",
		},
		heroImage: CAMPING_PLACEHOLDER,
		gallery: [CAMPING_PLACEHOLDER],
		spots: ["Cengkeh 1", "Cengkeh 2", "Cengkeh 3"],
		pricingNote: DYNAMIC_PRICING_NOTE,
		amenities: [
			{ id: "naungan pohon cengkeh", en: "clove tree shade" },
			BASE_AMENITIES.toilet,
			BASE_AMENITIES.electricity,
			BASE_AMENITIES.campfire,
			BASE_AMENITIES.parking,
		],
		perfectFor: [
			{ id: "camping keluarga", en: "family camping" },
			{ id: "pecinta alam", en: "nature lovers" },
			{ id: "gathering santai", en: "casual gatherings" },
			{ id: "foto dan konten alam", en: "nature photography" },
		],
	},
	{
		id: "sereh",
		tabLabel: { id: "Sereh", en: "Sereh" },
		name: { id: "Camping Sereh", en: "Sereh Camp" },
		tagline: {
			id: "Tiga spot segar di area tanaman sereh.",
			en: "Three fresh pitches in the lemongrass area.",
		},
		description: {
			id: "Zona Sereh (spot 1–3) dikelilingi tanaman sereh yang aromatik dan dikenal membuat nyamuk enggan mendekat. Tidur jadi lebih nyenyak dengan udara segar khas kebun.",
			en: "Sereh zone (spots 1–3) is surrounded by aromatic lemongrass, known to keep mosquitoes away. Sleep more soundly in the garden-fresh air.",
		},
		heroImage: CAMPING_PLACEHOLDER,
		gallery: [CAMPING_PLACEHOLDER],
		spots: ["Sereh 1", "Sereh 2", "Sereh 3"],
		pricingNote: DYNAMIC_PRICING_NOTE,
		amenities: [
			{ id: "area aromatik", en: "aromatic area" },
			BASE_AMENITIES.toilet,
			BASE_AMENITIES.electricity,
			BASE_AMENITIES.campfire,
			BASE_AMENITIES.parking,
		],
		perfectFor: [
			{ id: "keluarga dengan anak", en: "families with kids" },
			{ id: "camping keluarga", en: "family camping" },
			{ id: "pecinta alam", en: "nature lovers" },
			{ id: "tidur nyenyak", en: "restful sleep" },
		],
	},
	{
		id: "bunga-lawang",
		tabLabel: { id: "Bunga Lawang", en: "Bunga Lawang" },
		name: { id: "Camping Bunga Lawang", en: "Bunga Lawang Camp" },
		tagline: {
			id: "Dua spot eksotis di antara pohon bunga lawang.",
			en: "Two exotic pitches among star-anise trees.",
		},
		description: {
			id: "Zona Bunga Lawang (spot 1–2) punya karakter unik dari pepohonan rempah di sekitarnya. Spot terbatas membuatnya terasa eksklusif untuk camper yang suka tempat beda dari biasanya.",
			en: "Bunga Lawang zone (spots 1–2) gets its unique character from surrounding spice trees. Limited pitches make it feel exclusive for campers who like something different.",
		},
		heroImage: CAMPING_PLACEHOLDER,
		gallery: [CAMPING_PLACEHOLDER],
		spots: ["Bunga Lawang 1", "Bunga Lawang 2"],
		pricingNote: DYNAMIC_PRICING_NOTE,
		amenities: [
			{ id: "pepohonan rempah", en: "spice trees" },
			{ id: "privasi lebih", en: "extra privacy" },
			BASE_AMENITIES.toilet,
			BASE_AMENITIES.electricity,
			BASE_AMENITIES.campfire,
		],
		perfectFor: [
			{ id: "pecinta alam", en: "nature lovers" },
			{ id: "pasangan & teman", en: "couples & friends" },
			{ id: "foto dan konten alam", en: "nature photography" },
			{ id: "retreat ringan", en: "light retreats" },
		],
	},
	{
		id: "pala",
		tabLabel: { id: "Pala", en: "Pala" },
		name: { id: "Camping Pala", en: "Pala Camp" },
		tagline: {
			id: "Tiga spot rindang di bawah pohon pala.",
			en: "Three shady pitches under nutmeg trees.",
		},
		description: {
			id: "Zona Pala (spot 1–3) dinaungi pohon pala yang rindang — teduh di siang hari dan syahdu di malam hari. Area yang seimbang untuk istirahat maupun kumpul bersama.",
			en: "Pala zone (spots 1–3) is shaded by nutmeg trees — cool by day and serene by night. A balanced area for both rest and gathering.",
		},
		heroImage: CAMPING_PLACEHOLDER,
		gallery: [CAMPING_PLACEHOLDER],
		spots: ["Pala 1", "Pala 2", "Pala 3"],
		pricingNote: DYNAMIC_PRICING_NOTE,
		amenities: [
			{ id: "naungan pohon pala", en: "nutmeg tree shade" },
			BASE_AMENITIES.toilet,
			BASE_AMENITIES.electricity,
			BASE_AMENITIES.campfire,
			BASE_AMENITIES.communal,
		],
		perfectFor: [
			{ id: "camping keluarga", en: "family camping" },
			{ id: "kelompok kecil", en: "small crews" },
			{ id: "malam api unggun", en: "campfire nights" },
			{ id: "gathering santai", en: "casual gatherings" },
		],
	},
	{
		id: "basil-deck-valley",
		tabLabel: { id: "Basil Deck Valley", en: "Basil Deck Valley" },
		name: { id: "Basil Deck Valley", en: "Basil Deck Valley" },
		tagline: {
			id: "Tiga spot dek kayu menghadap lembah.",
			en: "Three wooden-deck pitches facing the valley.",
		},
		description: {
			id: "Zona Basil Deck Valley (spot 1–3) menawarkan pengalaman camping naik kelas — dek kayu yang rata menghadap panorama lembah. Bangun pagi langsung disambut kabut dan pemandangan hijau sejauh mata memandang.",
			en: "Basil Deck Valley zone (spots 1–3) offers an upgraded camping experience — level wooden decks facing the valley panorama. Wake up to mist and green views as far as the eye can see.",
		},
		heroImage: CAMPING_PLACEHOLDER,
		gallery: [CAMPING_PLACEHOLDER],
		spots: [
			"Basil Deck Valley 1",
			"Basil Deck Valley 2",
			"Basil Deck Valley 3",
		],
		pricingNote: DYNAMIC_PRICING_NOTE,
		amenities: [
			{ id: "dek kayu", en: "wooden deck" },
			{ id: "view lembah", en: "valley view" },
			BASE_AMENITIES.toilet,
			BASE_AMENITIES.electricity,
			{ id: "spot sunrise", en: "sunrise spot" },
		],
		perfectFor: [
			{ id: "glamping santai", en: "relaxed glamping" },
			{ id: "pasangan & teman", en: "couples & friends" },
			{ id: "foto dan konten alam", en: "nature photography" },
			{ id: "pecinta sunrise", en: "sunrise lovers" },
		],
	},
	{
		id: "sage-deck-valley",
		tabLabel: { id: "Sage Deck Valley", en: "Sage Deck Valley" },
		name: { id: "Sage Deck Valley", en: "Sage Deck Valley" },
		tagline: {
			id: "Empat spot dek kayu dengan panorama lembah terluas.",
			en: "Four wooden-deck pitches with the widest valley panorama.",
		},
		description: {
			id: "Zona Sage Deck Valley (spot 1–4) adalah versi lebih besar dari deck valley — empat dek kayu dengan view lembah yang terbuka lebar. Favorit untuk golden hour, stargazing, dan momen romantis di alam.",
			en: "Sage Deck Valley zone (spots 1–4) is the larger deck-valley experience — four wooden decks with a wide-open valley view. A favorite for golden hour, stargazing, and romantic moments outdoors.",
		},
		heroImage: CAMPING_PLACEHOLDER,
		gallery: [CAMPING_PLACEHOLDER],
		spots: [
			"Sage Deck Valley 1",
			"Sage Deck Valley 2",
			"Sage Deck Valley 3",
			"Sage Deck Valley 4",
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
];

export function getCampingById(id: string): CampingContent | undefined {
	return campings.find((camping) => camping.id === id);
}
