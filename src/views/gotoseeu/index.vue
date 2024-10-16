<template>
	<SongList
		:songs="isongs"
		:slogan="slogan"
		:avater="{ name: 'tutu' }"
		vup="GOTOSEEU"
		:logo="{
			fontSize: '2.45rem'
		}"
		logo-cn="古兔希尤"
		theme="#945362"
	></SongList>
</template>

<script setup lang="ts">
import type { Song } from '@/components/song-list/type'
import slogan from '@/assets/songs/gotoseeu/tbgc.png'
import songs from '@/assets/songs/gotoseeu'
const isongs = songs as Song[]
</script>

<style lang="scss" scoped>
.song-content {
	background-image: linear-gradient(
		45deg,
		#fffcfd 25%,
		#94536222 25%,
		#94536222 50%,
		#fffcfd 50%,
		#fffcfd 75%,
		#94536222 75%,
		#94536222 100%
	);
}
</style>
