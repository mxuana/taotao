import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router'

import 'nprogress/nprogress.css'

// static
export const constantRoutes: RouteRecordRaw[] = [
	{
		path: '/',
		redirect: '/home',
		meta: { hidden: true }
	},
	{
		path: '/404',
		component: () => import('@/views/error/404.vue'),
		meta: { hidden: true }
	},
	{
		name: 'Home',
		path: '/home',
		component: () => import('@/views/home/index.vue'),
		meta: {
			title: '首页',
			svg: 'shou_ye',
			color: '#2d8cf0'
		}
	}
]
const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: constantRoutes
})

export default router
