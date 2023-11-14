import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './component/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        body: [" var(--font-plusJaka)"],
      },

      backgroundImage: {
        'green-banner': "url('/image/bg-green.svg')",
        'login-bg': "url('/image/login_bg.png",
      },

      colors: {
        Dark_Green: "#003B33",
        lazy_Gold: "#BFA724",
        Black_text: "#1B1B1B",
      },
    },
  },
  plugins: [],
}
export default config
