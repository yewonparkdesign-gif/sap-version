"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Maximize2 } from "lucide-react";
import type { FigmaEmbed as FigmaEmbedType } from "@/types/content";
import { cn } from "@/lib/utils";

interface FigmaEmbedProps {
  embed: FigmaEmbedType;
  className?: string;
}

export function FigmaEmbed({ embed, className }: FigmaEmbedProps) {
  const [loaded, setLoaded] = useState(false);
  const height = embed.height ?? 600;

  const isPlaceholder = embed.url.includes("PLACEHOLDER");

  return (
    <div className={cn("my-10", className)}>
      {embed.title && (
        <div className="flex items-center justify-between mb-3">
          <span className="text-[13px] font-medium text-[var(--color-ink-muted)]">{embed.title}</span>
          {!isPlaceholder && (
            <a
              href={embed.url.replace("https://www.figma.com/embed?embed_host=share&url=", "")}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-[12px] text-[var(--color-ink-subtle)] hover:text-[var(--color-ink)] transition-colors"
            >
              <ExternalLink size={12} />
              Open in Figma
            </a>
          )}
        </div>
      )}

      <div
        className="relative rounded-2xl overflow-hidden border border-[var(--color-border)] bg-[var(--color-canvas-raised)]"
        style={{ height }}
      >
        {isPlaceholder ? (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[var(--color-glass-bg)] flex items-center justify-center">
              <Maximize2 size={20} className="text-[var(--color-ink-subtle)]" />
            </div>
            <div className="text-center">
              <div className="text-[14px] font-medium text-[var(--color-ink-muted)] mb-1">Figma embed</div>
              <div className="text-[12px] text-[var(--color-ink-subtle)] max-w-[280px]">
                Replace the placeholder URL in the content data with your Figma share link
              </div>
            </div>
            <code className="text-[11px] px-3 py-1.5 rounded-lg bg-[var(--color-glass-bg)] text-[var(--color-ink-subtle)] border border-[var(--color-border)]">
              embed.url = &quot;https://www.figma.com/embed?...&quot;
            </code>
          </div>
        ) : (
          <>
            {!loaded && (
              <div className="absolute inset-0 flex items-center justify-center bg-[var(--color-canvas-raised)]">
                <motion.div
                  animate={{ opacity: [0.3, 0.7, 0.3] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                  className="w-6 h-6 rounded-full border-2 border-accent/30 border-t-accent"
                  style={{ animation: "spin 1s linear infinite" }}
                />
              </div>
            )}
            <iframe
              src={embed.url}
              width="100%"
              height={height}
              allowFullScreen={embed.allowFullscreen ?? true}
              onLoad={() => setLoaded(true)}
              className={cn("transition-opacity duration-300", loaded ? "opacity-100" : "opacity-0")}
            />
          </>
        )}
      </div>
    </div>
  );
}
