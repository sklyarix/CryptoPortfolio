import styles from './Modal.module.scss'

const Modal = ({show, closeModal, children}) => {
	if (!show) return null
	return (
		<div>
			<div className={styles.header}>
				<button
				onClick={() => {closeModal(false)}}
				>
					X
				</button>
			</div>
			{children}
		</div>
	)
}
export default Modal;