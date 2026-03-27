import { faTrophy, faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { Profiler } from 'react'
import { Link } from 'react-router'

export default function Achievementscard({name,proof}) {
  return (
    <Link to={proof}
    target='_blank'
    className='flex items-center gap-3 px-5 py-4 bg-yellow-500/10 rounded-xl
    transition-all duration-300 cursor-pointer group:'
    >
      <div className='shrink-0 w-8 h-8 rounded-lg bg-yellow-50 15 border border-yellow-500/20 flex items-center justify-center  transition-colors'>
        <FontAwesomeIcon icon={faTrophy} className='text-yellow-500 text-sm'/>
      </div>
      <span className='text-slate-300 text-sm grow transition-colors'>{name}</span>
      <FontAwesomeIcon icon={faUpRightFromSquare} className='text-slate-600 text-xs transition-colors'/>
    </Link>
  )
}
