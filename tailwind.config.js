/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", // ✅ Enables dark mode with a class
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        darkPurple: "#27013D", // ✅ Custom dark mode color
      },
    },
  },
  plugins: [],
};
