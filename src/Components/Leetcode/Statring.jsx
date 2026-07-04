import {useState, useEffect} from 'react'

 export default function StatRing({ solved, total, color, label, beats }) {
  const [animated, setAnimated] = useState(false)
  const r = 28
  const circ = 2 * Math.PI * r
  const pct = solved / total
  const dash = animated ? pct * circ : 0

  useEffect(() => {
    const t = setTimeout(() => setAnimated(true), 100)
    return () => clearTimeout(t)
  }, [])

  return (
    <div className='flex flex-col items-center gap-2'>
      <div className='relative w-20 h-20'>
        <svg className='w-full h-full -rotate-90' viewBox='0 0 72 72'>
          <circle cx='36' cy='36' r={r} fill='none' stroke='#1e293b' strokeWidth='7' />
          <circle
            cx='36' cy='36' r={r} fill='none'
            stroke={color} strokeWidth='7'
            strokeDasharray={`${dash} ${circ}`}
            strokeLinecap='round'
            style={{ transition: 'stroke-dasharray 1.2s cubic-bezier(0.4,0,0.2,1)' }}
          />
        </svg>
        <div className='absolute inset-0 flex flex-col items-center justify-center'>
          <span className='text-slate-100 font-bold text-sm leading-none'>{solved}</span>
          <span className='text-slate-500 text-xs'>/{total}</span>
        </div>
      </div>
      <div className='text-center'>
        <p className='text-xs font-semibold' style={{ color }}>{label}</p>
        {beats != null && (
          <p className='text-slate-500 text-xs'>beats {beats}%</p>
        )}
      </div>
    </div>
  )
}
