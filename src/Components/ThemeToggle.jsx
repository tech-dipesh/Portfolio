import React from 'react'
import { Moon, Sun } from 'lucide-react'
import useLocalStorage from '../hooks/useLocalStorage'
export default function ThemeToggle({style=''}) {
	 const [isDark, setIsDark] = useLocalStorage('theme', false)

  const toggleTheme = () => {
    setIsDark(!isDark)
    document.documentElement.classList.toggle('dark')
  }
  
  return (
     <div 
      className={`p-2 border border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700  relative w-14 h-7 rounded-full cursor-pointer transition-colors duration-300 
        ${isDark?'bg-slate-900':'bg-zinc-500'}
        ${style}
        `}
      onClick={toggleTheme}
      >
   <div className="flex items-center gap-4">
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
