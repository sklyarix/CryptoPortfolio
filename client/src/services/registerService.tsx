import Cookies from 'js-cookie'

const registerService = async (user) => {
	let token = null;
	const options = {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(user),
	}
	const data = await fetch(`${import.meta.env.VITE_SERVER_URL}/api/auth/register`, options)
		.then(response => response.json());
	
	
	if (!data.message) {
		Cookies.set('token', data.token, { expires: 7 });
		return {token: data.token};
	} else {
		console.log('Ошибка')
		return null;
	}
}
export default registerService;