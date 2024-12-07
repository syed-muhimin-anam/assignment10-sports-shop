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
import ViewDetails from './components/ViewDetails';
import AuthProviders from './providers/AuthProviders';
import Login from './components/Login';
import Signup from './components/Signup';
import Update from './components/Update';
import PrivateROuter from './components/PrivateROuter';
import ErrorPage from './components/ErrorPage';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>, // Handles errors such as loader failures
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('http://localhost:5000/six-equipments'),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
      {
        path: "/allEquipment",
        element: <AllEquipment></AllEquipment>,
        loader: () => fetch('http://localhost:5000/equipments'),
      },
      {
        path: "/addEquipment",
        element: <PrivateROuter><AddEquipment></AddEquipment></PrivateROuter>,
      },
      {
        path: "/myEquipment",
        element: <PrivateROuter><MyEquipment></MyEquipment></PrivateROuter>,
        loader: () => fetch('http://localhost:5000/equipments'),
      },
      {
        path: "/details/:id",
        element: <PrivateROuter><ViewDetails></ViewDetails></PrivateROuter>,
        loader: ({ params }) => fetch(`http://localhost:5000/equipments/${params.id}`),
      },
      {
        path: '/update/:id',
        element: <PrivateROuter><Update></Update></PrivateROuter>,
        loader: ({ params }) => fetch(`http://localhost:5000/equipments/${params.id}`),
      },
      
    ],
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProviders>
      <RouterProvider router={router} />
    </AuthProviders>
  </StrictMode>,
)
