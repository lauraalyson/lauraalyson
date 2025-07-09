import Footer from './Components/Footer'
import History from './Components/History'
import Intro from './Components/Intro'
import Project from './Components/Project'

function App() {
	return (
		<div className='h-screen p-6 bg-stone-100 place-items-center-safe cursor-default text-sm font-light text-stone-600'>
			<Intro />
			<Project />
			<History />
			<Project />
			<Footer />
		</div>
	)
}

export default App
