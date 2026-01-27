import { useState } from 'react'
import { NavLink, Link } from 'react-router'
// import DarkModeToggle from './Toggle'
// import MobileDrawer from '../drawer/Mobile'
import logo from '../assets/images/me.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import ThemeToggle from './ThemeToggle';

const links = [
  { name: 'Home', path: '/' },
  { name: 'Projects', path: '/projects' },
  { name: 'Contact', path: '/contact' },
  { name: 'Skills', path: '/skills' },
  { name: 'Resume', path: './resume.pdf#' },
]


export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen]=useState(false)
  return (
  <header className="lg:w-full bg-zinc-800 border-b border-slate-800 shadow-lg px-6 py-4">
  <div className=" lg:max-w-7xl mx-auto flex items-center justify-between">
    <Link to='./'>
      <img src={logo} alt="Logo" className='h-10 w-10 rounded-full hover:opacity-80 transition-opacity' />
    </Link>
    <button 
      onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      className="md:hidden text-slate-300 hover:text-blue-400 transition-colors cursor-pointer"
    >
      <FontAwesomeIcon icon={isMobileMenuOpen ? faTimes : faBars} className="text-xl"/>
    </button>
   <nav className="hidden md:flex items-center gap-4 lg:gap-8">
  {links.map(link => (
    <NavLink 
      key={link.name} 
      className={({isActive}) => 
        `text-slate-300 hover:text-blue-400 cursor-pointer transition-colors duration-200 font-medium relative group text-sm md:text-base ${isActive ? 'text-blue-400' : ''}`
      }
      to={link.path}
    >
      {link.name}
    </NavLink>
      ))}
    </nav>
    <ThemeToggle/>
  </div>
 
 {isMobileMenuOpen && (
      <nav className="md:hidden mt-4 pb-4 border-t border-slate-600 pt-4">
        <div className="flex flex-col gap-4">
          {links.map(link => (
            <NavLink 
              key={link.name}
              onClick={() => setIsMobileMenuOpen(false)}
              className={({isActive}) => 
                `text-slate-300 hover:text-blue-400 cursor-pointer transition-colors duration-200 font-medium px-2 py-2 ${isActive ? 'text-blue-400 bg-slate-800/50 rounded-lg' : ''}`
              }
              to={link.path}
            >
              {link.name}
            </NavLink>
          ))}
        </div>
        <ThemeToggle className='hidden md:block'/>
      </nav>
    )}
</header>
)
}