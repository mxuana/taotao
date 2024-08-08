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
		<el-menu :default-active="defaultActive" class="el-menu-vertical-demo" router @select="handleSelect">
			<el-menu-item v-for="route in routes.filter((r) => !r.meta.hidden)" :index="route.path">
				<el-icon v-if="route.meta?.icon">
					<component :is="route.meta.icon" />
				</el-icon>
				{{ route.meta.title }}</el-menu-item
			>
		</el-menu>
	</el-drawer>
	<el-button type="primary" class="menu-btn" round plain @click="drawer = !drawer"> KUROMIA </el-button>
	<router-view />
</template>

<script setup lang="ts">
import { useRouter, useRoute, RouteRecord } from 'vue-router'
const drawer = ref(false)
const handleClose = () => {
	drawer.value = !drawer.value
}
const router = useRouter()
const routes: RouteRecord[] = router.getRoutes()

const $route = useRoute()
const route = computed(() => {
	return $route
})
const defaultActive = ref<string>(route.value.path)
const handleSelect = () => {
	handleClose()
}
</script>
<style lang="scss">
.menu-btn {
	position: fixed;
	right: 0;
	transform: rotate(-90deg);
	transform-origin: right bottom;
	z-index: 2;
}
</style>
