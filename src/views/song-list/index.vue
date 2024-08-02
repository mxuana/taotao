<template>
	<div class="song-content">
		<el-card class="slogan">
			<div class="logo">KUROMIA</div>
			<div>
				<div class="logo-cn">库洛米娅</div>
				<div
					style="
						text-align: right;
						font-size: 0.875rem;
						text-shadow: 0.0625rem 0.0625rem 0.125rem black;
						color: white;
					"
				>
					注：若页面异常请看图片版本
				</div>
			</div>
		</el-card>
		<br />
		<el-card v-for="i in 5" class="song-list">
			<div
				class="song-main"
				:style="{ height: (ceil(songzh[`song_${i}`].length / floor(wwidth / iw)) * ih) / 16 + 'rem' }"
				style="display: flex; flex-direction: column; flex-wrap: wrap"
			>
				<el-tag v-for="item in songzh[`song_${i}`]" class="song-item song-low" disable-transitions>
					{{ item }}
				</el-tag>
			</div>
		</el-card>
		<el-card class="song-list" v-for="k in ['other', 'eng']">
			<div
				:style="{ height: (ceil(songzh[`song_${k}`].length / long) * ih + ih) / 16 + 'rem' }"
				style="display: flex; flex-direction: column; flex-wrap: wrap; align-content: flex-start"
			>
				<el-tag
					v-for="item in songzh[`song_${k}`]"
					class="song-item"
					disable-transitions
					:style="{ width: `${(wwidth / long - ih / 2) / 16}rem` }"
				>
					{{ item }}
				</el-tag>
			</div>
		</el-card>
	</div>
</template>

<script setup lang="ts">
import songs from '@/assets/songs'

import { floor, ceil, uniq } from 'lodash-es'
const songzh: {
	[key: string]: string[]
} = {
	song_other: uniq(songs.zh)
		.filter((c) => c.length > 5)
		.sort((a, b) => a.localeCompare(b, 'zh')),
	song_eng: uniq(songs.eng).sort()
}
for (let i = 1; i <= 5; i++)
	songzh[`song_${i}`] = uniq(songs.zh)
		.filter((c) => c.length === i)
		.sort((a, b) => a.localeCompare(b, 'zh'))
const ih = 34
const iw = 88
const wwidth = ref(window.innerWidth)
const long = ref(/Mobi|Android|iPhone/i.test(navigator.userAgent) ? 2 : 4)
onMounted(() => {
	const xdom: HTMLDivElement = document.getElementsByClassName('song-main')[0] as HTMLDivElement
	xdom && (wwidth.value = xdom.offsetWidth)
})
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>
