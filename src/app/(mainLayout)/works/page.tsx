import type { Metadata } from "next";
import { WorksClient } from "@/components/WorksClient";
import { profile } from "@/data/profile";
import { projects as staticProjects, type Project } from "@/data/projects";
import { apiConfig, type IProjects } from "@/lib/apiConfig";

export const metadata: Metadata = {
  title: `Works | ${profile.firstName} ${profile.lastName}`,
  description: "Selected projects and case studies.",
};

// Maps the uppercase title key → static metadata (description, techStack, sub)
// so API-fetched projects get the right details even without them in the API response.
const staticMeta: Record<string, Pick<Project, "sub" | "description" | "techStack">> =
  Object.fromEntries(staticProjects.map((p) => [p.title, { sub: p.sub, description: p.description, techStack: p.techStack }]));

function transformProject(item: IProjects, index: number): Project {
  // "Travel Buddy - Travel Management Application" → "TRAVEL BUDDY"
  const title = item.title.split(" - ")[0].trim().toUpperCase();
  const meta = staticMeta[title] ?? { sub: "", description: "", techStack: [] };

  return {
    id: String(index + 1),
    title,
    sub: meta.sub,
    description: meta.description,
    techStack: meta.techStack,
    image: item.thumbnail,
    liveUrl: item.liveLink,
    githubUrl: item.repoLink,
  };
}

async function fetchProjects(): Promise<Project[]> {
  try {
    const res = await fetch(apiConfig.baseUrl + apiConfig.projects.getAll, {
      cache: "no-cache",
    });
    if (!res.ok) throw new Error(`${res.status}`);
    const result = await res.json();
    const cards = result?.data as IProjects[];
    if (!Array.isArray(cards) || cards.length === 0) throw new Error("empty");
    return [...cards]
      .sort((a, b) => a.rank - b.rank)
      .map(transformProject);
  } catch {
    return staticProjects;
  }
}

export default async function WorksPage() {
  const projects = await fetchProjects();
  return <WorksClient projects={projects} />;
}
