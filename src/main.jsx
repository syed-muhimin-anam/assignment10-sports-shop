import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Root from './components/Root';
import AllEquipment from './components/AllEquipment';
import AddEquipment from './components/AddEquipment';
import MyEquipment from './components/MyEquipment';
import Home from './components/Home';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('http://localhost:5000/equipments')
        
      },
      {
        path: "/allEquipment",
        element: <AllEquipment></AllEquipment>,
        loader: () => fetch('http://localhost:5000/equipments')
        
      },
      {
        path: "/addEquipment",
        element: <AddEquipment></AddEquipment>
        
      },
      {
        path: "/myEquipment",
        element: <MyEquipment></MyEquipment>
        
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
