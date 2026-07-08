"use client"
import React, {useEffect} from 'react'
import { AlertTriangle } from "lucide-react";
import Link from 'next/link'
interface ErrorProps {
  error: Error & { digest?: string }
  reset: () => void
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.log("error", error);
    return () => {
      return
    }
  }, [error])

return (
  <div className="min-h-screen flex flex-col">
    <div className="flex-1 flex flex-col items-center justify-center px-4">
      <div className="text-center max-w-md w-full">
        <div className="flex justify-center mb-6">
          <AlertTriangle className="w-20 h-20 text-blue-500" />
        </div>
        <h1 className="text-6xl md:text-8xl font-bold text-blue-500 mb-4">404</h1>
        <h2 className="text-xl md:text-2xl font-semibold text-gray-700 mb-2">Page Not Found</h2>
        <p className="text-gray-600 mb-6">Error Occured Don't Worry we'll fix it.</p>
        {error && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6 text-left">
            <p className='text-sm text-red-600 font-mono justify-center break-words whitespace-normal'>{error.data || error.statusText || error.message}</p>
          </div>
        )}
        <Link
          href="/"
          className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg transition-colors"
        >
          Go to Homepage
        </Link>
      </div>
    </div>
  </div>
)
}
