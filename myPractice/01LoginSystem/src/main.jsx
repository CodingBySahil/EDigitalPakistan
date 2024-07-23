import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home.jsx'
import SignUp from './components/SignUp.jsx'
import Login from './components/Login.jsx'
import Otp from './components/Otp.jsx'

// Router configuration with default route
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <SignUp />,  // Default route
      },
      {
        path: "signup",
        element: <SignUp />,
      },
      {
        path: "signin",
        element: <Login />,
      },
      {
        path: "otp",
        element: <Otp />,
      },
      {
        path: "home",
        element: <Home />,
      },
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
