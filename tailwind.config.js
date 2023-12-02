/** @type {import('tailwindcss').Config} */

module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			backgroundSize: {
				'size-200': '200% 200%',
			},
			backgroundPosition: {
				'pos-0': '0% 0%',
				'pos-100': '100% 100%',
			},
			colors: {
				'fill': ({opacityValue}) => {
					if (opacityValue === undefined) {
						opacityValue = 1;
					}
					return `rgba(var(--base-bg-color), ${opacityValue})`;
				},
				'fill-highlight': ({opacityValue}) => {
					if (opacityValue === undefined) {
						opacityValue = 1;
					}
					return `rgba(var(--base-bg-color-highlight), ${opacityValue})`;
				},
				'fill-highlight-2': ({opacityValue}) => {
					if (opacityValue === undefined) {
						opacityValue = 1;
					}
					return `rgba(var(--base-bg-color-highlight-2), ${opacityValue})`;
				},
				'secondary': ({opacityValue}) => {
					if (opacityValue === undefined) {
						opacityValue = 1;
					}
					return `rgba(var(--base-secondary-color), ${opacityValue})`;
				},
				'highlight': ({opacityValue}) => {
					if (opacityValue === undefined) {
						opacityValue = 1;
					}
					return `rgba(var(--base-action-color), ${opacityValue})`;
				},
			},
			backgroundColor: {
				skin: {
					'fill': ({opacityValue}) => {
						if (opacityValue === undefined) {
							opacityValue = 1;
						}
						return `rgba(var(--base-bg-color), ${opacityValue})`;
					},
					'fill-highlight': ({opacityValue}) => {
						if (opacityValue === undefined) {
							opacityValue = 1;
						}
						return `rgba(var(--base-bg-color-highlight), ${opacityValue})`;
					},
					'fill-highlight-2': ({opacityValue}) => {
						if (opacityValue === undefined) {
							opacityValue = 1;
						}
						return `rgba(var(--base-bg-color-highlight-2), ${opacityValue})`;
					},
					'secondary': ({opacityValue}) => {
						if (opacityValue === undefined) {
							opacityValue = 1;
						}
						return `rgba(var(--base-secondary-color), ${opacityValue})`;
					},
					'highlight': ({opacityValue}) => {
						if (opacityValue === undefined) {
							opacityValue = 1;
						}
						return `rgba(var(--base-action-color), ${opacityValue})`;
					},
				},
			},
			borderColor: {
				skin: {
					'fill': ({opacityValue}) => {
						if (opacityValue === undefined) {
							opacityValue = 1;
						}
						return `rgba(var(--base-bg-color), ${opacityValue})`;
					},
					'fill-highlight-2': ({opacityValue}) => {
						if (opacityValue === undefined) {
							opacityValue = 1;
						}
						return `rgba(var(--base-bg-color-highlight-2), ${opacityValue})`;
					},
					'fill-highlight': ({opacityValue}) => {
						if (opacityValue === undefined) {
							opacityValue = 1;
						}
						return `rgba(var(--base-bg-color-highlight), ${opacityValue})`;
					},
					'secondary': ({opacityValue}) => {
						if (opacityValue === undefined) {
							opacityValue = 1;
						}
						return `rgba(var(--base-secondary-color), ${opacityValue})`;
					},
					'highlight': ({opacityValue}) => {
						if (opacityValue === undefined) {
							opacityValue = 1;
						}
						return `rgba(var(--base-action-color), ${opacityValue})`;
					},
				},
			},
			textColor: {
				skin: {
					'fill': ({opacityValue}) => {
						if (opacityValue === undefined) {
							opacityValue = 1;
						}
						return `rgba(var(--base-bg-color), ${opacityValue})`;
					},
					'fill-highlight': ({opacityValue}) => {
						if (opacityValue === undefined) {
							opacityValue = 1;
						}
						return `rgba(var(--base-bg-color-highlight), ${opacityValue})`;
					},
					'secondary': ({opacityValue}) => {
						if (opacityValue === undefined) {
							opacityValue = 1;
						}
						return `rgba(var(--base-secondary-color), ${opacityValue})`;
					},
					'highlight': ({opacityValue}) => {
						if (opacityValue === undefined) {
							opacityValue = 1;
						}
						return `rgba(var(--base-action-color), ${opacityValue})`;
					},
				},
			},
		},
	},
	plugins: [],
};
