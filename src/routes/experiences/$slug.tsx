import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { getProject, PROJECTS, type Project } from "@/lib/projects";

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
  loader: ({ params }): { project: Project } => {
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
        <a
          href="/#experiences"
          className="font-hand text-2xl transition-transform duration-200 hover:-translate-y-0.5 hover:rotate-3"
        >
          Experiences
        </a>
      </div>
    </nav>
  );
}

function Artifacts({
  presentations,
  fallbackUrl,
  fallbackLabel,
  previewUrl,
}: {
  presentations?: Array<{ label: string; url: string; previewUrl: string }>;
  fallbackUrl: string;
  fallbackLabel: string;
  previewUrl: string;
}) {
  const files = presentations?.length
    ? presentations
    : [{ label: fallbackLabel, url: fallbackUrl, previewUrl }];

  return (
    <div className="mt-10">
      <h3 className="font-display text-2xl font-semibold text-ink">
        Project Artifacts
      </h3>
      <span
        aria-hidden="true"
        className="mt-2 block h-[2px] w-12 -rotate-1 rounded-full bg-accent-warm"
      />

      <div className="mt-5 grid gap-10">
        {files.map((file) => (
          <div
            key={file.url}
            className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center"
          >
            <figure className="relative overflow-hidden rounded-lg border-2 border-ink shadow-xl">
              <img
                src={file.previewUrl}
                alt={`${file.label} — first page preview`}
                loading="lazy"
                className="w-full object-cover"
              />
              <figcaption className="font-body px-4 py-3 text-sm text-muted-foreground">
                {file.label} — preview of the first page. Open the full
                presentation to read every slide.
              </figcaption>
            </figure>

            <div className="flex flex-col gap-3 md:w-64">
              <a
                href={file.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-hand inline-block border-2 border-ink bg-ink px-6 py-3 text-center text-2xl text-paper transition-colors hover:bg-paper hover:text-ink"
              >
                View Full Presentation ↗
              </a>
              <a
                href={file.url}
                download
                className="font-hand inline-block border-2 border-ink px-6 py-3 text-center text-2xl transition-colors hover:bg-ink hover:text-paper"
              >
                Download PDF ↓
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function EngineeringCaseStudy({ project }: { project: Project }) {
  const [localFiles, setLocalFiles] = useState<File[]>([]);
  const study = project.caseStudy!;

  return (
    <main className="min-h-screen bg-paper text-ink">
      <NavBar />
      <header className="grain border-b border-border bg-paper py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <span className="font-body text-[0.65rem] tracking-[0.5em] text-muted-foreground uppercase">Academic Experiences</span>
          <div className="mt-4 flex items-start gap-5 md:gap-7">
            <span className="font-display text-6xl font-bold leading-none text-ink/15 md:text-8xl">{project.number}</span>
            <div>
              <h1 className="font-display text-4xl font-bold tracking-tight md:text-6xl">{project.title}</h1>
              <p className="font-hand mt-2 text-2xl text-muted-foreground">{project.subtitle}</p>
            </div>
          </div>
          <span aria-hidden="true" className="mt-6 block h-[3px] w-24 -rotate-1 rounded-full bg-accent-warm" />
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-6 py-14 md:py-18">
        <figure className="overflow-hidden border-2 border-ink bg-ink shadow-xl">
          <img src={project.previewUrl} alt="Finished automated drawbridge model" className="aspect-[16/8] w-full object-cover" />
          <figcaption className="font-body bg-paper px-4 py-3 text-sm text-muted-foreground">Finished bridge model — a vertical-lift design supported by two towers.</figcaption>
        </figure>

        <div className="mt-16 grid gap-12 md:grid-cols-2">
          <CaseSection title="Project Overview"><p>{project.overview}</p></CaseSection>
          <CaseSection title="My Role"><div className="flex flex-wrap gap-2">{project.role.split(" · ").map((role) => <span key={role} className="font-body border border-ink/30 px-3 py-2 text-sm">{role}</span>)}</div></CaseSection>
        </div>

        <section className="mt-16 border-y-2 border-ink py-10">
          <span className="font-body text-[0.65rem] tracking-[0.4em] text-muted-foreground uppercase">Design Highlight</span>
          <h2 className="font-display mt-2 text-3xl font-semibold md:text-4xl">Engineering the Solution</h2>
          <p className="font-body mt-4 max-w-3xl text-lg leading-relaxed text-muted-foreground">We compared multiple bridge structures and lifting mechanisms before selecting a vertical-lift design. The final design provided a reliable way to keep the roadway level while creating enough clearance for boats to pass underneath.</p>
        </section>

        <CaseSection title="Design Process" className="mt-16">
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">{study.process.map((step, index) => <a key={step} href="#project-artifacts" className="group border-2 border-ink p-4 transition-colors hover:bg-ink hover:text-paper"><span className="font-body text-xs tracking-[0.25em] text-muted-foreground group-hover:text-paper/60">{String(index + 1).padStart(2, "0")}</span><span className="font-hand mt-1 block text-2xl">{step} →</span></a>)}</div>
          <p className="font-body mt-5 max-w-3xl leading-relaxed text-muted-foreground">{project.contribution}</p>
        </CaseSection>

        <div className="mt-16 grid gap-12 md:grid-cols-2">
          <CaseSection title="Automation"><p>{study.automation}</p></CaseSection>
          <CaseSection title="Testing & Results"><p>{study.testing}</p></CaseSection>
        </div>

        <section id="project-artifacts" className="mt-16 scroll-mt-8">
          <h2 className="font-display text-3xl font-semibold md:text-4xl">Project Artifacts</h2>
          <span aria-hidden="true" className="mt-3 block h-[3px] w-16 -rotate-1 rounded-full bg-accent-warm" />
          <p className="font-body mt-4 max-w-2xl leading-relaxed text-muted-foreground">Explore the project portfolio and the design sketch. Select additional PDFs or images below to preview their file names in this browser session.</p>
          <div className="mt-8 grid gap-8 md:grid-cols-2">
            <ArtifactCard image={project.presentations![0]!.previewUrl} title="Automatic Drawbridge Portfolio" caption="Project document with research, design work, schematics, and testing setup." primaryHref={project.pdfUrl} primaryLabel="View Full Project ↗" />
            <ArtifactCard image={study.drawingsUrl!} title="Engineering Drawings" caption="Early sketch of the bridge structure and lifting concept." primaryHref={study.drawingsUrl!} primaryLabel="View Engineering Drawings ↗" />
          </div>
          <div className="mt-10 border-2 border-dashed border-ink/40 p-6">
            <p className="font-hand text-3xl">Add more artifacts</p>
            <p className="font-body mt-2 max-w-2xl text-muted-foreground">Choose PDFs or images to review their file names here. Publishing them to the portfolio requires adding the files to the site’s project assets.</p>
            <label className="font-hand mt-5 inline-block cursor-pointer border-2 border-ink px-5 py-2 text-2xl transition-colors hover:bg-ink hover:text-paper">Choose PDFs or images<input className="sr-only" type="file" accept="application/pdf,image/*" multiple onChange={(event) => setLocalFiles(Array.from(event.target.files ?? []))} /></label>
            {localFiles.length > 0 && <ul className="font-body mt-4 list-disc pl-5 text-muted-foreground">{localFiles.map((file) => <li key={`${file.name}-${file.lastModified}`}>{file.name}</li>)}</ul>}
          </div>
        </section>

        <CaseSection title="Skills" className="mt-16"><div className="flex flex-wrap gap-3">{project.skills.map((skill) => <span key={skill} className="font-body border border-ink/30 bg-paper px-4 py-2">{skill}</span>)}</div></CaseSection>
      </section>
      <footer className="grain border-t border-border bg-paper py-14 text-center"><a href="/#academics" className="font-hand inline-block border-2 border-ink px-8 py-2 text-2xl transition-colors hover:bg-ink hover:text-paper">Back to Academic Experiences</a></footer>
    </main>
  );
}

function CaseSection({ title, children, className = "" }: { title: string; children: React.ReactNode; className?: string }) {
  return <section className={className}><h2 className="font-hand text-4xl">{title}</h2><span aria-hidden="true" className="mt-2 block h-[2px] w-12 -rotate-1 rounded-full bg-accent-warm" /><div className="font-body mt-4 text-lg leading-relaxed text-muted-foreground">{children}</div></section>;
}

function ArtifactCard({ image, title, caption, primaryHref, primaryLabel }: { image: string; title: string; caption: string; primaryHref: string; primaryLabel: string }) {
  return <article className="overflow-hidden border-2 border-ink bg-paper shadow-lg"><img src={image} alt={title} className="aspect-[4/3] w-full object-cover" /><div className="p-5"><h3 className="font-display text-2xl font-semibold">{title}</h3><p className="font-body mt-2 text-muted-foreground">{caption}</p><a href={primaryHref} target="_blank" rel="noopener noreferrer" className="font-hand mt-5 inline-block border-2 border-ink bg-ink px-4 py-2 text-xl text-paper transition-colors hover:bg-paper hover:text-ink">{primaryLabel}</a></div></article>;
}

function ProjectDetail() {
  const { slug } = Route.useParams();
  const project = getProject(slug)!;
  if (project.caseStudy) return <EngineeringCaseStudy project={project} />;
  const next =
    PROJECTS[(PROJECTS.findIndex((p) => p.slug === slug) + 1) %
      PROJECTS.length]!;

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

        {/* Artifacts */}
        <Artifacts
          presentations={project.presentations}
          fallbackUrl={project.pdfUrl}
          fallbackLabel={project.pdfLabel}
          previewUrl={project.previewUrl}
        />
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
          <a
            href="/#experiences"
            className="font-hand inline-block border-2 border-ink px-8 py-2 text-2xl transition-colors hover:bg-ink hover:text-paper"
          >
            Back to Experiences
          </a>
        </div>
      </footer>
    </main>
  );
}
