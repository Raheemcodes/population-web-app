import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.scss';
import RootLayout from './pages/Root';
import HomePage from './pages/home/Home';
import CountryPage from './pages/country/Country';
import { CountriesContextProvider } from './store/countries.context';

const router = createBrowserRouter([
  {
    path: '',
    element: <RootLayout />,
    errorElement: <RootLayout />,

    children: [
      { index: true, element: <HomePage /> },
      { path: ':country', element: <CountryPage /> },
    ],
  },
]);

function App() {
  return (
    <CountriesContextProvider>
      <RouterProvider router={router} />
    </CountriesContextProvider>
  );
}

export default App;
