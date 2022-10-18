/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#2188D9",
        "primary-dark": "#1773BB",
        "main-text": '#060C1B',
        "success": "#53D86A",
        "error": "#FF3D00",
        "disable":"#B8B9BC",
        "gray-border":"#ECECED"
        
      }
    },
  },
  plugins: [],
}
