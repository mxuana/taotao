import { fetchVideoInfo, fetchPlayUrlPromise } from './Data'
import { VideoInfo, Song } from './biliobj'
export const getSongList = async (bvid: string) => {
	const info: VideoInfo | undefined = await fetchVideoInfo(bvid)
	let lrc = ''
	let songs = []

	// Case of single part video
	if (info?.pages.length == 1) {
		// lrc = await fetchLRC(info.title)
		return [
			new Song({
				cid: info.pages[0].cid,
				bvid: bvid,
				name: info.title,
				singer: info.uploader.name,
				singerId: info.uploader.mid,
				cover: info.picSrc,
				musicSrc: () => {
					return fetchPlayUrlPromise(bvid, info.pages[0].cid)
				},
				lyric: lrc
			})
		]
	}

	// Can't use forEach, does not support await
	if (info)
		for (let index = 0; index < info.pages.length; index++) {
			let page = info.pages[index]
			// lrc = fetchLRC(page.part)
			songs.push(
				new Song({
					cid: page.cid,
					bvid: bvid,
					name: page.part,
					singer: info.uploader.name,
					singerId: info.uploader.mid,
					cover: info.picSrc,
					musicSrc: () => {
						return fetchPlayUrlPromise(bvid, page.cid)
					},
					lyric: lrc
				})
			)
		}

	return songs
}
