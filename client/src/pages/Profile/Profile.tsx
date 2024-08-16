import classNames from 'classnames'
import Layout from '../../components/layout/Layout'
import { LuRocket } from 'react-icons/lu'

import styles from './Profile.module.scss'

const Profile = () => {
	const totalProfitpercent = 7.13
	const balance = '$1,463.87'
	return (
		<Layout>
			<div className={styles.section}>
				<div className={styles.main}>
					<div className={styles.leftWidgets}>
						<div className={styles.wnd}>
							<div className={styles.balance}>{balance}</div>
							<div className={styles.infoText}>
								<div className={styles.title}>Total Invested:</div>
								<div className={styles.infoTextRight}>
									<span
										className={classNames(styles.percent, {
											minusBg: totalProfitpercent < 0,
											plusBg: totalProfitpercent >= 0
										})}
									>
										{totalProfitpercent}%
									</span>
									<span
										className={classNames({
											minusColor: totalProfitpercent < 0,
											plusColor: totalProfitpercent >= 0
										})}
									>
										$95.70
									</span>
								</div>
							</div>
							<div className={styles.infoText}>
								<div className={styles.title}>Total profit:</div>
								<div className={styles.infoTextRight}>
									<span
										className={classNames(styles.percent, {
											minusBg: totalProfitpercent < 0,
											plusBg: totalProfitpercent >= 0
										})}
									>
										{totalProfitpercent}%
									</span>
									<span
										className={classNames({
											minusColor: totalProfitpercent < 0,
											plusColor: totalProfitpercent >= 0
										})}
									>
										$95.70
									</span>
								</div>
							</div>
						</div>
						<div className={classNames(styles.wnd, styles.perfomance)}>
							<div
								className={classNames(
									styles.wnd,
									styles.perfomanceItem,
									styles.plus
								)}
							>
								<div className={styles.perfomanceItemLeft}>
									<div className={styles.imgCoin}>
										<img
											src='https://static.images.dropstab.com/images/notcoin.png'
											alt='NOT'
										/>
										<div className={styles.wrapIcon}>
											<LuRocket className={styles.icon} />
										</div>
									</div>
									<div className={styles.infoCoin}>
										<div className={styles.title}>Top Gainer</div>
										<div className={styles.nameCoin}>NOT</div>
									</div>
								</div>
								<div className={styles.perfomanceItemRight}>
									<span
										className={classNames({
											minusColor: totalProfitpercent < 0,
											plusColor: totalProfitpercent >= 0
										})}
									>
										$95.70
									</span>
									<span
										className={classNames(styles.percent, {
											minusBg: totalProfitpercent < 0,
											plusBg: totalProfitpercent >= 0
										})}
									>
										{totalProfitpercent}%
									</span>
								</div>
							</div>
							<div
								className={classNames(
									styles.wnd,
									styles.perfomanceItem,
									styles.minus
								)}
							>
								<div className={styles.perfomanceItemLeft}>
									<div className={styles.imgCoin}>
										<img
											src='https://static.images.dropstab.com/images/notcoin.png'
											alt='NOT'
										/>
										<div className={styles.wrapIcon}>
											<LuRocket className={styles.icon} />
										</div>
									</div>
									<div className={styles.infoCoin}>
										<div className={styles.title}>Top Loser</div>
										<div className={styles.nameCoin}>NOT</div>
									</div>
								</div>
								<div className={styles.perfomanceItemRight}>
									<span
										className={classNames({
											minusColor: totalProfitpercent < 0,
											plusColor: totalProfitpercent >= 0
										})}
									>
										$95.70
									</span>
									<span
										className={classNames(styles.percent, {
											minusBg: totalProfitpercent < 0,
											plusBg: totalProfitpercent >= 0
										})}
									>
										{totalProfitpercent}%
									</span>
								</div>
							</div>
						</div>
					</div>
					<div className={styles.rightChart}>
						<div className={styles.wnd}>btc</div>
					</div>
				</div>
				<div className={styles.list}>
					<div className={styles.wnd}>List</div>
				</div>
				<div className={styles.history}>
					<div className={styles.wnd}>History</div>
				</div>
			</div>
		</Layout>
	)
}

export default Profile
