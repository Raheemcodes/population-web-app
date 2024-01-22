import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.scss';
import RootLayout from './pages/Root';
import CountryPage from './pages/country/Country';
import HomePage from './pages/home/Home';

const router = createBrowserRouter([
  {
    path: '',
    element: <RootLayout />,
    errorElement: <RootLayout />,

    children: [
      { index: true, element: <HomePage /> },
      { path: ':name', element: <CountryPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
