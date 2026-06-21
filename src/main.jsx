import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Contact from "./Pages/Contact"
import Home from './Pages/Home'
import Projects from './Pages/Projects'
import Skills from './Pages/Skills'
import Notfound from './Components/Notfound'
import Blogs from './Pages/Blogs'
import Blog from './Pages/Blog'
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
      path:  '/projects',
      element: <Projects/>
    },
    {
      path:  '/skills',
      element: <Skills/>
    },
    {
      path: "/contact",
      element: <Contact/>
    },
    {
      path: "/blogs",
      element: <Blogs/>,
        children: [
          {
            path: ":id",
            element: <Blog/>
          }
        ]
    },
    {
      path: "*",
      element: <Notfound/>
    }
  ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
