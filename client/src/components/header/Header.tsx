import { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../providers/AuthProvider.tsx'
import userService from '../../services/userService.tsx'
import { LuSettings } from 'react-icons/lu'

import Cookies from 'js-cookie'
import styles from './Header.module.scss'

const Header = ({ onClickLoginModal, onClickRegisterModal }) => {
	const [data, setData] = useState(null)
	let { isAuth, setIsAuth } = useContext(AuthContext)

	const getData = async () => {
		const { data } = await userService()
		const { user } = data
		setData(user)
	}

	const onLogout = e => {
		setIsAuth(false)
		Cookies.remove('token')
	}

	useEffect(() => {
		if (isAuth) {
			getData()
		}
	}, [isAuth])

	return (
		<header className={styles.header}>
			{isAuth ? (
				<>
					<div>{data?.name}</div>
					<button className={styles['btn']} onClick={onLogout}>
						Logout
					</button>
				</>
			) : (
				<>
					<button>
						<LuSettings />
					</button>
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
				</>
			)}
		</header>
	)
}

export default Header
