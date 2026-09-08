/**
 * Privacy policy content (ID + EN) for the /[locale]/privacy page.
 * Long-form structured copy lives here instead of `i18n/ui.ts`
 * (which holds short UI strings) so the policy stays reviewable.
 * Effective date is a plain constant — bump it when the text changes.
 */

import { CONTACT_EMAIL } from '../lib/constants';
import type { Locale } from './utils';

export interface PrivacySection {
	heading: string;
	paragraphs: string[];
}

export interface PrivacyContent {
	title: string;
	description: string;
	updatedLabel: string;
	updatedDate: string;
	intro: string;
	sections: PrivacySection[];
}

const EFFECTIVE_ID = '8 September 2026';
const EFFECTIVE_EN = 'September 8, 2026';

const id: PrivacyContent = {
	title: 'Kebijakan Privasi',
	description:
		'Kebijakan privasi Kasumi Resort: data apa yang kami kumpulkan saat reservasi via WhatsApp, cara kami menggunakannya, dan hak Anda.',
	updatedLabel: 'Terakhir diperbarui',
	updatedDate: EFFECTIVE_ID,
	intro:
		'Kasumi Resort menghormati privasi Anda. Situs ini adalah halaman informasi — tidak ada akun, tidak ada formulir, dan tidak ada cookie pelacakan milik kami. Kebijakan ini menjelaskan data apa yang kami terima saat Anda menghubungi atau memesan, dan bagaimana kami menjaganya.',
	sections: [
		{
			heading: 'Data yang kami kumpulkan',
			paragraphs: [
				'Saat Anda memesan atau bertanya melalui WhatsApp, kami menerima data yang Anda kirimkan sendiri: nama, nomor telepon/WhatsApp, tanggal menginap yang diinginkan, dan jumlah tamu. Jika Anda menghubungi kami melalui email, kami menerima alamat email dan isi pesan Anda.',
				'Kami tidak mengumpulkan data lain. Tidak ada pendaftaran akun dan tidak ada formulir di situs ini.',
			],
		},
		{
			heading: 'Cara kami menggunakan data',
			paragraphs: [
				'Data tersebut hanya kami gunakan untuk keperluan reservasi dan operasional: mencatat pemesanan, menghubungi Anda soal ketersediaan dan kedatangan, serta memastikan keamanan dan kelancaran menginap Anda.',
			],
		},
		{
			heading: 'Yang tidak kami lakukan',
			paragraphs: [
				'Kami tidak menjual atau menyewakan data pribadi Anda kepada siapa pun. Kami tidak memasang cookie pelacakan sendiri, tidak menjalankan iklan bertarget, dan tidak membuat profil perilaku pengunjung.',
			],
		},
		{
			heading: 'Analitik situs',
			paragraphs: [
				'Kami menggunakan Cloudflare Web Analytics untuk memahami kunjungan secara umum (misalnya halaman populer). Layanan ini mengutamakan privasi: tidak memakai cookie dan hanya menyimpan statistik agregat yang tidak mengidentifikasi individu.',
			],
		},
		{
			heading: 'Layanan pihak ketiga',
			paragraphs: [
				'Situs ini dimuat melalui Cloudflare (hosting dan keamanan). Halaman kontak menyematkan peta Google Maps — saat peta dimuat, Google dapat memproses data sesuai kebijakan privasinya. Percakapan WhatsApp tunduk pada kebijakan privasi WhatsApp/Meta.',
			],
		},
		{
			heading: 'Penyimpanan data',
			paragraphs: [
				'Riwayat percakapan reservasi kami simpan hanya selama diperlukan untuk keperluan pemesanan, pelayanan tamu, dan kewajiban pencatatan yang berlaku. Setelah tidak diperlukan, data tersebut kami hapus.',
			],
		},
		{
			heading: 'Hak Anda',
			paragraphs: [
				`Anda dapat meminta salinan, koreksi, atau penghapusan data pribadi Anda kapan saja dengan menulis ke ${CONTACT_EMAIL}. Kami akan menindaklanjuti permintaan yang wajar tanpa biaya.`,
			],
		},
		{
			heading: 'Anak-anak',
			paragraphs: [
				'Reservasi dan komunikasi ditangani oleh orang dewasa. Situs ini tidak ditujukan untuk pengumpulan data anak secara langsung.',
			],
		},
		{
			heading: 'Perubahan kebijakan',
			paragraphs: [
				'Jika kebijakan ini berubah, versi terbaru akan selalu tersedia di halaman ini beserta tanggal pembaruannya.',
			],
		},
	],
};

const en: PrivacyContent = {
	title: 'Privacy Policy',
	description:
		'Kasumi Resort privacy policy: what data we receive when you book via WhatsApp, how we use it, and your rights.',
	updatedLabel: 'Last updated',
	updatedDate: EFFECTIVE_EN,
	intro:
		'Kasumi Resort respects your privacy. This site is an information page — no accounts, no forms, and no first-party tracking cookies. This policy explains what data we receive when you contact or book with us, and how we look after it.',
	sections: [
		{
			heading: 'Data we collect',
			paragraphs: [
				'When you book or ask questions over WhatsApp, we receive the details you send us yourself: your name, phone/WhatsApp number, requested stay dates, and group size. If you email us, we receive your email address and message contents.',
				'We collect nothing else. There is no account registration and no forms on this site.',
			],
		},
		{
			heading: 'How we use data',
			paragraphs: [
				'We use these details only for reservations and operations: recording your booking, contacting you about availability and arrival, and keeping your stay safe and smooth.',
			],
		},
		{
			heading: 'What we do not do',
			paragraphs: [
				'We never sell or rent your personal data to anyone. We set no first-party tracking cookies, run no targeted advertising, and build no behavioral profiles of visitors.',
			],
		},
		{
			heading: 'Site analytics',
			paragraphs: [
				'We use Cloudflare Web Analytics to understand visits in general terms (for example, popular pages). It is privacy-first: cookie-free and limited to aggregate statistics that do not identify individuals.',
			],
		},
		{
			heading: 'Third-party services',
			paragraphs: [
				'This site is served through Cloudflare (hosting and security). The contact page embeds a Google Map — when the map loads, Google may process data under its own privacy policy. WhatsApp conversations are subject to the WhatsApp/Meta privacy policy.',
			],
		},
		{
			heading: 'Data retention',
			paragraphs: [
				'Booking conversation history is kept only as long as needed for reservations, guest service, and applicable record-keeping duties. Once no longer needed, it is deleted.',
			],
		},
		{
			heading: 'Your rights',
			paragraphs: [
				`You may request a copy, correction, or deletion of your personal data at any time by writing to ${CONTACT_EMAIL}. We will follow up on reasonable requests free of charge.`,
			],
		},
		{
			heading: 'Children',
			paragraphs: [
				'Bookings and communication are handled by adults. This site is not aimed at collecting data from children directly.',
			],
		},
		{
			heading: 'Policy changes',
			paragraphs: [
				'If this policy changes, the latest version will always be available on this page together with its update date.',
			],
		},
	],
};

export function getPrivacyContent(locale: Locale): PrivacyContent {
	return locale === 'id' ? id : en;
}
