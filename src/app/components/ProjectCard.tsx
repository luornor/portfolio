import { ExternalLink } from "lucide-react";
import type { Project } from "@/app/lib/data";

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  );
}

export function ProjectCard({ p }: { p: Project }) {
  return (
    <div className="rounded-2xl border border-slate-200/80 bg-white/90 p-5 shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:shadow-md">
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="text-lg font-semibold">{p.name}</h3>
            <span className="rounded-full border border-slate-200 px-2 py-0.5 text-xs text-slate-600">
              {p.kind}
            </span>
          </div>
          <p className="mt-1 text-sm text-slate-700">{p.description}</p>
        </div>

        <div className="flex shrink-0 items-center gap-2">
          {p.repo ? (
            <a
              href={p.repo}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-slate-200 p-2 text-slate-700 hover:border-slate-300 hover:bg-slate-50"
              aria-label="GitHub Repo"
            >
              <GitHubIcon className="h-4 w-4" />
            </a>
          ) : null}
          {p.live ? (
            <a
              href={p.live}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-slate-200 p-2 text-slate-700 hover:border-slate-300 hover:bg-slate-50"
              aria-label="Live Demo"
            >
              <ExternalLink className="h-4 w-4" />
            </a>
          ) : null}
        </div>
      </div>

      <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-slate-700">
        {p.highlights.map((h: string) => (
          <li key={h}>{h}</li>
        ))}
      </ul>

      <div className="mt-4 flex flex-wrap gap-2">
        {p.tech.map((t: string) => (
          <span
            key={t}
            className="rounded-full bg-slate-50 px-3 py-1 text-xs text-slate-700 ring-1 ring-slate-200"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}
