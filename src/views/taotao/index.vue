<template>
	<SongList
		:songs="songs1 as Song[]"
		:slogan="slogan"
		:avater="{ is: 'ElImage', img: true }"
		vup="TaoTao"
		logo-cn="这里有颗桃桃"
	>
	</SongList>
</template>

<script setup lang="ts">
import type { Song } from '@/components/song-list/type'
import slogan from '@/assets/songs/taotao/bgc.png'
import songs1 from '@/assets/songs/taotao'
</script>

<style lang="scss" scoped>
.song-content {
	/* background-image: linear-gradient(
		45deg,
		#fffcfd 25%,
		#e289c222 25%,
		#d69dff22 50%,
		#fffcfd 50%,
		#fffcfd 75%,
		#ff9a8b22 75%,
		#d1ac3c22 100%
	); */
	background: url(@/assets/songs/taotao/ppp.jpg);
	background-size: 250px;
}
</style>
