import { useState } from 'react'
import styles from './Field.module.scss'

const Field = ({ name, value, placeholder, label, onChange, type }) => {
	const handleChange = e => {
		onChange(e.target.value)
	}

	return (
		<label>
			<div className={styles.name}>{label}</div>
			<div>
				<input
					value={value}
					onChange={handleChange}
					className={styles.input}
					placeholder={placeholder}
					type={type}
					name={name}
				/>
			</div>
		</label>
	)
}
export default Field
