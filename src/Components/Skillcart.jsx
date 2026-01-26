import React from 'react'

export default function Skillcart({name, icon}) {
  return (
    <div className='px-4 py-2 bg-slate-900 rounded-lg'>
        <img src={icon} alt={name} className='h-16 w-16 rounded-lg'/>
        <h3 className=''>{name}</h3>
    </div>
  )
}


export function certificateCart({list}){
  return (
    <div>
      
    </div>
  )
}