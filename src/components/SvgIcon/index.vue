<template>
	<component :is="is">
		<svg xmlns="http://www.w3.org/2000/svg" :style="{ width, height }" aria-hidden="true" v-bind="$attrs">
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
}
withDefaults(defineProps<SvgIconType>(), {
	width: '',
	height: '',
	color: '#333',
	prefix: '#icon-',
	name: '',
	is: 'el-icon'
})
</script>

<style lang="scss" scoped></style>
