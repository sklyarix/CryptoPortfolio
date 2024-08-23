import { useState } from 'react'
import Layout from '../../components/layout/Layout.tsx'
import { LoginForm } from './LoginForm/LoginForm.tsx'
import { RegisterForm } from './RegisterForm/RegisterForm.tsx'

const Auth = () => {
	const [isLoginForm, setIsLoginForm] = useState(false)
	return (
		<Layout>
			<div className='flex items-center justify-center h-full'>
				<div className='p-4 w-full bg-neutral-600 rounded-xl'>
					<div className='flex items-center justify-center'>
						<button
							disabled={!isLoginForm}
							className='p-2 mr-4 w-28 bg-neutral-400 rounded-xl text-lg hover:opacity-100 disabled:bg-blue-500 disabled:focus:bg-green-400'
							onClick={() => setIsLoginForm(!isLoginForm)}
						>
							Register
						</button>
						<button
							disabled={isLoginForm}
							className='p-2 w-28 bg-neutral-400 rounded-xl text-lg hover:opacity-100 disabled:bg-blue-500 disabled:focus:bg-green-400'
							onClick={() => setIsLoginForm(!isLoginForm)}
						>
							Login
						</button>
					</div>
					<div className='mt-6'>
						{isLoginForm ? <LoginForm /> : <RegisterForm />}
					</div>
				</div>
			</div>
		</Layout>
	)
}
export default Auth
