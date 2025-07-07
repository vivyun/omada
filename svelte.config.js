import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const config = {
  preprocess: vitePreprocess(),
  kit: {
    adapter: adapter(),
    paths: {
      base: '/omada', // <--- repo name
    },
    prerender: {
      handleHttpError: 'warn' // Optional: suppress errors for missing assets
    }
  }
};

export default config;

// import adapter from '@sveltejs/adapter-auto';
// import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

// /** @type {import('@sveltejs/kit').Config} */
// const config = {
// 	// Consult https://svelte.dev/docs/kit/integrations
// 	// for more information about preprocessors
// 	preprocess: vitePreprocess(),
// 	kit: { adapter: adapter() }
// };

// export default config;
