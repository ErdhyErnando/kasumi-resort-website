import { WHATSAPP_NUMBER } from './constants';

/**
 * Generate a WhatsApp click-to-chat URL with an optional pre-filled message.
 */
export function getWhatsAppUrl(message?: string): string {
    const base = `https://wa.me/${WHATSAPP_NUMBER}`;
    if (!message) return base;
    return `${base}?text=${encodeURIComponent(message)}`;
}

/**
 * Generate a WhatsApp URL for villa booking enquiry.
 */
export function getVillaBookingUrl(villaName: string): string {
    return getWhatsAppUrl(
        `Halo, saya tertarik untuk booking ${villaName}. Bisa info ketersediaan dan harganya?`,
    );
}

/**
 * Generate a WhatsApp URL for camping booking enquiry.
 */
export function getCampingBookingUrl(campingName: string): string {
    return getWhatsAppUrl(
        `Halo, saya tertarik untuk booking area camping ${campingName}. Bisa info ketersediaan dan harganya?`,
    );
}
