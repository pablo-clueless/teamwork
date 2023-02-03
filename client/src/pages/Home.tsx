import Sidebar from 'components/Sidebar'
import Navbar from '../components/Navbar'
export const Home = () => {
	return (
		<>
			<main className="home">
				<Navbar />
				<Sidebar />
				<div className="content mx-auto max-w-[70ch] p-3 text-center">
					<h1 className="text-3xl font-bold text-secondary">
						Welcome to{' '}
						<span className="text-8xl font-black">Teamwork</span>
					</h1>
					<p>
						Lorem ipsum dolor sit, amet consectetur adipisicing elit.
						Voluptates harum perspiciatis consequuntur ex odio nulla nobis
						est rem reiciendis exercitationem.
					</p>
				</div>
			</main>
		</>
	)
}
