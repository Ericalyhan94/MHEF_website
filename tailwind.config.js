/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
serif_title:["DM Serif Display"],
sans :["Merriweather Sans"],
lato:["Lato"],
}
},
  },
  plugins: [],
}