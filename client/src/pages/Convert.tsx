import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'
import { LuArrowDownUp } from 'react-icons/lu'
import GetCurrency from '../api/GetCurrency.tsx'

import InputConvert from '../ui/Input/InputConvert.tsx'
import SelectConvert from '../ui/SelectConvert/SelectConvert.tsx'

import styles from './Convert.module.scss'

interface Option {
  value: string;
  label: string;
}



interface SelectConvertProps {
  dataCurrency: Coin[];
}

const Convert = () => {
	const { data, isLoading, error } = useQuery({
		queryKey: ['listings'],
		queryFn: GetCurrency,
	})

	if (isLoading) return <div>Loading...</div>
	if (error) return <div>Error: {(error as Error).message}</div>
	if (!data) return <div>No data available</div>;

	//const [selectedOption, setSelectedOption] = useState<Option | null>(null)
	
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const [sendValue, setSendValue] = useState(null)
	// eslint-disable-next-line react-hooks/rules-of-hooks
	//const [receiveValue, setReceiveValue] = useState(null)
	
	
	
	return (
		<div className={styles.wrapper}>
			
			<div className={styles.item}>
				<div className={styles.title}>Send</div>
				<div className={styles['item-bottom']}>
					<InputConvert />
					<SelectConvert data={data} value={sendValue} setValue={setSendValue} />
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
* */