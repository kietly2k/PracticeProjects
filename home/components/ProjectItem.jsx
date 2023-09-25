import React from "react";

function ProjectItem(props) {
  return (
    <div className="project__item">
      <img className="project__image" src={props.image} />
      <div className="project__info">
        <h3 className="project__title">{props.title}</h3>
        <p className="project__desc">
          <a href={props.url}>View challenge</a>
        </p>
      </div>
    </div>
  );
}

export default ProjectItem;
