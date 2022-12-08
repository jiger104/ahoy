/** @type {import("tailwindcss").Config} */
module.exports = {
	darkMode: 'class',
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		require('path').join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}')
	],
	theme: {
		container: { center: true },
		extend: {}
	},
	plugins: [require('@tailwindcss/forms'), require('@skeletonlabs/skeleton/tailwind/theme.cjs')]
};
