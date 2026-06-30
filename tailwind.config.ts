import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: "#F7F4ED",
        white: "#FFFFFF",
        "border-light": "#E8E5D8",
        "dusty-rose": {
          DEFAULT: "#D8B4C0",
          glow: "#D8B4C030",
          dim: "#C49EAB",
        },
        charcoal: "#242424",
        gold: "#C7A86B",
        danger: "#FF4C4C",
      },
      fontFamily: {
        montserrat: ["var(--font-montserrat)", "sans-serif"],
      },
      fontSize: {
        h1: [
          "64px",
          { fontWeight: "700", lineHeight: "1.1" },
        ],
        h2: [
          "40px",
          { fontWeight: "600", lineHeight: "1.2" },
        ],
        h3: [
          "24px",
          { fontWeight: "600", lineHeight: "1.3" },
        ],
        "body-lg": [
          "18px",
          { fontWeight: "400", lineHeight: "1.7" },
        ],
        body: [
          "16px",
          { fontWeight: "400", lineHeight: "1.7" },
        ],
        caption: [
          "13px",
          { fontWeight: "500", lineHeight: "1.4", letterSpacing: "0.08em" },
        ],
      },
      borderRadius: {
        card: "12px",
        button: "8px",
        pill: "999px",
      },
      boxShadow: {
        "card-hover": "0 10px 40px #24242410",
        "cta-glow": "0 0 20px #D8B4C050",
      },
      spacing: {
        "section-y": "120px",
        "section-y-mobile": "80px",
      },
    },
  },
  plugins: [],
};
export default config;
