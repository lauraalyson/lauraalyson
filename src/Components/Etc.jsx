import { useState } from 'react'
import Modal from '../UI/Modal'

import Thinker from '../assets/plan-better.png'
import Thoughts from '../assets/plan-good.png'
import Tiki from '../assets/tiki.png'

const titleToDetailsMap = {
	gigasheet: {
		title: 'gigasheet',
		content: (
			<>
				<p className='mb-2'>
					this will be a description about the project and my contributions.
					below will be screenshots.
				</p>
				<div className='flex flex-wrap justify-center gap-2 py-2'>
					<div className='h-34 w-full bg-sky-100 border border-sky-200 rounded'></div>
					<div className='h-34 w-full bg-sky-100 border border-sky-200 rounded'></div>
					<div className='h-34 w-full bg-sky-100 border border-sky-200 rounded'></div>
				</div>
			</>
		),
	},
	cultra: {
		title: 'cultra',
		content: (
			<>
				<p className='mb-2'>
					this will be a description about the project and my contributions.
					below will be screenshots.
				</p>
				<div className='flex flex-wrap justify-center gap-2 py-2'>
					<div className='h-34 w-full bg-sky-100 border border-sky-200 rounded'></div>
					<div className='h-34 w-full bg-sky-100 border border-sky-200 rounded'></div>
				</div>
			</>
		),
	},
	tomkats: {
		title: 'tomkats',
		content: (
			<>
				<p className='mb-2'>
					this will be a description about the project and my contributions.
					below will be screenshots.
				</p>
				<div className='flex flex-wrap justify-center gap-2 py-2'>
					<div className='h-34 w-full bg-sky-100 border border-sky-200 rounded'></div>
					<div className='h-34 w-full bg-sky-100 border border-sky-200 rounded'></div>
					<div className='h-34 w-full bg-sky-100 border border-sky-200 rounded'></div>
				</div>
			</>
		),
	},
}

const Etc = () => {
	const [isOpen, setIsOpen] = useState(false)
	const [details, setDetails] = useState({ title: '', content: null })

	const handleOpenModal = async (title) => {
		await setDetails(titleToDetailsMap[title])
		setIsOpen(true)
	}

	return (
		<div className='w-2xl my-12'>
			<h1 className='mb-1 font-normal'>Just for fun</h1>

			<div className='flex gap-4 my-4'>
				<button
					onClick={() => handleOpenModal('cultra')}
					className='my-2 cursor-pointer rounded hover:bg-stone-100 p-2'
				>
					<img src={Thinker} className='h-20 mx-auto' />
					<p className='text-xs'>thinker</p>
				</button>
				<button
					onClick={() => handleOpenModal('gigasheet')}
					className='my-2 cursor-pointer rounded hover:bg-stone-100 p-2'
				>
					<img src={Tiki} className='h-20 mx-auto w-18' />
					<p className='text-xs'>title</p>
				</button>
				<button
					onClick={() => handleOpenModal('tomkats')}
					className='my-2 cursor-pointer rounded hover:bg-stone-100 p-2'
				>
					<img src={Thoughts} className='h-20 mx-auto' />
					<p className='text-xs'>thoughts</p>
				</button>
			</div>

			<Modal
				size='2xl'
				isOpen={isOpen}
				onClose={() => setIsOpen(false)}
				title={details?.title}
			>
				{details?.content}
			</Modal>
		</div>
	)
}

export default Etc
