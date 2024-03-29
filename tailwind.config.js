/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily:{
        satisfy:"var(--font-satisfy)",
        elsie:"var(--font-elsie)",
        trochut:"var(--font-trochut)"

      },
      colors:{
        'primary':"#0088ff",
        'crow':"#222222",
        'seagull':"#bbbbbb"
      }
    },
  },
  plugins: [],
}