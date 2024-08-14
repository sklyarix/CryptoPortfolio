import styles from './IndexFearGreed.module.scss'
const IndexFearGreed = () => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.progress}>
				<span className={styles.value}>0%</span>
			</div>
			<div className={styles.text}>Fear/Greed Index</div>
		</div>
	)
}

export default IndexFearGreed
