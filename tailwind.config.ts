import type { Config } from 'tailwindcss'

export default {
    darkMode: ['class'],
    content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
  	extend: {
  		colors: {
  			background: 'var(--background)',
  			foreground: 'var(--foreground)',
  			'black-primary': '#292826',
  			'white-primary': '#f0f0f0',
  			'yellow-primary': '#f8d78f',
  			'black-secondary': '#1e1e1e',
  			'white-secondary': '#fafafa',
  			'yellow-secondary': '#f2df6b'
  		},
  		fontFamily: {
  			libre: [
  				'var(--font-libre-baskerville)'
  			],
  			josefin: [
  				'var(--font-josefin-sans)'
  			]
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config
