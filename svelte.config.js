import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			// Désactive l'échec pour les routes dynamiques pendant le build (utile pour les tests e2e)
			strict: false
		})
	}
};

export default config;
