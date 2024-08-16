import { Line } from 'react-chartjs-2'
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend
} from 'chart.js'

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend
)

const ChartBtcDominance = () => {
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
				fill: true,
				backgroundColor: 'rgba(75,192,192,0.2)',
				borderColor: 'rgba(75,192,192,1)'
			}
		]
	}

	const options = {
		plugins: {
			legend: {
				display: false // Скрыть легенду
			},
			tooltip: {
				enabled: true // Если нужно включить или отключить подсказки
			}
		}
	}

	return (
		<div>
			<Line data={data} options={options} />
		</div>
	)
}
export default ChartBtcDominance
/*

*/
