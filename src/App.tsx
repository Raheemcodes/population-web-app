import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.scss';
import RootLayout from './pages/Root';
import HomePage from './pages/home/Home';

const router = createBrowserRouter([
  {
    path: '',
    element: <RootLayout />,
    children: [{ index: true, element: <HomePage /> }],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
