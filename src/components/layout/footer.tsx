import Link from "next/link";
import { Github, Linkedin, Twitter, Code, Swords } from "lucide-react";
import { footerRoutes } from "@/config/nav";
import { siteConfig } from "@/config/site";
import { Icon } from "@/components/ui/icon";

const footerSocials = [
  { label: "GitHub", href: siteConfig.github, icon: Github },
  { label: "LinkedIn", href: siteConfig.linkedin, icon: Linkedin },
  { label: "Twitter", href: siteConfig.twitter, icon: Twitter },
  { label: "LeetCode", href: siteConfig.leetcode, icon: Code },
  { label: "Codeforces", href: siteConfig.codeforces, icon: Swords },
];

export function Footer() {
  return (
    <footer className="container mt-24 border-t border-border py-10">
      <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
        <p className="text-sm text-ink-faint">© {new Date().getFullYear()} {siteConfig.name}</p>

        <div className="flex items-center gap-1">
          {footerRoutes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className="flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm text-ink-muted transition-colors hover:text-ink"
            >
              <Icon name={route.icon} className="h-3.5 w-3.5" />
              {route.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-1">
          {footerSocials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              aria-label={social.label}
              className="flex h-9 w-9 items-center justify-center rounded-full text-ink-faint transition-colors hover:bg-raised hover:text-ink"
            >
              <social.icon className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
