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
import BackgroundGlow from "@/app/components/BackgroundGlow";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Code2,
  Cpu,
  FolderGit2,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  Orbit,
  Sparkles,
} from "lucide-react";

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 .297C5.373.297 0 5.67 0 12.297c0 5.303 3.438 9.8 8.205 11.385.6.112.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.386-1.333-1.755-1.333-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23A11.49 11.49 0 0 1 12 6.844c1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297 24 5.67 18.627.297 12 .297Z" />
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
    <div className="sticky top-0 z-40 px-4 pt-4 sm:px-6">
      <div className="panel mx-auto flex max-w-6xl items-center justify-between rounded-full px-4 py-3 sm:px-5">
        <a href="#top" className="flex items-center gap-3 text-sm text-white">
          <span className="section-kicker rounded-full border-0 bg-transparent p-0 text-[0.68rem]">
            Available
          </span>
          <span className="font-medium tracking-[0.18em] text-slate-200 uppercase">
            {PROFILE.name.split(" ")[0]}
          </span>
        </a>

        <nav className="hidden items-center gap-5 text-sm text-slate-300 lg:flex">
          {items.map(([label, href]) => (
            <a key={href} href={href} className="hover:text-white">
              {label}
            </a>
          ))}
        </nav>

        <a href="#contact" className="link-pill rounded-full px-4 py-2 text-sm">
          Let&apos;s connect
        </a>
      </div>
    </div>
  );
}

function SignalItem({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="data-chip rounded-2xl">
      <p className="eyebrow text-[0.62rem]">{label}</p>
      <p className="mt-2 text-sm font-medium text-white sm:text-base">{value}</p>
    </div>
  );
}

