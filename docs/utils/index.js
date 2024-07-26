import * as form from './form.js'
export function g(key, obj) {
	const arr = key.split('.')
	return arr.reduce((a, b) => {
		return a[b]
	}, obj)
}
export function splice(origin, key, arr) {
	g(key, origin).splice(0, g(key, origin).length, ...arr)
}
window.__ = {
	g,
	splice,
	...form
}
