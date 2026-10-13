import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        bg: "#070707",
        panel: "#121212",
        text: "#f5f1ea",
        muted: "#c4b9ae",
        line: "rgba(245,241,234,0.12)",
        accent: "#b5101f",
        accentSoft: "#d31f36"
      },
      boxShadow: {
        glow: "0 0 40px rgba(190, 23, 39, 0.3)"
      },
      fontFamily: {
        sans: ["Arial", "Helvetica Neue", "sans-serif"],
        mono: ["SFMono-Regular", "Consolas", "monospace"]
      },
      letterSpacing: {
        tightest: "-0.12em"
      }
    }
  },
  plugins: []
};

export default config;
