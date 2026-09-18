import { getPinnedRepos, getContributionCalendar } from "@/lib/github";
import { futureSkills } from "@/config/skills";
import { siteConfig } from "@/config/site";

export const revalidate = 21600;

function computeStreak(days: { date: string; level: number }[]): number {
  const sorted = [...days].sort((a, b) => b.date.localeCompare(a.date));
  let streak = 0;
  for (const day of sorted) {
    if (day.level > 0) {
      streak += 1;
    } else {
      break;
    }
  }
  return streak;
}

export async function GET() {
  const [pinnedRepos, contributions] = await Promise.all([
    getPinnedRepos(),
    getContributionCalendar(),
  ]);

  const activeLast30 = contributions.slice(-30).filter((day) => day.level > 0).length;

  const payload = {
    name: siteConfig.name,
    role: "Backend-focused full-stack developer",
    status: "open_to_internships",
    message: "hey, you found the API. nice.",
    location: "Chandigarh, India",
    currentlyBuilding: "Yeti Jobs — a production job portal, PERN stack",
    currentlyLearning: futureSkills,
    links: {
      portfolio: siteConfig.url,
      github: siteConfig.github,
      linkedin: siteConfig.linkedin,
      leetcode: siteConfig.leetcode,
      codeforces: siteConfig.codeforces,
    },
    githubActivity: {
      activeDaysLast30: activeLast30,
      currentStreak: computeStreak(contributions),
      pinnedRepos: pinnedRepos.map((repo) => ({
        name: repo.name,
        language: repo.language,
        stars: repo.stars,
        url: repo.url,
      })),
    },
    meta: {
      generatedAt: new Date().toISOString(),
      source: "https://github.com/tech-dipesh",
    },
  };

  return new Response(JSON.stringify(payload, null, 2), {
    headers: { "content-type": "application/json" },
  });
}
