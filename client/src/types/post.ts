export type Post = {
	_id: string
	image: string
	body: string
	likes: string
	createdAt: Date
	createdBy: string
	comments: Comment[]
}

export type Comment = {
	_id: string
	body: string
	likes: number
	createdAt: Date
	createdBy: string
	comment: Comment[]
}
