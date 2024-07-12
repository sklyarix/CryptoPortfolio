import {useState} from 'react'
import styles from './InputConvert.module.scss';

const InputConvert = () => {
	
	const [value, setValue] = useState('0,4213.43');
	
	return(
		<>
			<div className={styles.input}>{value}</div>
		</>
	)
}

export default InputConvert