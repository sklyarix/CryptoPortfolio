import { useEffect, useState } from 'react'
//import { getCoinMarketCap } from '../../api/coinmarketcap.tsx'
import styles from './InputCurrency.module.scss';
import Select from 'react-select';
import './react-select.scss'

interface Option {
  value: string;
  label: string;
}

interface InputCurrencyProps {
  title: string;
  options: Option[];
}

const options: Option[] = [
  {  value: 'Bitcoin', label: 'BTC'},
  {  value: 'Ethereum', label: 'ETH'},
  {  value: 'Tether', label: 'USDT'},
]


const InputCurrency: React.FC<InputCurrencyProps> =({title}) => {
  
  
  const [value, setValue] = useState('0,4213.43');
  const [selectedOption, setSelectedOption] = useState<{value: string; label: string;} | null>(null)
  
 
  
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>{title}</div>
      <div className={styles.bottom}>
        <div
          className={styles.value}>
            {value}
        </div>
        <Select
          placeholder={options[0].label}
          options={options}
          className='select'
          classNamePrefix='currency-select'
          defaultValue={selectedOption}
          onChange={setSelectedOption}
          isSearchable={false}
        />
        
      </div>
    </div>
  )
}

export default InputCurrency


