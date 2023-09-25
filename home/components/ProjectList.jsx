import React from "react";
import projects from "../constants/constants";
import ProjectItem from "./ProjectItem";
import GlobalStyles from "./GlobalStyles";
import { v4 as uuid } from "uuid";

function ProjectList() {
  return (
    <GlobalStyles>
      <section className="global">
        <div className="projects">
          <h1 className="title">My practie projects</h1>
          <div className="project-list">
            {projects.map((p) => (
              <ProjectItem key={uuid().slice(0, 8)} image={p.image} title={p.title} url={p.url} />
            ))}
          </div>
        </div>
      </section>
    </GlobalStyles>
  );
}

export default ProjectList;
