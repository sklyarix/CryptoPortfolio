import { LuArrowDownUp } from 'react-icons/lu'

import InputConvert from '../ui/Input/InputConvert.tsx'
import SelectConvert from '../ui/SelectConvert/SelectConvert.tsx'

import styles from './Convert.module.scss'

function Convert() {
	return (
		<div className={styles.wrapper}>
			<div className={styles.item}>
				<div className={styles.title}>Send</div>
				<div className={styles['item-bottom']}>
					<InputConvert />
					<SelectConvert />
				</div>
			</div>

			<div className={styles['arrow-swap']}>
				<LuArrowDownUp />
			</div>

			<div className={styles.item}>
				<div className={styles.title}>Receive</div>
				<div className={styles['item-bottom']}>
					<InputConvert />
					<SelectConvert />
				</div>
			</div>
		</div>
	)
}

export default Convert
