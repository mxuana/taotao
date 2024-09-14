<template>
	<SongList
		:songs="isongs"
		:slogan="slogan"
		avater="tutux"
		vup="AURORA"
		logo-cn="阿池"
		theme="#1B4D70"
		:tab="false"
	></SongList>
</template>

<script setup lang="ts">
import type { Song } from '@/components/song-list/type'
import slogan from '@/assets/songs/achi/bgc.png'
import songs from '@/assets/songs/achi'
const isongs = songs as Song[]
</script>

<style lang="scss" scoped>
.song-content {
	background-image: linear-gradient(
		45deg,
		#fffcfd 25%,
		#1b4d7022 25%,
		#1b4d7022 50%,
		#fffcfd 50%,
		#fffcfd 75%,
		#1b4d7022 75%,
		#1b4d7022 100%
	);
}
</style>
