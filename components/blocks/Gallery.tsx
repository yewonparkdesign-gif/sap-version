"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import type { ImageAsset } from "@/types/content";
import { cn } from "@/lib/utils";

interface GalleryProps {
  images: ImageAsset[];
  columns?: 2 | 3 | 4;
  className?: string;
}

const colClass = {
  2: "grid-cols-2",
  3: "grid-cols-3",
  4: "grid-cols-4",
};

export function Gallery({ images, columns = 3, className }: GalleryProps) {
  const [lightbox, setLightbox] = useState<number | null>(null);

  function prev() {
    if (lightbox === null) return;
    setLightbox((lightbox - 1 + images.length) % images.length);
  }

  function next() {
    if (lightbox === null) return;
    setLightbox((lightbox + 1) % images.length);
  }

  return (
    <>
      <div className={cn("grid gap-3 my-8", colClass[columns], className)}>
        {images.map((img, i) => (
          <button
            key={i}
            onClick={() => setLightbox(i)}
            className="group relative aspect-video rounded-xl overflow-hidden bg-[var(--color-canvas-raised)] border border-[var(--color-border)] hover:border-[var(--color-border-strong)] transition-colors"
          >
            {img.src.startsWith("/") || img.src.startsWith("http") ? (
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center bg-[var(--color-canvas-overlay)]">
                <span className="text-[12px] text-[var(--color-ink-subtle)]">{img.alt}</span>
              </div>
            )}
            {/* Dark overlay on hover — keep as dark/black since it sits on top of an image */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
            {img.caption && (
              <div className="absolute bottom-0 left-0 right-0 px-3 py-2 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-[11px] text-white/90">{img.caption}</span>
              </div>
            )}
          </button>
        ))}
      </div>

      {/* Lightbox — always dark since it's a full-screen overlay on top of a photo */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-xl p-8"
            onClick={() => setLightbox(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative max-w-5xl w-full aspect-video rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {images[lightbox].src.startsWith("/") || images[lightbox].src.startsWith("http") ? (
                <Image
                  src={images[lightbox].src}
                  alt={images[lightbox].alt}
                  fill
                  className="object-contain"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-[#141420] rounded-2xl">
                  <span className="text-[#9090a8]">{images[lightbox].alt}</span>
                </div>
              )}
            </motion.div>

            <button
              className="absolute top-6 right-6 p-2 rounded-full bg-white/10 border border-white/20 text-white/80 hover:text-white transition-colors"
              onClick={() => setLightbox(null)}
            >
              <X size={18} />
            </button>
            {images.length > 1 && (
              <>
                <button
                  className="absolute left-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 border border-white/20 text-white/80 hover:text-white transition-colors"
                  onClick={(e) => { e.stopPropagation(); prev(); }}
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  className="absolute right-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 border border-white/20 text-white/80 hover:text-white transition-colors"
                  onClick={(e) => { e.stopPropagation(); next(); }}
                >
                  <ChevronRight size={20} />
                </button>
              </>
            )}

            {images[lightbox].caption && (
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-[13px] text-white/90">
                {images[lightbox].caption}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
