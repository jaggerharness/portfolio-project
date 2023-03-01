/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'ws-black': '#1A1A1D',
        'ws-gray': '#4E4E50',
        'ws-crimson': '#6F2232',
        'ws-pink': '#950740',
        'ws-red': '#C3073F',
      }
    },
  },
  plugins: [],
}
