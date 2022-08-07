<template>
	<iframe
		class="livestream-iframe"
		src="https://www.youtube.com/embed/Oc4edGQFdjY?autoplay=1&mute=1"
		frameborder="0"
		allowfullscreen
	></iframe>
	<div
		style="
			padding: 10px;
			max-width: 700px;
			margin-left: auto;
			margin-right: auto;
		"
	>
		<h1>Gap Year Stream</h1>
		<p>
			Hey there! I'm Leon, and I'm currently taking two years off before
			university to focus on entrepreneurship! To keep myself accountable, I'll
			be streaming myself 24/7 working on my startup
			<a href="https://dialect.so">Dialect</a> over the next two years.
		</p>
		<p>
			Feel free to treat my stream as a live study stream or a motivator for you
			to join me in chasing your ambitions as well :)
		</p>
	</div>
</template>

<style scoped>
.livestream-iframe {
	margin-top: 30px;
	width: calc(100vw - 60px);
	/* 16:9 aspect ratio */
	height: calc((100vw - 60px) * (9 / 16));
}
</style>
