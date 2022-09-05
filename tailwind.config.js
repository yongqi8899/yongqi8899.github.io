/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.{html,js}"
  ],
  theme: {
    colors: {
      'tiber': '#314954',
      'elephant': '#0c383e',
      'gold': '#b39678',
    },
    fontFamily: {
      "Montserrat": ["Montserrat", "sans-serif"]
    },
    extend: {
      height: {
        '700px': '700px',
        '1280': '320rem',

      }
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}
