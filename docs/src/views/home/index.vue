<template>
	<div class="content">
		<OxrForm :form="searchForm" :model="searchData" @submit="submit"></OxrForm>
	</div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import OxrForm from '../../components/OxrForm/index.vue'
const searchForm = ref([
	{
		...__.fi('A', 'Input', 'a')
	}
])
const searchData = reactive({ a: '1' })
const submit = (obj) => {
	console.log(obj)
}
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>
