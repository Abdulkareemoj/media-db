import path from 'path';
import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { sveltekit } from '@sveltejs/kit/vite';
import dotenv from 'dotenv';

dotenv.config();

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	plugins: [sveltekit()],

	kit: {
		adapter: adapter(),
		alias: {
			$components: path.resolve('./src/components'),
			$lib: path.resolve('./src/lib')
		}
	}
};

export default config;
