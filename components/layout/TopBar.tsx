"use client";

import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { navigation } from "@/lib/navigation";
import { ease } from "@/lib/motion";
import { Menu, Sun, Moon } from "lucide-react";
import { useMobileNav } from "./MobileNavProvider";
import { useTheme } from "./ThemeProvider";

function getBreadcrumb(pathname: string): string {
  if (pathname === "/") return "Introduction";
  for (const section of navigation) {
    for (const item of section.items) {
      if (item.href === pathname) return item.label;
      if (item.children) {
        const child = item.children.find((c) => c.href === pathname);
        if (child) return child.label;
      }
    }
  }
  const segment = pathname.split("/").filter(Boolean).pop() ?? "";
  return segment.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
}

export function TopBar() {
  const pathname = usePathname();
  const label = getBreadcrumb(pathname);
  const { toggle } = useMobileNav();
  const { theme, toggle: toggleTheme } = useTheme();

  return (
    <motion.header
      className="h-12 shrink-0 flex items-center justify-between px-4 md:px-6 border-b border-[var(--color-border)] bg-[var(--color-canvas)] backdrop-blur-sm sticky top-0 z-20"
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.1, ease }}
    >
      <div className="flex items-center gap-3">
        {/* Hamburger — mobile only */}
        <button
          onClick={toggle}
          className="lg:hidden p-1.5 rounded-lg text-[var(--color-ink-subtle)] hover:text-[var(--color-ink)] hover:bg-[var(--color-glass-bg)] transition-colors"
          aria-label="Open navigation"
        >
          <Menu size={18} />
        </button>

        <div className="text-[13px] text-[var(--color-ink-muted)]">
          <span className="text-[var(--color-ink-subtle)] hidden sm:inline">SAP Visual System</span>
          {label && (
            <>
              <span className="mx-2 text-[var(--color-ink-faint)] hidden sm:inline">/</span>
              <span className="text-[var(--color-ink)]">{label}</span>
            </>
          )}
        </div>
      </div>

      <div className="flex items-center gap-2">
        <button
          onClick={toggleTheme}
          className="p-1.5 rounded-lg text-[var(--color-ink-subtle)] hover:text-[var(--color-ink)] hover:bg-[var(--color-glass-bg)] transition-colors"
          aria-label="Toggle theme"
        >
          {theme === "dark" ? <Sun size={15} /> : <Moon size={15} />}
        </button>
      </div>
    </motion.header>
  );
}
