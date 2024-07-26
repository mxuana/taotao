import * as sass from '../plugins/sass@1.70.0/sass.default.js'
const options = {
	moduleCache: {
		vue: Vue
	},
	async getFile(url) {
		// const file = new File([url], 'filename')
		const res = await fetch(url)
		if (!res.ok) throw Object.assign(new Error(res.statusText + ' ' + url), { res })
		return { getContentData: (asBinary) => (asBinary ? res.arrayBuffer() : res.text()) }
	},
	async processStyles(src, lang, filename, options) {
		const prePath = filename.substring(0, filename.lastIndexOf('/'))
		if (lang !== 'scss') throw new Error(`unsupported "${lang}" style processor`)
		const sassDepImporter = {
			canonicalize: (str) => new URL(str, 'file:'),
			load: async (url) => {
				const res = options.getResource({ refPath: filename, relPath: prePath + url.pathname }, options)
				const content = await res.getContent()
				return {
					contents: await content.getContentData(false),
					syntax: content.type.slice(1)
				}
			}
		}

		try {
			const compiled = await sass.compileStringAsync(src, {
				importers: [sassDepImporter]
			})

			return compiled.css
		} catch (ex) {
			options.log('error', ex.message)
			return undefined
		}
	},
	addStyle(styleStr) {
		const style = document.createElement('style')
		style.textContent = styleStr
		const ref = document.head.getElementsByTagName('style')[0] || null
		document.head.insertBefore(style, ref)
	},
	log(type, ...args) {
		console[type](...args)
	}
}
const _options = {
	moduleCache: {
		vue: Vue
	},
	async getFile(url) {
		const res = await fetch(url)
		if (!res.ok) throw Object.assign(new Error(res.statusText + ' ' + url), { res })
		const getContentData = (asBinary) => {
			const r = asBinary ? res.arrayBuffer() : res.text()
			return r
		}
		return { getContentData }
	},
	async processStyles(src, lang, filename, options) {
		if (lang !== 'sass') throw new Error(`unsupported "${lang}" style processor`)

		const sassDepImporter = {
			canonicalize: (str) => new URL(str, 'file:'),
			load: async (url) => {
				const res = options.getResource({ refPath: filename, relPath: url.pathname }, options)
				const content = await res.getContent()
				return {
					contents: await content.getContentData(false),
					syntax: content.type.slice(1) // content.type is the file extension, then just strip the "."
				}
			}
		}

		try {
			const compiled = await sass.compileStringAsync(src, {
				importers: [sassDepImporter]
			})

			return compiled.css
		} catch (ex) {
			options.log('error', ex.message)
			return undefined
		}
	},
	addStyle(textContent) {
		const style = Object.assign(document.createElement('style'), { textContent })
		const ref = document.head.getElementsByTagName('style')[0] || null
		document.head.insertBefore(style, ref)
	}
}
window.loaderVueOptions = options
window.loaderVueOptions2 = _options
