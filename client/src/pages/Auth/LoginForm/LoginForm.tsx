export const LoginForm = () => (
	<form>
		<div className='flex flex-col gap-2'>
			<input
				type='email'
				placeholder='Email'
				name='email'
				className='w-full p-2 text-lg text-neutral-800 appearance-none rounded-xl'
			/>
			<input
				type='Password'
				placeholder='Password'
				name='password'
				className='w-full p-2 text-lg text-neutral-800 appearance-none rounded-xl'
			/>
			<button className='w-auto p-2 bg-blue-500 rounded-xl'>Login</button>
		</div>
	</form>
)
