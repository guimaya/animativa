import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('../../public/background-hero.jpg')",
        warner: "url('../../public/background-warner.jpg')"
      },
      fontFamily: {
        heading: ['var(--font-heading)']
      },
      colors: {
        'custom-green': '#CDFF46',
        'custom-yellow': '#FFF528'
      }
    }
  },
  plugins: []
}
export default config
