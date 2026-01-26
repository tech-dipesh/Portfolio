import React from 'react'
import Footer from "./Footer"
import Header from "./Header"
import { Link } from 'react-router'
import { ShieldAlert } from 'lucide-react'
export default function Notfound() {
  return (
     <main className="min-h-2/4 flex flex-col bg-slate-800 grow items-center justify-center p-4 text-center">
        <div className="max-w-md w-full space-y-6">
          <div className="flex justify-center">
            <ShieldAlert className="h-16 w-16 text-red-500" />
          </div>
          <h1 className="text-5xl font-bold text-gray-800 ">404</h1>
          <h2 className="text-2xl font-semibold text-gray-600"> Page Not Found</h2>
          <p className="text-gray-50">The Page You're Looking for doesn't Exist.</p>
          <Link to="/" className='opacitiy-85 cursor-pointer bg-blue-500 font-semibold  py-2 px-4 rounded m-2'> Go to Homepage</Link>
        </div>
    </main>
  )
}