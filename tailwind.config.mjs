/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Afacad", "sans-serif"],
        aboreto: ["Aboreto", "serif"],
        afacad: ["Afacad", "sans-serif"],
      },
      colors: {
        primary: {
          white: "#FFFFFF",
          pink: "#C57E81",
          brown: "#5F5B52",
        },
      },
      screens: {
        xxs: "320px",
        xs: "425px",
      },
      letterSpacing: {
        wider: "0.05em",
        widest: "0.15em",
      },
    },
  },
  plugins: [],
};
