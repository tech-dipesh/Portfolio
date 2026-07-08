export default function HeatmapCell({ count }) {
  let bg = '#1e293b'
  if (count >= 8)      bg = '#f97316'
  else if (count >= 5) bg = '#ea580c'
  else if (count >= 3) bg = '#78350f'
  else if (count >= 1) bg = '#451a03'

  return (
    <div
      className='w-3 h-3 rounded-sm transition-colors cursor-default'
      style={{ backgroundColor: bg }}
      title={count > 0 ? `${count} submission${count > 1 ? 's' : ''}` : undefined}
    />
  )
}
