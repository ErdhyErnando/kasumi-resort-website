import type { Locale } from './utils';

export type UiTranslations = {
  hero: { line1: string; line2: string; scrollLabel: string };
  intro: { text: string; images: { alt: string }[] };
  activity: {
    headingLine1: string;
    headingLine2: string;
    headingLine3: string;
    bookingLabel: string;
    items: { name: string; description: string; waMessage: string }[];
  };
  facilities: {
    headline: string;
    subtitle: string;
    items: { name: string; description: string; image: string }[];
  };
  location: {
    line1: string;
    line2: string;
    distanceJakarta: string;
    distanceBogor: string;
  };
  cta: { headline: string; buttonLabel: string };
  navbar: { bookNow: string };
  footer: {
    contactLabel: string;
    followLabel: string;
    privacyPolicy: string;
    credit: string;
  };
};

const id: UiTranslations = {
  hero: {
    line1: 'Tinggalkan kota',
    line2: 'Bangun di tengah kabut',
    scrollLabel: 'Gulir',
  },

  intro: {
    text: 'villa di tengah hutan, camping ground\ndengan pemandangan pegunungan sukabumi',
    images: [
      { alt: 'Villa di tengah hutan Kasumi Resort' },
      { alt: 'Camping ground dengan pemandangan gunung' },
      { alt: 'Suasana alam Kasumi Resort' },
    ],
  },

  activity: {
    headingLine1: 'Aktivitas Seru',
    headingLine2: 'untuk kamu',
    headingLine3: 'dan Keluarga',
    bookingLabel: 'booking',
    items: [
      {
        name: 'ATV',
        description:
          'Jelajahi trek hutan dengan ATV — pengalaman memacu adrenalin di tengah alam Halimun Salak.',
        waMessage: 'Halo, saya tertarik dengan aktivitas ATV di Kasumi Resort.',
      },
      {
        name: 'Api Unggun',
        description:
          'Malam yang hangat bersama keluarga dan teman dengan api unggun di bawah langit berbintang.',
        waMessage: 'Halo, saya tertarik dengan aktivitas Api Unggun di Kasumi Resort.',
      },
      {
        name: 'Trekking',
        description:
          'Telusuri jalur trekking di kawasan Taman Nasional Gunung Halimun Salak.',
        waMessage: 'Halo, saya tertarik dengan aktivitas Trekking di Kasumi Resort.',
      },
    ],
  },

  facilities: {
    headline: 'Alam di Luar. Nyaman di Dalam.',
    subtitle:
      'Dikelilingi hutan dan udara pegunungan yang segar bukan berarti kamu harus meninggalkan kenyamanan. Kasumi Resort menyediakan kamar mandi bersih, listrik yang andal, dan akses Wi-Fi.',
    items: [
      {
        name: 'Kamar Mandi Bersih & Air Panas',
        description: 'Kamar mandi bersih dengan air panas tersedia di setiap vila dan area camping.',
        image: '/images/facility-bathroom.jpg',
      },
      {
        name: 'Listrik 24 Jam',
        description: 'Listrik stabil 24 jam untuk kenyamanan Anda selama menginap.',
        image: '/images/facility-electricity.jpg',
      },
      {
        name: 'Akses Wi-Fi',
        description: 'Akses Wi-Fi tersedia untuk tetap terhubung meskipun di tengah hutan.',
        image: '/images/facility-wifi.jpg',
      },
    ],
  },

  location: {
    line1: 'Dekat dari kota',
    line2: 'Jauh dari kebisingan',
    distanceJakarta: '2 jam dari Jakarta',
    distanceBogor: '1,5 jam dari Bogor',
  },

  cta: {
    headline: 'Siap Meninggalkan Kota?',
    buttonLabel: 'Booking',
  },

  navbar: {
    bookNow: 'Pesan Sekarang',
  },

  footer: {
    contactLabel: 'kontak',
    followLabel: 'ikuti',
    privacyPolicy: 'kebijakan privasi',
    credit: 'kredit',
  },
};

const en: UiTranslations = {
  hero: {
    line1: 'Leave the city',
    line2: 'Wake up in the mist',
    scrollLabel: 'Scroll',
  },

  intro: {
    text: 'a villa in the heart of the forest,\ncamping ground with mountain views in sukabumi',
    images: [
      { alt: 'Kasumi Resort villa in the forest' },
      { alt: 'Camping ground with mountain views' },
      { alt: 'Nature scenery at Kasumi Resort' },
    ],
  },

  activity: {
    headingLine1: 'Exciting Activities',
    headingLine2: 'for You',
    headingLine3: 'and Family',
    bookingLabel: 'book now',
    items: [
      {
        name: 'ATV',
        description:
          'Explore forest trails on an ATV — an adrenaline-pumping adventure in the heart of Halimun Salak.',
        waMessage: 'Hello, I am interested in the ATV activity at Kasumi Resort.',
      },
      {
        name: 'Campfire',
        description:
          'A warm evening with family and friends around a campfire under a sky full of stars.',
        waMessage: 'Hello, I am interested in the Campfire activity at Kasumi Resort.',
      },
      {
        name: 'Trekking',
        description:
          'Explore trekking trails within Gunung Halimun Salak National Park.',
        waMessage: 'Hello, I am interested in the Trekking activity at Kasumi Resort.',
      },
    ],
  },

  facilities: {
    headline: 'Nature Outside. Comfort Inside.',
    subtitle:
      "Just because you're surrounded by forest and fresh mountain air doesn't mean you leave comfort behind. Kasumi Resort offers clean bathrooms, reliable electricity, and Wi-Fi access.",
    items: [
      {
        name: 'Clean Bathrooms & Hot Water',
        description: 'Clean bathrooms with hot water available in every villa and camping area.',
        image: '/images/facility-bathroom.jpg',
      },
      {
        name: 'Reliable Electricity 24hr',
        description: 'Stable 24-hour electricity for your comfort throughout your stay.',
        image: '/images/facility-electricity.jpg',
      },
      {
        name: 'Wi-Fi Access',
        description: 'Wi-Fi access available to stay connected even in the middle of the forest.',
        image: '/images/facility-wifi.jpg',
      },
    ],
  },

  location: {
    line1: 'Close to the city',
    line2: 'Far from noise',
    distanceJakarta: '2 hours from Jakarta',
    distanceBogor: '1.5 hours from Bogor',
  },

  cta: {
    headline: 'Ready To Leave The City Behind?',
    buttonLabel: 'Book Now',
  },

  navbar: {
    bookNow: 'Book Now',
  },

  footer: {
    contactLabel: 'contact',
    followLabel: 'follow',
    privacyPolicy: 'privacy policy',
    credit: 'credit',
  },
};

const translations: Record<Locale, UiTranslations> = { id, en };

export function useTranslations(locale: Locale): UiTranslations {
  return translations[locale] ?? translations.id;
}
