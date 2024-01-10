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
        warner: "url('/img/footer-texture.png')"
      },
      fontFamily: {
        heading: ['var(--font-heading)']
      }
    }
  },
  plugins: []
}
export default config
