/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx, ts, tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'fundo': 'f6f1ed',
        'branco': "#ffff",
        'preto': "#000",
        'verde1': '#1b1e18',
        'verde2': '#121410',

        'fundo-dark': '#121410',
        'branco-dark': '#f6f1ed',
        'preto-dark': '#fff',
        'cinza-dark': '#a0a0a0',
        'vermelho-dark': '#730f0f',
        'verde1-dark': '#f9f9f9',
        'verde2-dark': '#1b1e18',
        'creme1-dark': '#b9b3ac',
        'creme2-dark': '#d7d1cb',

      },
      fontFamily: {
        sans: ['Karma', 'sans-serif'],
        serif: ['Older Dictator', 'serif']
      }
    },
  },
  plugins: [],
}

