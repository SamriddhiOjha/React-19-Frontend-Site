import {createBrowserRouter, RouterProvider} from 'react-router-dom';

import { AppLayout } from './components/Layout/AppLayout';


import './App.css'

import {Home} from "./Pages/Home"
import {About} from "./Pages/About"
import {Contact} from "./Pages/Contact"
import {Country} from "./Pages/Country"
import { ErrorPage } from './Pages/ErrorPage';
import { CountryDetails } from './components/Layout/CountryDetails';

const router = createBrowserRouter([
  {
    path:"/",
    element:<AppLayout/>,
    errorElement:<ErrorPage/>,
    children:[
      {
        path:"/",
        element:<Home/>,
      },
      {
        path:"about",
        element:<About/>
      },
      {
        path:"contact",
        element:<Contact/>
      },
      {
        path:"country",
        element:<Country/>
      },
      {
        path:"country/:id",   //dynamic route whenever you use the colon
        element:<CountryDetails/>,
      }

    ],
  },
]);
  

const App = ()=>{
  return <RouterProvider router={router}></RouterProvider>;
};

export default App;