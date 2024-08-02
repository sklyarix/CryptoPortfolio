import { useState } from 'react'
import { useAuth } from '../../../hooks/useAuth.tsx'
import registerService from '../../../services/registerService.tsx';


const ModalRegister = () => {

	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
	const { setIsAuth } = useAuth();
	
	
	const handleSubmit = async e => {
		e.preventDefault()
				let user = { name, email, password }
				const result = await registerService(user)
				console.log(result)
				if (result) {
					setIsAuth(true);
				} else {
					console.log('Login failed');
				}
	}
	return (
		<>
			Modal Register
			<form onSubmit={handleSubmit}>
				<label class="">
					<span class="">Email</span>
					<div class="">
						<input
							class=""
							name="name"
							type="text"
							placeholder="Name"
							value={name}
							onChange={(e) => setName(e.target.value)}
						/>
					</div>
					</label>
				<label class="">
					<span class="">Email</span>
					<div class="">
						<input
							class=""
							name="email"
							type="email"
							placeholder="Email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
					</div>
					</label>
				<label class="">
					<span class="">Password</span>
					<div class="">
						<input
							class=""
							name="password"
							type="password"
							placeholder="Password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
					</div>
					</label>
				<button type="submit">Login</button>
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
	