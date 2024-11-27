import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AddCoffee from './components/AddCoffee.jsx';
import UpdateCoffee from './components/UpdateCoffee.jsx';
import Home from './Home.jsx';
import Error from './components/Error.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error></Error>,
    children: [
      {
        path : "/",
        element : <Home></Home>,
        loader : ()=> fetch('http://localhost:3000/coffee')
      },
      {
        path: 'addCoffee',
        element: <AddCoffee></AddCoffee>
      }, {
        path: "updateCoffee/:id",
        element: <UpdateCoffee></UpdateCoffee>,
        loader : ({params})=>fetch(`http://localhost:3000/coffee/${params.id}`)
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
