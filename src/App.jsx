import './App.css'
import Header from './Components/Header'
import { Outlet } from 'react-router'
import Footer from './Components/Footer'
import { Analytics } from "@vercel/analytics/react"
function App() {
  return (
    <>
    <Analytics/>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default App
