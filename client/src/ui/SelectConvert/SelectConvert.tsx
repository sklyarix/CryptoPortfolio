import { useState } from 'react'
import Select from 'react-select'

import styles from './SelectConvert.module.scss'

interface Option {
	value: string
	label: string
}

const options: Option[] = [
	{ value: 'Bitcoin', label: 'BTC' },
	{ value: 'Ethereum', label: 'ETH' },
	{ value: 'Tether', label: 'USDT' },
]

const SelectConvert = () => {
	const [selectedOption, setSelectedOption] = useState<{
		value: string
		label: string
	} | null>(null)

	return (
		<>
			<Select
				placeholder={options[0].label}
				options={options}
				className={styles.select}
				classNamePrefix='currency-select'
				defaultValue={selectedOption}
				onChange={setSelectedOption}
				isSearchable={false}
			/>
		</>
	)
}

export default SelectConvert
