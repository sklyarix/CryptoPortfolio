import { useState } from 'react'
import Header from '../header/Header.tsx'
import Modal from '../modal/Modal.tsx'
import ModalLogin from '../modal/ModalLogin/ModalLogin.tsx'
import ModalRegister from '../modal/ModalRegister/ModalRegister.tsx'
import styles from './Layout.module.scss'

interface LayoutProps {
	children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
	const [showLoginModal, setShowLoginModal] = useState(false)
	const [showRegisterModal, setShowRegisterModal] = useState(false)

	return (
		<div className={styles.wrapper}>
			<Header
				onClickLoginModal={setShowLoginModal}
				onClickRegisterModal={setShowRegisterModal}
			/>
			{children}
			<Modal
				show={showLoginModal}
				closeModal={setShowLoginModal}
				title={'Login'}
			>
				<ModalLogin closeModal={setShowLoginModal} />
			</Modal>
			<Modal
				show={showRegisterModal}
				closeModal={setShowRegisterModal}
				title={'Create Account'}
			>
				<ModalRegister closeModal={setShowRegisterModal} />
			</Modal>
		</div>
	)
}

export default Layout
