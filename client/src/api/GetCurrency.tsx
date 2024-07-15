const GetCurrency = async () => {
	const response = await fetch('http://localhost:3000/api/crypto')
	if (!response.ok) {
		throw new Error('Network response was not ok')
	}
	return response.json()
}
export default GetCurrency
