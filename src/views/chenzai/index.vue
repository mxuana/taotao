<template>
	<el-tabs v-model="itype" class="song-tabs">
		<el-tab-pane label="按歌名" name="song">
			<el-scrollbar class="song-scrollbar" height="calc(100vh - 70px)">
				<el-card v-for="i in 5" class="song-list">
					<el-space
						class="song-main"
						wrap
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
												(ceil(
													(index + 1) /
														ceil(songzh[`song_${i}`].length / floor(wwidth / iw(i)))
												) -
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
						direction="vertical"
						:size="[0, 0]"
						:style="{
							height: (ceil(songzh[`song_${k}`].length / floor(wwidth / iw(12))) * ih) / 16 + 'rem',
							width: `calc(${wwidth}px - .9375rem)`
						}"
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
																wwidth /
																	iw(max(songzh[`song_${k}`].map((c:string) => convLen(c)))!)
															)
													)
											) -
												1) %
												color.length
										] || '#a2d3ff'
									} solid`,
									'max-width': iw(12)/16+'rem'
								}"
									>{{ item }}
								</el-tag>
							</div>
						</template>
					</el-space>
				</el-card>
			</el-scrollbar>
		</el-tab-pane>
		<el-tab-pane label="按歌手" name="singer">
			<el-scrollbar height="calc(100vh - 70px)">
				<el-space
					wrap
					class="item"
					v-for="singer in Object.keys(datas).sort((a, b) =>
						a.localeCompare(b, 'zh-Hans-CN', { sensitivity: 'accent' })
					)"
				>
					<span class="singer">{{ singer }}:&emsp;</span>
					<el-tag
						disable-transitions
						v-for="(song, index) in datas[singer].sort((a, b) =>
							a['歌曲'].localeCompare(b['歌曲'], 'zh-Hans-CN', { sensitivity: 'accent' })
						)"
						:style="{
							'border-left': `5px ${color[(index + 1) % color.length] || '#a2d3ff'} solid`
						}"
						>{{ song['歌曲'] }}</el-tag
					>
				</el-space>
			</el-scrollbar>
		</el-tab-pane>
	</el-tabs>
</template>

<script setup lang="ts">
import songs from '@/assets/songs-chenzai'
import { groupBy, ceil, min, uniq, floor, max } from 'lodash-es'
import { useWindowSize } from '@vueuse/core'

const allsongs = songs.data.filter((d) => !d['类型'].includes('SC点歌'))
const datas = groupBy(allsongs, (x) => x['歌手'])
const itype = ref('song')
const convLen = (c: string) => {
	let l = c.length
	const matchr = c.match(/[a-z]/g)
	matchr && (l = c.length - matchr.length + ceil(matchr.length / 2))
	return l
}
const color = ['#a0e5ff77', '#d69dff55', '#ff9a8b55', '#ffe38c55', '#a5ff9955']
const zh = allsongs
	.filter((s) => s['类型'].includes('中文'))
	.map((s) => s['歌曲'])
	.sort((a, b) => a.localeCompare(b, 'zh-Hans-CN', { sensitivity: 'accent' }))
const songzh: {
	[key: string]: any
} = {
	song_other: uniq(zh).filter((c) => convLen(c) > 5),
	song_eng: allsongs
		.filter((s) => s['类型'].includes('英文'))
		.map((s) => s['歌曲'])
		.sort((a, b) => a.localeCompare(b, 'zh-Hans-CN', { sensitivity: 'accent' }))
}
for (let i = 1; i <= 5; i++) songzh[`song_${i}`] = uniq(zh).filter((c) => convLen(c) === i)

const iw = (clen: number) => max([33 + 12 * min([clen < 4 ? 4 : clen, 12])!, 88])!

const ih = 34
const wwidth = ref(window.innerWidth)
const { width } = useWindowSize()
const resize = () => {
	const xdom: HTMLDivElement = document.getElementsByClassName('song-main')[0] as HTMLDivElement
	xdom && (wwidth.value = xdom.offsetWidth)
}
watch(() => width.value, resize)
onMounted(resize)
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>
