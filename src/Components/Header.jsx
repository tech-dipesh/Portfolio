import { useState } from 'react'
import { NavLink, Link } from 'react-router'
// import DarkModeToggle from './Toggle'
// import MobileDrawer from '../drawer/Mobile'
import logo from '../assets/profile.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import ThemeToggle from './ThemeToggle';
import { Moon, Sun } from 'lucide-react';

const links = [
  { name: 'Home', path: '/' },
  { name: 'Projects', path: '/projects' },
  { name: 'Contact', path: '/contact' },
  { name: 'Skills', path: '/skills' },
  { name: 'Resume', path: './resume.pdf', target: 'new' },
]
const styleLi='dark:hover:text-blue-400 gap-8 px-8 text-slate-300 hover:text-blue-400 cursor-pointer transition-colors duration-200 font-medium relative group text-sm md:text-base';



export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen]=useState(false)

  return (
    <>
  <header className="relative mt-5 flex justify-between items-center lg:w-full bg-zinc-800 border-b border-slate-800 bg-slate-50 text-slate-900 dark:bg-slate-900 dark:text-slate-900 dark:border-slate-800 shadow-lg px-6 py-4 lg:px-24">
    <Link to='./'  className='h-10 w-10 rounded-full hover:opacity-80 transition-opacity'>
      <img src={logo} alt="Logo" className='rounded-full h-12 w-12'/>
    </Link>
    <button 
      onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      className="md:hidden text-slate-300 hover:text-blue-400 transition-colors cursor-pointer"
      >
      <FontAwesomeIcon icon={isMobileMenuOpen ? faTimes : faBars} className="text-xl"/>
    </button>
        <nav className="hidden md:flex gap-4 md:gap-6 lg:gap-8">
      {links.map(({name, path, target}) => (
        <NavLink 
        key={name} 
        className={({isActive}) => 
            `${styleLi} ${isActive ? 'text-blue-400' : ''}`
      }
      to={path}
      target={target==='new'?'_blank':''}
      >
        {name}
      </NavLink>
        ))}
        </nav>
      <ThemeToggle/>
 
</header>
 {isMobileMenuOpen && (
   <nav className="md:hidden mt-4 pb-4 border-t border-slate-600 pt-4">
        <div className="flex flex-col gap-4">
          {links.map(link => (
            <NavLink 
            key={link.name}
            onClick={() => setIsMobileMenuOpen(false)}
            className={({isActive}) => 
              `${styleLi} ${isActive ? 'text-blue-400 bg-slate-800/50 rounded-lg py-2 text-2xl' : ''}`
          }
          to={link.path}
          >
              {link.name}
            </NavLink>
          ))}
        </div>
      </nav>
    )}
    </>
)
}