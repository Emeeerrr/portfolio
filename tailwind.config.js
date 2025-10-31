const { heroui } = require("@heroui/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ["Inter", "sans-serif"],
        body: ["Poppins", "sans-serif"]
      },
      transitionProperty: {
        'transform-shadow': 'transform, box-shadow'
      }
    }
  },
  plugins: [
    heroui({
      themes: {
        light: {},
        dark: {}
      }
    })
  ],
};
