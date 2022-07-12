<template>
  <iframe
    class="livestream-iframe"
    src="https://www.youtube.com/embed/jfKfPfyJRdk?autoplay=1&mute=1"
    frameborder="0"
    allowfullscreen
  ></iframe>
</template>

<style scoped>
.livestream-iframe {
  margin-top: 30px;
  width: calc(100vw - 60px);
  /* 16:9 aspect ratio */
  height: calc((100vw - 60px) * (9 / 16));
}
</style>
