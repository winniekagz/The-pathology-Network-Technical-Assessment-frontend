/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",


    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "blue":"#007fff",
        "dark-blue":"#17224d",
        "light":"#f5fafa",
        "blue-green":"#17e9e1",

        //////////////////
        "mustard":"#ffb94b",
        "light-blue":"#28b2c7",
        "mid-blue":"#2b8d9c",
        "dark-blue-2":"#33546c"
      },
      fontSize: {
        sm: '0.8rem',
        base: '1rem',
        xl: '1.25rem',
        '2xl': '1.563rem',
        '3xl': '1.953rem',
        "normal": "20px",
        "sub-header": "24px",
        'header': '32px',
        'logo': ' 48px',
      },
      borderRadius: {
        'none': '0',
        'sm': '0.125rem',
        DEFAULT: '0.25rem',
        DEFAULT: '4px',
        'md': '0.375rem',
        'lg': '0.5rem',
        'full': '9999px',
        'custom-inner': '16px',
        'custom-outer': '16px',
      }
    },
  },
  plugins: [],
}

