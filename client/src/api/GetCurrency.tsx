


const GetCurrency = async () => {
	const response = await fetch(`${import.meta.env.VITE_SERVER_URL}/api/crypto/coins`)
	if (!response.ok) {
		throw new Error('Network response was not ok')
	}
	return response.json()
}
export default GetCurrency


