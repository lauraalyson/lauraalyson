import Folder from '../assets/folder.svg'
const History = () => {
	return (
		<div className='w-2xl my-12'>
            <h1 className='mb-1 font-medium'>Experience</h1>
            
			<div className='flex gap-6 my-6'>
				<button className='my-2'>
					<img src={Folder} className='w-12 h-12' />
					<p className='text-xs'>gigasheet</p>
				</button>
				<button className='my-2'>
					<img src={Folder} className='w-12 h-12' />
					<p className='text-xs'>cultra</p>
				</button>
				<button className='my-2'>
					<img src={Folder} className='w-12 h-12' />
					<p className='text-xs'>tomkats</p>
				</button>
			</div>
		</div>
	)
}

export default History
