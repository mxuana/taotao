const { createRouter, createWebHashHistory } = window['VueRouter']

// static
export const constantRoutes = [
	{
		path: '/',
		redirect: '/home',
		meta: { hidden: true }
	},
	{
		path: '/404',
		component: Vue.defineAsyncComponent(() => import('../views/error/404.vue')),
		meta: { hidden: true }
	},
	{
		name: 'Home',
		path: '/home',
		component: Vue.defineAsyncComponent(() => import('/origin-oxr/src/views/home/index.vue')),
		meta: {
			title: '首页',
			svg: 'shou_ye',
			color: '#2d8cf0'
		}
	},
	{
		name: 'Home1',
		path: '/home1',
		component: () => import('/origin-oxr/src/views/error/403.vue'),
		meta: {
			title: '首页',
			svg: 'shou_ye',
			color: '#2d8cf0'
		}
	}
]
const router = createRouter({
	history: createWebHashHistory(),
	routes: constantRoutes
})
window.router = router
export default router
