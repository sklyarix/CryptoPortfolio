import { Link } from '@tanstack/react-router'
import { FaArrowRight } from 'react-icons/fa6'

const Preview = () => {
	return (
		<div className="relative h-screen w-screen bg-[url('./public/images/bg.png')] overflow-hidden">
			<div className='absolute top-0 left-0 p-5'>
				Developed by:<span className='ml-1'>sklyarix</span>
			</div>
			<div className='m-5 px-5 pt-6 pb-12 bg-neutral-800 rounded-xl absolute bottom-0 left-0 w-10/12'>
				<div className='text-4xl font-semibold'>
					Start your crypto
					<br />
					journey with
					<br />
					sklyarix
				</div>
				<div className='mt-3'>
					Top fully secure crypto wallet
					<br /> and exchanger
				</div>
				<Link
					className='absolute right-2.5 bottom-2.5 block w-auto ml-auto p-6 bg-neutral-700 rounded-full hover:bg-neutral-600 focus:outline-none'
					to='/auth'
				>
					<FaArrowRight />
				</Link>
			</div>
		</div>
	)
}
export default Preview

//
