import {
	CategoryScale,
	Chart as ChartJS,
	Legend,
	LineElement,
	LinearScale,
	PointElement,
	Title,
	Tooltip
} from 'chart.js'
import { Line } from 'react-chartjs-2'

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend
)

const dataTest = [
	{ timestamp: '1 Aug', btc_dominance: 48.0585 },
	{ timestamp: '2 Aug', btc_dominance: 49.0585 },
	{ timestamp: '3 Aug', btc_dominance: 50.0585 },
	{ timestamp: '4 Aug', btc_dominance: 55.0585 },
	{ timestamp: '5 Aug', btc_dominance: 38.0585 },
	{ timestamp: '6 Aug', btc_dominance: 37.0585 },
	{ timestamp: '7 Aug', btc_dominance: 48.0585 }
]

const labels = dataTest.map(el => el.timestamp)
const btc_dominance = dataTest.map(el => el.btc_dominance)

const data = {
	labels,
	datasets: [
		{
			data: btc_dominance,
			borderColor: 'rgb(35, 3, 219)'
		}
	]
}

const options = {
	plugins: {
		legend: {
			display: false
		}
	}
}

const BtcDominance = () => {
	return <Line data={data} options={options} />
}
export default BtcDominance
