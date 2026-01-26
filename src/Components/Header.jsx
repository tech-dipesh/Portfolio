import { useState } from 'react'
import { NavLink, Link } from 'react-router'
// import DarkModeToggle from './Toggle'
// import MobileDrawer from '../drawer/Mobile'
import logo from '../assets/images/me.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

const links = [
  { name: 'Home', path: '/' },
  { name: 'Projects', path: '/projects' },
  { name: 'Contact', path: '/contact' },
  { name: 'Skills', path: '/skills' },
  { name: 'Resume', path: './resume.pdf' },
]

export default function Header() {
  return (
  <header className="w-full bg-slate-900 border-b border-slate-800 shadow-lg px-6 py-4">
  <div className="max-w-7xl mx-auto flex items-center justify-between">
    <Link to='./'>
      <img src={logo} alt="Logo" className='h-10 w-10 rounded-full hover:opacity-80 transition-opacity' />
    </Link>
    
    <nav className="hidden md:flex items-center gap-8">
      {links.map(link => (
        <NavLink 
          key={link.name} 
          className={({isActive}) => 
            `text-slate-300 hover:text-blue-400 cursor-pointer transition-colors duration-200 font-medium relative group ${isActive ? 'text-blue-400' : ''}`
          }
          to={link.path}
        >
          {link.name}
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300"></span>
        </NavLink>
      ))}
    </nav>
    
    <div className="flex items-center gap-4">

    </div>
  </div>
</header>
)
}