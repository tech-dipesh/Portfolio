import { faCertificate, faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router";


export default function CertificateCart({title, url}) {
  return (
    <Link
      to={url}
      target="_blank"
      className="flex items-center gap-3 px-5 py-4 bg-slate-900/50 border border-slate-800 rounded-xl 
                 hover:bg-slate-900 transition-all duration-300 cursor-pointer"
    >
      <div className="shrink-0 w-8 h-8 rounded-lg bg-slate-800 border border-slate-700 
                      flex items-center justify-center">
        <FontAwesomeIcon icon={faCertificate} className="text-yellow-500/70 text-sm  transition-colors" />
      </div>

      <span className="text-slate-400 text-sm transition-colors">
        {title}
      </span>
      <FontAwesomeIcon
        icon={faUpRightFromSquare}
        className="text-slate-600 text-xs transition-colors"
      />
    </Link>
  )
}