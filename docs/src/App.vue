<template>
	<HOME />
</template>

<script setup>
import HOME from './views/home/index.vue'
const { useRoute, useRouter } = window['VueRouter']
const route = useRoute()
const router = useRouter()
console.log(route, router, router.getRoutes())
</script>

<style lang="scss" scoped></style>
