import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
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
    },
  },
  plugins: [],
}

export default config;
