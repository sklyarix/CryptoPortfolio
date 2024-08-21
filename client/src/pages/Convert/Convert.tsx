import { LuArrowDownUp } from 'react-icons/lu'

import Select from 'react-select'

import { TokenBTC } from '@web3icons/react'

import styles from './Convert.module.scss'

const Convert = () => {
	const options = [
		{ value: 'chocolate', label: 'Chocolate' },
		{ value: 'strawberry', label: 'Strawberry' },
		{ value: 'vanilla', label: 'Vanilla' }
	]

	return (
		<div className='relative flex flex-col items-center gap-4'>
			<div className='p-5 w-full max-w-lg bg-yellow-200 rounded-xl'>
				<div className='font-light text-neutral-800'>Send</div>
				<div className='flex justify-between items-center mt-5'>
					<div className={styles.wrapper}>
						<input type='text' className={styles.input} value='0,4213' />
					</div>
					<Select
						placeholder='BTC'
						options={options}
						isSearchable={false}
						classNamePrefix='currency-select'
					/>
				</div>
			</div>
			<LuArrowDownUp className='absolute top-28 w-10 h-10 p-2 bg-neutral-700 rounded-full fill-neutral-200' />
			<div className='p-5 w-full max-w-lg bg-purple-200 rounded-xl'>
				<div className='font-light text-neutral-800'>Receive</div>
				<div className='flex justify-between items-center mt-5'>
					<div className={styles.wrapper}>
						<input type='text' className={styles.input} value='0,4213' />
					</div>
					<Select
						placeholder='BTC'
						options={options}
						isSearchable={false}
						classNamePrefix='currency-select'
					/>
				</div>
			</div>
			<div className='p-5 flex items-center justify-between w-full max-w-lg bg-neutral-700 rounded-xl'>
				<div className='font-semiboldbold text-neutral-200'>
					Available Portfolio
				</div>
				<div className='flex items-center gap-2 font-bold text-neutral-200'>
					<TokenBTC size={32} variant='branded' /> 1,3220.45 BTC
				</div>
			</div>
			<div className='p-5 flex items-center justify-between w-full max-w-lg bg-neutral-700 rounded-xl'>
				<div>
					<div className='font-semiboldbold text-neutral-200'>Exchange fee</div>
					<div className='text-neutral-400'>Read terms and conditions</div>
				</div>
				<div className='font-bold text-neutral-200'>40$</div>
			</div>
		</div>
	)
}

export default Convert
