import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", "Inter", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "JetBrains Mono", "monospace"],
      },
      colors: {
        // All semantic colors point to CSS variables — both modes are handled in globals.css
        canvas: {
          DEFAULT: "var(--color-canvas)",
          soft: "var(--color-canvas-soft)",
          raised: "var(--color-canvas-raised)",
          overlay: "var(--color-canvas-overlay)",
        },
        ink: {
          DEFAULT: "var(--color-ink)",
          muted: "var(--color-ink-muted)",
          subtle: "var(--color-ink-subtle)",
          faint: "var(--color-ink-faint)",
        },
        border: {
          DEFAULT: "var(--color-border)",
          strong: "var(--color-border-strong)",
        },
        accent: {
          DEFAULT: "#0070f3",
          soft: "#1a7fff",
          dim: "rgba(0,112,243,0.15)",
        },
        gold: {
          DEFAULT: "#f5a623",
          dim: "rgba(245,166,35,0.12)",
        },
      },
      spacing: {
        "18": "4.5rem",
        "22": "5.5rem",
        "sidebar": "260px",
      },
      maxWidth: {
        prose: "72ch",
        content: "960px",
        wide: "1200px",
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
      },
      backdropBlur: {
        xs: "2px",
      },
      animation: {
        "fade-in": "fadeIn 0.4s ease forwards",
        "slide-up": "slideUp 0.5s ease forwards",
      },
      keyframes: {
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        slideUp: {
          from: { opacity: "0", transform: "translateY(16px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      typography: {
        DEFAULT: {
          css: {
            color: "var(--color-ink-muted)",
            a: { color: "#0070f3" },
            h1: { color: "var(--color-ink)" },
            h2: { color: "var(--color-ink)" },
            h3: { color: "var(--color-ink)" },
            strong: { color: "var(--color-ink)" },
            code: { color: "var(--color-ink)" },
          },
        },
      },
    },
  },
  plugins: [],
};

export default config;
