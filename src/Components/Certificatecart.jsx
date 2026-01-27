import { faCertificate, faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router";


export default function CertificateCart({title, url}) {
  return (
    <div className='flex items-center gap-3 px-6 py-4 bg-slate-900/50 border border-slate-800 rounded-xl hover:border-yellow-500/30 hover:bg-slate-900 transition-all duration-300 cursor-pointer group'>
      <Link to={url} target='_blank'>
      <FontAwesomeIcon 
        icon={faCertificate} 
        className='text-yellow-500 text-lg shrink-0'
      />
      <span className='text-slate-300 text-base grow group-hover:text-slate-100 transition-colors'>
        {title}
      </span>
      <FontAwesomeIcon 
        icon={faUpRightFromSquare} 
        className='text-slate-500 group-hover:text-yellow-500 transition-colors'
        />
        </Link>
    </div>
  )
}