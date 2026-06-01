/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				motus: {
					50: '#e8f2fa',
					100: '#bad2e4',
					200: '#7ab0d4',
					300: '#3d8fc4',
					400: '#0b60a3',
					500: '#095591',
					600: '#074a78',
					700: '#063a63',
					800: '#042a4a',
					900: '#021a31',
				},
			},
			fontFamily: {
				sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
				display: ['var(--font-roboto)', 'system-ui', 'sans-serif'],
			},
		},
	},
	plugins: [],
};
