/**
 * @format
 * @type {import('tailwindcss').Config}
 */

module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
			dropShadow: {
				neon: '0px -1px 10px #D99330',
				'neon-sm': '0px -1px 5px #D99330',
				down: '0px 4px 4px rgba(217, 147, 48, 0.2)',
			},
			listStyleType: {
				none: 'none',
				disc: 'disc',
				decimal: 'decimal',
				square: 'square',
				roman: 'upper-roman',
			},
		},

		screens: {
			sm: '640px',
			md: '768px',
			lg: '1024px',
			xl: '1280px',
			'2xl': '1536px',
			'3xl': '1920px',
		},
		colors: {
			primary: '#1EB854',
			'primary-focus': '#189343',
			'primary-content': '#C2FFD7',
			secondary: '#1FD65F',
			'secondary-focus': '#19AB4C',
			'secondary-content': '#003111',
			accent: '#D99330',
			'accent-focus': '#B37721',
			'accent-content': '#351F00',
			neutral: '#110E0E',
			'neutral-focus': '#0E0B0B',
			'neutral-content': '#D2CCCC',
			'base-100': '#171212',
			'base-200': '#151010',
			'base-300': '#130F0F',
			'base-content': '#D6CBCB',
			info: '#3ABFF8',
			'info-content': '#002B3D',
			success: '#36D399',
			'success-content': '#003320',
			warning: '#FBBD23',
			'warning-content': '#382800',
			error: '#F87272',
			'error-content': '#470000',
		},
	},
	plugins: [],
};
