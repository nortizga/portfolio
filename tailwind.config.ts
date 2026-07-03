import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        charcoal: '#272727',
        blue: {
          DEFAULT: '#2B50AA',
          dark: '#1e3a7a',
          light: '#4a6fc4',
        },
        pink: {
          bright: '#FF9FE5',
          soft: '#FFD4D4',
          coral: '#FF858D',
        },
      },
      fontFamily: {
        display: ["'Playfair Display'", 'Georgia', 'serif'],
        body: ["'DM Sans'", 'sans-serif'],
        mono: ["'DM Mono'", 'monospace'],
      },
    },
  },
  plugins: [],
};

export default config;
