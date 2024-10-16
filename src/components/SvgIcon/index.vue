<template>
	<el-image v-if="img" :style="{ width, height, ...inStyle }" :src="src" fit="fill" />
	<component v-else :is="is">
		<svg
			xmlns="http://www.w3.org/2000/svg"
			:style="{ width, height, ...inStyle }"
			aria-hidden="true"
			v-bind="$attrs"
		>
			<use :xlink:href="prefix + name" :fill="color" />
		</svg>
	</component>
</template>

<script setup lang="ts">
type SvgIconType = {
	width?: string
	height?: string
	color?: string
	prefix?: string
	is: string
	name: string
	inStyle: object
	img?: boolean
	src?: string
}
withDefaults(defineProps<SvgIconType>(), {
	width: '',
	height: '',
	color: '#333',
	prefix: '#icon-',
	name: '',
	is: 'el-icon',
	img: false,
	src: '/kuromia.png'
})
</script>

<style lang="scss" scoped></style>
