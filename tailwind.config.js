/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/Pages/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors:{
        'slate-950': '#000'
      }
    },
  },
  plugins: [],
}

