export interface OneRedditItem {
    data: {
			title: String,
			thumbnail: String,
			permalink: String
	}
}

export interface Reddit {
	data: {
		children: OneRedditItem[]
	}
}