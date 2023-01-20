import { Routes as Switch, Route } from 'react-router-dom'
import React from 'react'
import { Home } from 'pages/Home'
import User from 'pages/User'
import Settings from 'pages/Settings'
import Event from 'pages/Event'
import Post from 'pages/Post'
const Routes: React.FC = () => {
	return (
		<Switch>
			<Route element={<Home />} path="/" />
			<Route element={<User />} path="/user/:userId" />
			<Route element={<Settings />} path="/settings" />
			<Route element={<Event />} path="/event/:eventId" />
			<Route element={<Post />} path="/post/:postId" />
		</Switch>
	)
}

export default Routes
