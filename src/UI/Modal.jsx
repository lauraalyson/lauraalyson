import { XIcon } from '@phosphor-icons/react'
import { useEffect } from 'react'

const Modal = ({ isOpen, onClose, title, children, size = 'md' }) => {
	useEffect(() => {
		const handleEscape = (e) => {
			if (e.key === 'Escape') onClose()
		}

		if (isOpen) {
			document.addEventListener('keydown', handleEscape)
			document.body.style.overflow = 'hidden'
		}

		return () => {
			document.removeEventListener('keydown', handleEscape)
			document.body.style.overflow = 'unset'
		}
	}, [isOpen, onClose])

	if (!isOpen) return null

	const sizeClasses = {
		sm: 'max-w-sm',
		md: 'max-w-md',
		lg: 'max-w-lg',
		xl: 'max-w-xl',
		'2xl': 'max-w-2xl',
	}

	return (
		<div className='fixed inset-0 z-50 mx-auto place-items-center-safe place-content-center-safe'>
			<div
				className='fixed inset-0 bg-stone-800/70 transition-opacity duration-300'
				onClick={onClose}
			/>

			{/* Modal */}
			<div
				className={`rounded border-stone-200 border relative bg-white shadow-xl w-full ${sizeClasses[size]} max-h-[90vh] overflow-hidden transform transition-all duration-300 scale-100`}
			>
				{/* Header */}
				<div className='px-2 py-1 mb-4 border-b border-stone-200'>
					<button
						onClick={onClose}
						className='cursor-pointer fixed w-4 p-1 mt-[2px] rounded-full bg-stone-200 text-stone-200 hover:text-stone-700  transition-colors duration-200'
					>
						<XIcon size={8} />
					</button>
					<h2 className='w-full text-center text-xs'>{title}</h2>
				</div>

				{/* Content */}
				<div className='p-4 overflow-y-auto max-h-[calc(90vh-120px)]'>
					{children}
				</div>
			</div>
		</div>
	)
}

export default Modal
