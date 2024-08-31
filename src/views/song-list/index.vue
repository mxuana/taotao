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
			<SvgIcon
				name="avater"
				width="70"
				height="70"
				is="v-fragment"
				:in-style="{ top: '100px', position: 'absolute' }"
			/>
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
					// 总个数/行可放个数=纵列可放个数向上取整 => 计算高度
					height: (ceil(dynamicLen(songzh[`song_${i}`]) / floor(wwidth / iw(i))) * ih) / 16 + 'rem'
				}"
			>
				<template v-for="(item, index) in songzh[`song_${i}`]">
					<div class="song-border">
						<el-tag
							class="song-item"
							disable-transitions
							type="info"
							:color="
								color[
									(ceil((index + 1) / ceil(dynamicLen(songzh[`song_${i}`]) / floor(wwidth / iw(i)))) -
										1) %
										color.length
								] + '11' || '#a2d3ff'
							"
							:style="{
								'border-left': `5px ${
									// 按列序取颜色
									color[
										(ceil(
											(index + 1) / ceil(dynamicLen(songzh[`song_${i}`]) / floor(wwidth / iw(i)))
										) -
											1) %
											color.length
									] + '44' || '#a2d3ff'
								} solid`,
								color: color[
									(ceil((index + 1) / ceil(dynamicLen(songzh[`song_${i}`]) / floor(wwidth / iw(i)))) -
										1) %
										color.length
								]
							}"
							@click="copySong(item)"
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
				:style="{
					height: (ceil(dynamicLen(songzh[`song_${k}`]) / floor(wwidth / iw(11))) * ih + 34 / 2) / 16 + 'rem'
				}"
			>
				<template v-for="(item, index) in songzh[`song_${k}`]">
					<div class="song-border">
						<el-tag
							class="song-item"
							disable-transitions
							type="info"
							:color="
								color[
									(ceil(
										(index + 1) / ceil(dynamicLen(songzh[`song_${k}`]) / floor(wwidth / iw(11)))
									) -
										1) %
										color.length
								] + '11' || '#a2d3ff'
							"
							:style="{
								'border-left': `5px ${
									color[
										(ceil(
											(index + 1) / ceil(dynamicLen(songzh[`song_${k}`]) / floor(wwidth / iw(11)))
										) -
											1) %
											color.length
									] + '44' || '#a2d3ff'
								} solid`,
								// 设单个歌名最大长度为12个汉字
								'max-width': iw(11) / 16 + 'rem',
								color: color[
									(ceil(
										(index + 1) / ceil(dynamicLen(songzh[`song_${k}`]) / floor(wwidth / iw(11)))
									) -
										1) %
										color.length
								]
							}"
						>
							{{ item }}
						</el-tag>
					</div>
				</template>
			</el-space>
		</el-card>
	</div>
</template>

<script setup lang="ts">
import songs from '@/assets/songs'
import { floor, ceil, uniq, min, max } from 'lodash-es'
import { useWindowSize } from '@vueuse/core'
import SvgIcon from '@/components/SvgIcon/index.vue'
import { useClipboard } from '@vueuse/core'
const source = ref('---')
const { copy, isSupported } = useClipboard({ source })
import { ElMessage } from 'element-plus'

const color = ['#66bbf9', '#d69dff', '#ff9a8b', '#d1ac3c', '#58c147']
// 动态计算文本数量，一个中午为1单位，两个小写英文作1单位
const convLen = (c: string) => {
	let l = c.length // 默认长度
	const matchr = c.match(/[a-zA-Z]/g) // 匹配小写长度
	// 默认 - 小写长 + 小写长/2
	matchr && (l = c.length - matchr!.length + ceil(matchr!.length / 2))
	return l
}
// 最终组装
const songzh: {
	[key: string]: string[]
} = {
	// 歌名长度大于5作它集，按拼音排序
	song_other: uniq(songs.zh)
		.filter((c) => convLen(c) > 5)
		.sort((a, b) => a.localeCompare(b, 'zh')),
	song_eng: uniq(songs.eng).sort()
}
const dynamicLen = (arr: string[]) => arr.filter((a: string) => convLen(a) > 11).length + arr.length
// 歌名小于5的部分
for (let i = 1; i <= 5; i++)
	songzh[`song_${i}`] = uniq(songs.zh)
		.filter((c) => convLen(c) === i)
		.sort((a, b) => a.localeCompare(b, 'zh'))
// 单个高（px）
const ih = 34
// 宽度计算（px）
const iw = (clen: number) => max([33.5 + 12 * min([clen < 4 ? 4 : clen, 12])!, 80])!
// 父容器宽，默认取视口宽
const wwidth = ref(window.innerWidth)
const { width } = useWindowSize()
const resize = () => {
	const xdom: HTMLDivElement = document.getElementsByClassName('song-main')[0] as HTMLDivElement
	xdom && (wwidth.value = xdom.offsetWidth)
}
const copySong = (v: string) => {
	if (isSupported) {
		copy(`点歌 ${v}`)
		ElMessage({
			message: `点歌 ${v}`,
			grouping: true,
			type: 'success',
			duration: 5000,
			plain: true,
			offset: 200,
			showClose: true
		})
	}
}
watch(() => width.value, resize)
onMounted(resize)
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>
