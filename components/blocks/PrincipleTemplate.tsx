"use client";

import { motion } from "framer-motion";
import { PageWrapper, PageHeader } from "@/components/layout/PageWrapper";
import { ContentRenderer } from "@/components/blocks/ContentRenderer";
import { fadeUp, scaleUp, staggerContainer, viewport } from "@/lib/motion";
import type { PrinciplePage } from "@/types/content";

interface PrincipleTemplateProps {
  page: PrinciplePage;
}

export function PrincipleTemplate({ page }: PrincipleTemplateProps) {
  return (
    <PageWrapper prose>
      <PageHeader
        title={page.title}
        subtitle={page.subtitle}
        description={page.description}
        tags={page.tags}
        status={page.status}
        lastUpdated={page.lastUpdated}
      />

      {/* Rationale pullquote */}
      {page.rationale && (
        <motion.blockquote
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="relative pl-6 my-10 border-l-2 border-accent/40"
        >
          <p className="text-[1.0625rem] text-[var(--color-ink-muted)] leading-relaxed italic">
            {page.rationale}
          </p>
        </motion.blockquote>
      )}

      {/* Key ideas */}
      {page.keyIdeas && page.keyIdeas.length > 0 && (
        <motion.div
          variants={scaleUp}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="my-10 p-6 rounded-2xl bg-[var(--color-canvas-raised)] border border-[var(--color-border)]"
        >
          <div className="text-[11px] font-medium uppercase tracking-widest text-[var(--color-ink-subtle)] mb-4">
            Key Ideas
          </div>
          <motion.ul
            variants={staggerContainer(0.06)}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            className="space-y-3"
          >
            {page.keyIdeas.map((idea, i) => (
              <motion.li
                key={i}
                variants={fadeUp}
                className="flex items-start gap-3 text-[14px] text-[var(--color-ink-muted)]"
              >
                <span className="w-5 h-5 rounded-full text-[10px] font-medium flex items-center justify-center shrink-0 mt-0.5" style={{ background: "rgba(0,112,242,0.10)", color: "var(--color-accent)" }}>
                  {i + 1}
                </span>
                {idea}
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      )}

      <ContentRenderer blocks={page.blocks} />
    </PageWrapper>
  );
}
