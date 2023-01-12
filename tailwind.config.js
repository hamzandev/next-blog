/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: "Poppins, Arial, sans-serif",
      },
      colors: {
        primary: "#38D58C",
        secondary: "#22d3ee",
      },
    },
  },
  plugins: [],
};
