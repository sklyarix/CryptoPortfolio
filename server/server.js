import cors from 'cors'
import express from 'express'
import morgan from 'morgan'
import fetch from 'node-fetch'

const app = express()
const PORT = 3000

async function main() {
	app.use(morgan('dev'))
	app.use(cors())

	app.get('/api/crypto', async (req, res) => {
		const apiKey = 'fef5f955-64f0-44c4-81d0-cf53c1be160e'
		const url =
			'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest'
		try {
			const response = await fetch(url, {
				method: 'GET',
				headers: {
					'X-CMC_PRO_API_KEY': apiKey,
					'Content-Type': 'application/json',
				},
			})
			const data = await response.json()

			const coinData = data.data.slice(0, 10).map(coin => ({
				name: coin.name,
				slug: coin.symbol,
				price: coin.quote.USD.price,
				logo: coin.logo || 'default_logo_url',
			}))

			res.json(coinData)
		} catch (error) {
			console.error('Error fetching data:', error)
			res.status(500).send('Error fetching data')
		}
	})

	app.listen(PORT, console.log(`Starting on ${PORT}`))
}

main()
