/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      googleFonts : ["Outfit", "sans-serif"],
      remoteResourceFont : ["Tinos", "serif"]
    }
  },
  plugins: [],
}

