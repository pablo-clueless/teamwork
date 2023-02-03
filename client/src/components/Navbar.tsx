import React from 'react'
import HomeIcon from '@mui/icons-material/Home'
import MapsUgcIcon from '@mui/icons-material/MapsUgc'
import NotificationsIcon from '@mui/icons-material/Notifications'
import profile from '../assets/profile.jpg'
const Navbar: React.FC = () => {
	return (
		<header className=" header  flex justify-between bg-dark  p-3 text-white shadow-md">
			<div className="flex  items-center justify-between gap-9">
				<HomeIcon color="inherit" fontSize="large" />
				<nav>
					<ul className="flex w-fit cursor-pointer items-center gap-10 rounded-md bg-chrelestonGreen px-3 py-2 text-sonicSilver  ">
						<li className="rounded-md bg-onyx px-3 py-2 text-white shadow-lg">
							Post
						</li>
						<li>Events</li>
						<li>Friends</li>
					</ul>
				</nav>
			</div>
			<div className="flex items-center gap-5">
				<div className="rounded-full bg-chrelestonGreen p-3">
					<MapsUgcIcon color="inherit" fontSize="large" />
				</div>
				<div className="rounded-full bg-chrelestonGreen  p-3">
					<NotificationsIcon color="inherit" fontSize="large" />
				</div>
				<div className="aspect-square w-16 overflow-hidden rounded-full">
					<img src={profile} alt="Profile" />
				</div>
			</div>
		</header>
	)
}

export default Navbar
