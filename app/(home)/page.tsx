"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Layers, Palette, Grid3x3, BookOpen, Sparkles, Monitor, BarChart2, Image } from "lucide-react";
import { cn } from "@/lib/utils";
import { SlideButton } from "@/components/ui/SlideButton";
import { staggerContainer, fadeUp, ease } from "@/lib/motion";

const sections = [
  {
    title: "Visual Principles",
    description: "Glass surfaces, blur depth, transparency, layering, and light diffusion -- the physics behind every SAP.com surface.",
    href: "/principles/agentic-glass",
    icon: <Sparkles size={18} />,
    color: "from-violet-500/20 to-blue-500/10",
    count: 5,
    items: ["Agentic Glass", "Blur & Diffusion", "Transparency", "Layering", "Light Diffusion"],
  },
  {
    title: "Color",
    description: "Gradients as wayfinding -- organic, graphic pattern, and linear systems across LOBs, topic areas, and industries.",
    href: "/color/examples",
    icon: <Palette size={18} />,
    color: "from-emerald-500/20 to-teal-500/10",
    count: 8,
    items: ["Examples", "Topic Areas", "LOBs", "Industries", "Gradients", "Graphic Pattern", "Linear", "Organic"],
  },
  {
    title: "Product Visualization",
    description: "UI snippets with dimension and frost -- cutouts, highlights, and composite treatments for Fiori and Joule.",
    href: "/product-visualization/key-features",
    icon: <Monitor size={18} />,
    color: "from-blue-500/20 to-cyan-500/10",
    count: 5,
    items: ["Key Features", "Key Capabilities", "Hero Graphics", "Video Thumbnails", "Trials & Tours"],
  },
  {
    title: "Hero",
    description: "Homepage, topic overview, LOB, and customized hero layouts -- the most visible real estate on SAP.com.",
    href: "/hero/homepage",
    icon: <Grid3x3 size={18} />,
    color: "from-pink-500/20 to-rose-500/10",
    count: 4,
    items: ["Homepage", "Topic Overview", "Topic Pages (LOBs)", "Topic Pages (Customized)"],
  },
  {
    title: "Resources",
    description: "Ten resource card types and extended color pairings across the featured resources section.",
    href: "/resources/resource-types",
    icon: <BookOpen size={18} />,
    color: "from-orange-500/20 to-amber-500/10",
    count: 2,
    items: ["Resource Types", "Color Pairings"],
  },
  {
    title: "Company Logos",
    description: "Customer story and partner logo usage -- co-brand lockups, photography overlays, and partner app grids.",
    href: "/company-logos/partners",
    icon: <Layers size={18} />,
    color: "from-yellow-500/20 to-orange-500/10",
    count: 3,
    items: ["Partners", "Partner Apps", "Customer Stories"],
  },
  {
    title: "Analyst Reports",
    description: "IDC and Spotlight card anatomy, featured placement, and resource list integration.",
    href: "/analyst-reports",
    icon: <BarChart2 size={18} />,
    color: "from-indigo-500/20 to-violet-500/10",
    count: 1,
    items: ["Overview"],
  },
  {
    title: "Diagrams & Graphics",
    description: "Ecosystem maps, architecture diagrams, UI composites, and hero custom graphics.",
    href: "/diagrams/overview",
    icon: <Image size={18} />,
    color: "from-rose-500/20 to-pink-500/10",
    count: 2,
    items: ["Overview", "In-Body Custom Graphics"],
  },
];

