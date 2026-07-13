import { calConfig } from "@/config/cal";
import type { CalEventType } from "@/lib/types";

interface CalApiEventType {
  title?: string;
  slug?: string;
  lengthInMinutes?: number;
  length?: number;
  description?: string;
}

interface CalApiResponse {
  data?: CalApiEventType[];
}

export async function getCalEventTypes(): Promise<CalEventType[]> {
  const apiKey = process.env.CAL_API_KEY;
  if (!apiKey) return [];

  try {
    const response = await fetch(
      `https://api.cal.com/v2/event-types?username=${calConfig.username}`,
      {
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "cal-api-version": "2024-06-14",
        },
        next: { revalidate: 3600 },
      },
    );

    console.log("response", response);
    if (!response.ok) return [];

    const payload = (await response.json()) as CalApiResponse;
    const eventTypes = payload.data ?? [];
    
    return eventTypes.map((eventType): CalEventType => ({
      title: eventType.title ?? "Untitled event",
      slug: eventType.slug ?? "",
      lengthMinutes: eventType.lengthInMinutes ?? eventType.length ?? 30,
      description: eventType.description ?? "",
    }));
  } catch {
    return [];
  }
}
