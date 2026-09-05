import ballBoysPreview from "@/assets/ball-boys-preview.png.asset.json";
import marketExpoPreview from "@/assets/market-expo-preview.png.asset.json";
import professionalPreview from "@/assets/professional-presentations-preview.png.asset.json";
import ballBoysPdf from "@/assets/ball-boys-scaling.pdf.asset.json";
import marketExpoPdf from "@/assets/market-expo-customer.pdf.asset.json";
import professionalPdf from "@/assets/professional-presentations.pdf.asset.json";

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
    previewUrl: ballBoysPreview.url,
    pdfUrl: ballBoysPdf.url,
    pdfLabel: "Ball Boys — Scaling Project Presentation",
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
    previewUrl: marketExpoPreview.url,
    pdfUrl: marketExpoPdf.url,
    pdfLabel: "Ball Boys — Market Expo Breakdown",
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
    previewUrl: professionalPreview.url,
    pdfUrl: professionalPdf.url,
    pdfLabel: "Professional Business Presentation",
  },
];

export function getProject(slug: string): Project | undefined {
  return PROJECTS.find((p) => p.slug === slug);
}
