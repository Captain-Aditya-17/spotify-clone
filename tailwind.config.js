/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-to-60deg': 'linear-gradient(-60deg, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}

