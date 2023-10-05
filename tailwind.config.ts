import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'dark-black': '#040D12',
        'dark-green': '#183D3D',
        'medium-green': '#5C8374',
        'sap-green': '#5C8374',
        'light-sap-green': '#93B1A6',
        'light-green': '#B4D9B1',
        'light-green-bg': '#D0E7D2',
        'light-beige': '#FBF8F1',

      },
      fontFamily: {
        'galada': ['Galada', 'cursive'],
        'poppins': ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        "dark": '0.5rem 0.5rem #040D12',
        "light": '0.5rem 0.5rem #FBF8F1',
      }
    },
  },
  plugins: [],
}
export default config
