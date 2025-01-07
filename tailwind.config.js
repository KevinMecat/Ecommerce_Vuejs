/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  extend: {
    fontFamily: {
      sans: ['Arial', 'Helvetica', 'sans-serif'], // Fuentes personalizadas
    },
  },
  plugins: [],
}

