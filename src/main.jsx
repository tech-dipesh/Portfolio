import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Contact from "./Pages/Contact"
import Home from './Pages/Home'
const router=createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
    {
      index: true,
      element: <Home/>
    },
    {
      path: "/chilren",
      element: <Contact/>
    }
  ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
