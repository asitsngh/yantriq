/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        canvas: '#070D0B',
        surface: {
          DEFAULT: '#0E1714',
          2: '#172119',
        },
        brand: {
          teal: '#2F4F45',
          light: '#3D6B5E',
          burgundy: '#5F0F12',
        },
        ink: {
          DEFAULT: '#F1F5F4',
          muted: '#9DB5AF',
        },
        edge: {
          DEFAULT: '#1F2E2A',
          accent: '#2F4F45',
        },
      },
      fontFamily: {
        heading: ['"Big Shoulders Display"', 'sans-serif'],
        body: ['Saira', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
