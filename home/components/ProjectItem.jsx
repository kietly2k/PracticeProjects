import React from "react";

function ProjectItem(props) {
  return (
    <div class="project__item">
      <img class="project__image" src={props.image} />
      <div class="project__info">
        <h3 class="project__title">{props.title}</h3>
        <p class="project__desc">
          <a href={props.url}>View challenge</a>
        </p>
      </div>
    </div>
  );
}

export default ProjectItem;
