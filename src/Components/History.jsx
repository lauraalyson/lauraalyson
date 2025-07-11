import { useState } from 'react'
import Folder from '../assets/folder.svg'
import Modal from '../UI/Modal'

const titleToDetailsMap = {
	gigasheet: {
		title: 'gigasheet',
		content: (
			<>
				<div className='flex gap-3'>
					<div className='mb-2 space-y-1 w-2/3'>
						<h3 className='font-normal'>About</h3>
						<h3>
							this will be a description about the project and my contributions.
							below will be screenshots.
						</h3>
					</div>
					<div className='mb-2 space-y-1 w-1/3'>
						<h3 className='font-normal'>Role</h3>
						<h3>Software developer</h3>
					</div>
				</div>

				<div className='flex flex-wrap justify-center gap-2 py-2'>
					<div className='h-72 w-full bg-stone-100 rounded'></div>
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

const History = () => {
	const [isOpen, setIsOpen] = useState(false)
	const [details, setDetails] = useState({ title: '', content: null })

	const handleOpenModal = async (title) => {
		await setDetails(titleToDetailsMap[title])
		setIsOpen(true)
	}

	return (
		<div className='w-2xl my-12'>
			<h1 className='mb-1 font-normal'>Experience</h1>

			<div className='flex gap-4 my-4'>
				<button
					onClick={() => handleOpenModal('gigasheet')}
					className='my-2 cursor-pointer rounded hover:bg-stone-100 p-2'
				>
					<img src={Folder} className='w-12 h-12 mx-auto' />
					<p className='text-xs'>gigasheet</p>
				</button>
				<button
					onClick={() => handleOpenModal('cultra')}
					className='my-2 cursor-pointer rounded hover:bg-stone-100 p-2'
				>
					<img src={Folder} className='w-12 h-12 mx-auto' />
					<p className='text-xs'>cultra</p>
				</button>
				<button
					onClick={() => handleOpenModal('tomkats')}
					className='my-2 cursor-pointer rounded hover:bg-stone-100 p-2'
				>
					<img src={Folder} className='w-12 h-12 mx-auto' />
					<p className='text-xs'>tomkats</p>
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

export default History
