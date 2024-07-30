<template>
	<el-card style="margin: 20px; width: max-content">
		<template v-for="(vs, _) in videos">
			<BilibiliEmbedRenderer v-for="v in vs" :vid="v"></BilibiliEmbedRenderer>
		</template>
	</el-card>
</template>

<script setup lang="ts">
import BilibiliEmbedRenderer from 'vue-bilibili-embed-renderer-oxr'
import videos from '@/assets/videos'
console.log('🚀 ~ videos:', videos)
</script>

<style lang="scss" scoped></style>
