const githubUsername = "tech-dipesh";

export interface PinnedRepo {
  name: string;
  description: string;
  language: string;
  languageColor: string;
  stars: number;
  url: string;
}

export interface ContributionDay {
  date: string;
  level: number;
}

export async function getPinnedRepos(): Promise<PinnedRepo[]> {
  try {
    const response = await fetch(`https://github.com/${githubUsername}`, {
      next: { revalidate: 21600 },
    });
    if (!response.ok) return [];

    const html = await response.text();
    const blocks = html.split("pinned-item-list-item js-pinned-item-list-item").slice(1);

    return blocks.slice(0, 2).map((block): PinnedRepo => {
      const nameMatch = block.match(/<span class="repo">([^<]+)<\/span>/);
      const descMatch = block.match(/pinned-item-desc[^>]*>\s*([\s\S]*?)\s*<\/p>/);
      const languageMatch = block.match(/itemprop="programmingLanguage">([^<]+)/);
      const colorMatch = block.match(/repo-language-color" style="background-color: (#[0-9a-fA-F]{6})"/);
      const starsMatch = block.match(/octicon-star[\s\S]*?<\/svg>\s*([\d,]+)\s*<\/a>/);

      return {
        name: nameMatch?.[1]?.trim() ?? "",
        description: descMatch?.[1]?.replace(/\s+/g, " ").trim() ?? "",
        language: languageMatch?.[1]?.trim() ?? "",
        languageColor: colorMatch?.[1] ?? "#8b5cf6",
        stars: Number((starsMatch?.[1] ?? "0").replace(/,/g, "")),
        url: `https://github.com/${githubUsername}/${nameMatch?.[1]?.trim() ?? ""}`,
      };
    });
  } catch {
    return [];
  }
}

export async function getContributionCalendar(): Promise<ContributionDay[]> {
  try {
    const response = await fetch(`https://github.com/users/${githubUsername}/contributions`, {
      next: { revalidate: 21600 },
    });
    if (!response.ok) return [];

    const html = await response.text();
    const cellPattern = /data-date="(\d{4}-\d{2}-\d{2})"[^>]*data-level="(\d)"/g;
    const days: ContributionDay[] = [];

    for (const match of html.matchAll(cellPattern)) {
      const date = match[1];
      const level = match[2];
      if (date && level) {
        days.push({ date, level: Number(level) });
      }
    }

    return days;
  } catch {
    return [];
  }
}
