import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors:{
        primary: '#000080',
        secondary: '#6A5ACD',
        tertiary: '#008080',
        disabled: '#F8F8FF',
      },
      backgroundColor:{
        light: '#fff',
        dark: '#000',
        disabled: '#F8F8FF',
      },
      textColor:{
          primary: '#fff',
          secondary: '#ff0',
          tertiary: '#000',
          disabled: '#000',
      },
    },
  },
  plugins: [],
}
export default config
