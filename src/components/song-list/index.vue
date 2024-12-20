<template>
	<div class="song-content">
		<el-card class="slogan" :style="{ '--slogan': `url(${slogan})` }">
			<div
				class="logo"
				:style="{
					'font-family': logo.fontFamily,
					'font-size': logo.fontSize,
					height: logo.height
				}"
			>
				{{ vup }}
			</div>
			<div>
				<div class="logo-cn">{{ logoCn }}</div>
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
				:name="avater.name || ''"
				:img="avater.img"
				:src="avater.src || ''"
				width="4.375rem"
				height="4.375rem"
				:is="avater.is || 'v-fragment'"
				:in-style="{
					top: '5.5rem',
					position: 'absolute',
					'border-radius': '.9375rem'
				}"
				v-bind="avater.$attr || {}"
			/>
		</el-card>
		<div v-for="song in songs" style="position: relative">
			<el-card class="song-list">
				<el-space>
					<el-tag
						class="song-item"
						disable-transitions
						:color="'#e289c233'"
						:style="{
							color: '#e289c2'
						}"
						v-for="item in song.songs"
						@click="copySong(item)"
						>{{ item }}</el-tag
					>
				</el-space>
			</el-card>
			<div class="song-list-title">{{ song.type }}</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import SvgIcon from '@/components/SvgIcon/index.vue'
import { useClipboard } from '@vueuse/core'
import { ElMessage } from 'element-plus'
import type { Song, SongList } from './type'
withDefaults(defineProps<SongList>(), {
	vip: '---',
	slogan: '',
	avater: () => ({}),
	songs: () => [] as Song[],
	specSongs: () => [],
	logo: () => ({ fontFamily: 'BEYNO', fontSize: '2.7rem', height: '5rem' }),
	logoCn: '---',
	theme: '',
	tab: true
})
const source = ref('---')
const { copy, isSupported } = useClipboard({ source })
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
</script>

<style lang="scss" scoped>
@import './index.scss';
.slogan {
	background: var(--slogan);
	border-radius: 23px;
	margin-bottom: 20px !important;
}
.song-list {
	background: #ffffffcf;
	:deep(.el-card__body) {
		display: flex;
		padding-bottom: 3rem !important;
		.el-space {
			flex-wrap: wrap;
		}
	}
}
.song-list-title {
	position: absolute;
	right: 5%;
	bottom: 5%;
	color: #e289c2;
}
</style>
