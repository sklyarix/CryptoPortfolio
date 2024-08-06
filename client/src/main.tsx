import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Convert from './pages/Convert/Convert.tsx'
import Home from './pages/Home/Home.tsx'

import AuthProvider from './providers/AuthProvider.tsx'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

import './assets/styles/index.scss'

const router = createBrowserRouter([
	{
		path: '/',
		element: <Home />
	},
	{
		path: '/convert',
		element: <Convert />
	}
])

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<AuthProvider>
			<QueryClientProvider client={queryClient}>
				<RouterProvider router={router} />
				<ReactQueryDevtools initialIsOpen={false} />
			</QueryClientProvider>
		</AuthProvider>
	</React.StrictMode>
)
