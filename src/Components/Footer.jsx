import { faCreativeCommons } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router'

export default function Footer() {
  return (
    <div className='flex justify-center md:py-24 py-12 md:mb-4 px-4 bg-gray-800'>
      <h1 className='font-sans md:text-2xl md:text-nowrap text-gray-200 dark:text-gray-500'><FontAwesomeIcon icon={faCreativeCommons}/>2026 Dipesh Sharma. All rights reserved.</h1>
          <ul className='flex mx-24 gap-8 font-semibold '>
            <li className='text-gray-300 hover:text-white  underline'><Link to="https://linkedin.com/in/tech-dipesh" target="_blank" rel="noopener noreferrer">Linkedin</Link></li>
            <li className='text-gray-300 hover:text-white underline'><Link to="https://github.com/tech-dipesh" target="_blank" rel="noopener noreferrer">Github</Link></li> 
          </ul>
    </div>
  )
}