import { Youtube } from "lucide-react";
import { extractYouTubeId } from "@/lib/utils";

export function ProjectVideo({ videoUrl, name }: { videoUrl?: string; name: string }) {
  const videoId = videoUrl ? extractYouTubeId(videoUrl) : null;

  if (!videoId) {
    return (
      <div className="mx-auto flex aspect-video w-full max-w-xl flex-col items-center justify-center gap-2 rounded-2xl border border-dashed border-border bg-surface/40 text-center">
        <Youtube className="h-6 w-6 text-ink-faint" />
        <p className="text-sm text-ink-faint">Video walkthrough coming soon</p>
      </div>
    );
  }

  return (
    <div className="mx-auto aspect-video w-full max-w-xl overflow-hidden rounded-2xl border border-border shadow-lifted">
      <iframe
        className="h-full w-full"
        src={`https://www.youtube-nocookie.com/embed/${videoId}`}
        title={`${name} walkthrough video`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
}
