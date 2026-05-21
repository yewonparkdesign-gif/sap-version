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
        sans: ["72Brand", "Arial", "Helvetica", "sans-serif"],
        mono: ["var(--font-mono)", "JetBrains Mono", "monospace"],
      },
      colors: {
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
          DEFAULT: "var(--color-accent)",
          hover: "var(--color-accent-hover)",
          soft: "var(--color-accent-soft)",
          dim: "rgba(0,112,242,0.15)",
        },
        // SAP full palette
        "sap-blue": {
          1: "var(--sap-blue-1)",
          2: "var(--sap-blue-2)",
          3: "var(--sap-blue-3)",
          4: "var(--sap-blue-4)",
          5: "var(--sap-blue-5)",
          6: "var(--sap-blue-6)",
          7: "var(--sap-blue-7)",
          8: "var(--sap-blue-8)",
          9: "var(--sap-blue-9)",
          10: "var(--sap-blue-10)",
          11: "var(--sap-blue-11)",
        },
        "sap-grey": {
          1: "var(--sap-grey-1)",
          2: "var(--sap-grey-2)",
          3: "var(--sap-grey-3)",
          4: "var(--sap-grey-4)",
          5: "var(--sap-grey-5)",
          6: "var(--sap-grey-6)",
          7: "var(--sap-grey-7)",
          8: "var(--sap-grey-8)",
          9: "var(--sap-grey-9)",
          10: "var(--sap-grey-10)",
          11: "var(--sap-grey-11)",
        },
        "sap-teal": {
          5: "var(--sap-teal-5)",
          6: "var(--sap-teal-6)",
        },
        "sap-green": {
          5: "var(--sap-green-5)",
          6: "var(--sap-green-6)",
        },
        "sap-mango": {
          5: "var(--sap-mango-5)",
          6: "var(--sap-mango-6)",
        },
        "sap-red": {
          5: "var(--sap-red-5)",
          6: "var(--sap-red-6)",
        },
        gold: {
          DEFAULT: "var(--sap-mango-5)",
          dim: "rgba(231,140,7,0.12)",
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
            a: { color: "var(--color-accent)" },
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
