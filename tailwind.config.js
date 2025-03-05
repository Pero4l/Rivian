 /** @type {import('tailwindcss').Config} */
 export default {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        'custom':["Anton", "sans-serif"],
      }
    },
  },
  plugins: [],
}