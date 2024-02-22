/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      textColor: {
        dark: "#ffffff", // Text color for dark theme
        light: "#000000", // Text color for light theme
      },
      backgroundColor: {
        black: "#141414",
      },
    },
  },
  plugins: [],
};
