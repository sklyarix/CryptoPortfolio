import styles from './Table.module.scss'
import { LuArrowUpFromLine } from 'react-icons/lu'

const Table = () => {
	return (
		<table className={styles.table}>
			<thead className={styles.thead}>
				<tr>
					<th className={styles.thAsset}>
						<button className={styles.theadButton}>
							<span className={styles.thAssetArrow}>
								<LuArrowUpFromLine />#
							</span>
							<span>Asset</span>
						</button>
					</th>
					<th className={styles.thPrice}>
						<button className={styles.theadButton}>Price</button>
					</th>
					<th className={styles.thAll}>
						<button className={styles.theadButton}>1h%</button>
					</th>
					<th className={styles.thAll}>
						<button className={styles.theadButton}>24h%</button>
					</th>
					<th className={styles.thAll}>
						<button className={styles.theadButton}>7d%</button>
					</th>
					<th className={styles.thAll}>
						<button className={styles.theadButton}>Market Cap</button>
					</th>
					<th className={styles.thAll}>
						<button className={styles.theadButton}>24h Volume</button>
					</th>
				</tr>
			</thead>

			<tbody className={styles.tbody}>
				<tr>
					<th className={styles.thAsset}>
						<div className={styles.assetWrapper}>
							<div className={styles.assetNumber}>
								<span>1</span>
							</div>
							<div className={styles.assetIcon}>
								<img src='https://static.images.dropstab.com/images/bitcoin.svg' />
							</div>
							<div className={styles.assetNaming}>
								<span className={styles.assetNameSymbol}>BTC</span>
								<span className={styles.assetName}>bitcoin</span>
							</div>
						</div>
					</th>
					<th className={styles.thPrice}>
						<button className={styles.theadButton}>$57,241.39</button>
					</th>
					<th className={styles.thAll}>-11.50%</th>
					<th className={styles.thAll}>-11.50%</th>
					<th className={styles.thAll}>-11.50%</th>
					<th className={styles.thAll}>$1.13 T</th>
					<th className={styles.thAll}>$22.23 B</th>
				</tr>
				<tr>
					<th className={styles.thAsset}>
						<div className={styles.assetWrapper}>
							<div className={styles.assetNumber}>
								<span>1</span>
							</div>
							<div className={styles.assetIcon}>
								<img src='https://static.images.dropstab.com/images/bitcoin.svg' />
							</div>
							<div className={styles.assetNaming}>
								<span className={styles.assetNameSymbol}>BTC</span>
								<span className={styles.assetName}>bitcoin</span>
							</div>
						</div>
					</th>
					<th className={styles.thPrice}>
						<button className={styles.theadButton}>$57,241.39</button>
					</th>
					<th className={styles.thAll}>-11.50%</th>
					<th className={styles.thAll}>-11.50%</th>
					<th className={styles.thAll}>-11.50%</th>
					<th className={styles.thAll}>$1.13 T</th>
					<th className={styles.thAll}>$22.23 B</th>
				</tr>
				<tr>
					<th className={styles.thAsset}>
						<div className={styles.assetWrapper}>
							<div className={styles.assetNumber}>
								<span>1</span>
							</div>
							<div className={styles.assetIcon}>
								<img src='https://static.images.dropstab.com/images/bitcoin.svg' />
							</div>
							<div className={styles.assetNaming}>
								<span className={styles.assetNameSymbol}>BTC</span>
								<span className={styles.assetName}>bitcoin</span>
							</div>
						</div>
					</th>
					<th className={styles.thPrice}>
						<button className={styles.theadButton}>$57,241.39</button>
					</th>
					<th className={styles.thAll}>-11.50%</th>
					<th className={styles.thAll}>-11.50%</th>
					<th className={styles.thAll}>-11.50%</th>
					<th className={styles.thAll}>$1.13 T</th>
					<th className={styles.thAll}>$22.23 B</th>
				</tr>
				<tr>
					<th className={styles.thAsset}>
						<div className={styles.assetWrapper}>
							<div className={styles.assetNumber}>
								<span>1</span>
							</div>
							<div className={styles.assetIcon}>
								<img src='https://static.images.dropstab.com/images/bitcoin.svg' />
							</div>
							<div className={styles.assetNaming}>
								<span className={styles.assetNameSymbol}>BTC</span>
								<span className={styles.assetName}>bitcoin</span>
							</div>
						</div>
					</th>
					<th className={styles.thPrice}>
						<button className={styles.theadButton}>$57,241.39</button>
					</th>
					<th className={styles.thAll}>-11.50%</th>
					<th className={styles.thAll}>-11.50%</th>
					<th className={styles.thAll}>-11.50%</th>
					<th className={styles.thAll}>$1.13 T</th>
					<th className={styles.thAll}>$22.23 B</th>
				</tr>
				<tr>
					<th className={styles.thAsset}>
						<div className={styles.assetWrapper}>
							<div className={styles.assetNumber}>
								<span>1</span>
							</div>
							<div className={styles.assetIcon}>
								<img src='https://static.images.dropstab.com/images/bitcoin.svg' />
							</div>
							<div className={styles.assetNaming}>
								<span className={styles.assetNameSymbol}>BTC</span>
								<span className={styles.assetName}>bitcoin</span>
							</div>
						</div>
					</th>
					<th className={styles.thPrice}>
						<button className={styles.theadButton}>$57,241.39</button>
					</th>
					<th className={styles.thAll}>-11.50%</th>
					<th className={styles.thAll}>-11.50%</th>
					<th className={styles.thAll}>-11.50%</th>
					<th className={styles.thAll}>$1.13 T</th>
					<th className={styles.thAll}>$22.23 B</th>
				</tr>
				<tr>
					<th className={styles.thAsset}>
						<div className={styles.assetWrapper}>
							<div className={styles.assetNumber}>
								<span>1</span>
							</div>
							<div className={styles.assetIcon}>
								<img src='https://static.images.dropstab.com/images/bitcoin.svg' />
							</div>
							<div className={styles.assetNaming}>
								<span className={styles.assetNameSymbol}>BTC</span>
								<span className={styles.assetName}>bitcoin</span>
							</div>
						</div>
					</th>
					<th className={styles.thPrice}>
						<button className={styles.theadButton}>$57,241.39</button>
					</th>
					<th className={styles.thAll}>-11.50%</th>
					<th className={styles.thAll}>-11.50%</th>
					<th className={styles.thAll}>-11.50%</th>
					<th className={styles.thAll}>$1.13 T</th>
					<th className={styles.thAll}>$22.23 B</th>
				</tr>
				<tr>
					<th className={styles.thAsset}>
						<div className={styles.assetWrapper}>
							<div className={styles.assetNumber}>
								<span>1</span>
							</div>
							<div className={styles.assetIcon}>
								<img src='https://static.images.dropstab.com/images/bitcoin.svg' />
							</div>
							<div className={styles.assetNaming}>
								<span className={styles.assetNameSymbol}>BTC</span>
								<span className={styles.assetName}>bitcoin</span>
							</div>
						</div>
					</th>
					<th className={styles.thPrice}>
						<button className={styles.theadButton}>$57,241.39</button>
					</th>
					<th className={styles.thAll}>-11.50%</th>
					<th className={styles.thAll}>-11.50%</th>
					<th className={styles.thAll}>-11.50%</th>
					<th className={styles.thAll}>$1.13 T</th>
					<th className={styles.thAll}>$22.23 B</th>
				</tr>
				<tr>
					<th className={styles.thAsset}>
						<div className={styles.assetWrapper}>
							<div className={styles.assetNumber}>
								<span>1</span>
							</div>
							<div className={styles.assetIcon}>
								<img src='https://static.images.dropstab.com/images/bitcoin.svg' />
							</div>
							<div className={styles.assetNaming}>
								<span className={styles.assetNameSymbol}>BTC</span>
								<span className={styles.assetName}>bitcoin</span>
							</div>
						</div>
					</th>
					<th className={styles.thPrice}>
						<button className={styles.theadButton}>$57,241.39</button>
					</th>
					<th className={styles.thAll}>-11.50%</th>
					<th className={styles.thAll}>-11.50%</th>
					<th className={styles.thAll}>-11.50%</th>
					<th className={styles.thAll}>$1.13 T</th>
					<th className={styles.thAll}>$22.23 B</th>
				</tr>
				<tr>
					<th className={styles.thAsset}>
						<div className={styles.assetWrapper}>
							<div className={styles.assetNumber}>
								<span>1</span>
							</div>
							<div className={styles.assetIcon}>
								<img src='https://static.images.dropstab.com/images/bitcoin.svg' />
							</div>
							<div className={styles.assetNaming}>
								<span className={styles.assetNameSymbol}>BTC</span>
								<span className={styles.assetName}>bitcoin</span>
							</div>
						</div>
					</th>
					<th className={styles.thPrice}>
						<button className={styles.theadButton}>$57,241.39</button>
					</th>
					<th className={styles.thAll}>-11.50%</th>
					<th className={styles.thAll}>-11.50%</th>
					<th className={styles.thAll}>-11.50%</th>
					<th className={styles.thAll}>$1.13 T</th>
					<th className={styles.thAll}>$22.23 B</th>
				</tr>
				<tr>
					<th className={styles.thAsset}>
						<div className={styles.assetWrapper}>
							<div className={styles.assetNumber}>
								<span>1</span>
							</div>
							<div className={styles.assetIcon}>
								<img src='https://static.images.dropstab.com/images/bitcoin.svg' />
							</div>
							<div className={styles.assetNaming}>
								<span className={styles.assetNameSymbol}>BTC</span>
								<span className={styles.assetName}>bitcoin</span>
							</div>
						</div>
					</th>
					<th className={styles.thPrice}>
						<button className={styles.theadButton}>$57,241.39</button>
					</th>
					<th className={styles.thAll}>-11.50%</th>
					<th className={styles.thAll}>-11.50%</th>
					<th className={styles.thAll}>-11.50%</th>
					<th className={styles.thAll}>$1.13 T</th>
					<th className={styles.thAll}>$22.23 B</th>
				</tr>
				<tr>
					<th className={styles.thAsset}>
						<div className={styles.assetWrapper}>
							<div className={styles.assetNumber}>
								<span>1</span>
							</div>
							<div className={styles.assetIcon}>
								<img src='https://static.images.dropstab.com/images/bitcoin.svg' />
							</div>
							<div className={styles.assetNaming}>
								<span className={styles.assetNameSymbol}>BTC</span>
								<span className={styles.assetName}>bitcoin</span>
							</div>
						</div>
					</th>
					<th className={styles.thPrice}>
						<button className={styles.theadButton}>$57,241.39</button>
					</th>
					<th className={styles.thAll}>-11.50%</th>
					<th className={styles.thAll}>-11.50%</th>
					<th className={styles.thAll}>-11.50%</th>
					<th className={styles.thAll}>$1.13 T</th>
					<th className={styles.thAll}>$22.23 B</th>
				</tr>
				<tr>
					<th className={styles.thAsset}>
						<div className={styles.assetWrapper}>
							<div className={styles.assetNumber}>
								<span>1</span>
							</div>
							<div className={styles.assetIcon}>
								<img src='https://static.images.dropstab.com/images/bitcoin.svg' />
							</div>
							<div className={styles.assetNaming}>
								<span className={styles.assetNameSymbol}>BTC</span>
								<span className={styles.assetName}>bitcoin</span>
							</div>
						</div>
					</th>
					<th className={styles.thPrice}>
						<button className={styles.theadButton}>$57,241.39</button>
					</th>
					<th className={styles.thAll}>-11.50%</th>
					<th className={styles.thAll}>-11.50%</th>
					<th className={styles.thAll}>-11.50%</th>
					<th className={styles.thAll}>$1.13 T</th>
					<th className={styles.thAll}>$22.23 B</th>
				</tr>
				<tr>
					<th className={styles.thAsset}>
						<div className={styles.assetWrapper}>
							<div className={styles.assetNumber}>
								<span>1</span>
							</div>
							<div className={styles.assetIcon}>
								<img src='https://static.images.dropstab.com/images/bitcoin.svg' />
							</div>
							<div className={styles.assetNaming}>
								<span className={styles.assetNameSymbol}>BTC</span>
								<span className={styles.assetName}>bitcoin</span>
							</div>
						</div>
					</th>
					<th className={styles.thPrice}>
						<button className={styles.theadButton}>$57,241.39</button>
					</th>
					<th className={styles.thAll}>-11.50%</th>
					<th className={styles.thAll}>-11.50%</th>
					<th className={styles.thAll}>-11.50%</th>
					<th className={styles.thAll}>$1.13 T</th>
					<th className={styles.thAll}>$22.23 B</th>
				</tr>
				<tr>
					<th className={styles.thAsset}>
						<div className={styles.assetWrapper}>
							<div className={styles.assetNumber}>
								<span>1</span>
							</div>
							<div className={styles.assetIcon}>
								<img src='https://static.images.dropstab.com/images/bitcoin.svg' />
							</div>
							<div className={styles.assetNaming}>
								<span className={styles.assetNameSymbol}>BTC</span>
								<span className={styles.assetName}>bitcoin</span>
							</div>
						</div>
					</th>
					<th className={styles.thPrice}>
						<button className={styles.theadButton}>$57,241.39</button>
					</th>
					<th className={styles.thAll}>-11.50%</th>
					<th className={styles.thAll}>-11.50%</th>
					<th className={styles.thAll}>-11.50%</th>
					<th className={styles.thAll}>$1.13 T</th>
					<th className={styles.thAll}>$22.23 B</th>
				</tr>
				<tr>
					<th className={styles.thAsset}>
						<div className={styles.assetWrapper}>
							<div className={styles.assetNumber}>
								<span>1</span>
							</div>
							<div className={styles.assetIcon}>
								<img src='https://static.images.dropstab.com/images/bitcoin.svg' />
							</div>
							<div className={styles.assetNaming}>
								<span className={styles.assetNameSymbol}>BTC</span>
								<span className={styles.assetName}>bitcoin</span>
							</div>
						</div>
					</th>
					<th className={styles.thPrice}>
						<button className={styles.theadButton}>$57,241.39</button>
					</th>
					<th className={styles.thAll}>-11.50%</th>
					<th className={styles.thAll}>-11.50%</th>
					<th className={styles.thAll}>-11.50%</th>
					<th className={styles.thAll}>$1.13 T</th>
					<th className={styles.thAll}>$22.23 B</th>
				</tr>
				<tr>
					<th className={styles.thAsset}>
						<div className={styles.assetWrapper}>
							<div className={styles.assetNumber}>
								<span>1</span>
							</div>
							<div className={styles.assetIcon}>
								<img src='https://static.images.dropstab.com/images/bitcoin.svg' />
							</div>
							<div className={styles.assetNaming}>
								<span className={styles.assetNameSymbol}>BTC</span>
								<span className={styles.assetName}>bitcoin</span>
							</div>
						</div>
					</th>
					<th className={styles.thPrice}>
						<button className={styles.theadButton}>$57,241.39</button>
					</th>
					<th className={styles.thAll}>-11.50%</th>
					<th className={styles.thAll}>-11.50%</th>
					<th className={styles.thAll}>-11.50%</th>
					<th className={styles.thAll}>$1.13 T</th>
					<th className={styles.thAll}>$22.23 B</th>
				</tr>
				<tr>
					<th className={styles.thAsset}>
						<div className={styles.assetWrapper}>
							<div className={styles.assetNumber}>
								<span>1</span>
							</div>
							<div className={styles.assetIcon}>
								<img src='https://static.images.dropstab.com/images/bitcoin.svg' />
							</div>
							<div className={styles.assetNaming}>
								<span className={styles.assetNameSymbol}>BTC</span>
								<span className={styles.assetName}>bitcoin</span>
							</div>
						</div>
					</th>
					<th className={styles.thPrice}>
						<button className={styles.theadButton}>$57,241.39</button>
					</th>
					<th className={styles.thAll}>-11.50%</th>
					<th className={styles.thAll}>-11.50%</th>
					<th className={styles.thAll}>-11.50%</th>
					<th className={styles.thAll}>$1.13 T</th>
					<th className={styles.thAll}>$22.23 B</th>
				</tr>
				<tr>
					<th className={styles.thAsset}>
						<div className={styles.assetWrapper}>
							<div className={styles.assetNumber}>
								<span>1</span>
							</div>
							<div className={styles.assetIcon}>
								<img src='https://static.images.dropstab.com/images/bitcoin.svg' />
							</div>
							<div className={styles.assetNaming}>
								<span className={styles.assetNameSymbol}>BTC</span>
								<span className={styles.assetName}>bitcoin</span>
							</div>
						</div>
					</th>
					<th className={styles.thPrice}>
						<button className={styles.theadButton}>$57,241.39</button>
					</th>
					<th className={styles.thAll}>-11.50%</th>
					<th className={styles.thAll}>-11.50%</th>
					<th className={styles.thAll}>-11.50%</th>
					<th className={styles.thAll}>$1.13 T</th>
					<th className={styles.thAll}>$22.23 B</th>
				</tr>
				<tr>
					<th className={styles.thAsset}>
						<div className={styles.assetWrapper}>
							<div className={styles.assetNumber}>
								<span>1</span>
							</div>
							<div className={styles.assetIcon}>
								<img src='https://static.images.dropstab.com/images/bitcoin.svg' />
							</div>
							<div className={styles.assetNaming}>
								<span className={styles.assetNameSymbol}>BTC</span>
								<span className={styles.assetName}>bitcoin</span>
							</div>
						</div>
					</th>
					<th className={styles.thPrice}>
						<button className={styles.theadButton}>$57,241.39</button>
					</th>
					<th className={styles.thAll}>-11.50%</th>
					<th className={styles.thAll}>-11.50%</th>
					<th className={styles.thAll}>-11.50%</th>
					<th className={styles.thAll}>$1.13 T</th>
					<th className={styles.thAll}>$22.23 B</th>
				</tr>
				<tr>
					<th className={styles.thAsset}>
						<div className={styles.assetWrapper}>
							<div className={styles.assetNumber}>
								<span>1</span>
							</div>
							<div className={styles.assetIcon}>
								<img src='https://static.images.dropstab.com/images/bitcoin.svg' />
							</div>
							<div className={styles.assetNaming}>
								<span className={styles.assetNameSymbol}>BTC</span>
								<span className={styles.assetName}>bitcoin</span>
							</div>
						</div>
					</th>
					<th className={styles.thPrice}>
						<button className={styles.theadButton}>$57,241.39</button>
					</th>
					<th className={styles.thAll}>-11.50%</th>
					<th className={styles.thAll}>-11.50%</th>
					<th className={styles.thAll}>-11.50%</th>
					<th className={styles.thAll}>$1.13 T</th>
					<th className={styles.thAll}>$22.23 B</th>
				</tr>
				<tr>
					<th className={styles.thAsset}>
						<div className={styles.assetWrapper}>
							<div className={styles.assetNumber}>
								<span>1</span>
							</div>
							<div className={styles.assetIcon}>
								<img src='https://static.images.dropstab.com/images/bitcoin.svg' />
							</div>
							<div className={styles.assetNaming}>
								<span className={styles.assetNameSymbol}>BTC</span>
								<span className={styles.assetName}>bitcoin</span>
							</div>
						</div>
					</th>
					<th className={styles.thPrice}>
						<button className={styles.theadButton}>$57,241.39</button>
					</th>
					<th className={styles.thAll}>-11.50%</th>
					<th className={styles.thAll}>-11.50%</th>
					<th className={styles.thAll}>-11.50%</th>
					<th className={styles.thAll}>$1.13 T</th>
					<th className={styles.thAll}>$22.23 B</th>
				</tr>
				<tr>
					<th className={styles.thAsset}>
						<div className={styles.assetWrapper}>
							<div className={styles.assetNumber}>
								<span>1</span>
							</div>
							<div className={styles.assetIcon}>
								<img src='https://static.images.dropstab.com/images/bitcoin.svg' />
							</div>
							<div className={styles.assetNaming}>
								<span className={styles.assetNameSymbol}>BTC</span>
								<span className={styles.assetName}>bitcoin</span>
							</div>
						</div>
					</th>
					<th className={styles.thPrice}>
						<button className={styles.theadButton}>$57,241.39</button>
					</th>
					<th className={styles.thAll}>-11.50%</th>
					<th className={styles.thAll}>-11.50%</th>
					<th className={styles.thAll}>-11.50%</th>
					<th className={styles.thAll}>$1.13 T</th>
					<th className={styles.thAll}>$22.23 B</th>
				</tr>
			</tbody>
		</table>
	)
}
export default Table

/*
<tbody className={styles.gap}>
				<tr></tr>
			</tbody>
 */
