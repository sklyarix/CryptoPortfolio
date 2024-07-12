import { useQuery } from '@tanstack/react-query'
import Layout from './components/Layout/Layout.tsx'
import Convert from './pages/Convert.tsx'

const getData = async () => {
	const response = await fetch('https://jsonplaceholder.typicode.com/posts')

	return response.json()
}

function App() {
	const { data, isLoading } = useQuery({
		queryKey: ['posts'],
		queryFn: getData,
	})

	return (
		<>
			{isLoading
				? 'Loading...'
				: data?.length
				? data.map((post: any) => <div key={post.id}>{post.title}</div>)
				: 'Not found'}
			<Layout>
				<Convert />
			</Layout>
		</>
	)
}

export default App
