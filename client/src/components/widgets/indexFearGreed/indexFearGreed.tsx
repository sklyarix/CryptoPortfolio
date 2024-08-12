import { CircularProgressbar } from 'react-circular-progressbar'

const indexFearGreed = () => {
	const value = 50
	return (
		<div style={{ width: 200, height: 200 }}>
			<CircularProgressbar
				value={value}
				text={`${value}\nNeutral`}
				strokeWidth={10}
			/>
		</div>
	)
}

export default indexFearGreed
