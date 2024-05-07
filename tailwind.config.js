/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins'],
        'holdwood': ['Holtwood'],
        'arvo': ['Arvo'],
      },
      colors: {
        'primary': '#4F6F52',
        'secondary': '#D2E3C8'
      }

    },
  },
  plugins: [],
}

