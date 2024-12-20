export interface Logo {
	fontFamily?: string
	fontSize?: string
	height?: string
}
export type Song = {
	songs: string[]
	type: string
}
type Avater = {
	name?: string
	is?: string
	$attr?: object
	img?: boolean
	src?: string
}
export type SongList = {
	vup: string
	avater?: Avater
	slogan?: string
	logo?: Logo
	logoCn?: string
	songs: Song[]
	theme?: string
	tab?: boolean
	specSongs?: Song[]
}
