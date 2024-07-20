import { useQuery } from '@tanstack/react-query'
import { useEffect, useState } from 'react'
import { LuArrowDownUp } from 'react-icons/lu'
import GetCurrency from '../api/GetCurrency'
import InputConvert from '../ui/Input/InputConvert.tsx'
import { Coin } from '../types/Coin'

import SelectConvert from '../ui/SelectConvert/SelectConvert'

import styles from "./Convert.module.scss"


const Convert = () => {
	
	const { data, isLoading, error } = useQuery({
		queryKey: ['listings'],
		queryFn: GetCurrency,
	})
	
	const [sendValue, setSendValue] = useState('0')
	const [receiveValue, setReceiveValue] = useState('0')

	const [sendCurrency, setSendCurrency] = useState('Bitcoin')
	const [receiveCurrency, setReceiveCurrency] = useState('Ethereum')
	
	const getCoin = (name:string) => {
		return  data.filter((coin: Coin) => coin.name === name)[0]
	}
	
	/* todo */
	// к кому привязан input тогда один обработчик можно
	
	const onChangeSendValue = (valueInput:string) => {
		setSendValue(valueInput)
		return  setReceiveValue( String( +valueInput * getCoin(sendCurrency).price / getCoin(receiveCurrency).price ) )
	}
	const onChangeReceiveValue = (valueInput:string) => {
		setReceiveValue(valueInput)
		return  setSendValue( String( +valueInput * getCoin(receiveCurrency).price / getCoin(sendCurrency).price ))
	}
	
	
	useEffect(() => {
		if (data){
			onChangeSendValue(sendValue)
		}
	}, [sendCurrency,receiveCurrency])
	
	
	if (isLoading) return <div>Loading...</div>
	if (error) return <div>Error: {(error as Error).message}</div>
	if (!data) return <div>No data available</div>
	
	return (
		<div className={styles.wrapper}>
			<div className={styles.item}>
				<div className={styles.title}>Send</div>
				<div className={styles['item-bottom']}>
					<InputConvert
						value={sendValue}
						setValue={onChangeSendValue}
					/>
					<SelectConvert
						value={sendCurrency}
						setValue={setSendCurrency}
						dataCoins={data}
					/>
				</div>
			</div>

			<div className={styles['arrow-swap']}>
				<LuArrowDownUp />
			</div>
			
			<div className={styles.item}>
				<div className={styles.title}>Receive</div>
				<div className={styles['item-bottom']}>
					<InputConvert
						value={receiveValue}
						setValue={onChangeReceiveValue}
					/>
					<SelectConvert
						value={receiveCurrency}
						setValue={setReceiveCurrency}
						dataCoins={data}
					/>
				</div>
			</div>
		</div>
	)
}

export default Convert
