/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", // ✅ Enables dark mode with a class
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        darkPurple: "#27013D", // ✅ Custom dark mode color
        "deep-purple": "#27013D",
        "neon-pink": "#EA00FF",
        "royal-purple": "#4A0572",
        "dark-violet": "#32004F",
        "soft-cream": "#FEF8F0",
        "light-gray": "#D9D9D9",
        "pure-white": "#FFFFFF",
        "warm-white": "#FFFFE2",
        brown: "#752D06",
        white: "#FFFFFF",
        black: "#000000",
      },
    },
  },
  plugins: [],
};
