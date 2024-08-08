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
			<el-space
				class="song-main"
				wrap
				alignment="start"
				direction="vertical"
				:size="[3, 0]"
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
		<el-card class="song-list" v-for="k in ['other', 'eng']">
			<el-space
				class="song-main"
				wrap
				alignment="start"
				direction="vertical"
				:size="[3, 0]"
				:style="{ height: (ceil(songzh[`song_${k}`].length / floor(wwidth / iw(12))) * ih) / 16 + 'rem' }"
				style="width: 100%"
			>
				<template v-for="(item, index) in songzh[`song_${k}`]">
					<div class="song-border">
						<el-tag
							class="song-item"
							disable-transitions
							:style="{
								'border-left': `5px ${
									color[
										(ceil(
											(index + 1) /
												ceil(
													songzh[`song_${k}`].length /
														floor(
															wwidth / iw(max(songzh[`song_${k}`].map((c) => convLen(c)))!)
														)
												)
										) -
											1) %
											color.length
									] || '#a2d3ff'
								} solid`,
								'max-width': iw(12)/16+'rem'
							}"
						>
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
import { floor, ceil, uniq, min, max } from 'lodash-es'
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
const iw = (clen: number) => max([33 + 12 * min([clen < 4 ? 4 : clen, 12])!, 88])!

const wwidth = ref(window.innerWidth)
const color = ['#a0e5ff77', '#d69dff55', '#ff9a8b55', '#ffe38c55', '#a5ff9955']
onMounted(() => {
	const xdom: HTMLDivElement = document.getElementsByClassName('song-main')[0] as HTMLDivElement
	xdom && (wwidth.value = xdom.offsetWidth)
})
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>
