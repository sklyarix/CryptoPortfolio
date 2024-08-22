import { FaArrowTurnUp } from 'react-icons/fa6'
import { FaArrowsLeftRight } from 'react-icons/fa6'
import { FaArrowDown } from 'react-icons/fa6'
import { FaArrowTrendDown } from 'react-icons/fa6'
import { FaArrowTrendUp } from 'react-icons/fa6'

// @ts-ignore
import { TokenIcon } from '@web3icons/react'

const Home = () => {
	return (
		<div>
			<div className='p-5 w-full max-w-lg bg-teal-300	rounded-xl text-neutral-800'>
				<div className=''>Total estimated value</div>
				<div className='font-bold text-2xl'>
					30,4213.43 <span className='text-sm tracking-tighter'>USDT</span>
				</div>
			</div>
			<div className='flex justify-between items-center mt-5 gap-2'>
				<button className='p-3 flex items-center flex-col gap-2 bg-neutral-700 rounded-xl w-1/3 hover:bg-neutral-600'>
					<FaArrowTurnUp className='text-2xl' />
					<span className='font-light'>Send</span>
				</button>
				<button className='p-3 flex items-center flex-col gap-2 bg-neutral-700 rounded-xl w-1/3 hover:bg-neutral-600'>
					<FaArrowsLeftRight className='text-2xl' />
					<span className='font-light'>Convert</span>
				</button>
				<button className='p-3 flex items-center flex-col gap-2 bg-neutral-700 rounded-xl w-1/3 hover:bg-neutral-600'>
					<FaArrowDown className='text-2xl' />
					<span className='font-light'>Deposit</span>
				</button>
			</div>
			<div>
				<div className='p-5 text-xl font-semibold text-center'>My assets</div>
				<div className='flex flex-col gap-2'>
					<div className='p-5 flex items-center justify-between bg-neutral-700 rounded-xl'>
						<div className='flex  gap-2 items-stretch'>
							<TokenIcon
								symbol='btc'
								variant='branded'
								className='w-10 h-10 p-2 rounded-xl bg-neutral-600'
							/>
							<div className='flex flex-col'>
								<span className='font-semibold text-neutral-200'>Bitcoin</span>
								<span className='text-neutral-400 uppercase leading-none'>
									btc
								</span>
							</div>
						</div>
						<div className='flex flex-col'>
							<span className='font-semibold text-neutral-200'>$21,000</span>
							<span className='flex justify-between text-neutral-400 uppercase leading-none text-xs'>
								21,000 <FaArrowTrendDown className='text-rose-400' />
							</span>
						</div>
					</div>
					<div className='p-5 flex items-center justify-between bg-neutral-700 rounded-xl'>
						<div className='flex  gap-2 items-stretch'>
							<TokenIcon
								symbol='eth'
								variant='branded'
								className='w-10 h-10 p-2 rounded-xl bg-neutral-600'
							/>
							<div className='flex flex-col'>
								<span className='font-semibold text-neutral-200'>Bitcoin</span>
								<span className='text-neutral-400 uppercase leading-none'>
									btc
								</span>
							</div>
						</div>
						<div className='flex flex-col'>
							<span className='font-semibold text-neutral-200'>$21,000</span>
							<span className='flex justify-between text-neutral-400 uppercase leading-none text-xs'>
								21,000 <FaArrowTrendUp className='text-green-400' />
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
export default Home
