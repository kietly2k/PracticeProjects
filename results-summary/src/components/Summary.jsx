import React from "react";
import Category from "./Category";
const getData = () => {
  // TODO: Uncomment this code after done UI
  //   fetch("../data.json", {
  //     headers: {
  //       "Content-Type": "application/json",
  //       Accept: "application/json",
  //     },
  //   }).then(function (response) {
  //     return response.json();
  //   });

  return [
    {
      category: "Reaction",
      score: 80,
      icon: "../assets/images/icon-reaction.svg",
    },
    {
      category: "Memory",
      score: 92,
      icon: "../assets/images/icon-memory.svg",
    },
    {
      category: "Verbal",
      score: 61,
      icon: "../assets/images/icon-verbal.svg",
    },
    {
      category: "Visual",
      score: 72,
      icon: "../assets/images/icon-visual.svg",
    },
  ];
};

function Summary() {
  const categories = getData();
  return (
    <div>
      {categories.map((c) => (
        <Category category={c.category} score={c.score} icon={c.icon} />
      ))}
    </div>
  );
}

export default Summary;
