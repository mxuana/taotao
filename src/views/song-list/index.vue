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
					height: (dynamicCount(songzh[`song_${i}`], i) * ih) / 16 + 'rem'
				}"
			>
				<template v-for="(item, index) in songzh[`song_${i}`]">
					<div class="song-border">
						<el-tag
							class="song-item"
							disable-transitions
							type="info"
							:color="color[dynamicColor(index, songzh[`song_${i}`], i)] + '11' || '#a2d3ff'"
							:style="{
								'border-left': `5px ${
									// 按列序取颜色
									color[dynamicColor(index, songzh[`song_${i}`], i)] + '44' || '#a2d3ff'
								} solid`,
								color: color[dynamicColor(index, songzh[`song_${i}`], i)]
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
					height: (dynamicCount(songzh[`song_${k}`], 11) * ih + 34 / 2) / 16 + 'rem'
				}"
			>
				<template v-for="(item, index) in songzh[`song_${k}`]">
					<div class="song-border">
						<el-tag
							class="song-item"
							disable-transitions
							type="info"
							:color="color[dynamicColor(index, songzh[`song_${k}`], 11)] + '11' || '#a2d3ff'"
							:style="{
								'border-left': `5px ${
									color[dynamicColor(index, songzh[`song_${k}`], 11)] + '44' || '#a2d3ff'
								} solid`,
								// 设单个歌名最大长度为11个汉字
								'max-width': iw(11) / 16 + 'rem',
								color: color[dynamicColor(index, songzh[`song_${k}`], 11)]
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
import { ElMessage } from 'element-plus'

const source = ref('---')
const { copy, isSupported } = useClipboard({ source })
// 动态行个数计算
const dynamicCount = (arr: string[], len: number) => ceil(dynamicLen(arr) / floor(wwidth.value / iw(len)))
const color = ['#66bbf9', '#d69dff', '#ff9a8b', '#d1ac3c', '#58c147']
// 动态颜色计算
const dynamicColor = (index: number, arr: string[], len: number) =>
	(ceil((index + 1) / dynamicCount(arr, len)) - 1) % color.length
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
// 长度膨胀，超过11个字符，视为两个元素
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
// 剪贴板
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

// type 中文 0，其他语言 1，流行 2，民谣 3，古风 4，R&B 5，Rap 6
// const TYPE_ENUMS = {
// 	0: '华语',
// 	1: '其他语言',
// 	2: '流行',
// 	3: '民谣',
// 	4: '古风',
// 	5: 'R&B',
// 	6: 'Rap'
// }
// const TAG_ENUMS = {
// 	0: 'NEW',
// 	1: 'SC点歌',
// 	2: '舰长'
// }
import songs1 from '@/assets/unknown'
import songs2 from '@/assets/named'
const eng = [...songs1, ...songs2].filter((s) => s.type.includes(1))
const zh = [...songs1, ...songs2].filter((s) => s.type.includes(0))
// 最终组装
type Song = {
	song: string
	type: number[]
	tag: number[]
	singer: string
}
const songzh1: {
	[key: string]: Song[]
} = {
	// 歌名长度大于5作它集，按拼音排序
	song_other: uniq(zh)
		.filter((c) => convLen(c.song) > 5)
		.sort((a, b) => a.song.localeCompare(b.song, 'pinyin')),
	song_eng: uniq(eng).sort((a, b) => a.song.localeCompare(b.song))
}
for (let i = 1; i <= 5; i++)
	songzh1[`song_${i}`] = uniq(zh)
		.filter((c) => convLen(c.song) === i)
		.sort((a, b) => a.song.localeCompare(b.song, 'pinyin'))
console.log('🚀 ~ songzh1:', songzh1)
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>
