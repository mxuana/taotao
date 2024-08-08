<template>
	<div class="error-page">
		<div class="error-page-svg">
			<slot />
		</div>
		<router-link to="/">
			<el-button type="primary">回到首页</el-button>
		</router-link>
	</div>
</template>

<style lang="scss" scoped>
.error-page {
	height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding-top: 30%;
	&-svg {
		width: 400px;
		margin-bottom: 50px;
	}
}
</style>
