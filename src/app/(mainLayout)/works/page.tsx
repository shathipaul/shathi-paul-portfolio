import type { Metadata } from "next";
import { WorksClient } from "@/components/WorksClient";
import { profile } from "@/data/profile";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: `Works | ${profile.firstName} ${profile.lastName}`,
  description: "Selected projects and case studies.",
};

export default function WorksPage() {
  return (
    <>
      <WorksClient projects={projects} />
      <p className="absolute bottom-2 left-[3vw] hidden text-[clamp(0.5rem,0.8vw,1rem)] font-light text-neutral-500 lg:block">
        © 2026 {profile.copyrightName}. All rights reserved.
      </p>
    </>
  );
}
