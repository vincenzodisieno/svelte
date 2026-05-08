import adapterAuto from '@sveltejs/adapter-auto'
import adapterNode from '@sveltejs/adapter-node'
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: vitePreprocess(),
  vitePlugin: [],
  kit: {
    adapter:
      process.env.ADAPTER == 'node' ? adapterNode({ out: 'build' }) : adapterAuto({ out: 'build' }),
  },
}

export default config
