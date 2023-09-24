import React from "react";
import projects from "../constants/constants";
import ProjectItem from "./ProjectItem";
import "./ProjectList.css";

function ProjectList() {
  return (
    <section class="projects">
      <h1 class="title">My practie projects</h1>
      <div class="project-list">
        {projects.map((p) => (
          <ProjectItem image={p.image} title={p.title} url={p.url} />
        ))}
      </div>
    </section>
  );
}

export default ProjectList;
