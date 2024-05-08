/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#1C1C1C",
        "primary_hover": "#4E4E4E",
        "secondary": "#FFFFFF",
        "secondary_hover": "#EAEAEA"
      },
      animation: {
        slide: 'slide ease-in-out'
      }
    },
  },
  keyframes: {
    slide: {
      '0%': { transform: 'translateX(100%)' },
      '100%': { transform: 'translateX(-100%)' },
    },
  },
  plugins: [],
}