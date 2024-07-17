
import Select from 'react-select'

import styles from './SelectConvert.module.scss'

interface Option {
  value: string;
  label: string;
}


// @ts-ignore
const SelectConvert = (data, value, setValue) =>  {
	
	const options: Option[] = data.map((coin) => ({
    value: coin.name,
    label: coin.slug,
  }));
	
	return (
		<>
			<Select
				placeholder={dataCurrency[0]?.name || 'Select currency'}
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
