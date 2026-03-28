/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#1E3A8A', // Deep Blue
          teal: '#0D9488', // Teal
          green: '#10B981', // Soft Green
          orange: '#F97316' // Warm Orange
        }
      }
    },
  },
  plugins: [],
}
