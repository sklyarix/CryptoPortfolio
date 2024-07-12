//import InputCurrency from '../ui/InputCurrency/InputCurrency.tsx'
import InputConvert from '../ui/Input/InputConvert.tsx'
import InputCurrency from '../ui/InputCurrency/InputCurrency.tsx'
import SelectConvert from '../ui/SelectConvert/SelectConvert.tsx'
import styles from './Conver.module.scss'
import { LuArrowDownUp } from 'react-icons/lu';

function Convert() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.item}>
        <div className={styles.title}>Send</div>
        <div className={styles['item-bottom']}>
          <InputConvert/>
          <SelectConvert/>
        </div>
      </div>
      
      
      <div className={styles['arrow-swap']}>
        <LuArrowDownUp />
      </div>
      
       <div className={styles.item}>
          <div className={styles.title}>Receive</div>
             <div className={styles['item-bottom']}>
               <InputConvert/>
               <SelectConvert/>
             </div>
        </div>
    </div>
  )
}

export default Convert
