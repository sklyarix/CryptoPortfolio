import Select from 'react-select'
import { Coin } from '../../types/Coin.ts'

import styles from './SelectConvert.module.scss'

interface Option {
	value: string
	label: string
}

interface Props {
	value: number
	setValue: (value: number) => void
	dataCoins: Coin[]
}

/*
type SelectProps = {
  selected: Option | null;
  options: Option[];
  placeholder?: string;
  mode?: 'rows' | 'cells';
  status?: 'default' | 'invalid';
  onChange?: (selected: Option['value']) => void;
  onClose?: () => void;
};
*/

const SelectConvert = ({ value, setValue, dataCoins }: Props) => {
	const options: Option[] = dataCoins.map(coin => ({
		value: coin.name,
		label: coin.slug,
	}))

	const getValue = () => {
		return value ? options.find(coinSlug => +)
	}

	const onChange = (newValue: any) => {
		setValue(newValue.value)
	}

	//const changeSelect = setValue(value => value)

	return (
		<>
			<Select
				placeholder={'Select currency'}
				options={options}
				className={styles.select}
				classNamePrefix='currency-select'
				isSearchable={false}
				value={getValue}
				onChange={onChange}
			/>
		</>
	)
}

export default SelectConvert

/*
function MyButton() {
    const [count, setCount] = useState(0);

    function handleClick() {
        setCount(count + 1);
    }
    return (
        <button
            onClick={handleClick}
            className="bg-blue-500 hover:bg-blue-700 rounded py-2 px-4 text-white font-bold"
        >
            I have been clicked {count} times
        </button>
    );
}








interface Option {
	value: string
	label: string
}


/*
data = { data }
value = { sendValue }
setValue = { setSendValue }
*/
// data: any, value: any, setValue: any

/*
	const options: Option[] = data.map((coin) => ({
    value: coin.name,
    label: coin.slug,
  }));
	*/

/*

<Select
				placeholder={dataCurrency[0]?.name || 'Select currency'}
				options={options}
				className={styles.select}
				classNamePrefix='currency-select'
				defaultValue={selectedOption}
				onChange={setSelectedOption}
				isSearchable={false}
			/>
			
*/
