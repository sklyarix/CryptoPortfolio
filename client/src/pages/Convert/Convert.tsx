import { LuArrowDownUp } from 'react-icons/lu'

import Select from 'react-select'

import styles from './Convert.module.scss'

const Convert = () => {
	const options = [
		{ value: 'chocolate', label: 'Chocolate' },
		{ value: 'strawberry', label: 'Strawberry' },
		{ value: 'vanilla', label: 'Vanilla' }
	]

	return (
		<div className='relative flex flex-col items-center gap-4'>
			<div className='p-5 w-full max-w-lg bg-yellow-200 rounded-md'>
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
			<div className='p-5 w-full max-w-lg bg-purple-200 rounded-md'>
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
			<div className='p-5 w-full max-w-lg bg-neutral-700 rounded-md'>
				<div className='font-bold text-neutral-200'>Available Portfolio</div>
				<div className='font-bold text-neutral-200'>1,3220.45 BTC</div>
			</div>
		</div>
	)
}

export default Convert
/*
.arrow-swap {
	position: absolute;
	left: calc(50% - 25px);
	top: calc(50% - 25px);

	display: flex;
	align-items: center;
	justify-content: center;

	width: 50px;
	height: 50px;
	border-radius: 100%;
	background-color: black;

	svg {
		position: relative;
		color: $white;
	}
}

	 */
