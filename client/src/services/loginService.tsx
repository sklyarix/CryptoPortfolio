import Cookies from 'js-cookie'
//import { useAuth } from '../hooks/useAuth.tsx'
//import { useContext } from 'react'
//import { AuthContext } from '../providers/AuthProvider.tsx'



const loginService = async (user) => {
	//const {setIsAuth}  = useAuth();
	//Cookies.get('token');
	let token = null;
	
	const options = {
		method: 'POST',
		headers: {
      'Content-Type': 'application/json',
    },
		body: JSON.stringify(user),
	};
	const data = await fetch(`${import.meta.env.VITE_SERVER_URL}/api/auth/login`, options)
		.then(response => response.json());
	
	if (!data.message) {
		Cookies.set('token', data.token, { expires: 7 });
		return {token: data.token};
	} else {
		console.log('Ошибка')
		return null;
	}
	/*
			if (!response.ok){
				throw new Error('Network response was not ok')
			}
			if(response.status === 401){
				throw new Error('Пу-пу-пу')
			}
			if(response.status === 200){
				const data = response.json();
				console.log('data =', data)
				Cookies.set('token', data.token, { expires: 7 });
				return {token: data.token};
			}
	 */
}


export default loginService;