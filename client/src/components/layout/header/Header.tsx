import { IoIosArrowBack, IoIosArrowDown } from 'react-icons/io'

const Header = () => {
	const bool = true
	return (
		<header className='py-5'>
			{bool ? (
				<div className='flex items-center p-1 w-fit rounded-xl hover:bg-neutral-700 cursor-pointer'>
					<div className='w-10 h-10'>
						<img
							src='./public/images/photo.jpeg'
							alt='Photo Photo Logo'
							className='rounded-full'
						/>
					</div>
					<div className='ml-3 text-xl'>sklyarix</div>
					<button className='p-1 bg-neutral-700 rounded-md ml-3 hover:bg-neutral-600 focus:outline-none'>
						<IoIosArrowDown className='text-xl' />
					</button>
				</div>
			) : (
				<div className='flex items-center relative'>
					<button className='p-1 bg-neutral-700 rounded-md'>
						<IoIosArrowBack className='text-xl' />
					</button>
					<div className='font-semibold text-center w-full absolute left-0'>
						Convert
					</div>
				</div>
			)}
		</header>
	)
}
export default Header
