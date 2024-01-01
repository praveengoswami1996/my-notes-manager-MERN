import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './core/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'landing-page': "url('/landing-page-bg.jpg')",
      },
      colors: {
        primary: '#0081a7',
        secondary: '#028090',
      },
      boxShadow: {
        "box": "rgba(0, 0, 0, 0.15) 0px 2px 8px",
      }
    },
  },
  plugins: [],
}

export default config;