function ArchiveRow({ project }: { project: (typeof PROJECTS)[number] }) {
  return (
    <div className="panel rounded-[1.4rem] px-4 py-4 sm:px-5">
      <div className="relative z-10 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-3xl">
          <div className="flex flex-wrap items-center gap-2">
            <span className="tag">{project.kind}</span>
            <h3 className="text-lg font-semibold text-white">{project.name}</h3>
          </div>
          <p className="muted mt-3 text-sm leading-7">{project.description}</p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          {project.tech.slice(0, 3).map((tech) => (
            <span key={tech} className="tag">
              {tech}
            </span>
          ))}
          {project.repo ? (
            <a
              href={project.repo}
              target="_blank"
              rel="noreferrer"
              className="link-pill rounded-full px-4 py-2 text-sm"
            >
              Code <ArrowUpRight className="h-4 w-4" />
            </a>
          ) : null}
          {project.live ? (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="link-pill rounded-full px-4 py-2 text-sm"
            >
              Live <ArrowUpRight className="h-4 w-4" />
            </a>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default function Page() {
  const featured = PROJECTS.filter((project) => project.featured);
  const archive = PROJECTS.filter((project) => !project.featured);
  const featuredClasses = [
    "lg:col-span-6",
    "lg:col-span-6",
    "lg:col-span-6",
    "lg:col-span-6",
    "lg:col-span-6",
  ];

  return (
    <div id="top" className="relative min-h-screen bg-transparent">
      <BackgroundGlow />
      <Nav />

      <main className="mx-auto max-w-6xl px-4 pb-16 sm:px-6">
        <section className="relative py-12 sm:py-20">
          <div className="grid gap-6 lg:grid-cols-[minmax(0,1.2fr)_380px] xl:grid-cols-[minmax(0,1.3fr)_420px]">
            <div>
              <Reveal>
                <div className="section-kicker rounded-full">
                  Recruiter-ready portfolio system
                </div>
              </Reveal>

              <Reveal delay={0.05}>
                <h1 className="hero-title mt-6 max-w-4xl font-semibold text-white">
                  Building <span className="accent-text">backend-heavy</span>{" "}
                  products with interfaces that still feel sharp, modern, and
                  fast.
                </h1>
              </Reveal>

              <Reveal delay={0.1}>
                <p className="muted mt-6 max-w-2xl text-base leading-8 sm:text-lg">
                  {PROFILE.summary.join(" ")} I focus on reliable engineering,
                  clear product thinking, and shipping work that recruiters can
                  scan quickly.
                </p>
              </Reveal>

              <Reveal delay={0.15}>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href={PROFILE.links.github}
                    target="_blank"
                    rel="noreferrer"
                    className="link-pill rounded-full"
                  >
                    <GitHubIcon className="h-4 w-4" />
                    GitHub
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                  <a
                    href={PROFILE.links.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="link-pill rounded-full"
                  >
                    <Linkedin className="h-4 w-4" />
                    LinkedIn
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                  <a
                    href={PROFILE.links.leetcode}
                    target="_blank"
                    rel="noreferrer"
                    className="link-pill rounded-full"
                  >
                    <Code2 className="h-4 w-4" />
                    LeetCode
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                  <a
                    href="#contact"
                    className="link-pill primary-link rounded-full"
                  >
                    <Mail className="h-4 w-4" />
                    Contact me
                  </a>
                </div>
              </Reveal>

              <Reveal delay={0.2}>
                <div className="panel panel-grid mt-10 rounded-[2rem] p-5 sm:p-6">
                  <div className="relative z-10 grid gap-4 lg:grid-cols-[1.3fr_1fr]">
                    <div>
                      <p className="eyebrow text-xs">Current signal</p>
                      <h2 className="mt-3 text-2xl font-semibold text-white sm:text-3xl">
                        Full-stack engineer with a strong API core and a modern
                        front-end finish.
                      </h2>
                      <p className="muted mt-4 max-w-xl text-sm leading-7 sm:text-base">
                        I enjoy building systems that are easy to maintain, fast
                        to use, and safe to scale. The portfolio is arranged to
                        surface both product-facing UI work and backend service
                        depth in one pass.
                      </p>
                    </div>

                    <div className="grid gap-3">
                      <SignalItem label="Location" value={PROFILE.location} />
                      <SignalItem
                        label="Focus"
                        value="Django/DRF, Next.js, product systems"
                      />
                      <SignalItem
                        label="Recent milestone"
                        value="BSc Computer Engineering, Feb 2025"
                      />
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>

            <Reveal delay={0.2}>
              <aside className="panel panel-strong rounded-[2rem] p-5 sm:p-6">
                <div className="relative z-10">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="eyebrow text-xs">Signal snapshot</p>
                      <h2 className="mt-3 text-2xl font-semibold text-white">
                        Engineering profile
                      </h2>
                    </div>
                    <Orbit className="h-8 w-8 text-cyan-300" />
                  </div>

                  <div className="mt-6 space-y-3">
                    <div className="panel-muted rounded-2xl px-4 py-4">
                      <p className="eyebrow text-[0.62rem]">Role fit</p>
                      <p className="mt-2 text-sm leading-7 text-slate-200">
                        Software engineering roles where backend reliability and
                        frontend polish both matter.
                      </p>
                    </div>
                    <div className="panel-muted rounded-2xl px-4 py-4">
                      <p className="eyebrow text-[0.62rem]">Strengths</p>
                      <p className="mt-2 text-sm leading-7 text-slate-200">
                        API design, maintainable React interfaces, structured
                        thinking, and product-focused delivery.
                      </p>
                    </div>
                    <div className="panel-muted rounded-2xl px-4 py-4">
                      <p className="eyebrow text-[0.62rem]">Contact</p>
                      <a
                        href={`mailto:${PROFILE.email}`}
                        className="mt-2 inline-flex text-sm text-cyan-200 hover:text-white"
                      >
                        {PROFILE.email}
                      </a>
                    </div>
                  </div>

                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    <div className="data-chip rounded-2xl">
                      <MapPin className="h-4 w-4 text-cyan-300" />
                      <p className="mt-3 text-sm text-white">{PROFILE.location}</p>
                    </div>
                    <div className="data-chip rounded-2xl">
                      <Sparkles className="h-4 w-4 text-cyan-300" />
                      <p className="mt-3 text-sm text-white">
                        Open to modern product teams
                      </p>
                    </div>
                  </div>
                </div>
              </aside>
            </Reveal>
          </div>
        </section>

        <Section
          id="about"
          eyebrow="Profile"
          title="How I approach building software."
          description="A quick look at how I think about engineering, product quality, and building software that stays useful beyond the first release."
        >
          <div className="grid gap-4 lg:grid-cols-3">
            {[
              {
                icon: Cpu,
                title: "Backend-first thinking",
                copy:
                  "I enjoy designing APIs and service logic that stay readable, reliable, and ready for change.",
              },
              {
                icon: FolderGit2,
                title: "Readable product delivery",
                copy:
                  "I translate engineering work into interfaces and project stories that are easy for teams and recruiters to understand.",
              },
              {
                icon: BriefcaseBusiness,
                title: "Built for hiring screens",
                copy:
                  "Projects, experience, and contact signals are arranged to make strengths visible within seconds.",
              },
            ].map(({ icon: Icon, title, copy }, index) => (
              <Reveal key={title} delay={index * 0.05}>
                <div className="panel rounded-[1.6rem] p-5 sm:p-6">
                  <div className="relative z-10">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-300/8">
                      <Icon className="h-5 w-5 text-cyan-200" />
                    </div>
                    <h3 className="mt-5 text-xl font-semibold text-white">
                      {title}
                    </h3>
                    <p className="muted mt-3 text-sm leading-7 sm:text-base">
                      {copy}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Section>

        <Section
          id="projects"
          eyebrow="Selected work"
          title="Selected projects and product work."
          description="A selection of projects that reflect the kind of work I enjoy most, from product-facing interfaces to backend services and full-stack systems."
          right={
            <a
              href={PROFILE.links.github}
              target="_blank"
              rel="noreferrer"
              className="link-pill w-fit rounded-full px-4 py-2 text-sm"
            >
              View GitHub <ArrowUpRight className="h-4 w-4" />
            </a>
          }
        >
          <div className="grid gap-4 lg:grid-cols-12">
            {featured.map((project, index) => (
              <Reveal
                key={project.name}
                delay={index * 0.05}
                className={featuredClasses[index] ?? "lg:col-span-6"}
              >
                <ProjectCard p={project} variant="default" />
              </Reveal>
            ))}
          </div>

          <div className="mt-10">
            <Reveal>
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="eyebrow text-xs">Archive</p>
                  <h3 className="mt-2 text-2xl font-semibold text-white">
                    More projects
                  </h3>
                </div>
              </div>
            </Reveal>

            <div className="mt-5 grid gap-4">
              {archive.map((project, index) => (
                <Reveal key={project.name} delay={index * 0.04}>
                  <ArchiveRow project={project} />
                </Reveal>
              ))}
            </div>
          </div>
        </Section>

        <Section
          id="experience"
          eyebrow="Trajectory"
          title="Experience across engineering and mentorship."
          description="A look through the roles and experiences that shaped how I build, collaborate, and solve problems across teams."
        >
          <div className="grid gap-6 lg:grid-cols-[0.85fr_minmax(0,1fr)]">
            <Reveal>
              <div className="panel panel-strong rounded-[2rem] p-5 sm:p-6 lg:sticky lg:top-28">
                <div className="relative z-10">
                  <p className="eyebrow text-xs">What teams get</p>
                  <h3 className="mt-3 text-2xl font-semibold text-white">
                    Product-minded engineering with strong technical fundamentals.
                  </h3>
                  <p className="muted mt-4 text-sm leading-7 sm:text-base">
                    My experience spans frontend delivery, API work, and
                    technical mentorship. That combination helps me build
                    systems that are both practical to ship and easy for others
                    to work with.
                  </p>

                  <div className="mt-6 grid gap-3">
                    <div className="data-chip rounded-2xl">
                      <p className="eyebrow text-[0.62rem]">Frontend delivery</p>
                      <p className="mt-2 text-sm text-white">
                        Next.js interfaces with reusable component systems.
                      </p>
                    </div>
                    <div className="data-chip rounded-2xl">
                      <p className="eyebrow text-[0.62rem]">Backend depth</p>
                      <p className="mt-2 text-sm text-white">
                        Django services, validation, and maintainable API logic.
                      </p>
                    </div>
                    <div className="data-chip rounded-2xl">
                      <p className="eyebrow text-[0.62rem]">Collaboration</p>
                      <p className="mt-2 text-sm text-white">
                        Teaching, mentoring, and working within larger teams.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            <div className="timeline-line space-y-5 pl-8">
              {EXPERIENCE.map((item, index) => (
                <Reveal key={`${item.company}-${item.role}`} delay={index * 0.06}>
                  <article className="timeline-card panel rounded-[1.7rem] p-5 sm:p-6">
                    <span className="timeline-dot" />
                    <div className="relative z-10">
                      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                        <div>
                          <p className="text-xl font-semibold text-white">
                            {item.role}
                          </p>
                          <p className="muted mt-2 text-sm leading-7">
                            {item.company} - {item.location}
                          </p>
                        </div>
                        <span className="tag w-fit">{item.dates}</span>
                      </div>

                      <div className="mt-5 grid gap-3">
                        {item.bullets.map((bullet) => (
                          <div
                            key={bullet}
                            className="panel-muted rounded-2xl px-4 py-3 text-sm leading-7 text-slate-200"
                          >
                            {bullet}
                          </div>
                        ))}
                      </div>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </Section>

        <Section
          id="skills"
          eyebrow="Stack"
          title="Core technologies I work with."
          description="The tools and technologies I reach for most often when building modern web products."
        >
          <div className="grid gap-4 lg:grid-cols-3">
            {[
              ["Languages", SKILLS.languages],
              ["Frameworks", SKILLS.frameworks],
              ["Tools", SKILLS.tooling],
            ].map(([label, values], index) => (
              <Reveal key={label as string} delay={index * 0.05}>
                <div className="panel rounded-[1.6rem] p-5 sm:p-6">
                  <div className="relative z-10">
                    <p className="eyebrow text-xs">{label as string}</p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {(values as string[]).map((value) => (
                        <span key={value} className="tag">
                          {value}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Section>

        <Section
          id="education"
          eyebrow="Education"
          title="Education and recognition."
          description="My academic background, awards, and the foundation that supports the practical work shown above."
        >
          <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_0.9fr]">
            {EDUCATION.map((item, index) => (
              <Reveal key={item.school} delay={index * 0.05}>
                <div className="panel rounded-[1.8rem] p-5 sm:p-6">
                  <div className="relative z-10">
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <div className="flex items-center gap-3">
                          <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-300/8">
                            <GraduationCap className="h-5 w-5 text-cyan-200" />
                          </div>
                          <div>
                            <p className="text-xl font-semibold text-white">
                              {item.school}
                            </p>
                            <p className="muted mt-1 text-sm">{item.degree}</p>
                          </div>
                        </div>
                      </div>
                      <span className="tag w-fit">{item.dates}</span>
                    </div>

                    <div className="mt-5 grid gap-3">
                      {item.notes.map((note) => (
                        <div
                          key={note}
                          className="panel-muted rounded-2xl px-4 py-3 text-sm leading-7 text-slate-200"
                        >
                          {note}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}

            <Reveal delay={0.08}>
              <div className="panel panel-strong rounded-[1.8rem] p-5 sm:p-6">
                <div className="relative z-10">
                  <p className="eyebrow text-xs">Why it matters</p>
                  <h3 className="mt-3 text-2xl font-semibold text-white">
                    Strong fundamentals behind the product work.
                  </h3>
                  <p className="muted mt-4 text-sm leading-7 sm:text-base">
                    The academic results reinforce the practical work shown
                    above: disciplined problem-solving, strong systems
                    understanding, and follow-through on complex builds.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </Section>

        <Section
          id="contact"
          eyebrow="Contact"
          title="Let's connect."
          description="If you'd like to talk about a role, project, or collaboration, these are the best ways to reach me."
        >
          <Reveal>
            <div className="panel panel-strong rounded-[2rem] p-5 sm:p-7">
              <div className="relative z-10 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                <div className="max-w-2xl">
                  <p className="eyebrow text-xs">Open to opportunities</p>
                  <h3 className="mt-3 text-2xl font-semibold text-white sm:text-3xl">
                    Looking for a backend or full-stack engineer who can ship
                    clean systems and clean presentation.
                  </h3>
                  <p className="muted mt-4 text-sm leading-7 sm:text-base">
                    Reach out for software engineering roles, collaborations, or
                    conversations about product-focused engineering.
                  </p>
                </div>

                <div className="flex flex-wrap gap-3">
                  <a
                    href={`mailto:${PROFILE.email}`}
                    className="link-pill primary-link rounded-full"
                  >
                    <Mail className="h-4 w-4" />
                    Email me
                  </a>
                  <a
                    href={PROFILE.links.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="link-pill rounded-full"
                  >
                    <Linkedin className="h-4 w-4" />
                    LinkedIn
                  </a>
                  <a
                    href={PROFILE.resume}
                    target="_blank"
                    rel="noreferrer"
                    className="link-pill rounded-full"
                  >
                    Resume
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </Section>

        <footer className="py-10 text-center text-xs uppercase tracking-[0.24em] text-slate-500">
          {new Date().getFullYear()} {PROFILE.name} - Built with Next.js
        </footer>
      </main>
    </div>
  );
}
