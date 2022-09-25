import core from '@actions/core';
import { got } from 'got';

import { getLatestLivestreamVideoId } from './get-latest-stream.js';

const gapYearStreamResponse = await got(
	'https://gapyearstream.com/current-livestream-video-id'
);
const currentLivestreamVideoId = gapYearStreamResponse.body;
const newestLivestreamVideoId = await getLatestLivestreamVideoId();

core.setOutput(
	'stream-changed',
	String(currentLivestreamVideoId === newestLivestreamVideoId)
);
