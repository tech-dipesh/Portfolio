import { useEffect, useRef, useState } from 'react'
import HeatmapCell from '../Components/Leetcode/Heatmap'
import MonthLabels from '../Components/Leetcode/Monthlabel'
import StatRing from '../Components/Leetcode/Statring'
import buildGrid from '../services/Buildgrid.js'

import { Link } from 'react-router'

const BASE = 'https://alfa-leetcode-api.onrender.com/tech-dipesh'


export default function Leetcode() {
  const [solved, setSolved]   = useState(null)
  const [profile, setProfile] = useState(null)
  const [calendar, setCalendar] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError]     = useState(false)

  useEffect(() => {
    async function fetchAll() {
      try {
        const [r1, r2, r3] = await Promise.all([
          fetch(`${BASE}/solved`),
          fetch(`${BASE}/profile`),
          fetch(BASE),
        ])
        const [d1, d2, d3] = await Promise.all([r1.json(), r2.json(), r3.json()])
        setSolved(d1)
        setProfile(d2)
        setCalendar(d3.submissionCalendar || {})
      } catch {
        setError(true)
      } finally {
        setLoading(false)
      }
    }
    fetchAll()
  }, [])

  const weeks = calendar ? buildGrid(calendar) : []
  const totalSubs = Object.values(calendar || {}).reduce((a, b) => a + Number(b), 0)

  const beatsMap = {}
  if (profile?.userSessionBeatsPercentage) {
    profile.userSessionBeatsPercentage.forEach(({ difficulty, percentage }) => {
      beatsMap[difficulty] = percentage
    })
  }

  return (
    <section className='min-h-screen py-10 md:py-20 px-4 bg-slate-900'>
      <div className='max-w-4xl mx-auto'>

        <div className='mb-10'>
          <div className='flex items-center gap-3 mb-2'>
            <div className='w-1 h-8 bg-orange-500 rounded-full shrink-0' />
            <h1 className='text-3xl md:text-5xl font-bold text-slate-100'>LeetCode</h1>
          </div>
          <p className='text-slate-400 ml-4 text-sm uppercase tracking-wider'>DSA Progress · tech-dipesh</p>
        </div>

        {loading && (
          <div className='flex flex-col items-center justify-center py-32 gap-4'>
            <div className='w-10 h-10 border-2 border-orange-500 border-t-transparent rounded-full animate-spin' />
            <p className='text-slate-400 text-sm'>Fetching stats…</p>
          </div>
        )}

        {error && (
          <div className='text-center py-32 space-y-3'>
            <p className='text-slate-400'>API may be cold-starting (Render free tier). Try refreshing in a moment.</p>
            <Link to='https://leetcode.com/tech-dipesh' target='_blank' className='text-orange-400 text-sm hover:underline'>
              View on LeetCode →
            </Link>
          </div>
        )}

        {!loading && !error && solved && (
          <>
            <div className='bg-slate-800/50 border border-slate-700 rounded-2xl p-6 md:p-8 mb-6'>
              <div className='flex flex-col sm:flex-row items-center gap-8'>

                <div className='text-center shrink-0'>
                  <p className='text-6xl md:text-7xl font-bold text-slate-100'>{solved.solvedProblem}</p>
                  <p className='text-slate-400 text-sm mt-1'>problems solved</p>
                  <p className='text-slate-600 text-xs mt-1'>out of 3,972 total</p>
                </div>

                <div className='hidden sm:block w-px h-24 bg-slate-700 shrink-0' />

                <div className='flex gap-8 justify-center flex-1'>
                  <StatRing solved={solved.easySolved}   total={951}  color='#22c55e' label='Easy'   beats={beatsMap['EASY']} />
                  <StatRing solved={solved.mediumSolved} total={2074} color='#f59e0b' label='Medium' beats={beatsMap['MEDIUM']} />
                  <StatRing solved={solved.hardSolved}   total={947}  color='#ef4444' label='Hard'   beats={beatsMap['HARD']} />
                </div>

                <div className='hidden md:flex flex-col items-center gap-1 shrink-0 text-center'>
                  <p className='text-slate-500 text-xs uppercase tracking-wider'>Global Rank</p>
                  <p className='text-xl font-bold text-slate-200'>#{profile?.ranking?.toLocaleString()}</p>
                  <Link to='https://leetcode.com/tech-dipesh' target='_blank' className='text-orange-400 text-xs hover:underline mt-1'>
                    View Profile →
                  </Link>
                </div>
              </div>

              <div className='flex sm:hidden justify-center mt-6 gap-6 text-center border-t border-slate-700 pt-4'>
                <div>
                  <p className='text-slate-500 text-xs uppercase tracking-wider'>Global Rank</p>
                  <p className='text-lg font-bold text-slate-200'>#{profile?.ranking?.toLocaleString()}</p>
                </div>
                <div>
                  <p className='text-slate-500 text-xs uppercase tracking-wider'>Total Submissions</p>
                  <p className='text-lg font-bold text-slate-200'>{totalSubs}</p>
                </div>
              </div>
            </div>

            <div className='bg-slate-800/50 border border-slate-700 rounded-2xl p-6 md:p-8'>
              <div className='flex items-center justify-between mb-5'>
                <div>
                  <h2 className='text-lg font-semibold text-slate-200'>Submission Activity</h2>
                  <p className='text-slate-500 text-sm'>{totalSubs} submissions in the past year</p>
                </div>
                <div className='hidden sm:flex items-center gap-1.5 text-xs text-slate-500'>
                  <span>Less</span>
                  {['#1e293b', '#451a03', '#78350f', '#ea580c', '#f97316'].map((c, i) => (
                    <div key={i} className='w-3 h-3 rounded-sm' style={{ backgroundColor: c, border: i === 0 ? '1px solid #334155' : 'none' }} />
                  ))}
                  <span>More</span>
                </div>
              </div>

              <div className='overflow-x-auto'>
                <div className='min-w-max'>
                  <MonthLabels weeks={weeks} />
                  <div className='flex gap-1'>
                    {weeks.map((week, wi) => (
                      <div key={wi} className='flex flex-col gap-1'>
                        {week.map((day, di) => (
                          <HeatmapCell key={di} count={day.count} />
                        ))}
                      </div>
                    ))}
                  </div>
                  <div className='flex mt-2 gap-1'>
                    <div className='flex flex-col gap-1'>
                      {['', 'M', '', 'W', '', 'F', ''].map((d, i) => (
                        <div key={i} className='text-slate-600 text-xs leading-none flex items-center' style={{ width: '12px', height: '12px' }}>
                          {d}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  )
}
