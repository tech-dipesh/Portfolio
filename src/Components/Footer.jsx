import { faCreativeCommons } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router'

export default function Footer() {
  return (
    <div className='flex justify-center mt-48 mb-4'>
      <h1 className='font-sans md:text-2xl md:text-nowrap'><FontAwesomeIcon icon={faCreativeCommons}/>2026 Dipesh Sharma. All rights reserved.</h1>
          <ul className='flex mx-24 gap-8 font-semibold '>
            <li className='text-gray-300 hover:text-white  underline'><Link to="https://linkedin.com/in/tech-dipesh" target="_blank" rel="noopener noreferrer">Linkedin</Link></li>
            <li className='text-gray-300 hover:text-white underline'><Link to="https://github.com/tech-dipesh" target="_blank" rel="noopener noreferrer">Github</Link></li> 
          </ul>
    </div>
  )
}