import fs from 'node:fs';

import vue from '@vitejs/plugin-vue';
import { join } from 'desm';
import { defineConfig } from 'vite';
import { replaceCodePlugin } from 'vite-plugin-replace';

import { getLatestLivestreamVideoId } from './scripts/get-latest-stream.js';

const latestLivestreamVideoId = await getLatestLivestreamVideoId();

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		vue(),
		replaceCodePlugin({
			replacements: [
				{
					from: '__CURRENT_LIVESTREAM_VIDEO_ID__',
					to: latestLivestreamVideoId,
				},
			],
		}),
		{
			name: 'write-latest-livestream-video-id',
			generateBundle() {
				fs.writeFileSync(
					join(import.meta.url, 'public/current-livestream-video-id'),
					latestLivestreamVideoId
				);
			},
		},
	],
	resolve: {
		alias: {
			'~': join(import.meta.url, './src'),
		},
	},
});
