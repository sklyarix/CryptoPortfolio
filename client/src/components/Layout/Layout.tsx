import styles from './Layout.module.scss';


interface LayoutProps  {
	children : React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {

	return (
		<div className={styles.wrapper}>
			{children}
		</div>
	)
}

export default Layout