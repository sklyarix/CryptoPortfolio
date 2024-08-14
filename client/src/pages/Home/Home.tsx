//import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import Layout from '../../components/layout/Layout.tsx'
import Table from '../../components/table/Table.tsx'
import BtcDominance from '../../components/widgets/BtcDominance/BtcDominance.tsx'

import 'swiper/css'
import IndexFearGreed from '../../components/widgets/IndexFearGreed/IndexFearGreed.tsx'
import styles from './Home.module.scss'

const Home = () => {
	const data = null
	return (
		<Layout>
			<Swiper spaceBetween={25} slidesPerView={2} style={{ marginTop: '30px' }}>
				<SwiperSlide>
					<div className={styles.wrapperSlide}>
						<BtcDominance />
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className={styles.wrapperSlide}>
						<IndexFearGreed />
					</div>
				</SwiperSlide>
			</Swiper>
			<div className={styles.wrapperTable}>
				<Table />
			</div>
		</Layout>
	)
}

export default Home

//<Link to={'/convert'}>convert</Link>
