import fs from 'fs'
import path from 'path'
import { oth as songs } from './achi.js'
const data = []
// type 中文 0，其他语言 1，流行 2，民谣 3，古风 4，R&B 5，Rap 6
export const TYPE_ENUMS = {
	0: '华语',
	1: '其他语言',
	2: '流行',
	3: '民谣',
	4: '古风',
	5: 'R&B',
	6: 'Rap'
}
export const TYPES = {
	中文: '0',
	粤语: '0',
	其他语言: '1',
	英文: '1',
	说唱: '',
	舰长: '',
	SC: '',
	流行: '2',
	民谣: '3',
	古风: '4',
	'R&B': '5',
	Rap: '6'
}
export const TAG_ENUMS = {
	0: 'NEW',
	1: 'SC',
	2: '舰长'
}
export const TAGS = {
	NEW: '0',
	SC: '1',
	舰长: '2'
}
Object.keys(songs).forEach((k) => {
	data.push(
		...songs[k].map((v) => ({
			song: v,
			type: [+`${k === 'zh' ? 0 : k == 'eng' ? 1 : ''}`],
			singer: '',
			tag: null
		}))
	)
})
// fs.writeFileSync(path.join('src', 'assets', 'datatutu.json'), JSON.stringify(data))
const typer = (s) =>
	s
		.split('；')
		.map((str) => TYPES[str])
		.filter((m) => !!m)
		.map((m) => +m)
		.sort()

import data1 from './songs/chenzai/index.js'

// fs.writeFileSync(path.join('src', 'assets', 'chenzaidata.json'), JSON.stringify(data1))
data.forEach((d) => {
	const dt = data1.find((b) => b.song === d.song)
	if (dt) {
		d.singer = dt.singer
		d.type = dt.type
	}
})
console.log(data)
fs.writeFileSync(path.join('src', 'assets', 'dataachioth.json'), JSON.stringify(data))
// fs.writeFileSync(path.join('src', 'assets', 'chenzaidata.json'), JSON.stringify(data1))
