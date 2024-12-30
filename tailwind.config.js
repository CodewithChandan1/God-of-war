/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'gow-red': '#dc2626',
        'gow-gold': '#d4af37',
      },
      fontFamily: {
        norse: ['Norse', 'serif'],
      },
    },
  },
  plugins: [],
};