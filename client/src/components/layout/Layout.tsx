import { useModal } from '../../hooks/useModal.tsx'
import Header from '../header/Header.tsx'
import Modal from '../modal/Modal.tsx'
import ModalLogin from '../modal/ModalLogin/ModalLogin.tsx'
import ModalRegister from '../modal/ModalRegister/ModalRegister.tsx'
import styles from './Layout.module.scss'

interface LayoutProps {
	children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
	const loginModal = useModal()
	const registerModal = useModal()

	return (
		<div className={styles.wrapper}>
			<Header loginModal={loginModal} registerModal={registerModal} />

			{children}

			{loginModal.isOpen && (
				<Modal closeModal={loginModal.closeModal} title='Login'>
					<ModalLogin closeModal={loginModal.closeModal} />
				</Modal>
			)}
			{registerModal.isOpen && (
				<Modal closeModal={registerModal.closeModal} title='Register'>
					<ModalRegister closeModal={registerModal.closeModal} />
				</Modal>
			)}
		</div>
	)
}

export default Layout
