import { load } from 'cheerio';
import esMain from 'es-main';
import { got } from 'got';

export async function getLatestLivestreamVideoId() {
	const response = await got(
		'https://www.youtube.com/channel/UCevgC7xkuvSWEvA9tLV9XBg/live'
	);
	const $ = load(response.body);

	const newestLivestreamVideoLink = $('link[rel="canonical"]').attr('href');
	if (newestLivestreamVideoLink === undefined) {
		throw new Error('Link to newest livestream video link not found.');
	}

	const newestLivestreamVideoId = newestLivestreamVideoLink.replace(
		'https://www.youtube.com/watch?v=',
		''
	);

	return newestLivestreamVideoId;
}

if (esMain(import.meta)) {
	await getLatestLivestreamVideoId();
}
