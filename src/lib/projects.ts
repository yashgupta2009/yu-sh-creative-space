export type Project = {
  slug: string;
  number: string;
  title: string;
  subtitle: string;
  role: string;
  /** Card blurb (short). */
  description: string;
  /** Detail page overview. */
  overview: string;
  /** Detail page — what I contributed. */
  contribution: string;
  /** Detail page — skills developed. */
  skills: string[];
  /** Cover / preview image url. */
  previewUrl: string;
  /** Presentation PDF url (openable in browser). */
  pdfUrl: string;
  /** PDF artifact label. */
  pdfLabel: string;
  /** All presentation files available for this project. */
  presentations?: Array<{
    label: string;
    url: string;
    previewUrl: string;
  }>;
  category?: "academic" | "experience";
  caseStudy?: {
    process: string[];
    automation: string;
    testing: string;
    drawingsUrl?: string;
  };
};

export const PROJECTS: Project[] = [
  {
    slug: "ball-boys",
    number: "01",
    title: "Ball Boys",
    subtitle: "3DE Business Challenge | Junior Achievement",
    role: "CFO / Data & Finance",
    description:
      "As a member of Ball Boys, I helped develop a student-run business focused on refurbishing and reselling sports equipment. I worked as the CFO/Data & Finance lead, managing financial analysis, costs, pricing, and break-even calculations while helping our team turn an idea into a real business.",
    overview:
      "Ball Boys is a student-run business built around refurbishing and reselling sports equipment. As a founding member and CFO / Data & Finance lead, I was responsible for the financial backbone of the company — from cost analysis and pricing to break-even calculations that guided our decisions. What started as a 3DE business challenge grew into a real operation with customers, a booth, and a plan to scale.",
    contribution:
      "Managed financial analysis, costs, pricing, and break-even calculations. Built the budget allocation model and price comparisons that informed our sales strategy. Prepared investor-ready financial presentations and tracked unit economics to measure success.",
    skills: [
      "Financial Analysis",
      "Budgeting & Cost Control",
      "Pricing Strategy",
      "Break-Even Analysis",
      "Data & Finance Leadership",
    ],
    previewUrl: "portfolio-assets/ball-boys-cover-1.jpg",
    pdfUrl: "portfolio-assets/ball-boys.pdf",
    pdfLabel: "Ball Boys — Business Presentation",
    presentations: [
      {
        label: "Ball Boys — Business Presentation",
        url: "portfolio-assets/ball-boys.pdf",
        previewUrl: "portfolio-assets/ball-boys-cover-1.jpg",
      },
      {
        label: "Ball Boys — Market Day Presentation",
        url: "portfolio-assets/ball-boys-market-day.pdf",
        previewUrl: "portfolio-assets/ball-boys-market-day-cover-1.jpg",
      },
      {
        label: "Ball Boys — Customer Presentation",
        url: "portfolio-assets/ball-boys-customer.pdf",
        previewUrl: "portfolio-assets/ball-boys-customer-cover-01.jpg",
      },
      {
        label: "Ball Boys — Presentation 2.0",
        url: "portfolio-assets/ball-boys-presentation-2.pdf",
        previewUrl: "portfolio-assets/ball-boys-presentation-2-cover-01.jpg",
      },
      {
        label: "Ball Boys — Business Strategy Presentation",
        url: "portfolio-assets/ball-boys-business-presentation.pdf",
        previewUrl:
          "portfolio-assets/ball-boys-business-presentation-cover-01.jpg",
      },
    ],
  },
  {
    slug: "market-expo",
    number: "02",
    title: "Market Expo",
    subtitle: "3DE Business Challenge | Market Day",
    role: "Finance & Operations",
    description:
      "At Market Expo, I helped bring Ball Boys to life by managing the financial side of our sales and helping plan how we would operate our booth. I was responsible for the customer purchase process and worked with my team to create an engaging experience for customers.",
    overview:
      "Market Expo was the day Ball Boys went live — a real booth, real customers, and real transactions. I managed the financial side of our sales, helped plan booth operations, and owned the customer purchase process from start to finish. It was where classroom strategy met the pressure of a live market.",
    contribution:
      "Managed the financial side of all on-the-day sales. Helped plan booth layout and operations. Owned the customer purchase process — handling money, receipts, and pricing at the table — while working with the team to create an engaging, welcoming customer experience.",
    skills: [
      "Live Sales & Operations",
      "Customer Experience",
      "Booth Planning",
      "Point-of-Sale Handling",
      "Team Collaboration",
    ],
    previewUrl: "portfolio-assets/ball-boys-customer-cover-01.jpg",
    pdfUrl: "portfolio-assets/ball-boys-customer.pdf",
    pdfLabel: "Ball Boys — Market Expo Customer Presentation",
  },
  {
    slug: "professional-presentations",
    number: "03",
    title: "Professional Presentations",
    subtitle: "Business Strategy & Financial Presentations",
    role: "Presenter & Financial Analyst",
    description:
      "I created and presented professional business presentations that explained our financial analysis, pricing, costs, break-even point, market research, and growth strategy. These presentations helped me develop my public-speaking, data-analysis, teamwork, and business communication skills.",
    overview:
      "Beyond running the numbers, I turned them into clear, persuasive presentations. I created and delivered professional decks covering financial analysis, pricing, costs, break-even point, market research, and growth strategy — translating dense financial data into a story an audience could follow and act on.",
    contribution:
      "Designed and delivered professional business presentations explaining financial analysis, pricing, costs, break-even point, market research, and growth strategy. Presented to classmates, teachers, and judges, defending the numbers and the strategy behind them.",
    skills: [
      "Public Speaking",
      "Data Analysis",
      "Business Communication",
      "Presentation Design",
      "Strategic Storytelling",
    ],
    previewUrl:
      "portfolio-assets/ball-boys-business-presentation-cover-01.jpg",
    pdfUrl: "portfolio-assets/ball-boys-business-presentation.pdf",
    pdfLabel: "Professional Business Presentation",
  },
  {
    slug: "engineering-drawbridge",
    number: "04",
    title: "Engineering Drawbridge",
    subtitle: "Engineering Design & Automation | Engineering Year 2",
    role: "Engineering Design · Bridge Construction · Prototyping & Testing · Problem Solving · Automation",
    description:
      "Worked with a team to design, build, and test an automated vertical-lift drawbridge that responds when a boat approaches.",
    overview:
      "In Engineering Concepts, my team designed a miniature drawbridge that could keep a roadway available for vehicles while creating safe clearance for a boat to pass underneath. We developed and tested ideas before selecting a vertical-lift design.",
    contribution:
      "Contributed to the bridge structure, lifting-system development, prototype testing, and design problem-solving as our team moved toward a working automated model.",
    skills: [
      "Engineering Design",
      "Automation",
      "Prototyping",
      "Problem Solving",
      "Structural Design",
      "Programming",
      "Testing",
      "Teamwork",
    ],
    previewUrl: "portfolio-assets/drawbridge-finished.png",
    pdfUrl: "portfolio-assets/drawbridge-final.pdf",
    pdfLabel: "Automatic Drawbridge Portfolio",
    category: "academic",
    presentations: [
      {
        label: "Automatic Drawbridge Portfolio",
        url: "portfolio-assets/drawbridge-final.pdf",
        previewUrl: "portfolio-assets/drawbridge-sketch.png",
      },
    ],
    caseStudy: {
      process: [
        "Research",
        "Brainstorming",
        "Prototype",
        "Build",
        "Program",
        "Test",
        "Final Design",
      ],
      automation:
        "A sensor detected an approaching boat or object and sent a signal to activate the lifting system. The bridge deck raised between the support towers, then returned to its lowered position after the object cleared the sensor.",
      testing:
        "We compared lifting mechanisms and truss designs, then tested prototypes before selecting the final vertical-lift design. The finished model demonstrated the lift sequence and the structural ideas behind it.",
      drawingsUrl: "portfolio-assets/drawbridge-sketch.png",
    },
  },
];

export function getProject(slug: string): Project | undefined {
  return PROJECTS.find((p) => p.slug === slug);
}
