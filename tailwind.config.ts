import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx,mdx}", "./components/**/*.{ts,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        bg: {
          base: "#070b14",
          deep: "#0a0e1a",
          panel: "#0f172a",
          surface: "#161e2e",
          raised: "#1e293b",
        },
        ink: {
          hi: "#ffffff",
          base: "#e2e8f0",
          mid: "#cbd5e1",
          low: "#94a3b8",
          dim: "#64748b",
          ghost: "#475569",
        },
        gold: {
          DEFAULT: "#FFC107",
          50: "#fff8e0",
          100: "#ffeaa3",
          400: "#ffcf3a",
          500: "#FFC107",
          600: "#e6ac00",
          700: "#b88800",
        },
        line: "rgba(148,163,184,0.10)",
        line2: "rgba(148,163,184,0.18)",
      },
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
        mono: [
          "JetBrains Mono",
          "SF Mono",
          "Menlo",
          "Monaco",
          "Consolas",
          "ui-monospace",
          "monospace",
        ],
      },
      maxWidth: {
        page: "1200px",
        prose: "68ch",
      },
      backgroundImage: {
        "blueprint-grid":
          "linear-gradient(rgba(148,163,184,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.06) 1px, transparent 1px)",
        "gold-radial":
          "radial-gradient(ellipse at center, rgba(255,193,7,0.18) 0%, transparent 60%)",
        "panel-grad":
          "linear-gradient(180deg, rgba(255,193,7,0.05) 0%, rgba(255,193,7,0.01) 60%, #0f172a 100%)",
      },
      backgroundSize: {
        grid24: "24px 24px",
        grid48: "48px 48px",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(22px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        glowPulse: {
          "0%,100%": { opacity: "0.32" },
          "50%": { opacity: "0.55" },
        },
        ticker: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        cursorBlink: {
          "0%,49%": { opacity: "1" },
          "50%,100%": { opacity: "0" },
        },
        scan: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100%)" },
        },
      },
      animation: {
        "fade-up": "fadeUp 0.65s ease both",
        "fade-in": "fadeIn 0.6s ease both",
        glow: "glowPulse 4.5s ease-in-out infinite",
        ticker: "ticker 38s linear infinite",
        cursor: "cursorBlink 1s steps(2) infinite",
        scan: "scan 6s linear infinite",
      },
      boxShadow: {
        gold: "0 0 36px rgba(255,193,7,0.10)",
        elev: "0 30px 80px -20px rgba(0,0,0,0.55), 0 14px 28px -10px rgba(0,0,0,0.4)",
      },
    },
  },
  plugins: [],
};

export default config;
