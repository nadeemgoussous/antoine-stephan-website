import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2C2C2C',
          light: '#444444',
        },
        accent: {
          DEFAULT: '#B8956A',
          dark: '#8B7355',
        },
        background: {
          DEFAULT: '#FAFAF8',
          white: '#FFFFFF',
        },
        text: {
          DEFAULT: '#333333',
          light: '#666666',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-playfair)', 'Georgia', 'serif'],
      },
      fontSize: {
        'display': ['56px', { lineHeight: '1.2', fontWeight: '400' }],
        'h1': ['48px', { lineHeight: '1.2', fontWeight: '400' }],
        'h2': ['36px', { lineHeight: '1.3', fontWeight: '400' }],
        'h3': ['24px', { lineHeight: '1.4', fontWeight: '500' }],
        'body': ['18px', { lineHeight: '1.7', fontWeight: '400' }],
        'body-sm': ['16px', { lineHeight: '1.6', fontWeight: '400' }],
      },
      spacing: {
        'section': '120px',
        'section-sm': '80px',
      },
      maxWidth: {
        'content': '1400px',
      },
    },
  },
  plugins: [],
};
export default config;
