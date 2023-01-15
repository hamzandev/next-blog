/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mona: "Mona-Sans, Poppins, Arial, sans-serif",
        poppins: "Poppins, Arial, sans-serif",
      },
      colors: {
        primary: "#38D58C",
        secondary: "#22d3ee",
      },
      animation: {
        "slow-spin": "spin 5s linear infinite",
      },
    },
  },
  plugins: [],
};
