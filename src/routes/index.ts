import { RouteRecordRaw, createRouter, createWebHashHistory } from 'vue-router'

import 'nprogress/nprogress.css'

// static
export const constantRoutes: RouteRecordRaw[] = [
	{
		path: '/',
		redirect: '/song-list',
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
	},
	{
		name: 'SongList',
		path: '/song-list',
		component: () => import('@/views/song-list/index.vue'),
		meta: {
			title: '歌单',
			svg: 'shou_ye',
			color: '#2d8cf0'
		}
	},
	{
		name: 'SongList2',
		path: '/song-list2',
		component: () => import('@/views/song-list2/index.vue'),
		meta: {
			title: '歌单',
			svg: 'shou_ye',
			color: '#2d8cf0'
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
