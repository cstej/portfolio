/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primarydark: "rgba(0, 8, 61, 1)",
        primarygray: "rgba(91, 110, 128, 1)",
        primaryblue: "#0062ff",
      },
    },
  },
  plugins: [],
};
