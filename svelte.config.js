import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

// eslint-disable-next-line no-unused-vars
/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess({
		scss: {
			prependData: "@import './src/app.scss';",
		}
	}),
    // Remove vite-plugin-svelte warnings about unused CSS selectors
    onwarn: (warning, handler) => {
        const { code } = warning;
        if (code === 'css-unused-selector') return;
        handler(warning);
    },
	kit: {
		adapter: adapter()
	}
};

export default config;
