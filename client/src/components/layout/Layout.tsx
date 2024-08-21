import Header from './header/Header.tsx'

import styles from './Layout.module.scss'

interface ILayout {
	children: React.ReactNode;
}

const Layout = ({ children }: ILayout ) => {
	return (
		
		<div className={styles.container}>
			<Header/>
			{children}
		</div>
	)
}
export default Layout