import React, { useState } from 'react'
// import "./Toggle.css"
import { Moon, Sun } from 'lucide-react'
export default function ThemeToggle() {
	 const [isDark, setIsDark] = useState(false)

  const toggleTheme = () => {
    setIsDark(!isDark)
    document.documentElement.classList.toggle('dark')
  }
  return (
   <div className="hidden md:flex items-center gap-4">
  <div 
    className={`relative w-14 h-7 rounded-full cursor-pointer transition-colors duration-300 ${
      isDark ? 'bg-slate-700' : 'bg-blue-500'
    }`}
    onClick={toggleTheme}
  >
    <div 
      className={`absolute top-0.5 left-0.5 w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300 flex items-center justify-center ${
        isDark ? 'translate-x-7' : 'translate-x-0'
      }`}
    >
      {isDark ? (
        <Moon className='w-4 h-4 text-slate-700'/>
      ) : (
        <Sun className='w-4 h-4 text-yellow-500'/>
      )}
    </div>
  </div>
</div>
  )
}
