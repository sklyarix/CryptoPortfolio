import { useContext, useEffect, useState } from 'react'

import { AuthContext } from '../../providers/AuthProvider.tsx'
import userService from '../../services/userService.tsx'
import { LuSettings } from 'react-icons/lu'

import Cookies from 'js-cookie'
import styles from './Header.module.scss'

const Header = ({ loginModal, registerModal }) => {
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

	const handleClick = () => {
		loginModal.openModal()
	}
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
					<button className='btn-small btn--icon'>
						<LuSettings className={styles['icon']} />
					</button>
					<button className='btn-small btn--gray' onClick={handleClick}>
						Login
					</button>
					<button
						className='btn-small btn--blue'
						onClick={() => registerModal.openModal}
					>
						Register
					</button>
				</>
			)}
		</header>
	)
}

export default Header
