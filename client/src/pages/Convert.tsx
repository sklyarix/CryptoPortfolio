import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'
import { LuArrowDownUp } from 'react-icons/lu'
import GetCurrency from '../api/GetCurrency.tsx'

import SelectConvert from '../ui/SelectConvert/SelectConvert.tsx'

import styles from './Convert.module.scss'

const Convert = () => {
	const { data, isLoading, error } = useQuery({
		queryKey: ['listings'],
		queryFn: GetCurrency,
	})

	if (isLoading) return <div>Loading...</div>
	if (error) return <div>Error: {(error as Error).message}</div>
	if (!data) return <div>No data available</div>

	const [sendValue, setSendValue] = useState(null)

	//console.log('data =', data)
	return (
		<div className={styles.wrapper}>
			<div className={styles.item}>
				<div className={styles.title}>Send</div>
				<div className={styles['item-bottom']}>
					<SelectConvert
						value={sendValue}
						setValue={setSendValue}
						dataCoins={data}
					/>
				</div>
			</div>

			<div className={styles['arrow-swap']}>
				<LuArrowDownUp />
			</div>
		</div>
	)
}

export default Convert

/*
<div className={styles.item}>
				<div className={styles.title}>Receive</div>
				<div className={styles['item-bottom']}>
					<InputConvert />
					<SelectConvert data={data} value={receiveValue} setValue={setReceiveValue}/>
				</div>
			</div>


			//import InputConvert from '../ui/Input/InputConvert.tsx' <InputConvert />

* */
