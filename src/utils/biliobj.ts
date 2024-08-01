export class Song {
	id: string = ''
	bvid: string = ''
	name: string = ''
	singer: string = ''
	singerId: string = ''
	cover: string = ''
	musicSrc: string = ''
	lyric: string = ''
	lyricOffset: string = ''
	constructor({ cid, bvid, name, singer, cover, musicSrc, singerId, lyric, lyricOffset }: any) {
		this.id = cid
		this.bvid = bvid
		this.name = name
		this.singer = singer
		this.singerId = singerId
		this.cover = cover
		this.musicSrc = musicSrc
		this.lyric = lyric
		this.lyricOffset = lyricOffset
	}
}
type Page = { bvid: string; part: string; cid: string }
export class VideoInfo {
	title: string = ''
	desc: string = ''
	videos: number = 0
	picSrc: string = ''
	uploader: any = ''
	pages: Page[] = []
	constructor(title: string, desc: string, videos: number, picSrc: string, uploader: any, pages: Page[]) {
		this.title = title
		this.desc = desc
		this.videos = videos
		this.picSrc = picSrc
		this.uploader = uploader
		this.pages = pages
	}

	isMutiPartVideo() {
		return this.videos > 1
	}

	getMultiPartVideoList() {}
}
export default {
	Song,
	VideoInfo
}
