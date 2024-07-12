import { useState } from 'react'
import styles from './InputConvert.module.scss'

const InputConvert = () => {
	const [value, setValue] = useState(2221)

	return (
		<div className={styles.wrapper}>
			<input
				type='number'
				name='myRadio'
				className={styles.input}
				value={value}
				onChange={e => setValue(+e.target.value)}
			/>
		</div>
	)
}

export default InputConvert
