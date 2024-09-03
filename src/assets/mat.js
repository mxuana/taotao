import fs from 'fs'
import path from 'path'
import songs from './songs.js'
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
	SC点歌: '',
	流行: '2',
	民谣: '3',
	古风: '4',
	'R&B': '5',
	Rap: '6'
}
export const TAG_ENUMS = {
	0: 'NEW',
	1: 'SC点歌',
	2: '舰长'
}
export const TAGS = {
	NEW: '0',
	SC点歌: '1',
	舰长专属歌曲: '2'
}
Object.keys(songs).forEach((k) => {
	data.push(
		...songs[k].map((v) => ({
			song: v,
			type: `${k === 'zh' ? 0 : k == 'eng' ? 1 : ''}`,
			singer: '',
			tag: ''
		}))
	)
})
fs.writeFileSync(path.join('src', 'assets', 'data.json'), JSON.stringify(data))
import chenzaisongs from './songs-chenzai.js'
const typer = (s) =>
	s
		.split('；')
		.map((str) => TYPES[str] || '')
		.filter((m) => !!m)
		.sort()
		.join(',')

const data1 = chenzaisongs.data.map((s) => ({
	song: s['歌曲'],
	type: typer(s['类型']),
	singer: s['歌手'],
	tag: `${TAGS[s['备注']] || ''}`
}))

fs.writeFileSync(path.join('src', 'assets', 'chenzaidata.json'), JSON.stringify(data1))
