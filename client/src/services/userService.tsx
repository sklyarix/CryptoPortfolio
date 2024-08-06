import Cookies from 'js-cookie'

const userService = async () => {
	
	const options = {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
			Authorization : Cookies.get('token') ? `Bearer ${Cookies.get('token')}` : ''
		},
	}
	
	const data = await fetch(`${import.meta.env.VITE_SERVER_URL}/api/user/profile`, options)
		.then(response => response.json());
	
	console.log('data =', data);
	
	if(data.message === 'jwt expired'){
		console.log('я тут')
		Cookies.remove('token');
		return null;
	} else {
		return {data};
	}
	
	
}

export default userService;


