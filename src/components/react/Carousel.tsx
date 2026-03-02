/**
 * Carousel — Embla Carousel for IntroSection image strip.
 * React island component, loaded with client:visible.
 * Stub — will be fully implemented when photos are provided.
 */
import { useState } from 'react';

interface CarouselProps {
    images?: { src: string; alt: string }[];
}

export default function Carousel({ images = [] }: CarouselProps) {
    if (images.length === 0) {
        return (
            <div className="flex items-center justify-center rounded-2xl bg-gray-100 p-8 text-gray-400">
                <p>Carousel — photos akan dimuat di sini</p>
            </div>
        );
    }

    return (
        <div className="flex gap-4 overflow-x-auto">
            {images.map((img, i) => (
                <img
                    key={i}
                    src={img.src}
                    alt={img.alt}
                    className="h-64 w-auto rounded-2xl object-cover"
                />
            ))}
        </div>
    );
}
