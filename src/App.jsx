import Etc from './Components/Etc'
import Footer from './Components/Footer'
import History from './Components/History'
import Intro from './Components/Intro'
import Project from './Components/Project'

function App() {
	return (
		<div className='h-screen p-6 bg-stone-50 place-items-center-safe cursor-default text-sm font-light text-stone-600'>
			<Intro />
			{/* <Project /> */}
			<History />
			<Etc />
			<Footer />
		</div>
	)
}

export default App
