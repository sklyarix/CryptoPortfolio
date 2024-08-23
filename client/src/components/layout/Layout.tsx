import Header from './header/Header.tsx'

import styles from './Layout.module.scss'

import { useAuth } from '../../hooks/useAuth.tsx'

interface ILayout {
	children: React.ReactNode
}

const Layout = ({ children }: ILayout) => {
	return (
		<div className={styles.container}>
			{useAuth ? <Header /> : ''}
			{children}
		</div>
	)
}
export default Layout
