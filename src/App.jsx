import './App.css'
import Header from './Components/Header'
import { Outlet } from 'react-router'
import Footer from './Components/Footer'
import { Analytics } from "@vercel/analytics/react"
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
    <Analytics/>
    <ToastContainer/>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default App
