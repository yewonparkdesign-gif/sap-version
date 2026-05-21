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
  showDate?: boolean;
}

const statusColors = {
  published: "bg-[var(--sap-green-5)]/10 text-[var(--sap-green-5)] border-[var(--sap-green-5)]/20",
  draft:     "bg-[var(--sap-mango-5)]/10 text-[var(--sap-mango-5)] border-[var(--sap-mango-5)]/20",
  wip:       "bg-[var(--sap-blue-6)]/10  text-[var(--sap-blue-6)]  border-[var(--sap-blue-6)]/20",
};

export function PageHeader({
  title,
  badge,
  subtitle,
  description,
  tags,
  status,
  lastUpdated,
  showDate,
}: PageHeaderProps) {
  return (
    <motion.div
      className="mb-16 pb-12 border-b border-[var(--color-border)]"
      variants={staggerContainer(0.08)}
      initial="hidden"
      animate="show"
    >
      {/* Date — shown only when explicitly requested */}
      {showDate && lastUpdated && (
        <motion.div variants={fadeUp} className="mb-6">
          <span className="text-[11px] text-[var(--color-ink-subtle)]">
            Updated{" "}
            {new Date(lastUpdated).toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </span>
        </motion.div>
      )}
      {/* Title */}
      <motion.div variants={fadeUp} className="flex items-center gap-3 mb-1">
        <h1 className="text-[3.5rem] font-medium leading-[1.08] tracking-[-0.02em] text-gradient pb-3">
          {title}
        </h1>
        {badge && (
          <span className="text-[10px] font-medium px-1.5 py-0.5 rounded-full self-center mt-1" style={{ background: "rgba(0,112,242,0.15)", color: "var(--color-accent)", WebkitTextFillColor: "var(--color-accent)" }}>
            {badge}
          </span>
        )}
      </motion.div>

      {subtitle && (
        <motion.p
          variants={fadeUp}
          className="text-[1.25rem] text-[var(--color-ink-muted)] font-normal italic leading-relaxed mb-6"
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
