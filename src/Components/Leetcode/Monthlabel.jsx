 export default function MonthLabels({ weeks }) {
  let last = -1
  return (
    <div className='flex mb-1.5' style={{ gap: '4px' }}>
      {weeks.map((week, i) => {
        const m = week[0].date.getUTCMonth()
        const show = m !== last
        if (show) last = m
        return (
          <div key={i} className='text-xs text-slate-500' style={{ width: '12px', minWidth: '12px' }}>
            {show ? week[0].date.toLocaleString('default', { month: 'short' }) : ''}
          </div>
        )
      })}
    </div>
  )
}
