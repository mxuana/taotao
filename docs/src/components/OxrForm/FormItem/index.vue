<template>
	<component :is="tagIs" :class="tagClass">
		<slot />
		<template v-for="f in form">
			<slot :name="'form-item_' + f.prop" :f="f">
				<form-item
					v-if="f.union && f.form.length"
					:dialog="dialog"
					:model="model"
					:form="f.form.filter((f) => !f.hideByUnion)"
					:tag-class="f.tagClass || 'union-' + f.union"
					:tag-is="f.tagIs || 'div'"
				>
					<template
						v-for="(_, slotKey) in omit($scopedSlots, '$hasNormal', '$key', '$stable')"
						#[slotKey]="scope"
					>
						<slot :name="slotKey" v-bind="scope" />
					</template>
				</form-item>
				<el-form-item
					:class="dialog && (f.full ? 'full' : 'half')"
					:style="f.fstyle"
					v-bind="{ ...pick(f, 'label', 'prop', 'rules', 'class'), ...f.$fattrs }"
				>
					<slot :name="f.prop" :f="f">
						<component :is="f.type" v-model="model[f.prop]" v-bind="f.bind ? f.bind(f) : f.$attrs">
							<template v-if="f.options">
								<component
									v-for="op in f.options"
									:is="f.subType"
									:key="op.value || op.label"
									v-bind="f.subBind ? f.subBind(op, f) : defaultSubBind(op)"
								/>
							</template>
						</component>
					</slot>
				</el-form-item>
			</slot>
		</template>
	</component>
</template>

<script setup>
defineOptions({ name: 'form-item' })
const omit = _.omit
const pick = _.pick
const props = defineProps({
	tagIs: { type: String, default: 'fragment' },
	form: { type: Array, default: () => [] },
	model: { type: Object, default: () => ({}) },
	dialog: { type: Boolean, default: false },
	tagClass: { type: String, default: '' }
})
const defaultSubBind = (op) => {
	return {
		class: op.class,
		value: op.value,
		label: op.label
	}
}
</script>
