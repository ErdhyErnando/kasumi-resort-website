/**
 * Turn a pasted YouTube URL (watch, short, youtu.be, or embed) into a canonical embed URL.
 * Adds modestbranding=1 so the player uses reduced YouTube branding (no custom CSS inside the iframe).
 */
export function toYouTubeEmbedUrl(input: string): string {
    const raw = input.trim();
    if (!raw) return "";

    function withEmbedParams(embedUrl: string): string {
        try {
            const u = new URL(embedUrl, "https://www.youtube.com");
            u.searchParams.set("modestbranding", "1");
            return u.toString();
        } catch {
            return embedUrl;
        }
    }

    if (/youtube\.com\/embed\//i.test(raw)) {
        try {
            return withEmbedParams(new URL(raw, "https://www.youtube.com").toString());
        } catch {
            const fallback = raw.startsWith("http") ? raw : `https://${raw}`;
            return withEmbedParams(fallback);
        }
    }

    let id: string | null = null;

    const fromQuery = raw.match(/[?&]v=([a-zA-Z0-9_-]{11})/);
    if (fromQuery) id = fromQuery[1];

    if (!id) {
        const short = raw.match(
            /(?:youtu\.be\/|youtube\.com\/shorts\/)([a-zA-Z0-9_-]{11})/,
        );
        if (short) id = short[1];
    }

    if (!id) return raw;

    return withEmbedParams(`https://www.youtube.com/embed/${id}`);
}
