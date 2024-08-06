import styles from './Modal.module.scss'

const Modal = ({ show, closeModal, title, children }) => {
	if (!show) return null
	return (
		<div className={styles.full}>
			<div className={styles.wrapper}>
				<div className={styles.header}>
					<div className={styles.title}>{title}</div>
					<button
						className={styles['btn-close']}
						onClick={() => {
							closeModal(false)
						}}
					>
						X
					</button>
				</div>
				{children}
			</div>
		</div>
	)
}
export default Modal

/*



{children}
 */
