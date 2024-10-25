/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        "gray-20": "#F8F4EB",
        "gray-50": "#EFE6E6",
        "gray-100": "#DFCCCC",
        "gray-500": "#5E0000",
        "primary-100": "#facc15",
        "primary-300": "#FFA6A3",
        "primary-500": "#facc15",
        "secondary-400": "#FFCD5B",
        "secondary-500": "#FFC132",
      },
     
      
      fontFamily: {
        dmsans: ["DM Sans", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },

    },
  },
  plugins: [],
}
