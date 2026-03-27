/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#002147",
          light: "#003864",
        },
        gold: {
          DEFAULT: "#D4AF37",
          dark: "#B58233",
        },
        blue: {
          DEFAULT: "#00AEEF",
          dark: "#0096CE",
          light: "#DAF2FA",
        },
      },
      fontFamily: {
        dancing: ["var(--font-dancing-script)", "cursive"],
        playfair: ["var(--font-playfair-display)", "serif"],
        opensans: ["var(--font-open-sans)", "sans-serif"],
        petrona: ["var(--font-petrona)", "serif"],
        sans: ["var(--font-open-sans)", "system-ui", "sans-serif"],
        serif: ["var(--font-playfair-display)", "Georgia", "serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
