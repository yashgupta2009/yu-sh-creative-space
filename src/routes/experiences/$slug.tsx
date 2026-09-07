import { createFileRoute, Link, notFound } from "@tanstack/react-router";
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
          href="./#experiences"
          className="font-hand text-2xl transition-transform duration-200 hover:-translate-y-0.5 hover:rotate-3"
        >
          Experiences
        </a>
      </div>
    </nav>
  );
}

function ProjectSwitcher({ active }: { active: "ball-boys" | "engineering-drawbridge" }) {
  return (
    <div className="border-b border-border bg-paper">
      <div className="mx-auto flex max-w-6xl items-center justify-center gap-3 px-6 py-3">
        <Link to="/experiences/$slug" params={{ slug: "ball-boys" }} className={`font-body border px-4 py-2 text-sm transition-colors ${active === "ball-boys" ? "border-ink bg-ink text-paper" : "border-ink/30 hover:border-ink"}`}>Ball Boys</Link>
        <Link to="/experiences/$slug" params={{ slug: "engineering-drawbridge" }} className={`font-body border px-4 py-2 text-sm transition-colors ${active === "engineering-drawbridge" ? "border-ink bg-ink text-paper" : "border-ink/30 hover:border-ink"}`}>Drawbridge</Link>
      </div>
    </div>
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

export function EngineeringCaseStudy({ project }: { project: Project }) {
  const study = project.caseStudy!;

  return (
    <main className="min-h-screen bg-paper text-ink">
      <NavBar />
      <ProjectSwitcher active="engineering-drawbridge" />
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
          <ol className="mt-6 space-y-6 border-l-2 border-ink/20 pl-7">
            {[
              ["Research", "We researched different bridge types, structures, and lifting mechanisms."],
              ["Brainstorming", "We shared ideas as a team and compared possible ways to raise the bridge safely."],
              ["Prototype", "We made early models to see which structure and lifting system worked best."],
              ["Build", "We constructed the bridge deck, support towers, and lifting mechanism."],
              ["Program", "We programmed the sensor and motor so the bridge could respond when a boat approached."],
              ["Test", "We tested the structure and automation, found problems, and improved the design."],
              ["Final Design", "We completed a working vertical-lift drawbridge and documented our results."],
            ].map(([step, description], index) => (
              <li key={step} className="relative">
                <span aria-hidden="true" className="absolute -left-[2.15rem] top-2 h-3 w-3 rounded-full bg-accent-warm" />
                <span className="font-body text-xs tracking-[0.3em] text-muted-foreground">{String(index + 1).padStart(2, "0")}</span>
                <h3 className="font-display mt-1 text-2xl font-semibold text-ink">{step}</h3>
                <p className="mt-2 max-w-3xl text-base leading-relaxed text-muted-foreground">{description}</p>
              </li>
            ))}
          </ol>
          <p className="font-body mt-5 max-w-3xl leading-relaxed text-muted-foreground">{project.contribution}</p>
        </CaseSection>

        <div className="mt-16 grid gap-12 md:grid-cols-2">
          <CaseSection title="Automation"><p>{study.automation}</p></CaseSection>
          <CaseSection title="Testing & Results"><p>{study.testing}</p></CaseSection>
        </div>

        <section id="project-artifacts" className="mt-16 scroll-mt-8">
          <h2 className="font-display text-3xl font-semibold md:text-4xl">Project Artifacts</h2>
          <span aria-hidden="true" className="mt-3 block h-[3px] w-16 -rotate-1 rounded-full bg-accent-warm" />
          <p className="font-body mt-4 max-w-2xl leading-relaxed text-muted-foreground">Explore the complete project portfolio and the original design sketch.</p>
          <div className="mt-8 grid gap-8 md:grid-cols-2">
            <ArtifactCard image={project.presentations![0]!.previewUrl} title="Automatic Drawbridge Portfolio" caption="Project document with research, design work, schematics, and testing setup." primaryHref={project.pdfUrl} primaryLabel="View Full Project ↗" />
            <ArtifactCard image={study.drawingsUrl!} title="Engineering Drawings" caption="Early sketch of the bridge structure and lifting concept." primaryHref={study.drawingsUrl!} primaryLabel="View Engineering Drawings ↗" />
          </div>
        </section>

        <CaseSection title="Skills" className="mt-16"><div className="flex flex-wrap gap-3">{project.skills.map((skill) => <span key={skill} className="font-body border border-ink/30 bg-paper px-4 py-2">{skill}</span>)}</div></CaseSection>
      </section>
      <footer className="grain border-t border-border bg-paper py-14 text-center"><a href="./#academics" className="font-hand inline-block border-2 border-ink px-8 py-2 text-2xl transition-colors hover:bg-ink hover:text-paper">Back to Academic Experiences</a></footer>
    </main>
  );
}

export function BallBoysCaseStudy({ project }: { project: Project }) {
  return (
    <main className="min-h-screen bg-paper text-ink">
      <NavBar />
      <ProjectSwitcher active="ball-boys" />
      <header className="grain border-b border-border py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <span className="font-body text-[0.65rem] tracking-[0.5em] text-muted-foreground uppercase">3DE Business Challenge · Junior Achievement</span>
          <div className="mt-4 flex items-start gap-5 md:gap-7">
            <span className="font-display text-6xl font-bold leading-none text-ink/15 md:text-8xl">01</span>
            <div><h1 className="font-display text-5xl font-bold tracking-tight md:text-7xl">Ball Boys</h1><p className="font-hand mt-2 text-3xl text-muted-foreground">From classroom idea to student-run business</p></div>
          </div>
          <span aria-hidden="true" className="mt-6 block h-[3px] w-24 -rotate-1 rounded-full bg-accent-warm" />
        </div>
      </header>
      <section className="mx-auto max-w-6xl px-6 py-14 md:py-18">
        <figure className="overflow-hidden border-2 border-ink bg-ink shadow-xl"><img src={project.previewUrl} alt="Ball Boys scaling project presentation cover" className="aspect-[16/8] w-full object-cover" /><figcaption className="font-body bg-paper px-4 py-3 text-sm text-muted-foreground">Ball Boys — a student-run business giving used sports equipment a second life.</figcaption></figure>
        <div className="mt-16 grid gap-12 md:grid-cols-2"><CaseSection title="Project Overview"><p>{project.overview}</p></CaseSection><CaseSection title="My Role"><p>{project.contribution}</p></CaseSection></div>
        <section className="mt-16 border-y-2 border-ink py-10">
          <span className="font-body text-[0.65rem] tracking-[0.4em] text-muted-foreground uppercase">The Full Story</span><h2 className="font-display mt-2 text-3xl font-semibold md:text-4xl">Idea. Market day. Growth strategy.</h2>
          <div className="mt-6 grid gap-5 md:grid-cols-3">{[["01", "Build the Business", "Created the concept, researched the market, and developed pricing and finances."], ["02", "Meet the Customer", "Ran the booth, handled purchases, and learned from real customer interactions."], ["03", "Plan the Future", "Turned the results into professional presentations and a strategy for scaling."]].map(([number, title, copy]) => <article key={number} className="border-2 border-ink p-5"><span className="font-display text-4xl font-bold text-ink/20">{number}</span><h3 className="font-display mt-2 text-xl font-semibold">{title}</h3><p className="font-body mt-3 leading-relaxed text-muted-foreground">{copy}</p></article>)}</div>
        </section>
        <CaseSection title="Skills Developed" className="mt-16"><div className="flex flex-wrap gap-3">{project.skills.map((skill) => <span key={skill} className="border border-ink/30 bg-paper px-4 py-2">{skill}</span>)}</div></CaseSection>
        <Artifacts presentations={project.presentations} fallbackUrl={project.pdfUrl} fallbackLabel={project.pdfLabel} previewUrl={project.previewUrl} />
      </section>
      <footer className="grain border-t border-border py-14 text-center"><Link to="/experiences/$slug" params={{ slug: "engineering-drawbridge" }} className="font-hand inline-block border-2 border-ink px-8 py-2 text-2xl transition-colors hover:bg-ink hover:text-paper">Next: Engineering Drawbridge →</Link></footer>
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
  if (project.slug === "ball-boys") return <BallBoysCaseStudy project={project} />;
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
            href="./#experiences"
            className="font-hand inline-block border-2 border-ink px-8 py-2 text-2xl transition-colors hover:bg-ink hover:text-paper"
          >
            Back to Experiences
          </a>
        </div>
      </footer>
    </main>
  );
}
