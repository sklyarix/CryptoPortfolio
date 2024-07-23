import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Layout from './components/Layout/Layout'

import Home from './pages/Home/Home.tsx'
import Convert from './pages/Convert/Convert.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
	{
    path: "/convert",
    element: <Convert/>,
  },
]);

const App = () => {
	return(
			<Layout>
				<RouterProvider router={router} />
			</Layout>
	)
}

export default App
//
//import Convert from './pages/Convert'
/*
function App() {
	return (
		<div>
			<Layout>
				<Convert />
			
		</div>
	)
}

export default App
*/