
import { CalendarClock, ArrowUpRight, Video } from "lucide-react";
import { getCalEventTypes } from "@/lib/cal";
import { calConfig } from "@/config/cal";

export default async function ScheduleCall() {
  const eventTypes = await getCalEventTypes();
  return (
    <section id="schedule" className="container mt-32 scroll-mt-28">
      <div className="max-w-xl">
        <p className="text-xs font-medium uppercase tracking-widest text-ink-faint">Let&apos;s talk</p>
        <h2 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">Schedule a call.</h2>
        <p className="mt-3 text-ink-muted">
          Pick whatever fits best — a quick intro or a longer technical conversation.
        </p>
      </div>

      {eventTypes.length > 0 ? (
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {eventTypes.map((eventType) => (
            <a
              key={eventType.slug}
              href={`${calConfig.bookingUrl}/${eventType.slug}`}
              target="_blank"
              rel="noreferrer"
              className="group flex flex-col rounded-2xl border border-border bg-surface/60 p-5 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-border-strong hover:shadow-glow"
            >
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-1.5 rounded-full border border-accent/25 bg-accent/10 px-2.5 py-1 text-xs text-accent-soft">
                  <CalendarClock className="h-3 w-3" />
                  {eventType.lengthMinutes}m
                </span>
                <ArrowUpRight className="h-4 w-4 text-ink-faint transition-transform duration-300 group-hover:rotate-45 group-hover:text-accent-soft" />
              </div>
              <h3 className="mt-4 text-sm font-semibold text-ink">{eventType.title}</h3>
              {eventType.description ? (
                <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-ink-muted">
                  {eventType.description}
                </p>
              ) : null}
              <div className="mt-4 flex items-center gap-1.5 text-xs text-ink-faint">
                <Video className="h-3 w-3" />
                Google Meet
              </div>
            </a>
          ))}
        </div>
      ) : (
        <div className="mt-8 flex flex-col items-center gap-3 rounded-2xl border border-dashed border-border p-10 text-center">
          <CalendarClock className="h-6 w-6 text-accent" />
          <p className="text-sm text-ink-muted">
            Event types aren&apos;t loaded right now, but you can still book directly.
          </p>
          <a
            href={calConfig.bookingUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-1 inline-flex items-center gap-1.5 rounded-xl bg-accent px-4 py-2 text-sm font-medium text-base transition-all duration-300 hover:-translate-y-0.5 hover:shadow-glow"
          >
            Book on Cal.com
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>
      )}
    </section>
  );
}