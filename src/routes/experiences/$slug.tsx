import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { getProject, PROJECTS } from "@/lib/projects";

export const Route = createFileRoute("/experiences/$slug")({
  head: ({ params }) => {
    const project = getProject(params.slug);
    const title = project
      ? `${project.title} — Yash Gupta`
      : "Project — Yash Gupta";
    const description = project
      ? `${project.title}: ${project.subtitle}. ${project.description}`
      : "Project case study from Yash Gupta's portfolio.";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  loader: ({ params }) => {
    const project = getProject(params.slug);
    if (!project) throw notFound();
    return { project };
  },
  component: ProjectDetail,
});

function NavBar() {
  return (
    <nav className="w-full border-b border-border bg-paper text-ink">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-8 gap-y-2 px-6 py-4">
        <Link
          to="/"
          className="font-hand text-2xl transition-transform duration-200 hover:-translate-y-0.5 hover:-rotate-3"
        >
          ← Back to Portfolio
        </Link>
        <Link
          to="/#experiences"
          className="font-hand text-2xl transition-transform duration-200 hover:-translate-y-0.5 hover:rotate-3"
        >
          Experiences
        </Link>
      </div>
    </nav>
  );
}

function PdfViewer({ url, label }: { url: string; label: string }) {
  return (
    <div className="mt-10">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <h3 className="font-display text-2xl font-semibold text-ink">
          Project Artifacts
        </h3>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="font-hand inline-block border-2 border-ink px-6 py-2 text-2xl transition-colors hover:bg-ink hover:text-paper"
        >
          View Full Presentation ↗
        </a>
      </div>
      <p className="font-body mt-2 text-sm text-muted-foreground">
        {label}
      </p>
      <div className="mt-4 overflow-hidden rounded-lg border-2 border-ink shadow-xl">
        <iframe
          src={`${url}#view=FitH`}
          title={label}
          className="h-[80vh] min-h-[600px] w-full bg-paper"
          loading="lazy"
        />
      </div>
      <p className="font-body mt-3 text-center text-sm text-muted-foreground">
        Scroll within the frame above to read the full presentation, or open it
        in a new tab for a larger view.
      </p>
    </div>
  );
}

function ProjectDetail() {
  const { project } = Route.useLoaderData();
  const next =
    PROJECTS[(PROJECTS.findIndex((p) => p.slug === project.slug) + 1) %
      PROJECTS.length];

  return (
    <main className="min-h-screen bg-paper text-ink">
      <NavBar />

      {/* Header */}
      <header className="grain border-b border-border bg-paper py-20">
        <div className="mx-auto max-w-5xl px-6">
          <span className="font-body text-[0.65rem] tracking-[0.5em] text-muted-foreground uppercase">
            Experiences & Projects
          </span>
          <div className="mt-4 flex items-baseline gap-6">
            <span className="font-display text-7xl font-bold leading-none text-ink/15 md:text-8xl">
              {project.number}
            </span>
            <div>
              <h1 className="font-display text-5xl font-bold tracking-tight md:text-6xl">
                {project.title}
              </h1>
              <p className="font-hand mt-2 text-2xl text-muted-foreground">
                {project.subtitle}
              </p>
            </div>
          </div>
          <span
            aria-hidden="true"
            className="mt-6 block h-[3px] w-24 -rotate-1 rounded-full bg-accent-warm"
          />
          <div className="mt-6 flex flex-wrap gap-3">
            <span className="font-body border-2 border-ink px-4 py-1.5 text-sm uppercase tracking-widest">
              My Role
            </span>
            <span className="font-display border-2 border-ink bg-ink px-4 py-1.5 text-sm uppercase tracking-widest text-paper">
              {project.role}
            </span>
          </div>
        </div>
      </header>

      {/* Body */}
      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <h2 className="font-hand text-4xl">Overview</h2>
            <span
              aria-hidden="true"
              className="mt-2 block h-[2px] w-12 -rotate-1 rounded-full bg-accent-warm"
            />
            <p className="font-body mt-4 text-lg leading-relaxed text-muted-foreground">
              {project.overview}
            </p>
          </div>
          <div>
            <h2 className="font-hand text-4xl">What I Contributed</h2>
            <span
              aria-hidden="true"
              className="mt-2 block h-[2px] w-12 -rotate-1 rounded-full bg-accent-warm"
            />
            <p className="font-body mt-4 text-lg leading-relaxed text-muted-foreground">
              {project.contribution}
            </p>
          </div>
        </div>

        {/* Skills */}
        <div className="mt-14">
          <h2 className="font-hand text-4xl">Skills Developed</h2>
          <span
            aria-hidden="true"
            className="mt-2 block h-[2px] w-12 -rotate-1 rounded-full bg-accent-warm"
          />
          <div className="mt-5 flex flex-wrap gap-3">
            {project.skills.map((skill) => (
              <span
                key={skill}
                className="font-body border border-ink/30 bg-paper px-4 py-2 text-base"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* PDF viewer / artifacts */}
        <PdfViewer url={project.pdfUrl} label={project.pdfLabel} />
      </section>

      {/* Footer nav */}
      <footer className="grain border-t border-border bg-paper py-14">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 px-6 text-center">
          <Link
            to="/experiences/$slug"
            params={{ slug: next.slug }}
            className="group"
          >
            <span className="font-body text-[0.65rem] tracking-[0.5em] text-muted-foreground uppercase">
              Next Project
            </span>
            <span className="font-hand mt-1 block text-4xl transition-transform group-hover:-translate-y-0.5">
              {next.number} — {next.title} →
            </span>
          </Link>
          <Link
            to="/#experiences"
            className="font-hand inline-block border-2 border-ink px-8 py-2 text-2xl transition-colors hover:bg-ink hover:text-paper"
          >
            Back to Experiences
          </Link>
        </div>
      </footer>
    </main>
  );
}
