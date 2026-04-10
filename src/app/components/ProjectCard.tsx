import { ExternalLink, Github, MoveUpRight } from "lucide-react";
import type { Project } from "@/app/lib/data";

type ProjectCardVariant = "hero" | "default" | "compact";

export function ProjectCard({
  p,
  variant = "default",
}: {
  p: Project;
  variant?: ProjectCardVariant;
}) {
  const isHero = variant === "hero";
  const isCompact = variant === "compact";

  return (
    <article
      className={[
        "project-frame panel scanline h-full rounded-[1.75rem] p-5 sm:p-6",
        isHero ? "panel-strong" : "",
      ].join(" ")}
    >
      <div className="relative z-10 flex h-full flex-col">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div className="max-w-xl">
            <div className="flex flex-wrap items-center gap-2">
              <span className="tag">{p.kind}</span>
              <span className="eyebrow text-[0.68rem]">
                {isHero ? "Featured project" : "Selected project"}
              </span>
            </div>
            <h3
              className={[
                "mt-4 font-semibold text-white",
                isHero ? "text-2xl sm:text-[2rem]" : "text-xl",
              ].join(" ")}
            >
              {p.name}
            </h3>
            <p
              className={[
                "muted mt-3 leading-7",
                isCompact ? "text-sm" : "text-sm sm:text-base",
              ].join(" ")}
            >
              {p.description}
            </p>
          </div>

          <div className="flex shrink-0 items-center gap-2">
            {p.repo ? (
              <a
                href={p.repo}
                target="_blank"
                rel="noreferrer"
                className="link-pill rounded-2xl p-3"
                aria-label={`${p.name} GitHub repository`}
              >
                <Github className="h-4 w-4" />
              </a>
            ) : null}
            {p.live ? (
              <a
                href={p.live}
                target="_blank"
                rel="noreferrer"
                className="link-pill rounded-2xl p-3"
                aria-label={`${p.name} live demo`}
              >
                <ExternalLink className="h-4 w-4" />
              </a>
            ) : null}
          </div>
        </div>

        <div
          className={[
            "mt-6 grid gap-3",
            isHero ? "sm:grid-cols-3" : "sm:grid-cols-1",
          ].join(" ")}
        >
          {p.highlights.map((highlight) => (
            <div
              key={highlight}
              className="panel-muted rounded-2xl px-4 py-3 text-sm leading-6 text-slate-200"
            >
              {highlight}
            </div>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {p.tech.map((tech) => (
            <span key={tech} className="tag">
              {tech}
            </span>
          ))}
        </div>

        {p.repo || p.live ? (
          <div className="mt-6 flex items-center gap-4 text-sm text-slate-300">
            {p.repo ? (
              <a
                href={p.repo}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 hover:text-white"
              >
                Review code <MoveUpRight className="h-4 w-4" />
              </a>
            ) : null}
            {p.live ? (
              <a
                href={p.live}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 hover:text-white"
              >
                Open live preview <MoveUpRight className="h-4 w-4" />
              </a>
            ) : null}
          </div>
        ) : null}
      </div>
    </article>
  );
}
