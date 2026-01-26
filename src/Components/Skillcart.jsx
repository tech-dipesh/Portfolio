import { faCertificate, faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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


export function CertificateCart({list}) {
  return (
    <div className='flex items-center gap-3 px-6 py-4 bg-slate-900/50 border border-slate-800 rounded-xl hover:border-yellow-500/30 hover:bg-slate-900 transition-all duration-300 cursor-pointer group'>
      <Link to='https://github.com'>
      <FontAwesomeIcon 
        icon={faCertificate} 
        className='text-yellow-500 text-lg shrink-0'
      />
      <span className='text-slate-300 text-base grow group-hover:text-slate-100 transition-colors'>
        {list}
      </span>
      <FontAwesomeIcon 
        icon={faUpRightFromSquare} 
        className='text-slate-500 group-hover:text-yellow-500 transition-colors'
        />
        </Link>
    </div>
  )
}