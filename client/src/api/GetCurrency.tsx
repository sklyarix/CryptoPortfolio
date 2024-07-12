import { QueryClient, QueryClientProvider } from 'react-query'

const GetCurrency = () => {
	const queryClient = new QueryClient()
	return (
		<>
			<QueryClientProvider></QueryClientProvider>
		</>
	)
}
export default GetCurrency

/*
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from 'react-query';

const queryClient = new QueryClient();

export const App = () => (
  <QueryClientProvider>
    <Example />
  </QueryClientProvider>
);

function Example() {
  const { isLoading, error, data } = useQuery(
    'repoData',
    () =>
      fetch(
        'https://api.github.com/repos/tannerlinsley/react-query'
      ).then((response) => response.json())
  );

  if (isLoading) return <p>Загрузка...</p>;

  if (error) return <p>Ошибка: {error.message}</p>;

  return (
    <div>
      <h1>{data.name}</h1>
      <p>{data.description}</p>
      <strong>👀 {data.subscribers_count}</strong>{' '}
      <strong>✨ {data.stargazers_count}</strong>{' '}
      <strong>🍴 {data.forks_count}</strong>
    </div>
  );
}
*/
