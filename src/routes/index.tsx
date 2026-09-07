import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { PROJECTS } from "@/lib/projects";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Yash Gupta — Personal Portfolio" },
      {
        name: "description",
        content:
          "Personal portfolio of Yash Gupta — senior at Northview High School, 3DE by Junior Achievement magnet program member, passionate about engineering, business, and technology.",
      },
      { property: "og:title", content: "Yash Gupta — Personal Portfolio" },
      {
        property: "og:description",
        content:
          "Senior at Northview High School and 3DE magnet program member, passionate about engineering, business, and technology.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const NAV_ITEMS = [
  { label: "About me", href: "#about" },
  { label: "Resume", href: "#resume" },
  { label: "Academics", href: "#academics" },
  { label: "Experiences", href: "#experiences" },
  { label: "Activities", href: "#activities" },
  { label: "Personality", href: "#personality" },
  { label: "Expertise", href: "#expertise" },
  { label: "Creative", href: "#creative" },
  { label: "Contact", href: "#contact" },
];

function NavBar({ dark = false }: { dark?: boolean }) {
  return (
    <nav
      className={
        dark
          ? "w-full bg-ink text-paper"
          : "w-full border-y border-border bg-paper text-ink"
      }
    >
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-8 gap-y-2 px-6 py-4">
        {NAV_ITEMS.map((item, i) => (
          <a
            key={item.href}
            href={item.href}
            className={`font-hand text-2xl transition-transform duration-200 hover:-translate-y-0.5 ${
              i % 2 === 0 ? "hover:-rotate-3" : "hover:rotate-3"
            }`}
          >
            {item.label}
          </a>
        ))}
      </div>
    </nav>
  );
}

function SectionHeading({
  children,
  index,
  dark = false,
}: {
  children: React.ReactNode;
  index?: string;
  dark?: boolean;
}) {
  return (
    <div className="flex flex-col items-center">
      {index ? (
        <span
          className={`font-body text-[0.65rem] tracking-[0.5em] uppercase ${
            dark ? "text-paper/50" : "text-muted-foreground"
          }`}
        >
          {index}
        </span>
      ) : null}
      <h2
        className={`font-display mt-3 text-center text-5xl font-semibold tracking-tight md:text-6xl ${
          dark ? "text-paper" : "text-ink"
        }`}
      >
        {children}
      </h2>
      <span
        aria-hidden="true"
        className="mt-4 block h-[3px] w-24 -rotate-1 rounded-full bg-accent-warm"
      />
    </div>
  );
}

function SubHeading({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <h3 className="font-display text-3xl font-semibold">{children}</h3>
      <span
        aria-hidden="true"
        className="mt-2 block h-[2px] w-12 -rotate-1 rounded-full bg-accent-warm"
      />
    </div>
  );
}


