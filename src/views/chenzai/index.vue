<template>
	<SongList
		:songs="isongs"
		:slogan="slogan"
		avater="tutux"
		vup="CHENZAI"
		logo-cn="一只晨仔"
		theme="#4678D3"
	></SongList>
</template>

<script setup lang="ts">
import type { Song } from '@/components/song-list/type'
import slogan from '@/assets/songs/chenzai/cbgc.png'
import songs from '@/assets/songs/chenzai'
const isongs = songs as Song[]
</script>

<style lang="scss" scoped></style>
