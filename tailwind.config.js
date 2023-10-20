/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container:{
      center: true,
    },

    extend: {
      colors:{
        blue:"#068fff",
        orginal:'#e3e9fa',
        hover:'#5db5fc'
      }
    },
  },
  plugins: [],
}