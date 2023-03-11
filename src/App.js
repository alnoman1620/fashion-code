import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Components/Home/Home';
import Catalogue from './Pages/Catalogue/Catalogue';
import Fashion from './Pages/Fashion/Fashion';
import Favorite from './Pages/Favorite/Favorite';
import Lifestyle from './Pages/Lifestyle/Lifestyle';
import Login from './Components/Login/Login';

function App() {
  const router = createBrowserRouter([
    {path: "/", element: <Home></Home>},
    {path: "/home", element: <Home></Home>},
    {path:"/catalouge", element: <Catalogue></Catalogue>},
    {path:"/fashion", element: <Fashion></Fashion>},
    {path:"/favorite", element: <Favorite></Favorite>},
    {path:"/lifestyle", element: <Lifestyle></Lifestyle>},
    {path:"/login", element: <Login></Login>},
  ])
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
