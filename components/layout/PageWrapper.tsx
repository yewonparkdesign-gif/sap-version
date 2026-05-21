"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { fadeUp, fadeIn, staggerContainer, viewport } from "@/lib/motion";

interface PageWrapperProps {
  children: React.ReactNode;
  className?: string;
  prose?: boolean;
}

export function PageWrapper({ children, className, prose }: PageWrapperProps) {
  return (
    <div
      className={cn(
        "w-full px-8 py-12 mx-auto",
        prose ? "max-w-[960px]" : "max-w-[1200px]",
        className
      )}
    >
      {children}
    </div>
  );
}

interface PageHeaderProps {
  title: string;
  badge?: string;
  subtitle?: string;
  description?: string;
  tags?: string[];
  status?: "draft" | "published" | "wip";
  lastUpdated?: string;
}

const statusColors = {
  published: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  draft: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
  wip: "bg-blue-500/10 text-blue-400 border-blue-500/20",
};

export function PageHeader({
  title,
  badge,
  subtitle,
  description,
  tags,
  status,
  lastUpdated,
}: PageHeaderProps) {
  return (
    <motion.div
      className="mb-16 pb-12 border-b border-[var(--color-border)]"
      variants={staggerContainer(0.08)}
      initial="hidden"
      animate="show"
    >
      {/* Meta row */}
      {(status || lastUpdated) && (
        <motion.div variants={fadeUp} className="flex items-center gap-3 mb-6">
          {status && (
            <span
              className={cn(
                "text-[11px] font-medium px-2.5 py-1 rounded-full border",
                statusColors[status]
              )}
            >
              {status === "wip" ? "In Progress" : status.charAt(0).toUpperCase() + status.slice(1)}
            </span>
          )}
          {lastUpdated && (
            <span className="text-[11px] text-[var(--color-ink-subtle)]">
              Updated{" "}
              {new Date(lastUpdated).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
              })}
            </span>
          )}
        </motion.div>
      )}

      {/* Title */}
      <motion.div variants={fadeUp} className="flex items-center gap-3 mb-1">
        <h1 className="text-[3.5rem] font-bold leading-[1.08] tracking-[-0.03em] text-gradient pb-3">
          {title}
        </h1>
        {badge && (
          <span className="text-[10px] font-semibold px-1.5 py-0.5 rounded-full bg-accent/20 text-accent self-center mt-1">
            {badge}
          </span>
        )}
      </motion.div>

      {subtitle && (
        <motion.p
          variants={fadeUp}
          className="text-[1.25rem] text-[var(--color-ink-muted)] font-light leading-relaxed mb-6"
        >
          {subtitle}
        </motion.p>
      )}

      {description && (
        <motion.p
          variants={fadeUp}
          className="text-[0.9375rem] text-[var(--color-ink-subtle)] leading-relaxed"
        >
          {description}
        </motion.p>
      )}

      {/* Tags */}
      {tags && tags.length > 0 && (
        <motion.div variants={fadeIn} className="flex flex-wrap gap-2 mt-6">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-[11px] px-2.5 py-1 rounded-full bg-[var(--color-glass-bg)] text-[var(--color-ink-subtle)] border border-[var(--color-border)]"
            >
              {tag}
            </span>
          ))}
        </motion.div>
      )}
    </motion.div>
  );
}
