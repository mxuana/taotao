export interface Logo {
	fontFamily?: string
	fontSize?: string
	height?: string
}
export type Song = {
	song: string
	type: number[]
	tag: number | null
	singer: string
}

export type SongList = {
	vup: string
	avater?: string
	slogan?: string
	logo?: Logo
	logoCn?: string
	songs: Song[]
	theme?: string
	tab?: boolean
}
