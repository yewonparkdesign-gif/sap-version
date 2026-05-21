"use client";

import { motion } from "framer-motion";
import type { ContentBlock } from "@/types/content";
import { FigmaEmbed } from "./FigmaEmbed";
import { Gallery } from "./Gallery";
import { BeforeAfter } from "./BeforeAfter";
import { ColorSystem } from "./ColorSystem";
import { Callout } from "./Callout";
import { SpecTable } from "./SpecTable";
import { fadeUp, scaleUp, viewport } from "@/lib/motion";
import { cn } from "@/lib/utils";

interface ContentRendererProps {
  blocks: ContentBlock[];
  className?: string;
}

export function ContentRenderer({ blocks, className }: ContentRendererProps) {
  return (
    <div className={cn("content-body", className)}>
      {blocks.map((block, i) => (
        <BlockRenderer key={i} block={block} />
      ))}
    </div>
  );
}

function BlockRenderer({ block }: { block: ContentBlock }) {
  switch (block.type) {
    case "heading": {
      const Tag = `h${block.level}` as "h2" | "h3" | "h4";
      const styles = {
        h2: "text-[1.75rem] font-medium tracking-tight text-[var(--color-ink)] mt-14 mb-5 pb-3 border-b border-[var(--color-border)]",
        h3: "text-[1.25rem] font-medium text-[var(--color-ink)] mt-10 mb-4",
        h4: "text-[1rem] font-medium text-[var(--color-ink-muted)] uppercase tracking-wider mt-8 mb-3",
      };
      return (
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
        >
          <Tag className={styles[Tag]}>{block.text}</Tag>
        </motion.div>
      );
    }

    case "text":
      return (
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="text-[0.9375rem] text-[var(--color-ink-muted)] leading-[1.8] my-5 max-w-prose"
        >
          {block.body}
        </motion.p>
      );

    case "callout":
      return (
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
        >
          <Callout variant={block.variant} body={block.body} />
        </motion.div>
      );

    case "image":
      return (
        <motion.figure
          variants={scaleUp}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="my-8"
        >
          <div className="relative rounded-2xl overflow-hidden border border-[var(--color-border)] bg-[var(--color-canvas-raised)] aspect-video">
            {block.image.src ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={block.image.src}
                alt={block.image.alt}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <span className="text-[var(--color-ink-subtle)] text-sm">{block.image.alt}</span>
              </div>
            )}
          </div>
          {block.image.caption && (
            <figcaption className="text-[12px] text-[var(--color-ink-subtle)] text-center mt-3">
              {block.image.caption}
            </figcaption>
          )}
        </motion.figure>
      );

    case "gallery":
      return (
        <motion.div
          variants={scaleUp}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
        >
          <Gallery images={block.images} columns={block.columns} />
        </motion.div>
      );

    case "before-after":
      return (
        <motion.div
          variants={scaleUp}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
        >
          <BeforeAfter comparison={block.comparison} />
        </motion.div>
      );

    case "figma":
      return (
        <motion.div
          variants={scaleUp}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
        >
          <FigmaEmbed embed={block.embed} />
        </motion.div>
      );

    case "color-system":
      return (
        <motion.div
          variants={scaleUp}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
        >
          <ColorSystem groups={block.groups} />
        </motion.div>
      );

    case "spec-table":
      return (
        <motion.div
          variants={scaleUp}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
        >
          <SpecTable rows={block.rows} />
        </motion.div>
      );

    case "code":
      return (
        <motion.div
          variants={scaleUp}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="my-6 rounded-xl overflow-hidden border border-[var(--color-border)]"
        >
          {block.label && (
            <div className="px-4 py-2 bg-[var(--color-canvas-overlay)] border-b border-[var(--color-border)] text-[11px] text-[var(--color-ink-subtle)] font-mono">
              {block.label}
            </div>
          )}
          <pre className="p-5 bg-[var(--color-canvas-raised)] overflow-x-auto">
            <code className="text-[13px] font-mono text-[var(--color-ink-muted)] leading-relaxed">
              {block.code}
            </code>
          </pre>
        </motion.div>
      );

    case "divider":
      return (
        <motion.hr
          variants={{ hidden: { opacity: 0, scaleX: 0.8 }, show: { opacity: 1, scaleX: 1, transition: { duration: 0.5 } } }}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="my-10 border-[var(--color-border)] origin-left"
        />
      );

    default:
      return null;
  }
}
