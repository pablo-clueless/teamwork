import { Post } from './post'

export type User = {
	_id: string
	email: string
	events: Event[]
	followers: User[]
	following: User[]
	isVerified: boolean
	name: string
	// password: string
	posts: Post[]
	username: string
}

export type Event = {
	_id: string
	createdAt: Date
	createdBy: string
	endsOn: Date
	title: string
}

export type Community = {
	_id: string
	createdAt: Date
	createdBy: string
	events: Event[]
	members: string[]
	name: string
}
