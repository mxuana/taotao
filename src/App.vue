<template>
	<router-view />
	<el-drawer
		v-model="drawer"
		title="Kuromia - 库洛米娅_"
		direction="ltr"
		class="menu-btn"
		:size="isMob ? '80%' : '30%'"
		:show-close="false"
		:before-close="handleClose"
	>
		<el-menu :default-active="defaultActive" router @select="handleClose">
			<el-menu-item v-for="route in routes.filter((r) => !r.meta.hidden)" :index="route.path">
				<el-icon v-if="route.meta?.icon">
					<component :is="route.meta.icon" />
				</el-icon>
				{{ route.meta.title }}</el-menu-item
			>
		</el-menu>
	</el-drawer>
	<div class="menu-btn" style="text-align: right">
		<el-button type="primary" class="menu-btn" round plain @click="drawer = !drawer"> KUROMIA </el-button>
	</div>
</template>

<script setup lang="ts">
import { useRouter, useRoute, RouteRecord } from 'vue-router'
import { useWindowSize } from '@vueuse/core'
const drawer = ref(false)
const handleClose = () => (drawer.value = !drawer.value)

const isMob = ref(/Mobi|Android|iPhone/i.test(navigator.userAgent))
const router = useRouter()
const routes: RouteRecord[] = router.getRoutes()

const $route = useRoute()
const route = computed(() => $route)
const defaultActive = ref<string>(route.value.path)
const { width } = useWindowSize()
watch(
	() => width.value,
	() => (isMob.value = /Mobi|Android|iPhone/i.test(navigator.userAgent))
)
</script>
<style lang="scss">
@import url('@/assets/fonts/index.scss');
.menu-btn {
	// position: fixed;
	// right: 0;
	height: unset !important;
	// padding: 0.625rem 0.3125rem !important;
	// z-index: 2;
	// writing-mode: vertical-rl;
	// white-space: nowrap;
	font-family: BEYNO;
}
.el-drawer {
	writing-mode: unset;
}
</style>