function ClipboardCard() {
  return (
    <div className="relative mx-auto w-full max-w-xs">
      {/* clip */}
      <div className="absolute -top-5 left-1/2 z-10 h-10 w-32 -translate-x-1/2 rounded-md bg-ink shadow-md">
        <div className="mx-auto mt-2 h-6 w-20 rounded-sm border border-paper/30 bg-ink" />
      </div>
      {/* board */}
      <div className="rounded-xl bg-neutral-800 p-4 pt-8 shadow-2xl">
        {/* paper */}
        <div className="rotate-[-1.5deg] rounded-sm bg-paper p-5 shadow-lg">
          <div className="mx-auto aspect-[4/5] w-full overflow-hidden border-2 border-ink">
            <img
              src="portfolio-assets/yash-portrait.png"
              alt="Yash Gupta"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function Index() {
  return (
    <main className="min-h-screen bg-paper text-ink">
      <NavBar />

      {/* Hero */}
      <header className="grain relative flex min-h-[calc(100svh-74px)] overflow-hidden">
        <img
          src="portfolio-assets/portfolio-hero-childhood.png"
          alt="Yash Gupta as a baby with family"
          className="pointer-events-none absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="pointer-events-none absolute inset-0 bg-paper/25" />
        <div className="relative mx-auto flex w-full max-w-6xl flex-col items-center justify-center px-6 py-20 text-center">
        <p className="font-hand text-5xl font-semibold leading-none md:text-7xl">Welcome to my</p>
        <h1 className="font-display mt-7 text-7xl font-bold leading-[0.85] tracking-[-0.055em] md:text-[9.5rem]">
          Yash Gupta
        </h1>
        <span
          aria-hidden="true"
          className="mt-10 block h-[5px] w-48 -rotate-1 rounded-full bg-accent-warm"
        />
        <p className="font-body mt-10 text-2xl font-semibold text-ink md:text-4xl">
          Personal Portfolio — Engineering, Business &amp; Technology
        </p>

        <a
          href="#about"
          className="font-hand mt-16 text-4xl font-semibold underline underline-offset-8 transition-opacity hover:opacity-60 md:text-5xl"
        >
          scroll down ↓
        </a>
        </div>
      </header>

      <NavBar dark />

      {/* About me — black section */}
      <section id="about" className="grain-dark bg-ink py-24 text-paper">
        <div className="relative mx-auto grid max-w-6xl items-center gap-16 px-6 md:grid-cols-[320px_1fr]">
          <ClipboardCard />
          <div>
            <span className="font-body text-[0.65rem] tracking-[0.5em] text-paper/50 uppercase">
              Section 01 — About me
            </span>
            <h2 className="font-display mt-3 text-5xl font-semibold md:text-6xl">Hey there!</h2>
            <span
              aria-hidden="true"
              className="mt-4 block h-[3px] w-24 -rotate-1 rounded-full bg-accent-warm"
            />

            <div className="font-body mt-8 space-y-6 text-lg leading-relaxed">
              <p>
                My name is Yash Gupta, and I am currently a senior at Northview
                High School and a member of the 3DE by Junior Achievement
                magnet program. From a young age, I have always been interested
                in building things with my hands and creating ideas that could
                help shape the future. I am an organized, logical, and driven
                person who is passionate about engineering, business, and
                technology. Through 3DE, I have developed my leadership,
                teamwork, and problem-solving skills while gaining experience
                working with real-world businesses and contributing my ideas to
                business challenges.
              </p>
              <p>
                My interests also extend to photography and connecting with
                people. I enjoy learning from the ideas and
                perspectives they bring. I believe that every connection can
                teach me something new and help me grow as a person.
              </p>
              <p>
                Outside of school, I enjoy spending time with my family and the
                people who are important to me. I value creating experiences
                and memories that I can look back on when I am older. These
                moments remind me that growth is not only about school or a
                career, but also about the people I meet and the experiences I
                have along the way.
              </p>
              <p>
                I am driven by the goal of making a positive impact on the
                world and helping create a better future. I want to use my
                interests in engineering, business, and technology to create
                solutions that can make people's lives easier. I am always
                looking for opportunities to learn, improve myself, and take on
                new challenges. I hope to continue growing my skills, making
                meaningful connections, and turning my ideas into something
                that can make a difference.
              </p>
            </div>
          </div>
        </div>
      </section>

      <NavBar />

      {/* Resume — white section */}
      <section id="resume" className="grain bg-paper py-24">
        <div className="relative mx-auto max-w-6xl px-6">
          <SectionHeading index="Section 02">Resume</SectionHeading>
          <div className="mt-16 grid items-start gap-16 md:grid-cols-2">
            {/* resume image */}
            <figure className="relative mx-auto w-full max-w-md">
              <span
                aria-hidden="true"
                className="tape -top-3 left-6 -rotate-6"
              />
              <span
                aria-hidden="true"
                className="tape -top-3 right-6 rotate-6"
              />
              <div className="rotate-[-1deg] border-2 border-ink bg-paper p-3 shadow-xl transition-transform hover:rotate-0">
                <img
                  src="portfolio-assets/yash-resume-public.png"
                  alt="Yash Gupta's resume"
                  className="w-full"
                />
              </div>

              <figcaption className="font-body mt-6 text-center text-xl">
                my resume, hot off the press
              </figcaption>
            </figure>

            {/* resume highlights */}
            <div className="space-y-10">
              <div>
                <SubHeading>Profile</SubHeading>
                <p className="font-body mt-3 leading-relaxed text-muted-foreground">
                  Motivated and dependable student with strong leadership,
                  communication, and organizational skills. Known for being
                  consistent, detail-oriented, and determined in achieving
                  goals. Eager to learn new skills, take on challenges, and
                  continue improving through experience.
                </p>
              </div>

              <div>
                <SubHeading>Experience</SubHeading>
                <div className="font-body mt-3 space-y-5 leading-relaxed text-muted-foreground">
                  <div>
                    <p className="font-display text-xl font-semibold text-ink">
                      Broadcasthub
                    </p>
                    <p className="mt-1">
                      Worked with professional camera equipment to support
                      media production and broadcasting. Assisted with sales by
                      engaging with clients, explaining services, and helping
                      drive business growth through effective communication.
                    </p>
                  </div>
                  <div>
                    <p className="font-display text-xl font-semibold text-ink">
                      Leadership
                    </p>
                    <p className="mt-1">
                      Demonstrated leadership through group projects and
                      presentations, earning recognition for excellence. Gained
                      hands-on leadership experience through 3DE and by leading
                      a student-run business, "Ball Boys."
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid gap-10 sm:grid-cols-2">
                <div>
                  <SubHeading>Interests</SubHeading>
                  <ul className="font-body mt-3 list-disc space-y-1 pl-5 text-muted-foreground">
                    <li>Entrepreneurship</li>
                    <li>Business strategy</li>
                    <li>Communication</li>
                    <li>Sales</li>
                    <li>Team leadership</li>
                  </ul>
                </div>
                <div>
                  <SubHeading>Key Skills</SubHeading>
                  <ul className="font-body mt-3 list-disc space-y-1 pl-5 text-muted-foreground">
                    <li>Communication</li>
                    <li>Team leadership</li>
                    <li>Organization</li>
                    <li>Presentation skills</li>
                  </ul>
                </div>
              </div>

              <div>
                <SubHeading>Education</SubHeading>
                <p className="font-body mt-3 leading-relaxed text-muted-foreground">
                  2023–2027 · Northview High School, Duluth, Georgia
                  <br />
                  Relevant coursework: Intro to Business, Entrepreneurship,
                  Engineering
                </p>
              </div>

              <div>
                <SubHeading>Objective</SubHeading>
                <p className="font-body mt-3 leading-relaxed text-muted-foreground">
                  Motivated high school student seeking opportunities to gain
                  real-world work experience, develop professional skills, and
                  build a strong foundation for future career success in
                  business and entrepreneurship.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <NavBar dark />

      {/* Academic Experiences — black section */}
      <section id="academics" className="grain-dark bg-ink py-24 text-paper">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading index="Section 03" dark>Academic Experiences</SectionHeading>
          <p className="font-body mx-auto mt-8 max-w-2xl text-center text-lg leading-relaxed text-paper/70">A collection of my school projects through 3DE business challenges and engineering design. Explore the Ball Boys experience first, followed by my automated drawbridge project.</p>
          <div className="mx-auto mt-10 flex max-w-xl items-center justify-center gap-5" aria-hidden="true"><span className="h-px flex-1 bg-paper/25" /><span className="font-body text-xl text-accent-warm">My project work</span><span className="h-px flex-1 bg-paper/25" /></div>
        </div>
      </section>

      <NavBar />

      {/* Experiences & Projects — white section */}
      <section id="experiences" className="grain bg-paper py-24">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading index="Section 04">Ball Boys</SectionHeading>
          <p className="font-body mx-auto mt-8 max-w-2xl text-center text-lg leading-relaxed text-muted-foreground">The Ball Boys journey—from building the business and meeting customers to presenting our strategy.</p>

          <div className="mt-16 grid items-stretch gap-10 lg:grid-cols-3">
            {PROJECTS.filter((project) => ["ball-boys", "market-expo", "professional-presentations"].includes(project.slug)).map((project, i) => (
              <a
                key={project.slug}
                href={`./experiences/${project.slug}`}
                className={`group relative flex min-h-[760px] flex-col overflow-hidden border-[3px] border-ink bg-paper shadow-md transition-transform duration-300 hover:-translate-y-2 ${
                  i % 2 === 0 ? "rotate-[-0.5deg]" : "rotate-[0.5deg]"
                }`}
              >
                {/* preview */}
                <div className="relative aspect-[4/3] overflow-hidden border-b-[3px] border-ink bg-ink">
                  <img
                    src={project.previewUrl}
                    alt={`${project.title} presentation preview`}
                    loading="lazy"
                    className="h-full w-full object-cover opacity-90 transition-transform duration-500 group-hover:scale-105 group-hover:opacity-100"
                  />
                </div>

                {/* body */}
                <div className="flex flex-1 flex-col p-8 md:p-9">
                  <p className="font-body text-[0.68rem] tracking-[0.4em] text-muted-foreground uppercase">
                    {project.subtitle}
                  </p>
                  <h3 className="font-display mt-5 text-3xl font-semibold text-ink">
                    {project.title}
                  </h3>
                  <span
                    aria-hidden="true"
                    className="mt-3 block h-[2px] w-10 -rotate-1 rounded-full bg-accent-warm"
                  />
                  <p className="font-body mt-6 flex-1 text-lg leading-[1.75] text-muted-foreground">
                    {project.description}
                  </p>

                  <span className="font-body mt-6 inline-flex items-center gap-2 text-xl font-semibold text-ink transition-transform group-hover:gap-3">
                    View Project →
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <NavBar dark />

      {/* Drawbridge — dedicated section under Ball Boys */}
      <section id="drawbridge" className="grain-dark bg-ink py-24 text-paper">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading index="Section 05" dark>Drawbridge</SectionHeading>
          <p className="font-body mx-auto mt-8 max-w-2xl text-center text-lg leading-relaxed text-paper/70">An automated vertical-lift bridge designed, built, programmed, and tested as an engineering team project.</p>
          {PROJECTS.filter((project) => project.slug === "engineering-drawbridge").map((project) => (
            <a key={project.slug} href="drawbridge" className="group mx-auto mt-14 grid max-w-5xl overflow-hidden border-[3px] border-paper bg-paper text-ink shadow-2xl transition-transform duration-300 hover:-translate-y-2 md:grid-cols-[1.15fr_0.85fr]">
              <div className="relative min-h-80 overflow-hidden border-b-[3px] border-ink bg-ink md:border-b-0 md:border-r-[3px]">
                <img src={project.previewUrl} alt="Finished automated drawbridge project" className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <span className="font-display absolute left-7 top-5 text-7xl font-bold leading-none text-paper/80 mix-blend-difference">04</span>
              </div>
              <div className="flex flex-col p-9 md:p-12">
                <p className="font-body text-[0.68rem] tracking-[0.4em] text-muted-foreground uppercase">Engineering Design &amp; Automation</p>
                <h3 className="font-display mt-5 text-4xl font-semibold">Engineering Drawbridge</h3>
                <span aria-hidden="true" className="mt-5 block h-[3px] w-16 -rotate-1 rounded-full bg-accent-warm" />
                <p className="font-body mt-6 text-lg leading-[1.75] text-muted-foreground">{project.description}</p>
                <span className="font-body mt-10 inline-flex items-center gap-3 text-xl font-semibold transition-transform group-hover:translate-x-2">View Drawbridge Project →</span>
              </div>
            </a>
          ))}
        </div>
      </section>

      <NavBar dark />

      {/* Extracurricular Activities */}
      <section id="activities" className="grain bg-paper py-24">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading index="Section 06">Extracurricular Activities</SectionHeading>
          <p className="font-body mx-auto mt-8 max-w-2xl text-center text-lg leading-relaxed text-muted-foreground">Experiences outside the classroom that helped me strengthen my teamwork, service, communication, and creative skills.</p>

          <article className="mt-16 overflow-hidden border-[3px] border-ink bg-paper shadow-xl">
            <div className="grid gap-1 bg-ink sm:grid-cols-2 lg:grid-cols-4">
              {[
                ["portfolio-assets/extracurricular/fifa-world-cup-match.png", "View of a FIFA World Cup 2026 match inside the stadium"],
                ["portfolio-assets/extracurricular/fifa-world-cup-setup.png", "FIFA World Cup 2026 stadium setup"],
                ["portfolio-assets/extracurricular/fifa-world-cup-field.png", "Field preparations before a FIFA World Cup 2026 match"],
                ["portfolio-assets/extracurricular/fifa-world-cup-team.png", "Yash with fellow World Cup volunteers"],
              ].map(([src, alt]) => <img key={src} src={src} alt={alt} loading="lazy" className="aspect-[3/4] h-full w-full object-cover" />)}
            </div>
            <div className="p-8 md:p-12">
              <p className="font-body text-[0.68rem] tracking-[0.4em] text-muted-foreground uppercase">Summer 2026 · Volunteer Experience</p>
              <h3 className="font-display mt-4 text-4xl font-semibold md:text-5xl">FIFA World Cup 2026</h3>
              <span aria-hidden="true" className="mt-4 block h-[3px] w-16 -rotate-1 rounded-full bg-accent-warm" />
              <p className="font-body mt-7 max-w-4xl text-lg leading-[1.8] text-muted-foreground">During the summer of 2026, I volunteered at the FIFA World Cup. I helped prepare the stadium for fans and tourists, supported food and drink service, and assisted with setting up different areas throughout the venue. Working in a busy international event environment taught me how important teamwork, organization, communication, and attention to detail are when creating a welcoming experience for thousands of guests.</p>
              <div className="mt-8 flex flex-wrap gap-3">{["Event Setup", "Guest Service", "Food & Drink Service", "Teamwork", "Organization"].map((skill) => <span key={skill} className="font-body border border-ink/30 px-4 py-2">{skill}</span>)}</div>
            </div>
          </article>

          <article className="mt-12 grid overflow-hidden border-[3px] border-ink bg-paper shadow-xl md:grid-cols-[0.8fr_1.2fr]">
            <div className="flex min-h-64 items-center justify-center border-b-[3px] border-ink bg-white p-10 md:border-b-0 md:border-r-[3px]">
              <img src="portfolio-assets/extracurricular/rockstars-productions.webp" alt="Rockstars Production logo" className="w-full max-w-md" />
            </div>
            <div className="p-8 md:p-12">
              <p className="font-body text-[0.68rem] tracking-[0.4em] text-muted-foreground uppercase">Photography &amp; Media Experience</p>
              <h3 className="font-display mt-4 text-4xl font-semibold">Rockstars Production</h3>
              <span aria-hidden="true" className="mt-4 block h-[3px] w-16 -rotate-1 rounded-full bg-accent-warm" />
              <p className="font-body mt-7 text-lg leading-[1.8] text-muted-foreground">I volunteered with Rockstars Production, where I learned how to use professional cameras, frame and capture photos, and edit visual content. The experience gave me hands-on practice with photography and production while helping me develop both my technical and creative abilities.</p>
              <p className="font-body mt-7 text-lg italic text-muted-foreground">More project photos coming soon.</p>
            </div>
          </article>
        </div>
      </section>

      <NavBar dark />

      {/* Personality Tests */}
      <section id="personality" className="grain-dark bg-ink py-24 text-paper">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading index="Section 07" dark>Personality Tests</SectionHeading>
          <p className="font-body mx-auto mt-8 max-w-3xl text-center text-lg leading-relaxed text-paper/75">These assessments helped me understand how I work with people, approach challenges, and use my strengths. Together, the results describe me as friendly, creative, dependable, driven, and willing to help others.</p>

          <div className="mt-16 grid gap-8 md:grid-cols-2">
            <article className="overflow-hidden border-2 border-paper bg-paper text-ink shadow-xl">
              <div className="grid h-56 grid-cols-2" aria-label="Orange and blue personality colors"><div className="flex items-center justify-center bg-orange-500"><span className="font-display text-4xl font-bold text-white">Orange</span></div><div className="flex items-center justify-center bg-blue-600"><span className="font-display text-4xl font-bold text-white">Blue</span></div></div>
              <div className="p-8"><p className="font-body text-xs tracking-[0.35em] text-muted-foreground uppercase">Color Test</p><h3 className="font-display mt-3 text-3xl font-semibold">Orange + Blue</h3><p className="font-body mt-4 text-lg leading-relaxed text-muted-foreground">My combination reflects energy, creativity, helpfulness, and strong interpersonal skills.</p><p className="font-body mt-5"><strong>Strengths:</strong> Friendly, energetic, creative, and helpful</p><p className="font-body mt-2"><strong>Growth:</strong> Patience, focus, and thinking before acting</p></div>
            </article>

            <article className="overflow-hidden border-2 border-paper bg-paper text-ink shadow-xl">
              <div className="flex h-56 items-center justify-center bg-white p-6"><img src="portfolio-assets/personality-shape-4.png" alt="Shape 4 personality test selection" className="h-full max-w-full object-contain" /></div>
              <div className="p-8"><p className="font-body text-xs tracking-[0.35em] text-muted-foreground uppercase">Shape and Color Test</p><h3 className="font-display mt-3 text-3xl font-semibold">Shape 4</h3><p className="font-body mt-4 text-lg leading-relaxed text-muted-foreground">Shape 4 is described as down-to-earth and charming, matching my calm and authentic approach.</p><p className="font-body mt-5"><strong>Strengths:</strong> Dependable, authentic, calm, and confident</p><p className="font-body mt-2"><strong>Growth:</strong> Being more open to change</p></div>
            </article>

            <article className="overflow-hidden border-2 border-paper bg-paper text-ink shadow-xl">
              <div className="flex h-56 items-center justify-center bg-[#4298b4]"><div className="text-center text-white"><span className="font-display block text-6xl font-bold">ENFJ</span><span className="font-body mt-2 block text-2xl">Protagonist</span></div></div>
              <div className="p-8"><p className="font-body text-xs tracking-[0.35em] text-muted-foreground uppercase">16 Personalities</p><h3 className="font-display mt-3 text-3xl font-semibold">Protagonist</h3><p className="font-body mt-4 text-lg leading-relaxed text-muted-foreground">This result reflects my compassion, responsibility, and ability to encourage and inspire people.</p><p className="font-body mt-5"><strong>Strengths:</strong> Friendly, caring, and responsible</p><p className="font-body mt-2"><strong>Growth:</strong> Worrying less about what others think</p></div>
            </article>

            <article className="overflow-hidden border-2 border-paper bg-paper text-ink shadow-xl">
              <div className="flex h-56 items-center justify-center bg-accent-warm"><div className="text-center text-ink"><span className="font-display block text-7xl font-bold">I / D</span><span className="font-body mt-2 block text-2xl">Inspiring + Dominant</span></div></div>
              <div className="p-8"><p className="font-body text-xs tracking-[0.35em] text-muted-foreground uppercase">DISC Test</p><h3 className="font-display mt-3 text-3xl font-semibold">Inspiring / Dominant</h3><p className="font-body mt-4 text-lg leading-relaxed text-muted-foreground">My DISC result shows that I bring confidence, energy, motivation, and influence when working with others.</p><p className="font-body mt-5"><strong>Strengths:</strong> Outgoing, friendly, confident, driven, and persuasive</p><p className="font-body mt-2"><strong>Growth:</strong> Patience, listening more, and slowing down</p></div>
            </article>
          </div>

          <div className="mx-auto mt-14 max-w-4xl border-t border-paper/20 pt-10">
            <h3 className="font-display text-center text-3xl font-semibold">What I learned about myself</h3>
            <p className="font-body mt-6 text-lg leading-[1.8] text-paper/80">Overall, my results show that I am kind, outgoing, diligent, and driven. I work well with others, enjoy exchanging ideas, and like helping with tasks. The tests also helped me recognize that I can grow by listening more carefully, practicing patience, staying focused, and remaining open to new ideas. I want to keep using my energy and confidence to support others while becoming a more thoughtful and organized leader.</p>
          </div>
        </div>
      </section>

      <NavBar />

      {/* Expertise — white section */}
      <section id="expertise" className="grain bg-paper py-24">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading index="Section 08">Expertise</SectionHeading>
          <div className="mx-auto mt-16 grid max-w-4xl gap-x-16 gap-y-10 md:grid-cols-2">
            {[
              ["Leadership & Teamwork", "w-[90%]"],
              ["Problem Solving", "w-[92%]"],
              ["Engineering & Building", "w-[88%]"],
              ["Business Strategy", "w-[85%]"],
              ["Software", "w-[82%]"],
              ["Photography", "w-[80%]"],
            ].map(([skill, width], i) => (
              <div key={skill}>
                <div className="flex items-baseline justify-between">
                  <span className="font-display text-2xl font-semibold">{skill}</span>
                  <span className="font-body text-[0.6rem] tracking-[0.35em] text-muted-foreground uppercase">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="mt-2 h-1.5 w-full rounded-full bg-ink/10">
                  <div className={`h-1.5 rounded-full bg-ink ${width}`} />
                </div>
                <span
                  aria-hidden="true"
                  className="mt-1 block h-[3px] w-8 -rotate-1 rounded-full bg-accent-warm"
                />
              </div>
            ))}

          </div>
        </div>
      </section>

      <NavBar dark />

      {/* Creative — black section */}
      <section id="creative" className="grain-dark bg-ink py-24 text-paper">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <SectionHeading index="Section 09" dark>Creative Side</SectionHeading>
          <p className="font-body mx-auto mt-10 max-w-2xl text-lg leading-relaxed text-paper/80">
            Photography helps me capture meaningful moments, while team-building
            experiences let me bring people together, share ideas, and turn
            creative plans into something real.
          </p>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-6">
            {["Photography", "Team Building", "Creative Problem Solving"].map((label, i) => (
              <div
                key={label}
                className={`relative flex h-44 w-44 items-center justify-center border-2 border-ink bg-paper text-ink shadow-md transition-transform hover:rotate-0 ${
                  i % 2 === 0 ? "rotate-[-2deg]" : "rotate-[2deg]"
                }`}
              >
                <span
                  aria-hidden="true"
                  className="tape -top-3 left-1/2 -translate-x-1/2 -rotate-3"
                />
                <span className="font-display text-2xl font-semibold">{label}</span>
              </div>
            ))}

          </div>
        </div>
      </section>

      <NavBar />

      {/* Contact — white section */}
      <section id="contact" className="grain bg-paper py-24">
        <div className="relative mx-auto max-w-3xl px-6 text-center">
          <SectionHeading index="Section 10">Get In Touch</SectionHeading>
          <p className="font-display mt-6 text-3xl">Let's connect!</p>

          <p className="font-body mt-8 text-lg leading-relaxed text-muted-foreground">
            Every connection teaches me something new. Whether it's about
            engineering, business, technology, or just a great idea — I'd love
            to hear from you.
          </p>
          <div className="font-body mt-10 space-y-2 text-lg">
            <p>
              <a
                href="mailto:yashgupta20099@gmail.com"
                className="underline underline-offset-4 transition-opacity hover:opacity-60"
              >
                yashgupta20099@gmail.com
              </a>
            </p>
            <p>Duluth, Georgia 30097</p>
          </div>
          <a
            href="mailto:yashgupta20099@gmail.com"
            className="font-body mt-10 inline-block border-2 border-ink px-10 py-3 text-xl font-semibold transition-colors hover:bg-ink hover:text-paper"
          >
            Say hello
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="grain border-t border-border bg-paper py-10 text-center">
        <span
          aria-hidden="true"
          className="mx-auto mb-5 block h-[3px] w-16 -rotate-1 rounded-full bg-accent-warm"
        />
        <p className="font-display text-3xl font-semibold">Yash Gupta</p>
        <p className="font-body mt-2 text-[0.65rem] tracking-[0.4em] text-muted-foreground uppercase">
          Engineering · Business · Technology
        </p>
        <p className="font-body mt-3 text-sm text-muted-foreground">
          © 2026 Yash Gupta — Personal Portfolio
        </p>
      </footer>

    </main>
  );
}