export default function HomePage() {
  return (
    <div className="min-h-full">

      {/* Hero */}
      <div className="relative overflow-hidden border-b border-[var(--color-border)]">
        {/* Ambient atmosphere */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-20 left-1/3 w-[700px] h-[500px] rounded-full bg-blue-500/[0.07] blur-[140px]" />
          <div className="absolute top-10 right-1/4 w-[500px] h-[400px] rounded-full bg-violet-500/[0.06] blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[200px] rounded-full bg-cyan-500/[0.04] blur-[100px]" />
        </div>

        <div className="relative max-w-[1200px] mx-auto px-8 pt-20 pb-20">
          <motion.div
            variants={staggerContainer(0.1)}
            initial="hidden"
            animate="show"
          >
            {/* Event badge */}
            <motion.div variants={fadeUp}>
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-[12px] font-semibold mb-8 tracking-wide">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                Sapphire 2026 -- Visual Uplift
              </div>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={fadeUp}
              className="text-[clamp(2.75rem,5.5vw,5rem)] font-bold tracking-[-0.04em] leading-[1.04] text-gradient mb-6 max-w-[820px]"
            >
              SAP.com<br />Web Visual System
            </motion.h1>

            {/* Sub */}
            <motion.p variants={fadeUp} className="text-[1.125rem] text-[var(--color-ink-muted)] max-w-[520px] leading-relaxed mb-4">
              The living art direction for SAP.com&apos;s 2026 visual uplift -- built for Sapphire and beyond.
            </motion.p>
            <motion.p variants={fadeUp} className="text-[0.9375rem] text-[var(--color-ink-subtle)] max-w-[520px] leading-relaxed mb-10">
              Premium, editorial, agentic. Every principle, color system, hero layout, and component pattern documented and ready to use.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={fadeUp} className="flex items-center gap-4">
              <SlideButton href="/principles/agentic-glass" variant="primary">
                Start with principles
                <ArrowRight size={14} />
              </SlideButton>
              <SlideButton href="/foundations/visual-direction" variant="ghost">
                Visual direction
              </SlideButton>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Section grid */}
      <div className="max-w-[1200px] mx-auto px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease }}
          className="mb-10"
        >
          <div className="text-[11px] font-bold uppercase tracking-widest text-[var(--color-ink-subtle)] mb-3">
            System sections
          </div>
          <h2 className="text-[1.75rem] font-bold tracking-tight text-[var(--color-ink)] mb-2">
            Everything in one place
          </h2>
          <p className="text-[0.9375rem] text-[var(--color-ink-muted)] max-w-[480px]">
            Eight sections covering the full visual language of SAP.com -- from first principles to production-ready patterns.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer(0.06)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-40px" }}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4"
        >
          {sections.map((section) => (
            <motion.div key={section.title} variants={fadeUp}>
              <Link
                href={section.href}
                className="group block surface p-6 hover:border-[var(--color-border-strong)] hover:shadow-[0_2px_8px_rgba(0,0,0,0.03)] transition-all duration-300"
              >
                <div className={cn("w-10 h-10 rounded-xl bg-gradient-to-br flex items-center justify-center mb-5 text-[var(--color-ink-subtle)] group-hover:text-[var(--color-ink)] transition-colors", section.color)}>
                  {section.icon}
                </div>

                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-[15px] font-semibold text-[var(--color-ink)]">
                    {section.title}
                  </h3>
                  <span className="text-[11px] text-[var(--color-ink-subtle)] mt-0.5 shrink-0 ml-3">
                    {section.count} {section.count === 1 ? "page" : "pages"}
                  </span>
                </div>

                <p className="text-[13px] text-[var(--color-ink-muted)] leading-relaxed mb-5">
                  {section.description}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {section.items.map((item) => (
                    <span
                      key={item}
                      className="text-[11px] px-2 py-0.5 rounded-md bg-[var(--color-glass-bg)] text-[var(--color-ink-subtle)] border border-[var(--color-border)]"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-1.5 mt-5 text-[12px] text-[var(--color-ink-subtle)] group-hover:text-accent transition-colors">
                  <span>Explore</span>
                  <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Context strip */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease }}
          className="mt-16 p-8 rounded-2xl bg-[var(--color-canvas-raised)] border border-[var(--color-border)] flex flex-col md:flex-row gap-8 md:items-center"
        >
          <div className="flex-1">
            <div className="text-[11px] font-bold uppercase tracking-widest text-[var(--color-ink-subtle)] mb-3">About this system</div>
            <p className="text-[0.9375rem] text-[var(--color-ink)] leading-relaxed mb-2">
              Built for the SAP.com 2026 Visual Uplift -- the largest design refresh of SAP.com ahead of Sapphire.
            </p>
            <p className="text-[0.875rem] text-[var(--color-ink-muted)] leading-relaxed">
              This living system documents the complete art direction: the Agentic Glass aesthetic, the new gradient color language, updated hero layouts, and product UI treatment across every page type on SAP.com.
            </p>
          </div>
          <div className="flex flex-col gap-2 shrink-0 md:w-48">
            <div className="text-[11px] text-[var(--color-ink-subtle)] uppercase tracking-wider mb-1">Key themes</div>
            {["Tech-forward, agentic", "Frosted glass surfaces", "Diamond blur backgrounds", "Extended color palette", "More product UI"].map((t) => (
              <div key={t} className="flex items-center gap-2 text-[13px] text-[var(--color-ink-muted)]">
                <span className="w-1 h-1 rounded-full bg-accent/60 shrink-0" />
                {t}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
