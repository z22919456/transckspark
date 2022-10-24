/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('tailwindcss').Config} */
const tailwindcssRadix = require('tailwindcss-radix');
const typography = require('@tailwindcss/typography');
const lineClamp = require('@tailwindcss/line-clamp');

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
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
      // typography: {
      //   DEFAULT: {
      //     css: {
      //       color: '#191B20',
      //       a: {
      //         color: '#004EFF',
      //         '&hover': {
      //           color: '#191B2090',
      //         },
      //       },
      //       h1: {
      //         font
      //       }
      //     },
      //   },
      // },
      colors: {
        primary: 'var(--primary-color)',
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
      keyframes: {
        slideDown: {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        slideUp: {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        slideUpAndFade: {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideRightAndFade: {
          '0%': { opacity: '0', transform: 'translateX(-8px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideDownAndFade: {
          '0%': { opacity: '0', transform: 'translateY(-8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideLeftAndFade: {
          '0%': { opacity: '0', transform: 'translateX(8px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        contentShow: {
          '0%': { opacity: '0', transform: 'translate(-50%, -48%) scale(.96)' },
          '100%': { opacity: '1', transform: 'translate(-50%, -50%) scale(1)' },
        },
        overlayShow: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        enterFromRight: {
          from: { transform: 'translateX(200px)', opacity: '0' },
          to: { transform: 'translateX(0)', opacity: '1' },
        },
        enterFromLeft: {
          from: { transform: 'translateX(-200px)', opacity: '0' },
          to: { transform: 'translateX(0)', opacity: '1' },
        },
        exitToRight: {
          from: { transform: 'translateX(0)', opacity: '1' },
          to: { transform: 'translateX(200px)', opacity: '0' },
        },
        exitToLeft: {
          from: { transform: 'translateX(0)', opacity: '1' },
          to: { transform: 'translateX(-200px)', opacity: '0' },
        },
        scaleIn: {
          from: { transform: 'rotateX(-30deg) scale(0.9)', opacity: '0' },
          to: { transform: 'rotateX(0deg) scale(1)', opacity: '1' },
        },
        scaleOut: {
          from: { transform: 'rotateX(0deg) scale(1)', opacity: '1' },
          to: { transform: 'rotateX(-10deg) scale(0.95)', opacity: '0' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        fadeOut: {
          from: { opacity: '1' },
          to: { opacity: '0' },
        },
      },
      animation: {
        'slide-down': 'slideDown 300ms cubic-bezier(0.87, 0, 0.13, 1)',
        'slide-up': 'slideUp 300ms cubic-bezier(0.87, 0, 0.13, 1)',
        'slide-up-fade': 'slideUpAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
        'slide-down-fade': 'slideDownAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
        'slide-right-fade': 'slideRightAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
        'slide-left-fade': 'slideLeftAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
        'overlay-show': 'overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1)',
        'content-show': 'contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1)',
        'enter-from-left': 'enterFromLeft 200ms ease',
        'enter-from-right': 'enterFromRight 200ms ease',
        'exit-from-left': 'exitFromLeft 200ms ease',
        'exit-from-right': 'exitFromRight 200ms ease',
        'scale-in': 'scaleIn 200ms ease',
        'scale-out': 'scaleOut 200ms ease',
        'fade-in': 'fadeIn 200ms ease',
        'fade-out': 'fadeOut 200ms ease',
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
  plugins: [
    tailwindcssRadix({
      variantPrefix: 'rdx',
    }),
    typography,
    lineClamp,
  ],
};
