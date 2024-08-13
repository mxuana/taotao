<template>
	<el-card>
		<template #header> 当前播放：{{ resolveName(wav) }}</template>
		<media-player :title="resolveName(wav)" :src="wav" viewType="audio" :autoplay="autoplay">
			<media-provider></media-provider>
			<media-plyr-layout
				:translations="{
					Normal: '1×',
					Speed: '倍速',
					Mute: '静音',
					Pause: '暂停',
					Play: '播放',
					Settings: '设置',
					Unmute: '取消静音'
				}"
			></media-plyr-layout>
		</media-player>
	</el-card>
	<el-card>
		<el-button v-for="(_, k) in modules" @click="x1(k)"> {{ resolveName(k) }}</el-button>
	</el-card>
</template>

<script setup lang="ts">
import 'vidstack/bundle'
const wav = ref()
const autoplay = ref(false)
const x1 = (x: string) => {
	autoplay.value = true
	wav.value = x
	const { paused } = instance.value
	paused ? instance.value.play() : instance.value.pause()
}
const instance = ref()

const modules = import.meta.glob('@/assets/vocal/**.wav')
onMounted(() => {
	wav.value = Object.keys(modules)[0]
	instance.value = document.querySelector('media-player')
})
const resolveName = (path: string) => path && path.substring(path.lastIndexOf('/') + 1, path.lastIndexOf('.'))
</script>

<style lang="scss" scoped>
.el-card {
	margin: 0.9375rem;
}
</style>
