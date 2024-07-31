<template>
	<div class="aspect-ratio">
		<template v-for="(vs, _) in videos">
			<BilibiliEmbedRenderer v-for="v in vs" :vid="v" ></BilibiliEmbedRenderer>
		</template>
	</div>
</template>

<script setup lang="ts">
import BilibiliEmbedRenderer from 'vue-bilibili-embed-renderer-oxr'
import videos from '@/assets/videos' 
</script>

<style lang="scss" scoped>
 
 .aspect-ratio {
  position: relative;
  width: calc(100% - 20px);
  height: 0;
  margin: 20px 20px 0 20px;
}
 
.aspect-ratio iframe {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
}
</style>
