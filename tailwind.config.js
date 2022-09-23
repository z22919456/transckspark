/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    fontFamily: {
      sans: ['Work Sans', 'Noto Sans HK', '-apple-system'],
      serif: ['Work Sans', 'Noto Sans HK', '-apple-system'],
      mono: ['Work Sans', 'Noto Sans HK', '-apple-system'],
      display: ['Work Sans', 'Noto Sans HK', '-apple-system'],
      body: ['Work Sans', 'Noto Sans HK', '-apple-system'],
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
      },
      // keyframes: {
      //   slideUp: {
      //     from: { translate: 'transform(0,0)', opacity: 1 },
      //     to: { translate: 'transform(0,-100%)', opacity: 0 },
      //   },
      //   slideDown: {
      //     from: { translate: 'transform(0,-100%)', opacity: 0 },
      //     to: { translate: 'transform(0,0)', opacity: 1 },
      //   },
      // },
      // animation: {
      //   'slide-down': 'slideDown 300ms cubic-bezier(0.87, 0, 0.13, 1)',
      //   'slide-up': 'slideDown 300ms cubic-bezier(0.87, 0, 0.13, 1)',
      // }
    },
  },
  plugins: [],
}
