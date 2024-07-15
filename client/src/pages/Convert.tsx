import { useQuery } from '@tanstack/react-query'
import { LuArrowDownUp } from 'react-icons/lu'
import GetCurrency from '../api/GetCurrency.tsx'

import InputConvert from '../ui/Input/InputConvert.tsx'
import SelectConvert from '../ui/SelectConvert/SelectConvert.tsx'

import styles from './Convert.module.scss'

const Convert = () => {
	const { data, isLoading, error } = useQuery({
		queryKey: ['listings'],
		queryFn: GetCurrency,
	})

	if (isLoading) return <div>Loading...</div>
	if (error) return <div>Error: {(error as Error).message}</div>

	return (
		<div className={styles.wrapper}>
			<pre>{JSON.stringify({ data })}</pre>
			<div className={styles.item}>
				<div className={styles.title}>Send</div>
				<div className={styles['item-bottom']}>
					<InputConvert />
					<SelectConvert dataCurrency={data} />
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
