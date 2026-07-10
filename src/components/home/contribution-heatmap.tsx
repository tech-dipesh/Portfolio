import { getContributionCalendar } from "@/lib/github";
import { cn } from "@/lib/utils";

const levelClasses: Record<number, string> = {
  0: "bg-raised border border-border",
  1: "bg-accent/25",
  2: "bg-accent/50",
  3: "bg-accent/75",
  4: "bg-accent",
};

export async function ContributionHeatmap() {
  const days = await getContributionCalendar();

  if (days.length === 0) {
    return (
      <div className="rounded-2xl border border-border bg-surface/60 p-6 text-sm text-ink-faint">
        Contribution data is unavailable right now. Check back shortly.
      </div>
    );
  }

  const sorted = [...days].sort((a, b) => a.date.localeCompare(b.date));
  const total = sorted.length;
  const firstDate = new Date(`${sorted[0]?.date}T00:00:00Z`);
  const gridStart = new Date(firstDate);
  gridStart.setUTCDate(gridStart.getUTCDate() - gridStart.getUTCDay());

  const levelByDate = new Map(sorted.map((day) => [day.date, day.level]));
  const weekCount = Math.ceil((sorted.length + gridStart.getUTCDay()) / 7) + 1;

  const weeks: Array<Array<{ date: string; level: number | null }>> = [];
  for (let week = 0; week < weekCount; week += 1) {
    const column: Array<{ date: string; level: number | null }> = [];
    for (let day = 0; day < 7; day += 1) {
      const current = new Date(gridStart);
      current.setUTCDate(current.getUTCDate() + week * 7 + day);
      const iso = current.toISOString().slice(0, 10);
      column.push({ date: iso, level: levelByDate.get(iso) ?? null });
    }
    weeks.push(column);
  }

  const activeCount = sorted.filter((day) => day.level > 0).length;

  return (
    <div className="rounded-2xl border border-border bg-surface/60 p-6">
      <div className="flex items-center justify-between text-sm">
        <span className="font-medium text-ink">{activeCount} active days</span>
        <span className="text-xs text-ink-faint">last {total} days</span>
      </div>

      <div className="mt-4 overflow-x-auto">
        <div
          className="grid gap-[3px]"
          style={{ gridTemplateColumns: `repeat(${weeks.length}, minmax(0, 1fr))` }}
        >
          {weeks.map((column, weekIndex) => (
            <div key={weekIndex} className="grid grid-rows-7 gap-[3px]">
              {column.map((cell) => (
                <div
                  key={cell.date}
                  title={cell.level !== null ? `${cell.date} · level ${cell.level}` : undefined}
                  className={cn(
                    "h-[10px] w-[10px] rounded-[2px]",
                    cell.level !== null ? levelClasses[cell.level] : "bg-transparent",
                  )}
                />
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-4 flex items-center justify-end gap-1.5 text-xs text-ink-faint">
        Less
        {[0, 1, 2, 3, 4].map((level) => (
          <div key={level} className={cn("h-[10px] w-[10px] rounded-[2px]", levelClasses[level])} />
        ))}
        More
      </div>
    </div>
  );
}
