import adapter from '@sveltejs/adapter-node';
import preprocess from 'svelte-preprocess';

BigInt.prototype["toJSON"] = function () {
	return this.toString();
};

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [
		preprocess({
			postcss: true
		})
	],

	kit: {
		adapter: adapter({
			out: "out"
		}),
	}
};

export default config;
