import React, { useState } from 'react'
import Profile from "../../public/profile.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClipboard, faCopy } from '@fortawesome/free-regular-svg-icons'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
export default function Home() {
  const [isCopy, setIsCopy]=useState(false);
  const clickCopy=()=>{
  navigator.clipboard.writeText('dipsharmadev+portfolio@gmail.com')
  setIsCopy(!isCopy)
} 

  return (
<div>
      <h3 className='my-8 md:gap-2 justify-center flex text-3xl md:text-4xl font-bold text-slate-100'>I Design the Sytem that Work For Everyone.</h3>
      <div className='flex flex-col md:flex-row items-center gap-4 justify-center text-lg text-slate-200'>
      <h3>Hello I'm Dipesh Sharma, </h3>
      <img src={Profile} alt="Profile" className='rounded-full h-32 w-32 object-cover border-4 border-blue-500 shadow-lg'/>
      <span className='text-slate-300'>a Software Aficianto</span>
      </div>
          <div className='flex justify-center my-8'>
          <div className='p-6 rounded-xl bg-slate-800 hover:bg-slate-700 transition-colors shadow-xl border border-slate-700'>
        <div className='flex items-center justify-between w-full gap-4'>
          <div className='flex items-center gap-2 cursor-pointer bg-slate-800/50 px-6 py-3 rounded-full border border-slate-700/50'>
      <h2 className='text-slate-100 font-semibold text-lg'>Let's Connect</h2>
      <FontAwesomeIcon icon={faArrowRight} className='text-blue-400'/>
       </div>
    <div onClick={clickCopy} className='flex items-center gap-3 bg-slate-800/50 px-6 py-3 rounded-full border border-slate-700/50 cursor-pointer hover:border-blue-400/50 transition-all'>
      <FontAwesomeIcon 
        icon={isCopy ? faClipboard : faCopy} 
        className='text-slate-400'
      />
      <span className='text-slate-300'>dipsharmadev@gmail.com</span>
    </div>
    </div>
      </div>
      </div>
</div>
  )
}