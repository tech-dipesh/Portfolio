import { useState } from 'react'
import { NavLink, Link } from 'react-router'
// import DarkModeToggle from './Toggle'
// import MobileDrawer from '../drawer/Mobile'
import logo from '../../assets/images/me.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

const links = [
  { name: 'Home', path: '/' },
  { name: 'Projects', path: '/projects' },
  { name: 'Gadgets', path: '/gadgets' },
  { name: 'Contact', path: '/contact' },
  { name: 'Resume', path: '/resume' },
  { name: 'About', path: '/about' },
]

export default function Header() {
  const [isDrawer, setIsDrawer] = useState(false)
  return (
    <header className="w-full bg-[#06063a] shadow-md px-6 py-4">
      <div className="flex items-center justify-between">
        <span>
          <img src={logo} alt="Logo" className='h-10' />
        </span>
        <nav className="hidden md:flex space-x-6">
          {links.map(link=>(
            <div className='text-gray-700 dark:text-gray-200 hover:text[#3498db] cursor-pointer transition'>{link.name}
              {/* <NavLink to='/'/> */}
              {/* <Link to='/'/> */}
            </div>
          ))}
        </nav>
        <div className="flex items-center space-x-4">
            
        </div>
      </div>
    </header>
)
}