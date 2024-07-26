<template>
	<router-view />
</template>

<script setup>
const { useRoute, useRouter } = window['VueRouter']
const route = useRoute()
const router = useRouter()
console.log(route, router, router.getRoutes())
</script>

<style lang="scss" scoped></style>
