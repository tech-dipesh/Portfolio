export default function buildGrid(submissionCalendar) {
  const todayUTC = new Date()
  todayUTC.setUTCHours(0, 0, 0, 0)

  const start = new Date(todayUTC)
  start.setUTCDate(start.getUTCDate() - 181)
  start.setUTCDate(start.getUTCDate() - start.getUTCDay())

  const weeks = []
  const cur = new Date(start)

  while (cur <= todayUTC) {
    const week = []
    for (let d = 0; d < 7; d++) {
      const ts = String(Math.floor(cur.getTime() / 1000))
      week.push({ date: new Date(cur), count: Number(submissionCalendar[ts] || 0) })
      cur.setUTCDate(cur.getUTCDate() + 1)
    }
    weeks.push(week)
  }
  return weeks
}
