import React from "react";

function Category(props) {
  return (
    <div>
      <img src={props.icon} alt={props.category} />
      <span>{props.category}</span>
      <div>
        <span>{props.score}</span>/100
      </div>
    </div>
  );
}

export default Category;