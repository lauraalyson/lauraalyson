const Message = ({ text }) => {
	return (
		<div className='w-fit text-gray-600 font-light rounded-br-none text-right py-1 px-3 rounded-full bg-gray-100 ring-1 shadow-sm ring-gray-200'>
			<h1>{text}</h1>
		</div>
	)
}

const Messages = () => {
	return (
		<div>
			<p className='text-gray-400 text-xs text-center lowercase'>
				April 29, 2025
			</p>
			<div className='mt-6 flex flex-col items-end gap-2 lowercase'>
				{['BRB', 'Doing a little spring cleaning'].map((text) => {
					return <Message text={text} />
				})}
			</div>
		</div>
	)
}

export default Messages
