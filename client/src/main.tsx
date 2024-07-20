import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './assets/styles/index.scss'

const queryClient = new QueryClient()

const router = createBrowserRouter([
  {
    path: "/a",
    element: <div>Hello world!</div>,
  },
]);
//<App />

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		
		<QueryClientProvider client={queryClient}>
			<RouterProvider router={router} />
			<ReactQueryDevtools initialIsOpen={false} />
		</QueryClientProvider>
	</React.StrictMode>
)
