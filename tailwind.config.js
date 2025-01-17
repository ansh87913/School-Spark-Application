const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'cream-light': '#f5f5dc', // Adding light cream color
      },
      keyframes: {
        slide: {
          "0%": {
            transform: "translateY(-30px)",
            opacity: "0.1",
          },
          "70%": {
            transform: "translateY(10px)",
          },
          "100%": {
            transform: "translateY(0px)",
            opacity: "1",
          },
        },
        circle: {
          "50%": {
            transform: "scale(0.99)",
            opacity: "0.9",
          },
        },
        fadeIn: {
          "0%": {
            opacity: "0.1",
          },
          "100%": {
            opacity: "1",
          },
        },
      },
      fontFamily: {
        spectral: ["Spectral SC", ...defaultTheme.fontFamily.serif],
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
      animation: {
        slide: "slide 0.2s ease-in-out 1",
        fadeIn: "fadeIn 1s ease-in-out 1",
        fadeInFast: "fadeIn 0.5s ease-out 1",
        circle: "circle 5s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
    },
  },
  plugins: [],
};
