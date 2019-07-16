const pkg = require('./package')

module.exports = {
	mode: 'universal',
	head: {
		title: pkg.name,
		meta: [{ charset: 'utf-8' }, { name: 'viewport', content: 'width=device-width, initial-scale=1' }, { name: 'keywords', content: 'mart, cube, portfolio, site, web, developer' }, { hid: 'description', name: 'description', content: pkg.description }],
		link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
	},

	// Customize the progress-bar color
	loading: { color: '#fff' },

	// Global css
	css: ['~/assets/style.scss'],

	// Plugins to load before mounting the App
	plugins: [{ src: `~plugins/vee-validate`, ssr: true }],

	// Nuxt.js modules
	modules: [],

	// Build configuration
	build: {
		// You can extend webpack config here

		extend(config, ctx) {},
	},
}
