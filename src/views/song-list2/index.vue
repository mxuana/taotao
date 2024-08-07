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
			{{ floor(wwidth / iw(i)) }}
			<el-space
				class="song-main"
				wrap
				direction="vertical"
				:size="[0, 0]"
				:style="{
					height: (ceil(songzh[`song_${i}`].length / floor(wwidth / iw(i))) * ih) / 16 + 'rem',
					width: '100%'
				}"
			>
				<template v-for="(item, index) in songzh[`song_${i}`]">
					<div class="song-border">
						<el-tag
							class="song-item"
							disable-transitions
							:style="{
								'border-left': `5px ${
									color[
										(ceil((index + 1) / ceil(songzh[`song_${i}`].length / floor(wwidth / iw(i)))) -
											1) %
											color.length
									] || '#a2d3ff'
								} solid`
							}"
						>
							{{ item }}
						</el-tag>
					</div>
				</template>
			</el-space>
		</el-card>
		{{ floor(wwidth / iw(12)) }}
		<el-card class="song-list" v-for="k in ['other', 'eng']">
			<el-space
				:style="{ height: (ceil(songzh[`song_${k}`].length / floor(wwidth / iw(12))) * ih) / 16 + 'rem' }"
				style="display: flex; flex-direction: column; flex-wrap: wrap; align-content: flex-start"
			>
				<template v-for="item in songzh[`song_${k}`]">
					<div class="song-border">
						<el-tag class="song-item" disable-transitions>
							<!-- :style="{ width: `${wwidth / floor(wwidth / iw(12)) / 16}rem` }" -->
							{{ item }}
						</el-tag>
					</div>
				</template>
			</el-space>
		</el-card>
	</div>
	<div ref="computed"></div>
</template>

<script setup lang="ts">
import songs from '@/assets/songs'
import { floor, ceil, uniq, min } from 'lodash-es'
const convLen = (c: string) => {
	let l = c.length
	const matchr = c.match(/[a-zA-Z]/g)
	matchr && (l = c.length - matchr!.length + ceil(matchr!.length / 2))
	return l
}
const songzh: {
	[key: string]: string[]
} = {
	song_other: uniq(songs.zh)
		.filter((c) => convLen(c) > 5)
		.sort((a, b) => a.localeCompare(b, 'zh')),
	song_eng: uniq(songs.eng).sort()
}
for (let i = 1; i <= 5; i++)
	songzh[`song_${i}`] = uniq(songs.zh)
		.filter((c) => convLen(c) === i)
		.sort((a, b) => a.localeCompare(b, 'zh'))
const ih = 34
const iw = (clen: number) => 72 + 4 * min([clen < 4 ? 4 : clen, 12])!

const wwidth = ref(window.innerWidth)
const long = ref(/Mobi|Android|iPhone/i.test(navigator.userAgent) ? 2 : 4)
const color = [
	'#d7badd',
	'#b8dcfb',
	'#dad0ef',
	'#d9a7e3',
	'#73c0de55',
	'#3ba27255',
	'#fc845255',
	'#9a60b455',
	'#ea7ccc55'
]
onMounted(() => {
	const xdom: HTMLDivElement = document.getElementsByClassName('song-main')[0] as HTMLDivElement
	xdom && (wwidth.value = xdom.offsetWidth)
})
</script>

<style lang="scss" scoped>
@import './index.scss';
.song-content {
}
.el-space {
	align-content: flex-start;
}
.song-border {
	// border-left: 5px solid #d0e9ff;
}
</style>
