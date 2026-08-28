import { createFileRoute } from "@tanstack/react-router";
import resumeAsset from "../assets/resume.png.asset.json";

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
          : "w-full border-b border-border bg-paper text-ink"
      }
    >
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-8 gap-y-2 px-6 py-4">
        {NAV_ITEMS.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="font-hand text-2xl transition-opacity hover:opacity-60"
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
  dark = false,
}: {
  children: React.ReactNode;
  dark?: boolean;
}) {
  return (
    <h2
      className={`font-display text-center text-5xl font-semibold tracking-tight md:text-6xl ${
        dark ? "text-paper" : "text-ink"
      }`}
    >
      {children}
    </h2>
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
        <div className="rotate-[-1.5deg] rounded-sm bg-paper px-6 py-8 text-center shadow-lg">
          <p className="font-display text-3xl font-bold text-ink">Profile</p>
          <p className="mt-1 font-body text-xs tracking-widest text-muted-foreground uppercase">
            Literally the best person ever
          </p>
          <div className="mx-auto mt-5 flex h-36 w-28 items-center justify-center border-2 border-ink">
            <span className="font-hand text-5xl text-ink">Yash</span>
          </div>
          <div className="mt-6 space-y-4 text-left">
            {[
              ["Engineering", "w-[92%]"],
              ["Business", "w-[85%]"],
              ["Technology", "w-[90%]"],
            ].map(([label, width]) => (
              <div key={label} className="flex items-center gap-3">
                <span className="font-hand w-20 text-lg text-ink">{label}</span>
                <div className="h-2 flex-1 rounded-full bg-neutral-200">
                  <div className={`h-2 rounded-full bg-ink ${width}`} />
                </div>
              </div>
            ))}
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
      <header className="mx-auto flex max-w-4xl flex-col items-center px-6 py-24 text-center md:py-32">
        <p className="font-hand text-4xl md:text-5xl">Welcome to my</p>
        <h1 className="font-display mt-4 text-6xl font-bold tracking-tight md:text-8xl">
          Yash Gupta
        </h1>
        <p className="font-body mt-6 text-xl text-muted-foreground md:text-2xl">
          Personal Portfolio — Engineering, Business &amp; Technology
        </p>
        <a
          href="#about"
          className="font-hand mt-12 text-3xl underline underline-offset-8 transition-opacity hover:opacity-60"
        >
          scroll down ↓
        </a>
      </header>

      <NavBar dark />

      {/* About me — black section */}
      <section id="about" className="bg-ink py-24 text-paper">
        <div className="mx-auto grid max-w-6xl items-center gap-16 px-6 md:grid-cols-[320px_1fr]">
          <ClipboardCard />
          <div>
            <h2 className="font-hand text-6xl md:text-7xl">Hey there!</h2>
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
                My interests also extend to software and photography, which
                allow me to explore both my logical and creative sides. I enjoy
                connecting with new people and learning from the ideas and
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
      <section id="resume" className="bg-paper py-24">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading>Resume</SectionHeading>
          <div className="mt-16 grid items-start gap-16 md:grid-cols-2">
            {/* resume image */}
            <figure className="mx-auto w-full max-w-md">
              <div className="rotate-[-1deg] border-2 border-ink bg-paper p-3 shadow-xl transition-transform hover:rotate-0">
                <img
                  src={resumeAsset.url}
                  alt="Yash Gupta's resume"
                  className="w-full"
                />
              </div>
              <figcaption className="font-hand mt-6 text-center text-3xl">
                my resume, hot off the press
              </figcaption>
            </figure>

            {/* resume highlights */}
            <div className="space-y-10">
              <div>
                <h3 className="font-hand text-4xl">Profile</h3>
                <p className="font-body mt-3 leading-relaxed text-muted-foreground">
                  Motivated and dependable student with strong leadership,
                  communication, and organizational skills. Known for being
                  consistent, detail-oriented, and determined in achieving
                  goals. Eager to learn new skills, take on challenges, and
                  continue improving through experience.
                </p>
              </div>

              <div>
                <h3 className="font-hand text-4xl">Experience</h3>
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
                  <h3 className="font-hand text-4xl">Interests</h3>
                  <ul className="font-body mt-3 list-disc space-y-1 pl-5 text-muted-foreground">
                    <li>Entrepreneurship</li>
                    <li>Business strategy</li>
                    <li>Communication</li>
                    <li>Sales</li>
                    <li>Team leadership</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-hand text-4xl">Key Skills</h3>
                  <ul className="font-body mt-3 list-disc space-y-1 pl-5 text-muted-foreground">
                    <li>Communication</li>
                    <li>Team leadership</li>
                    <li>Organization</li>
                    <li>Presentation skills</li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="font-hand text-4xl">Education</h3>
                <p className="font-body mt-3 leading-relaxed text-muted-foreground">
                  2023–2027 · Northview High School, Duluth, Georgia
                  <br />
                  Relevant coursework: Intro to Business, Entrepreneurship,
                  Engineering
                </p>
              </div>

              <div>
                <h3 className="font-hand text-4xl">Objective</h3>
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

      {/* Academics — black section */}
      <section id="academics" className="bg-ink py-24 text-paper">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading dark>Academic Experience</SectionHeading>
          <div className="mt-16 grid gap-10 md:grid-cols-3">
            {[
              {
                title: "3DE by Junior Achievement",
                tag: "Magnet Program",
                body: "Solving real-world business challenges through case-based learning — developing leadership, teamwork, and problem-solving skills alongside working professionals.",
              },
              {
                title: "Northview High School",
                tag: "Senior",
                body: "Building a strong academic foundation while pursuing my passion for engineering, business, and technology inside and outside the classroom.",
              },
              {
                title: "Business Case Challenges",
                tag: "Real-World Experience",
                body: "Contributing ideas and strategies to real businesses — turning classroom concepts into solutions that make an impact.",
              },
            ].map((card) => (
              <article
                key={card.title}
                className="border-2 border-paper p-8 transition-transform hover:-translate-y-1"
              >
                <p className="font-hand text-2xl">{card.tag}</p>
                <h3 className="font-display mt-2 text-2xl font-semibold">
                  {card.title}
                </h3>
                <p className="font-body mt-4 leading-relaxed text-paper/70">
                  {card.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <NavBar />

      {/* Expertise — white section */}
      <section id="expertise" className="bg-paper py-24">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading>Expertise</SectionHeading>
          <div className="mx-auto mt-16 grid max-w-4xl gap-x-16 gap-y-10 md:grid-cols-2">
            {[
              ["Leadership & Teamwork", "w-[90%]"],
              ["Problem Solving", "w-[92%]"],
              ["Engineering & Building", "w-[88%]"],
              ["Business Strategy", "w-[85%]"],
              ["Software", "w-[82%]"],
              ["Photography", "w-[80%]"],
            ].map(([skill, width]) => (
              <div key={skill}>
                <div className="flex items-baseline justify-between">
                  <span className="font-hand text-3xl">{skill}</span>
                </div>
                <div className="mt-2 h-1.5 w-full rounded-full bg-ink/10">
                  <div className={`h-1.5 rounded-full bg-ink ${width}`} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <NavBar dark />

      {/* Creative — black section */}
      <section id="creative" className="bg-ink py-24 text-paper">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <SectionHeading dark>Creative Side</SectionHeading>
          <p className="font-body mx-auto mt-10 max-w-2xl text-lg leading-relaxed text-paper/80">
            Photography and software let me explore both my logical and
            creative sides — capturing moments worth remembering and building
            ideas worth sharing.
          </p>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-6">
            {["Photography", "Software", "Building Things"].map((label) => (
              <div
                key={label}
                className="flex h-44 w-44 rotate-[-2deg] items-center justify-center border-2 border-ink bg-paper text-ink shadow-md transition-transform hover:rotate-0"
              >
                <span className="font-hand text-3xl">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <NavBar />

      {/* Contact — white section */}
      <section id="contact" className="bg-paper py-24">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="font-hand text-5xl">Let's connect!</p>
          <h2 className="font-display mt-4 text-5xl font-semibold md:text-6xl">
            Get In Touch
          </h2>
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
            <p>1 470-680-9848</p>
            <p>10465 Grandview Square, Duluth, GA 30097</p>
          </div>
          <a
            href="mailto:yashgupta20099@gmail.com"
            className="font-hand mt-10 inline-block border-2 border-ink px-10 py-3 text-3xl transition-colors hover:bg-ink hover:text-paper"
          >
            Say hello
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-paper py-10 text-center">
        <p className="font-hand text-4xl">Yash Gupta</p>
        <p className="font-body mt-2 text-sm text-muted-foreground">
          © 2026 Yash Gupta — Personal Portfolio
        </p>
      </footer>
    </main>
  );
}
