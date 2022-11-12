/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        "tex":"TexRound MM",
        "ware":"WAREHOUSE PROJECT",
        "yum":"yum",
        "ancient":"Ancient One",
        "aalb":"Aalbasta",
        "bolde":"Bolde Rough",
        "nicker":"Nickerbocker NF",
        "sqm":"square-millimeter",
      }
    },
  },
  plugins: [],
}