import { createFileRoute } from "@tanstack/react-router";
import { PROJECTS } from "@/lib/projects";

export const Route = createFileRoute("/ball-boys")({
  head: () => ({
    meta: [
      { title: "Ball Boys Projects — Yash Gupta" },
      { name: "description", content: "Ball Boys business projects, Market Expo work, and professional presentations by Yash Gupta." },
    ],
  }),
  component: BallBoysPage,
});

const BALL_BOYS_PROJECTS = PROJECTS.filter((project) =>
  ["ball-boys", "market-expo", "professional-presentations"].includes(project.slug),
);

function BallBoysPage() {
  return (
    <main className="grain min-h-screen bg-paper text-ink">
      <nav className="relative z-10 border-b border-border bg-paper">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <a href="/" className="font-hand text-2xl transition-opacity hover:opacity-60">← Back to Portfolio</a>
          <a href={`${import.meta.env.BASE_URL}drawbridge`} className="font-hand text-2xl transition-opacity hover:opacity-60">Drawbridge Project →</a>
        </div>
      </nav>

      <section className="relative z-10 mx-auto max-w-[1480px] px-6 py-16 md:px-10 md:py-24">
        <div className="mb-14 text-center">
          <span className="font-body text-[0.65rem] tracking-[0.5em] text-muted-foreground uppercase">3DE Business Challenge · Junior Achievement</span>
          <h1 className="font-display mt-3 text-5xl font-bold md:text-7xl">Ball Boys</h1>
          <span aria-hidden="true" className="mx-auto mt-4 block h-[3px] w-24 -rotate-1 rounded-full bg-accent-warm" />
        </div>

        <div className="grid items-stretch gap-12 lg:grid-cols-3">
          {BALL_BOYS_PROJECTS.map((project) => (
            <article key={project.slug} className="flex min-h-[900px] flex-col overflow-hidden border-[3px] border-ink bg-paper shadow-lg">
              <div className="relative aspect-[4/3] overflow-hidden border-b-[3px] border-ink bg-ink">
                <img src={project.previewUrl} alt={`${project.title} presentation cover`} className="h-full w-full object-cover" />
              </div>
              <div className="flex flex-1 flex-col px-10 py-10 md:px-12 md:py-12">
                <p className="font-body text-[0.72rem] tracking-[0.42em] text-muted-foreground uppercase">{project.subtitle}</p>
                <h2 className="font-display mt-6 text-4xl font-semibold leading-tight">{project.title}</h2>
                <span aria-hidden="true" className="mt-5 block h-[3px] w-16 -rotate-1 rounded-full bg-accent-warm" />
                <p className="font-body mt-8 text-xl leading-[1.75] text-muted-foreground">{project.description}</p>
                <a href={`${import.meta.env.BASE_URL}experiences/${project.slug}`} className="font-hand mt-auto inline-flex items-center gap-4 pt-10 text-3xl transition-transform hover:translate-x-2">View Project <span aria-hidden="true">→</span></a>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
