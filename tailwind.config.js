/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#F5F7F3',
          100: '#E2E7DD',
          200: '#D0D7C8',
          300: '#BEC7B3',
          400: '#ABB79E',
          500: '#97A789', // Main primary color
          600: '#839570',
          700: '#6F7E56',
          800: '#5A6744',
          900: '#454F33',
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