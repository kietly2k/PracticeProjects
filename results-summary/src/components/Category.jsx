import React from "react";

function Category(props) {
  return (
    <div
      className={`flex justify-between py-5 rounded-2xl mb-4 ${props.backgroundColorClass}`}
    >
      <div>
        <img
          src={props.icon}
          alt={props.category}
          className="px-4 inline-block"
        />
        <span
          className={`inline-block font-bold text-lg align-middle ${props.textColorClass}`}
        >
          {props.category}
        </span>
      </div>
      <div>
        <span className="font-extrabold px-1">{props.score}</span>/
        <span className="pl-1 pr-4 font-semibold text-[#979195]">100</span>
      </div>
    </div>
  );
}

export default Category;
