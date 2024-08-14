import classNames from 'classnames'
import styles from './IndexFearGreed.module.scss'

const IndexFearGreed = () => {
	return (
		<div
			className={classNames(styles.wrapper, styles.style2, styles.progress45)}
		>
			<div className={styles.pie}>
				<div className={classNames(styles.leftSide, styles.halfCircle)}></div>
				<div className={classNames(styles.rightSide, styles.halfCircle)}></div>
			</div>
		</div>
	)
}

export default IndexFearGreed

/*
<span class='label'>
				45<span class='smaller'>%</span>
			</span>
			<div class='pie'>
				<div class='left-side half-circle'></div>
				<div class='right-side half-circle'></div>
			</div>
			<div class='shadow'></div>
			
			
	 */
