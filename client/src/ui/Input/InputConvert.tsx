import styles from './InputConvert.module.scss'
import {ChangeEvent} from 'react'

type Props = {
  value: string;
	setValue: (value: string) => void;
};

const InputConvert = ({value, setValue}:Props) => {
	
	
	const onChange = (e: ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.value);
	}
	
	return (
		<div className={styles.wrapper}>
			<input
				type='text'
				className={styles.input}
				value={value}
				onChange={onChange}
			/>
		</div>
	)
}

export default InputConvert
