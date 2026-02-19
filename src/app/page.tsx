import {
  PROFILE,
  SKILLS,
  EXPERIENCE,
  PROJECTS,
  EDUCATION,
} from "@/app/lib/data";
import { Section } from "@/app/components/Section";
import { Reveal } from "@/app/components/Reveal";
import { ProjectCard } from "@/app/components/ProjectCard";
import { ArrowUpRight, Code2, Mail } from "lucide-react";
import BackgroundGlow from "@/app/components/BackgroundGlow";

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  );
}

function Nav() {
  const items = [
    ["About", "#about"],
    ["Projects", "#projects"],
    ["Experience", "#experience"],
    ["Skills", "#skills"],
    ["Education", "#education"],
    ["Contact", "#contact"],
  ] as const;

  return (
    <div className="sticky top-0 z-40 border-b border-slate-200/70 bg-white/70 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-3">
        <a href="#" className="font-semibold tracking-tight text-(--ink)">
          {PROFILE.name.split(" ")[0]}
          <span className="text-(--accent)">.</span>
        </a>
        <nav className="hidden gap-5 text-sm text-slate-700 md:flex">
          {items.map(([label, href]) => (
            <a key={href} href={href} className="hover:text-(--ink)">
              {label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="rounded-xl bg-(--ink) px-3 py-2 text-sm text-white hover:opacity-95"
        >
          Let’s talk
        </a>
      </div>
    </div>
  );
}

export default function Page() {
  const featured = PROJECTS.filter((p) => p.featured);
  const others = PROJECTS.filter((p) => !p.featured);

  return (
    <div className="min-h-screen bg-transparent">
      <BackgroundGlow />
      <Nav />

      <main className="mx-auto max-w-5xl px-5">
        {/* HERO */}
        <section className="py-16">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200/80 bg-white/80 px-3 py-1 text-sm text-slate-700 backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-(--accent)" />
              Open to software engineering opportunities
            </div>
          </Reveal>

          <Reveal delay={0.05}>
            <h1 className="mt-5 text-4xl font-semibold tracking-tight text-(--ink) sm:text-5xl">
              Building reliable <span className="text-(--accent)">APIs</span>,
              clean <span className="text-(--accent)">UIs</span>, and
              production-ready systems.
            </h1>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-700">
              {PROFILE.summary.join(" ")}
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <a
                href={PROFILE.links.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-200 px-4 py-2 text-sm text-slate-800 hover:bg-slate-50"
              >
                <GitHubIcon className="h-4 w-4" /> GitHub{" "}
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <a
                href={PROFILE.links.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-200 px-4 py-2 text-sm text-slate-800 hover:bg-slate-50"
              >
                <LinkedInIcon className="h-4 w-4" /> LinkedIn{" "}
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <a
                href={PROFILE.links.leetcode}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-200 px-4 py-2 text-sm text-slate-800 hover:bg-slate-50"
              >
                <Code2 className="h-4 w-4" /> LeetCode{" "}
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-xl bg-(--accent) px-4 py-2 text-sm text-white hover:opacity-95"
              >
                <Mail className="h-4 w-4" /> Contact
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-8 grid gap-4 rounded-2xl border border-slate-200/80 bg-white/90 p-5 shadow-sm backdrop-blur sm:grid-cols-3">
              <div>
                <p className="text-sm text-slate-500">Location</p>
                <p className="font-medium">{PROFILE.location}</p>
              </div>
              <div>
                <p className="text-sm text-slate-500">Email</p>
                <p className="font-medium">{PROFILE.email}</p>
              </div>
              <div>
                <p className="text-sm text-slate-500">Focus</p>
                <p className="font-medium">
                  Backend • Full-stack • React/Next.js
                </p>
              </div>
            </div>
          </Reveal>
        </section>

        {/* ABOUT */}
        <Section id="about" title="About">
          <Reveal>
            <div className="rounded-2xl border border-slate-200/80 bg-white/90 p-5 shadow-sm backdrop-blur">
              <p className="text-slate-700 leading-relaxed">
                I’m {PROFILE.name}, a software engineer with experience across
                full-stack delivery: Django/DRF APIs, background jobs (Celery),
                Dockerized deployments, and React/Next.js UIs. I enjoy building
                systems that are easy to maintain, fast to use, and safe to
                scale.
              </p>
            </div>
          </Reveal>
        </Section>

        {/* PROJECTS */}
        <Section
          id="projects"
          title="Projects"
          right={
            <a
              href={PROFILE.links.github}
              target="_blank"
              rel="noreferrer"
              className="text-sm text-slate-700 hover:text-(--ink)"
            >
              View GitHub <ArrowUpRight className="inline h-4 w-4" />
            </a>
          }
        >
          <div className="grid gap-4 md:grid-cols-2">
            {featured.map((p, i) => (
              <Reveal key={p.name} delay={i * 0.05}>
                <ProjectCard p={p} />
              </Reveal>
            ))}
          </div>

          <div className="mt-8">
            <Reveal>
              <h3 className="text-lg font-semibold">More work</h3>
            </Reveal>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              {others.map((p, i) => (
                <Reveal key={p.name} delay={i * 0.03}>
                  <ProjectCard p={p} />
                </Reveal>
              ))}
            </div>
          </div>
        </Section>

        {/* EXPERIENCE */}
        <Section id="experience" title="Experience">
          <div className="grid gap-4">
            {EXPERIENCE.map((e, i) => (
              <Reveal key={e.company + e.role} delay={i * 0.05}>
                <div className="rounded-2xl border border-slate-200/80 bg-white/90 p-5 shadow-sm backdrop-blur">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <div>
                      <p className="text-base font-semibold">{e.role}</p>
                      <p className="text-sm text-slate-600">
                        {e.company} • {e.location}
                      </p>
                    </div>
                    <p className="text-sm text-slate-500">{e.dates}</p>
                  </div>
                  <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-700">
                    {e.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </Section>

        {/* SKILLS */}
        <Section id="skills" title="Skills">
          <Reveal>
            <div className="grid gap-4 rounded-2xl border border-slate-200/80 bg-white/90 p-5 shadow-sm backdrop-blur md:grid-cols-3">
              <div>
                <p className="text-sm font-semibold text-slate-700">
                  Languages
                </p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {SKILLS.languages.map((s) => (
                    <span
                      key={s}
                      className="rounded-full bg-slate-50 px-3 py-1 text-xs ring-1 ring-slate-200"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-700">
                  Frameworks
                </p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {SKILLS.frameworks.map((s) => (
                    <span
                      key={s}
                      className="rounded-full bg-slate-50 px-3 py-1 text-xs ring-1 ring-slate-200"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-700">Tools</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {SKILLS.tooling.map((s) => (
                    <span
                      key={s}
                      className="rounded-full bg-slate-50 px-3 py-1 text-xs ring-1 ring-slate-200"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </Section>

        {/* EDUCATION */}
        <Section id="education" title="Education">
          <div className="grid gap-4">
            {EDUCATION.map((ed, i) => (
              <Reveal key={ed.school} delay={i * 0.05}>
                <div className="rounded-2xl border border-slate-200/80 bg-white/90 p-5 shadow-sm backdrop-blur">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <div>
                      <p className="text-base font-semibold">{ed.school}</p>
                      <p className="text-sm text-slate-600">{ed.degree}</p>
                    </div>
                    <p className="text-sm text-slate-500">{ed.dates}</p>
                  </div>
                  <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-700">
                    {ed.notes.map((n) => (
                      <li key={n}>{n}</li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </Section>

        {/* CONTACT */}
        <Section id="contact" title="Contact">
          <Reveal>
            <div className="rounded-2xl border border-slate-200/80 bg-white/90 p-5 shadow-sm backdrop-blur">
              <p className="text-slate-700">
                Want to build something together or chat about an opportunity?
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <a
                  href={`mailto:${PROFILE.email}`}
                  className="rounded-xl bg-(--accent) px-4 py-2 text-sm text-white hover:opacity-95"
                >
                  Email me
                </a>
                <a
                  href={PROFILE.links.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-xl border border-slate-200 px-4 py-2 text-sm text-slate-800 hover:bg-slate-50"
                >
                  LinkedIn <ArrowUpRight className="inline h-4 w-4" />
                </a>
              <a
                href={PROFILE.resume}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-(--ink) px-4 py-2 text-sm text-white hover:opacity-95"
              >
                Resume <ArrowUpRight className="h-4 w-4" />
              </a>
              </div>
            </div>
          </Reveal>
        </Section>

        <footer className="py-10 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} {PROFILE.name}. Built with Next.js.
        </footer>
      </main>
    </div>
  );
}
