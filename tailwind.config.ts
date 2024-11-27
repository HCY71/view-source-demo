import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        "3xl": "1920px",
      },
      colors: {
        locavore: {
          black: "#000000",
          paperWhite: "#FFFCF6",
          postItGreen: "#DAFFBD",
          newsPrint: "#F3F1ED",
        },
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        fakeReceipt: [
          "var(--font-fake-receipt)",
          "Arial",
          "Helvetica",
          "sans-serif",
        ],
        arialRounded: [
          "var(--font-arial-rounded)",
          "Arial",
          "Helvetica",
          "sans-serif",
        ],
        ppNeueMontreal: [
          "var(--font-pp-neue-montreal)",
          "Arial",
          "Helvetica",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
};
export default config;
