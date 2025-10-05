"use client";
import AddProject from "@/components/dashboard/projectsDashboard/AddProject";
import ProjectTable from "@/components/dashboard/projectsDashboard/ProjectTable";
import { useState } from "react";

const ProjectsDashboard = () => {
  const [addNewProject, setAddNewProject] = useState(false);
  return (
    <div className="px-20 py-10">
      <div className="flex items-center justify-between">
        <span className="text-3xl font-bold">Projects Dashboard</span>
        <button
          onClick={() => setAddNewProject(true)}
          className="bg-primary text-secondary text-xs rounded py-2 px-6 relative z-30"
        >
          Add more project
        </button>
      </div>
      <ProjectTable />
      {addNewProject && <AddProject />}
    </div>
  );
};

export default ProjectsDashboard;
