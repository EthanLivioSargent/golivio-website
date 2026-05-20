import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx,mdx}", "./components/**/*.{ts,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        cream: { DEFAULT: "#f7f7f2", 50: "#fbfbf7", 100: "#f7f7f2", 200: "#eeece4" },
        sky:   { DEFAULT: "#e8f1fb", 50: "#f1f7fc", 100: "#e8f1fb", 200: "#d0e2f3" },
        navy:  { DEFAULT: "#1a3358", 700: "#16284a", 800: "#0f2444", 900: "#0a1d3b" },
        ink:   { DEFAULT: "#050810", 800: "#0a0e1a", 900: "#050810" },
        text: { hi: "#0a1628", base: "#1f2937", mid: "#4b5563", low: "#6b7280", dim: "#9ca3af" },
        invert: { hi: "#ffffff", base: "#f1f5f9", mid: "#cbd5e1", low: "#94a3b8", dim: "#64748b" },
        gold: { DEFAULT: "#FFC107", 50: "#fff8e0", 100: "#ffeaa3", 400: "#ffcf3a", 500: "#FFC107", 600: "#e6ac00", 700: "#b88800" },
        line:     "rgba(10,22,40,0.08)",
        line2:    "rgba(10,22,40,0.16)",
        lineDark: "rgba(255,255,255,0.08)",
        lineDark2: "rgba(255,255,255,0.16)",
      },
      fontFamily: {
        // One typeface across the whole site — Helvetica everywhere.
        // `mono` is kept as a token name but maps to the same Helvetica stack,
        // so any `font-mono` element still renders in Helvetica.
        sans: ['"Helvetica Neue"', "Helvetica", "Arial", '"Liberation Sans"', "system-ui", "sans-serif"],
        mono: ['"Helvetica Neue"', "Helvetica", "Arial", '"Liberation Sans"', "system-ui", "sans-serif"],
      },
      maxWidth: { page: "1200px", prose: "68ch" },
      backgroundImage: {
        "grid-light": "linear-gradient(rgba(10,22,40,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(10,22,40,0.05) 1px, transparent 1px)",
        "grid-light-fine": "linear-gradient(rgba(10,22,40,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(10,22,40,0.04) 1px, transparent 1px)",
        "grid-dark": "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
        "grid-dark-fine": "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
        "gold-radial": "radial-gradient(ellipse at center, rgba(255,193,7,0.22) 0%, transparent 60%)",
        "sky-radial": "radial-gradient(ellipse at center, rgba(59,130,246,0.18) 0%, transparent 60%)",
      },
      backgroundSize: { grid24: "24px 24px", grid32: "32px 32px", grid48: "48px 48px" },
      keyframes: {
        fadeUp: { "0%": { opacity: "0", transform: "translateY(22px)" }, "100%": { opacity: "1", transform: "translateY(0)" } },
        fadeIn: { "0%": { opacity: "0" }, "100%": { opacity: "1" } },
        glow:   { "0%,100%": { opacity: "0.32" }, "50%": { opacity: "0.55" } },
        ticker: { "0%": { transform: "translateX(0)" }, "100%": { transform: "translateX(-50%)" } },
        cursor: { "0%,49%": { opacity: "1" }, "50%,100%": { opacity: "0" } },
        scan:   { "0%": { transform: "translateY(-100%)" }, "100%": { transform: "translateY(100%)" } },
      },
      animation: {
        "fade-up": "fadeUp 0.65s ease both",
        "fade-in": "fadeIn 0.6s ease both",
        glow:      "glow 4.5s ease-in-out infinite",
        ticker:    "ticker 42s linear infinite",
        cursor:    "cursor 1s steps(2) infinite",
        scan:      "scan 6s linear infinite",
      },
      boxShadow: {
        elev:  "0 30px 80px -20px rgba(10,22,40,0.18), 0 14px 28px -10px rgba(10,22,40,0.10)",
        elev2: "0 24px 60px -16px rgba(10,22,40,0.22), 0 10px 20px -8px rgba(10,22,40,0.12)",
        card:  "0 1px 0 rgba(10,22,40,0.04), 0 8px 24px -12px rgba(10,22,40,0.12)",
        gold:  "0 0 40px rgba(255,193,7,0.14)",
        ring:  "0 0 0 4px rgba(255,193,7,0.18)",
      },
    },
  },
  plugins: [],
};

export default config;
