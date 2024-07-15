import { useQuery } from '@tanstack/react-query';
import Layout from './components/Layout/Layout';
import Convert from './pages/Convert';

const getData = async () => {
  const response = await fetch('http://localhost:3000/api/crypto');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

function App() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['listings'],
    queryFn: getData,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {(error as Error).message}</div>;

  return (
    <div>
      <h1>Cryptocurrency Data</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <Layout>
        <Convert />
      </Layout>
    </div>
  );
}

export default App;
