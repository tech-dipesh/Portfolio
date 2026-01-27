import React from 'react'
import { GitHubCalendar } from 'react-github-calendar'

export default function Github() {
  return (
   <div className="w-full max-w-4xl mx-auto p-6 bg-slate-50 dark:bg-slate-950 rounded-lg border border-slate-200 dark:border-slate-800 transition-colors">
  <div className="mb-6">
    <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100 mb-2">
      My GitHub Contributions
    </h2>
    <p className="text-sm text-slate-600 dark:text-slate-400">
      Activity over the last year
    </p>
  </div>

  <div className="bg-white dark:bg-slate-900 p-4 rounded-md border border-slate-200 dark:border-slate-800">
    <GitHubCalendar 
      username="tech-dipesh"
      colorScheme="light" 
      blockSize={12}
      blockMargin={4}
      fontSize={14}
    />
  </div>
  <div className="mt-4 flex items-center justify-between text-sm">
    <span className="text-slate-600 dark:text-slate-400">
      View on{' '}
      <a 
        href="https://github.com/tech-dipesh" 
        target="_blank" 
        className="text-blue-500"
      >
        GitHub
      </a>
    </span>
  </div>
</div>
  )
}
