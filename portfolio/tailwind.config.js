/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#4ade80',
        'background-light': '#fcfcfc',
        'background-dark': '#122017',
      },
      fontFamily: {
        display: ['Space Grotesk', 'sans-serif'],
      },
      borderRadius: {
        DEFAULT: '0.125rem',
        lg: '0.25rem',
        xl: '0.5rem',
        full: '0.75rem',
      },
      borderWidth: {
        4: '4px',
        6: '6px',
      },
      boxShadow: {
        neo: '8px 8px 0px 0px #000',
        'neo-sm': '4px 4px 0px 0px #000',
        'neo-active': '2px 2px 0px 0px #000',
      },
    },
  },
  plugins: [],
}
