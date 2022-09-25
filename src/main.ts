import { ViteSSG } from 'vite-ssg';

import App from './app.vue';

export const createApp = ViteSSG(App, {
	routes: [
		{
			path: '/',
			component: async () => import('~/pages/home-page.vue'),
		},
	],
});
