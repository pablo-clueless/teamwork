import Event from 'pages/Event'
import { Home } from 'pages/Home'
import { NotFound } from 'pages/NotFound'
import Post from 'pages/Post'
import Settings from 'pages/Settings'
import User from 'pages/User'
import React from 'react'
import { Route, Routes as Switch } from 'react-router-dom'

const Routes: React.FC = () => {
	return (
		<Switch>
			<Route element={<Home />} path="/" />
			<Route element={<User />} path="/user/:userId" />
			<Route element={<Settings />} path="/settings" />
			<Route element={<Event />} path="/event/:eventId" />
			<Route element={<Post />} path="/post/:postId" />
			<Route path="*" element={<NotFound />} />
		</Switch>
	)
}

export default Routes
