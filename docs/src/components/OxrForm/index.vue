<template>
	<el-form
		ref="commFormRef"
		class="comm-form"
		:class="dialog ? 'dialog-form' : 'inline-form'"
		v-bind="$attrs"
		:model="model"
		:label-width="labelWidth"
	>
		<form-item :dialog="dialog" :model="model" :form="form.filter((f) => !f.hideByUnion)">
			<template v-for="(_, slotKey) in omit($slots, '$hasNormal', '$key', '$stable')" #[slotKey]="scope">
				<slot :name="slotKey" v-bind="scope" />
			</template>
		</form-item>
		<el-form-item class="form-operation" v-if="!nonOperation">
			<el-button type="primary" @click="submit($event)"> {{ okText }} </el-button>
			<el-button @click="submit($event, '_RESET_')">重置</el-button>
		</el-form-item>
	</el-form>
</template>

<script setup>
import { ref, watch } from 'vue'
import FormItem from './FormItem/index.vue'
const omit = _.omit
const commFormRef = ref(null)
const props = defineProps({
	form: { type: Array, default: () => [] },
	model: { type: Object, default: () => ({}) },
	nonOperation: { type: Boolean, default: false },
	dialog: { type: Boolean, default: false },
	okText: { type: String, default: '查询' },
	labelWidth: { type: String, default: '100px' }
})
const hasRule = ref(false)
watch(
	() => props.form,
	(n, _) => {
		const union = []
		n.forEach((f, index) => {
			!hasRule.value && 'rules' in f && f.rules.length > 0 && (hasRule.value = true)
			if ('union' in f && f.union) {
				const t = union.find((u) => u.union === f.union)
				if (t) {
					n[t.index].form.push(_.omit(f, 'form', 'union'))
					f.hideByUnion = true
				} else {
					union.push({ union: f.union, index })
					f.form = [_.omit(f, 'form', 'union')]
				}
			}
		})
	},
	{ deep: true, immediate: true }
)
const emit = defineEmits(['submit', 'reset', 'validate-val'])
const submit = (e, type) => {
	e.preventDefault()
	if (type === '_RESET_') {
		commFormRef.value.resetFields()
		emit('reset')
		emit('submit')
	}
	const obj = { ...props.model }
	if (!hasRule.value) return emit('submit', obj)
	commFormRef.value.validate((valid) => {
		emit('validate-val', valid)
		if (valid) {
			return emit('submit', obj)
		} else {
			return false
		}
	})
}
</script>
<style lang="scss">
@import './index.scss';
</style>
