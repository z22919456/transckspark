/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    fontFamily: {
      sans: ['Noto Sans HK', 'sans-serif', '-apple-system'],
      serif: ['Noto Sans HK', 'sans-serif', '-apple-system'],
      mono: ['Noto Sans HK', 'sans-serif', '-apple-system'],
      display: ['Noto Sans HK', 'sans-serif', '-apple-system'],
      body: ['Noto Sans HK', 'sans-serif', '-apple-system'],
    },
    extend: {
      colors: {
        default: '#191B20',
        about: '#FF5C4A',
        news: '#E0E404',
        competition: '#004EFF',
        judge: '#04E4AE',
        shortlist: '#FFC700',
        activity: '#B9FF24',
        question: '#FF005C',
        exhibition: '#606060',
        footer: '#1F63FF',
      }
    },
  },
  plugins: [],
}
