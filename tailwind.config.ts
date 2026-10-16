import type { Config } from 'tailwindcss';

export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        coffee: {
          DEFAULT: '#654321',
          50: '#f7f1ec',
          100: '#ecdfd1',
          200: '#d8bfa3',
          300: '#c39d76',
          400: '#a97c52',
          500: '#8a5f3b',
          600: '#654321',
          700: '#4f351a',
          800: '#3a2713',
          900: '#26190c',
        },
        navy: {
          DEFAULT: '#172554',
          50: '#eef1f8',
          100: '#d6ddee',
          200: '#adbadd',
          300: '#8497cb',
          400: '#5b74ba',
          500: '#3a53a0',
          600: '#172554',
          700: '#121d43',
          800: '#0d1632',
          900: '#080e21',
        },
        cream: {
          DEFAULT: '#FFF1DC',
          soft: '#FFF8EE',
        },
        caramel: '#C97820',
        ink: {
          900: '#1F2937',
          700: '#374151',
        },
      },
      fontFamily: {
        sans: ['Raleway', 'system-ui', 'sans-serif'],
        display: ['"Playfair Display"', 'Georgia', 'serif'],
      },
      maxWidth: {
        content: '1280px',
      },
      boxShadow: {
        soft: '0 4px 24px -6px rgba(31, 41, 55, 0.12)',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        fadeUp: 'fadeUp 400ms ease-out both',
      },
    },
  },
  plugins: [],
} satisfies Config;
