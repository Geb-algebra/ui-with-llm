import type { Config } from 'tailwindcss';

export default {
  content: ['./app/**/*.{ts,tsx,jsx,js}'],
  theme: {
    extend: {
      colors: {
        primary: '#004B70',
        secondary: '#9FA8B0',
        accent: '#FF7043',
      },
    },
  },
  plugins: [],
} satisfies Config;
