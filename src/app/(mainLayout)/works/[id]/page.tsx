import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProjectDetailPage } from "@/components/ProjectDetailPage";
import { projectDetails, getProjectDetail } from "@/data/projectDetails";
import { profile } from "@/data/profile";

interface PageProps {
  params: Promise<{ id: string }>;
}

export function generateStaticParams() {
  return projectDetails.map((p) => ({ id: p.id }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const project = getProjectDetail(id);
  if (!project) return {};
  return {
    title: `${project.title} | ${profile.firstName} ${profile.lastName}`,
    description: project.sub,
  };
}

export default async function ProjectDetailRoute({ params }: PageProps) {
  const { id } = await params;
  const project = getProjectDetail(id);
  if (!project) notFound();
  return <ProjectDetailPage project={project} />;
}
