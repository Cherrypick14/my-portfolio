/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkBlue: {
          100: '#e0f2ff',
          200: '#b3daff',
          300: '#80c2ff',
          400: '#4daaff',
          500: '#1a92ff',
          600: '#0077e6',
          700: '#005bb3',
          800: '#004080',
          900: '#00264d',
        },
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)',
        'footer-gradient': 'linear-gradient(90deg, rgba(0,212,255,1) 0%, rgba(9,9,121,1) 35%, rgba(2,0,36,1) 100%)',
      },
    },
  },
  plugins: [],
};
