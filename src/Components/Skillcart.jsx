import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router'

export default function Skillcart({name, icon}) {
  return (
    <div className='flex items-center gap-3 px-5 py-3 bg-slate-900 border border-slate-800 rounded-xl hover:border-slate-700 hover:bg-slate-800 transition-all duration-300 cursor-pointer group'>
      <img 
        src={icon} 
        alt={name} 
        className='h-6 w-6 object-contain group-hover:scale-110 transition-transform duration-300'
      />
      <h3 className='text-slate-300 text-sm font-medium'>{name}</h3>
    </div>
  )
}
