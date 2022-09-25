current_livestream_video_id=$(curl -s https://gapyearstream.com/current-livestream-video-id)
newest_livestream_video_id=$(curl -s https://www.youtube.com/channel/UCevgC7xkuvSWEvA9tLV9XBg/live | sed -n 's/.*<link rel="canonical" href="\([^"]*\)">.*/\1/p' | sed -n 's/.*watch\?v=\(.*\)/\1/p')

if [ current_livestream_video_id = newest_livestream_video_id ];
then
	echo "::set-output name=UP_TO_DATE::1"
else
	echo "::set-output name=UP_TO_DATE::0"
fi
