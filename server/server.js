import express from 'express';
import fetch from 'node-fetch';
import cors from 'cors';

const app = express();
const PORT = 3000;

app.use(cors());

app.get('/api/crypto', async (req, res) => {
  const apiKey = 'fef5f955-64f0-44c4-81d0-cf53c1be160e';
  const url = 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?start=1&limit=10&convert=USD';

  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'X-CMC_PRO_API_KEY': apiKey,
        'Content-Type': 'application/json'
      }
    });
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).send('Error fetching data');
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
