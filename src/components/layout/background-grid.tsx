export function BackgroundGrid() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 h-full w-full overflow-hidden">
      <div className="mesh-grid absolute inset-0 h-[120vh] w-full" />
      <div className="absolute left-1/2 top-0 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-accent/10 blur-[140px]" />
    </div>
  );
}
