/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          50: '#f0f7f0',
          100: '#dcefdc',
          200: '#b8dfb8',
          300: '#8cc98c',
          400: '#5aab5a',
          500: '#2E7D32',
          600: '#1B5E20',
          700: '#174e1a',
          800: '#133f15',
          900: '#0f3311',
        },
        leaf: {
          400: '#81C784',
          500: '#4CAF50',
          600: '#388E3C',
        },
        gold: {
          400: '#FFD54F',
          500: '#FFC107',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
};
