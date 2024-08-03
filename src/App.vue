<template>
	<el-drawer
		v-model="drawer"
		title="Kuromia - 库洛米娅_"
		direction="ltr"
		class="menu-btn"
		size="80%"
		:show-close="false"
		:before-close="handleClose"
	>
		<el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
			<el-sub-menu index="1">
				<template #title>
					<el-icon><location /></el-icon>
					<span>Navigator One</span>
				</template>
				<el-menu-item-group title="Group One">
					<el-menu-item index="1-1">item one</el-menu-item>
					<el-menu-item index="1-2">item two</el-menu-item>
				</el-menu-item-group>
				<el-menu-item-group title="Group Two">
					<el-menu-item index="1-3">item three</el-menu-item>
				</el-menu-item-group>
				<el-sub-menu index="1-4">
					<template #title>item four</template>
					<el-menu-item index="1-4-1">item one</el-menu-item>
				</el-sub-menu>
			</el-sub-menu>
			<el-menu-item index="2">
				<el-icon><icon-menu /></el-icon>
				<span>Navigator Two</span>
			</el-menu-item>
			<el-menu-item index="3" disabled>
				<el-icon><document /></el-icon>
				<span>Navigator Three</span>
			</el-menu-item>
			<el-menu-item index="4">
				<el-icon><setting /></el-icon>
				<span>Navigator Four</span>
			</el-menu-item>
		</el-menu>
	</el-drawer>
	<el-button type="primary" style="position: absolute; z-index: 1" plain @click="drawer = !drawer">
		<el-icon><Position /></el-icon>
	</el-button>
	<router-view />
</template>

<script setup lang="ts">
import { Document, Menu as IconMenu, Location, Setting } from '@element-plus/icons-vue'
const drawer = ref(false)
const handleClose = () => {
	drawer.value = !drawer.value
}
const handleOpen = (key: string, keyPath: string[]) => {
	console.log(key, keyPath)
}
</script>
<style lang="scss">
.menu-btn {
}
</style>
