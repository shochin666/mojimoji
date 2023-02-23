/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        NotoSansJp: ["Noto Sans JP", "sans - serif"],
        FredokaOne: ["Fredoka One", "cursive"],
      },
    },
  },
  plugins: [],
};
