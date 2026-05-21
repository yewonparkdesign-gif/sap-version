"use client";

import { motion, useAnimate } from "framer-motion";
import Link from "next/link";
import { ease } from "@/lib/motion";

interface SlideButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "ghost";
  className?: string;
}

export function SlideButton({ href, children, variant = "primary", className }: SlideButtonProps) {
  const [scope, animate] = useAnimate();

  async function onEnter() {
    animate(".slide-bg", { scaleX: 1 }, { duration: 0.3, ease });
    animate(".slide-content", { x: 4 }, { duration: 0.25, ease });
  }

  async function onLeave() {
    animate(".slide-bg", { scaleX: 0 }, { duration: 0.25, ease });
    animate(".slide-content", { x: 0 }, { duration: 0.2, ease });
  }

  const base =
    variant === "primary"
      ? "bg-accent text-white"
      : "glass text-[var(--color-ink-muted)]";

  return (
    <Link href={href}>
      <motion.div
        ref={scope}
        onHoverStart={onEnter}
        onHoverEnd={onLeave}
        className={`relative overflow-hidden inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-[14px] font-medium cursor-pointer ${base} ${className ?? ""}`}
      >
        {/* Slide-in highlight layer */}
        <motion.span
          className={`slide-bg absolute inset-0 origin-left ${variant === "primary" ? "bg-white/10" : "bg-[var(--color-glass-bg)]"}`}
          initial={{ scaleX: 0 }}
          style={{ transformOrigin: "left" }}
        />
        {/* Content */}
        <motion.span className="slide-content relative flex items-center gap-2">
          {children}
        </motion.span>
      </motion.div>
    </Link>
  );
}
