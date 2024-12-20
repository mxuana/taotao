import { RouteRecordRaw, createRouter, createWebHashHistory } from 'vue-router'

import 'nprogress/nprogress.css'

// static
export const constantRoutes: RouteRecordRaw[] = [
	{
		path: '/',
		redirect: '/taotao',
		meta: { hidden: true }
	},
	{
		path: '/404',
		component: () => import('@/views/error/404.vue'),
		meta: { hidden: true }
	},
	{
		name: 'SongList',
		path: '/taotao',
		component: () => import('@/views/taotao/index.vue'),
		meta: {
			title: '桃桃',
			icon: 'Tickets'
		}
	},
	{
		path: '/:pathMatch(.*)*', // Must put the 'ErrorPage' route at the end, 必须将 'ErrorPage' 路由放在最后
		redirect: '/404',
		name: 'ErrorPage',
		meta: {
			hidden: true
		}
	}
]
const router = createRouter({
	history: createWebHashHistory(import.meta.env.VITE_PUBLIC_PATH),
	routes: constantRoutes
})

export default router
