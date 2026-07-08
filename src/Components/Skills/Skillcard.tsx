import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'

export default function Skillcart({name, icon}) {
  console.log("icon", icon);
  return (
    <div className='flex items-center gap-3 px-4 md:px-5 py-2.5 md:py-3 bg-slate-900 border border-slate-800 rounded-xl hover:border-slate-700 hover:bg-slate-800 transition-all duration-300 cursor-pointer group'>
      <Image 
        src={icon} 
        alt={name} 
        className='h-5 w-5 md:h-6 md:w-6 object-contain group-hover:scale-110 transition-transform duration-300'
        height={20}
        width={20}
      />
      <h3 className='text-slate-300 text-xs md:text-sm font-medium'>{name}</h3>
    </div>
  )
}
