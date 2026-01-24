import { useState } from 'react'
import './App.css'
import Header from './Components/Common/Header'
import { Outlet } from 'react-router'
import Footer from './Components/Common/Footer'

function App() {
  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default App
