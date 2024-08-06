import { useState } from 'react'
import { useAuth } from '../../../hooks/useAuth.tsx'
import registerService from '../../../services/registerService.tsx'
import styles from './../Modal.module.scss'
import Field from './../../../ui/Field/Field.tsx'

const ModalRegister = ({ closeModal }) => {
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const { setIsAuth } = useAuth()

	const handleSubmit = async e => {
		e.preventDefault()
		let user = { name, email, password }
		const result = await registerService(user)
		console.log(result)
		if (result) {
			setIsAuth(true)
		} else {
			console.log('Login failed')
		}
	}
	return (
		<>
			<form>
				<div className={styles['wrapper-inputs']}>
					<Field
						name='name'
						placeholder='Name'
						label='Name'
						value={name}
						onChange={setName}
					/>
					<Field
						name='email'
						placeholder='Email'
						label='Email'
						value={email}
						onChange={setEmail}
					/>
					<Field
						name='password'
						placeholder='Password'
						label='Password'
						value={password}
						onChange={setPassword}
					/>
				</div>
				<button
					type='submit'
					className={styles['btn-blue']}
					onSubmit={handleSubmit}
				>
					Create Account
				</button>
			</form>
		</>
	)
}
export default ModalRegister

//import { useQuery } from '@tanstack/react-query'
/*
	const { data, isLoading, error } = useQuery({
		queryKey: ['login'],
		queryFn: LoginService,
	})
	33421`*/
