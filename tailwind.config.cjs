/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'ws-deep-purple': '#0C0032',
        'ws-purple': '#190061',
        'ws-deep-blue': '#240090',
        'ws-blue': '#3500D3',
        'ws-black': '#282828',
      }
    },
  },
  plugins: [],
}
