import { useState } from 'react'
import { useAuth } from '../../../hooks/useAuth.tsx'
import loginService from '../../../services/loginService.tsx'
import Field from '../../../ui/Field/Field.tsx'
import styles from './../Modal.module.scss'

const ModalLogin = ({ closeModal }) => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const { setIsAuth } = useAuth()

	const handleSubmit = async e => {
		e.preventDefault()
		let user = { email, password }
		const result = await loginService(user)
		if (result) {
			setIsAuth(true)
			closeModal(false)
		} else {
			console.log('Login failed')
		}
	}
	return (
		<>
			<form onSubmit={handleSubmit}>
				<div className={styles['wrapper-inputs']}>
					<Field
						name='email'
						placeholder='Email'
						label='Email'
						value={email}
						type='email'
						onChange={setEmail}
					/>
					<Field
						name='password'
						placeholder='Password'
						label='Password'
						type='password'
						value={password}
						onChange={setPassword}
					/>
				</div>
				<button type='submit' className={styles['btn-blue']}>
					Login
				</button>
			</form>
		</>
	)
}
export default ModalLogin
