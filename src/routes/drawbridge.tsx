import { createFileRoute } from "@tanstack/react-router";
import { EngineeringCaseStudy } from "./experiences/$slug";
import { getProject } from "@/lib/projects";

export const Route = createFileRoute("/drawbridge")({
  head: () => ({
    meta: [
      { title: "Engineering Drawbridge — Yash Gupta" },
      { name: "description", content: "The complete automated engineering drawbridge project, including design process, testing, and artifacts." },
    ],
  }),
  component: DrawbridgePage,
});

function DrawbridgePage() {
  return <EngineeringCaseStudy project={getProject("engineering-drawbridge")!} />;
}
