/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        lightBlue: '#D2F0FC',
        primary: '#2DA0D9',
        secondary: '#013151',
        lightRed: '#CC0000',
        danger: '#FF0000',
        accent: '#10B981',
        background: '#F3F4F6',
        text: '#374151',
      },
      backgroundImage: {
        'blue-gradient': 'linear-gradient(90deg, #2DA0D9 0%, #28D4FF 100%)',
      },
      borderRadius: {
        '2.5xl': '20px',
      },
      fontFamily: {
        'alexandria': ['Alexandria', 'sans-serif'],
        'albert-sans': ['Albert Sans', 'sans-serif'],
        'rethink-sans': ['Rethink Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}