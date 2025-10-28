/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["BV Celine", "serif"],
        avenir: ["Avenir", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
        "bv-celine": ["BV Celine", "serif"],
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
