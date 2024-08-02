import { useContext } from 'react'
import { AuthContext } from '../../providers/AuthProvider.tsx'
import styles from "./Header.module.scss";

const Header = ({onClickLoginModal, onClickRegisterModal}) => {
	let {isAuth}  = useContext(AuthContext);
	
	/*
	useEffect(() => {
		if (isAuth) {
			console.log(isAuth);
		}
	}, [isAuth])

	 */
	
	return(
		<header className={styles.header}>
			<div className={styles['wrapper-btn']}>
				
				{ isAuth ? ( <div>Авторизирован</div> ) : ( <div>Не авторизирован</div> ) }
				
				<button
					className={styles['btn-login']}
					onClick={() => onClickLoginModal(true)}
				>
					Login
				</button>
				<button
					className={styles['btn-register']}
					onClick={() => onClickRegisterModal(true)}
				>
					Register
				</button>
			</div>
		</header>
	)
}

export default Header;