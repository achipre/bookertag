/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'holdwood': 'Holtwood'
      },
      colors: {
        'primary': '#4F6F52'
      }

    },
  },
  plugins: [],
}

