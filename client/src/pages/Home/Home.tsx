import { Swiper, SwiperSlide } from 'swiper/react'
import Layout from '../../components/layout/Layout.tsx'
import Table from '../../components/table/Table.tsx'

import 'swiper/css'
import IndexFearGreed from '../../components/widgets/IndexFearGreed/IndexFearGreed.tsx'
import ChartBtcDominance from './ChartBtcDominance/ChartBtcDominance.tsx'
import styles from './Home.module.scss'

const Home = () => {
	return (
		<Layout>
			<ChartBtcDominance />
			<Swiper spaceBetween={25} slidesPerView={2} style={{ marginTop: '30px' }}>
				<SwiperSlide>
					<div className={styles.wrapperSlide}>1212</div>
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
