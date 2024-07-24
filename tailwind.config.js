/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}','node_modules/flowbite-react/lib/esm/**/*.js'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        'custom-green': '#15803D',
        'grey': '#3d4249',
      }
    },
  },
  plugins: [],
};
