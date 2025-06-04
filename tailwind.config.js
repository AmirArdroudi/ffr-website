/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#FDF8F5',
          100: '#F9E8E0',
          200: '#F3D0C2',
          300: '#ECBAA4',
          400: '#E5A387',
          500: '#DE8D69', // Main primary color
          600: '#D06F45',
          700: '#B4582F',
          800: '#8F4626',
          900: '#6A341D',
        },
        secondary: {
          50: '#F9F7F5',
          100: '#EFE9E4',
          200: '#DFD3CA',
          300: '#CFBEB0',
          400: '#BFA896',
          500: '#AF937C', // Main secondary color
          600: '#997F6A',
          700: '#7D6654',
          800: '#5F4D3F',
          900: '#41342B',
        },
        neutral: {
          50: '#FAFAFA',
          100: '#F4F4F4',
          200: '#E8E8E8',
          300: '#DCDCDC',
          400: '#B8B8B8',
          500: '#999999',
          600: '#666666',
          700: '#474747',
          800: '#292929',
          900: '#0F0F0F',
        },
      },
      fontFamily: {
        display: ['Cormorant Garamond', 'serif'],
        body: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
};